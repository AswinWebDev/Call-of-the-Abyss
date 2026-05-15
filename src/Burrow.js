import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';

const MINION_STATE = {
  SPAWNING: 'spawning',
  PATROL: 'patrol',
  ATTACK: 'attack'
};

const BURROW_STATE = {
  ACTIVE: 'active',
  DESTROYED: 'destroyed',
  REBUILDING: 'rebuilding'
};

export class BurrowManager {
  constructor(scene, world, audio) {
    this.scene = scene;
    this.world = world;
    this.audio = audio;
    this.loader = new GLTFLoader();

    // Burrow Stats
    this.level = 1;
    this.maxHealth = 400;
    this.health = 400;
    this.position = new THREE.Vector3(-60, 0, 0); // Moved to the center inland for full 360 surrounds
    this.depositRadius = 14.0;
    this.state = BURROW_STATE.ACTIVE;
    
    // Economy
    this.maxMinions = 3;
    this.repairCost = 15;
    
    // Rebuild system
    this.rebuildTimer = 0;
    this.rebuildDuration = 15.0;
    
    // Coin generation
    this.coinTimer = 0;

    this.burrowGroup = new THREE.Group();
    this.burrowGroup.position.copy(this.position);
    this.scene.add(this.burrowGroup);

    this.eggs = [];
    this.minions = [];
    
    this.minionModel = null;
    this.minionAnimClips = null;

    this._buildBurrow();
    this._loadMinionModel();
    this._updateHUD();
  }

  /**
   * Restore burrow to fresh-game state for Retry. Removes any spawned eggs
   * and minions but keeps the burrow geometry / loaded models.
   */
  reset() {
    for (const egg of this.eggs) {
      if (egg.mesh) this.burrowGroup.remove(egg.mesh);
    }
    this.eggs = [];
    for (const m of this.minions) {
      if (m.model) this.scene.remove(m.model);
    }
    this.minions = [];
    this.maxHealth = 400;
    this.maxMinions = 3;
    this.health = this.maxHealth;
    this.level = 1;
    this.state = BURROW_STATE.ACTIVE;
    this.rebuildTimer = 0;
    this.coinTimer = 0;
    // Restore burrow visuals
    if (this._burrowMaterials) {
      for (const mat of this._burrowMaterials) {
        mat.opacity = 1.0;
        if (mat._originalColor) mat.color.copy(mat._originalColor);
        if (mat.emissive) mat.emissive.setHex(0x000000);
      }
    }
    if (this._burrowLight) this._burrowLight.intensity = 2.0;
    if (this._beacon) this._beacon.visible = true;
    if (this.world) {
      this.burrowGroup.position.y = this.world.getTerrainHeight(this.position.x, this.position.z) - 0.2;
    } else {
      this.burrowGroup.position.copy(this.position);
    }
    this._updateHUD();
  }

  _buildBurrow() {
    // Load the crab burrow GLB model
    this.loader.load('./models/crab_burrow.glb', (gltf) => {
      const model = gltf.scene;

      // Auto-scale to ~56 units wide (massive home base)
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z) || 1;
      const scale = 56.0 / maxDim;
      model.scale.setScalar(scale);

      // Face the sea (positive X direction)
      model.rotation.y = Math.PI / 2;

      // Cache materials for opacity-based destroy/rebuild
      this._burrowMaterials = [];
      model.traverse(child => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            child.material = child.material.clone();
            child.material.transparent = true;
            child.material.opacity = 1.0;
            child.material._originalColor = child.material.color.clone();
            this._burrowMaterials.push(child.material);
          }
        }
      });

      this.burrowGroup.add(model);
      this.burrowModel = model;

      // Warm interior glow
      const light = new THREE.PointLight(0xffaa00, 2.0, 20);
      light.position.y = 3.0;
      this.burrowGroup.add(light);
      this._burrowLight = light;

      // Subtle golden beacon
      const beaconGeo = new THREE.CylinderGeometry(0.8, 0.3, 40.0, 8);
      const beaconMat = new THREE.MeshBasicMaterial({
        color: 0xFFD700, transparent: true, opacity: 0.15,
        blending: THREE.AdditiveBlending, depthWrite: false
      });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.y = 15.0;
      this.burrowGroup.add(beacon);
      this._beacon = beacon;

      // Position at terrain height
      this.burrowGroup.position.y = this.world.getTerrainHeight(this.position.x, this.position.z) - 0.2;

      // Register burrow as a collider so nothing phases through it
      if (this.world) {
        this.world.colliders.push({
          x: this.position.x,
          z: this.position.z,
          radius: 12.0  // solid center of the burrow
        });
      }

      // ── Home props (separate group — persists through destruction) ──
      this._buildHomeProps();

      // Unhide HUD
      const hud = document.getElementById('burrow-hud');
      if (hud) hud.style.display = 'block';
    });
  }

  _buildHomeProps() {
    this.homeGroup = new THREE.Group();
    this.homeGroup.position.copy(this.position);
    this.homeGroup.position.y = this.world.getTerrainHeight(this.position.x, this.position.z);
    this.scene.add(this.homeGroup);

    // Campfire ring — small rocks in a circle
    const cfX = 8, cfR = 2.5;
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const rGeo = new THREE.SphereGeometry(0.4, 6, 4);
      const rMat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.9 });
      const rock = new THREE.Mesh(rGeo, rMat);
      rock.position.set(cfX + Math.cos(a) * cfR, 0.2, Math.sin(a) * cfR);
      rock.scale.set(1 + Math.random() * 0.5, 0.6, 1 + Math.random() * 0.5);
      rock.castShadow = true;
      this.homeGroup.add(rock);
    }

    // Campfire light + embers
    this._campfireLight = new THREE.PointLight(0xff6600, 1.5, 12);
    this._campfireLight.position.set(cfX, 1.5, 0);
    this.homeGroup.add(this._campfireLight);

    const emberGeo = new THREE.SphereGeometry(0.6, 8, 6);
    const emberMat = new THREE.MeshStandardMaterial({
      color: 0x331100, emissive: 0xff4400, emissiveIntensity: 2.0, roughness: 1.0
    });
    const embers = new THREE.Mesh(emberGeo, emberMat);
    embers.position.set(cfX, 0.3, 0);
    embers.scale.set(1.5, 0.5, 1.5);
    this.homeGroup.add(embers);
    this._campfireEmbers = embers;

    // Driftwood log seats
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x8B6914, roughness: 0.95 });
    const log1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 4.0, 6), woodMat);
    log1.position.set(cfX + 3.5, 0.4, -1.5);
    log1.rotation.set(0, 0.3, Math.PI / 2);
    log1.castShadow = true;
    this.homeGroup.add(log1);

    const log2 = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 3.5, 6), woodMat);
    log2.position.set(cfX - 1.5, 0.3, 3.0);
    log2.rotation.set(0, -0.4, Math.PI / 2);
    log2.castShadow = true;
    this.homeGroup.add(log2);

    // Coconut pile
    const cMat = new THREE.MeshStandardMaterial({ color: 0x654321, roughness: 0.8 });
    for (let i = 0; i < 5; i++) {
      const c = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 6), cMat);
      c.position.set(-4 + (Math.random() - 0.5) * 2, 0.5, 6 + (Math.random() - 0.5) * 2);
      c.scale.set(1, 0.9, 1);
      c.castShadow = true;
      this.homeGroup.add(c);
    }

    // Seashells at entrance
    const shellColors = [0xFFF5E1, 0xFFE4C4, 0xF5DEB3];
    for (let i = 0; i < 6; i++) {
      const sGeo = new THREE.SphereGeometry(0.25, 6, 4);
      sGeo.scale(1, 0.25, 1.2);
      const s = new THREE.Mesh(sGeo, new THREE.MeshStandardMaterial({ color: shellColors[i % 3], roughness: 0.5, metalness: 0.15 }));
      s.position.set(5 + (Math.random() - 0.5) * 4, 0.1, -4 + (Math.random() - 0.5) * 3);
      s.rotation.y = Math.random() * Math.PI * 2;
      this.homeGroup.add(s);
    }
  }

  _loadMinionModel() {
    this.loader.load('./models/animated_crab.glb', (gltf) => {
      this.minionModel = gltf.scene;
      this.minionAnimClips = gltf.animations;
      
      // Base scale (smaller than player)
      const box = new THREE.Box3().setFromObject(this.minionModel);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2.0 / maxDim; // Player is ~4.0, minion is 2.0
      this.minionModel.scale.setScalar(scale);

      // Tint minions slightly red/orange to distinguish from player
      this.minionModel.traverse(child => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            child.material = child.material.clone();
            child.material.color.setHex(0xff5533);
          }
        }
      });
      
      console.log('✓ Minion model loaded');
    });
  }

  /**
   * Called from main loop when Crab enters Burrow radius
   * @param {number} playerShells Current shells player has
   * @returns {number} Amount of shells consumed
   */
  tryInteract(playerShells) {
    if (this.state === BURROW_STATE.DESTROYED) {
      if (playerShells >= this.repairCost) {
        this._startRebuilding();
        return this.repairCost;
      }
    }
    return 0;
  }
  
  spawnMinion() {
    if (this.state === BURROW_STATE.ACTIVE && this.eggs.length + this.minions.length < this.maxMinions) {
      this._layEgg();
      return true;
    }
    return false;
  }

  _layEgg() {
    const eggGeo = new THREE.SphereGeometry(0.8, 16, 16);
    // Premium pulsing material, fully opaque for visibility
    const eggMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0xff4400,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.1
    });
    const eggMesh = new THREE.Mesh(eggGeo, eggMat);
    
    // Position egg randomly inside the rock circle, elevated so it doesn't clip
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * 1.5;
    eggMesh.position.set(Math.cos(angle) * r, 1.2, Math.sin(angle) * r);
    eggMesh.castShadow = true;
    
    this.burrowGroup.add(eggMesh);
    
    this.eggs.push({
      mesh: eggMesh,
      timer: 5.0, // 5 seconds to hatch
      baseY: 1.0,
      phase: Math.random() * Math.PI
    });
    
    if (this.audio) {
      this.audio.playUpgradeSound(); // Or a custom wet sound
    }
    if (window.showNotification) {
      window.showNotification("Egg Laid!", "A Baby Crab will hatch in 5 seconds.");
    }
    if (this.dialogue && this.crab && this.crab.model) {
      this.dialogue.speak(this.crab.model, "Little one is on the way!", 'hero', 2.5);
    }
    this._updateHUD();
  }

  _hatchEgg(eggIndex) {
    const egg = this.eggs[eggIndex];
    this.burrowGroup.remove(egg.mesh);
    this.eggs.splice(eggIndex, 1);
    
    if (!this.minionModel) return; // Models not loaded yet

    const model = SkeletonUtils.clone(this.minionModel);
    
    // World position of the egg
    const worldPos = new THREE.Vector3();
    egg.mesh.getWorldPosition(worldPos);
    model.position.copy(worldPos);
    
    this.scene.add(model);

    // Setup animation
    let mixer = null;
    let runAction = null;
    let attackAction = null;
    if (this.minionAnimClips && this.minionAnimClips.length > 0) {
      mixer = new THREE.AnimationMixer(model);
      
      // If single anim
      if (this.minionAnimClips.length === 1) {
        runAction = mixer.clipAction(this.minionAnimClips[0]);
        attackAction = mixer.clipAction(this.minionAnimClips[0]);
      } else {
        const runClip = this.minionAnimClips.find(c => c.name.toLowerCase().includes('run')) || this.minionAnimClips[0];
        const attackClip = this.minionAnimClips.find(c => c.name.toLowerCase().includes('attack')) || this.minionAnimClips[0];
        runAction = mixer.clipAction(runClip);
        attackAction = mixer.clipAction(attackClip);
      }
      runAction.play();
    }

    const minion = {
      model,
      mixer,
      runAction,
      attackAction,
      state: MINION_STATE.SPAWNING,
      health: 400 * (this.crab && this.crab.utilityLevels ? this.crab.utilityLevels.minionLevel : 1),
      speed: 14.0 + (this.crab && this.crab.utilityLevels ? this.crab.utilityLevels.minionLevel : 1) * 2,
      damage: 15 + (this.crab && this.crab.utilityLevels ? this.crab.utilityLevels.minionLevel : 1) * 5,
      target: null,
      timer: 0,
      attackCooldown: 0,
      scalePhase: 0 // For hatch growth effect
    };
    
    model.scale.setScalar(0.1); // Start tiny
    
    this.minions.push(minion);
    
    if (window.showNotification) {
      window.showNotification("Hatched!", "A Minion Crab joined the fight!");
    }
    if (this.dialogue && this.crab && this.crab.model) {
      this.dialogue.speak(this.crab.model, "Go get 'em, little buddy!", 'hero', 2.5);
    }
    
    this._updateHUD();
  }

  takeDamage(amount) {
    if (this.health <= 0 || this.state !== BURROW_STATE.ACTIVE) return;
    
    this.health -= amount;
    
    // Flash red
    this.burrowGroup.traverse(child => {
      if (child.isMesh && child.material && child.material.emissive) {
        if (!child.userData.originalEmissive) {
          child.userData.originalEmissive = child.material.emissive.clone();
        }
        child.material.emissive.setHex(0xff0000);
        
        if (child.userData.flashTimeout) {
          clearTimeout(child.userData.flashTimeout);
        }
        child.userData.flashTimeout = setTimeout(() => {
          if (child.material) child.material.emissive.copy(child.userData.originalEmissive);
        }, 150);
      }
    });

    if (this.health <= 0) {
      this.health = 0;
      this._destroyBurrow();
    }
    this._updateHUD();
  }

  _destroyBurrow() {
    this.state = BURROW_STATE.DESTROYED;
    console.log("Burrow Destroyed!");
    for (const egg of this.eggs) {
      this.burrowGroup.remove(egg.mesh);
    }
    this.eggs = [];
    this.level = 1;
    this.maxMinions = 3;
    
    // Fade burrow to damaged state (opacity + darken)
    if (this._burrowMaterials) {
      for (const mat of this._burrowMaterials) {
        mat.opacity = 0.3;
        mat.color.multiplyScalar(0.4);
        if (mat.emissive) mat.emissive.setHex(0x220000);
      }
    }
    if (this._burrowLight) this._burrowLight.intensity = 0.3;
    if (this._beacon) this._beacon.visible = false;
    
    if (window.showNotification) {
      window.showNotification("Burrow Destroyed!", "Deposit 15 Shells to rebuild it.");
    }
    if (this.dialogue && this.crab && this.crab.model) {
      this.dialogue.heroCooldown = 0;
      this.dialogue.speak(this.crab.model, "Oh no! The burrow is destroyed!", 'hero', 3.0);
    }
    this._updateHUD();
  }

  _startRebuilding() {
    this.state = BURROW_STATE.REBUILDING;
    this.rebuildTimer = 0;
    
    // Create Progress Bar UI (3D)
    const barGeo = new THREE.PlaneGeometry(5, 0.5);
    const bgMat = new THREE.MeshBasicMaterial({ color: 0x333333, depthTest: false });
    this.rebuildBg = new THREE.Mesh(barGeo, bgMat);
    this.rebuildBg.position.y = 8.0;
    
    const fillGeo = new THREE.PlaneGeometry(5, 0.5);
    const fillMat = new THREE.MeshBasicMaterial({ color: 0xFFD700, depthTest: false });
    this.rebuildFill = new THREE.Mesh(fillGeo, fillMat);
    this.rebuildFill.position.y = 8.0;
    this.rebuildFill.position.z = 0.01;
    this.rebuildFill.scale.x = 0.01;
    
    this.burrowGroup.add(this.rebuildBg);
    this.burrowGroup.add(this.rebuildFill);
    
    if (window.showNotification) {
      window.showNotification("Rebuilding!", "Defend the Burrow while it rebuilds!");
    }
    if (this.dialogue && this.crab && this.crab.model) {
      this.dialogue.heroCooldown = 0; // Force override
      this.dialogue.speak(this.crab.model, "Rebuilding the burrow... hold them off!", 'hero', 3.0);
    }
    this._updateHUD();
  }

  update(dt, time, enemyManager) {
    const enemies = enemyManager.enemies;
    
    // Coin generation logic
    if (this.state === BURROW_STATE.ACTIVE) {
      this.coinTimer += dt;
      if (this.coinTimer >= 3.0) {
        this.coinTimer = 0;
        // Spawn coins in front of the burrow (toward the sea, +X direction)
        const spreadZ = (Math.random() - 0.5) * 10;
        const forwardX = this.depositRadius + 5.0 + Math.random() * 5.0;
        const dropPos = this.position.clone();
        dropPos.x += forwardX;
        dropPos.z += spreadZ;
        enemyManager._spawnDrop(dropPos, 'coin', 1);
      }
    }

    // 0. Rebuilding Logic
    if (this.state === BURROW_STATE.REBUILDING) {
      this.rebuildTimer += dt;
      const progress = Math.min(1.0, this.rebuildTimer / this.rebuildDuration);
      
      this.rebuildFill.scale.x = Math.max(0.01, progress);
      this.rebuildFill.position.x = -2.5 + (2.5 * progress);
      
      // Animate opacity restoration (0.3 → 1.0)
      if (this._burrowMaterials) {
        const op = 0.3 + progress * 0.7;
        for (const mat of this._burrowMaterials) mat.opacity = op;
      }
      if (this._burrowLight) this._burrowLight.intensity = 0.3 + progress * 1.7;
      
      if (progress >= 1.0) {
        this.state = BURROW_STATE.ACTIVE;
        this.health = this.maxHealth;
        // Fully restore materials
        if (this._burrowMaterials) {
          for (const mat of this._burrowMaterials) {
            mat.opacity = 1.0;
            if (mat._originalColor) mat.color.copy(mat._originalColor);
            if (mat.emissive) mat.emissive.setHex(0x000000);
          }
        }
        if (this._burrowLight) this._burrowLight.intensity = 2.0;
        if (this._beacon) this._beacon.visible = true;
        this.burrowGroup.remove(this.rebuildBg);
        this.burrowGroup.remove(this.rebuildFill);
        
        if (window.showNotification) {
          window.showNotification("Burrow Restored!", "Your Burrow is back online.");
        }
        if (this.dialogue && this.crab && this.crab.model) {
          this.dialogue.heroCooldown = 0;
          this.dialogue.speak(this.crab.model, "The burrow is back online!", 'hero', 3.0);
        }
      }
      this._updateHUD();
    }
    // 1. Update Eggs (pulsing and hatching)
    for (let i = this.eggs.length - 1; i >= 0; i--) {
      const egg = this.eggs[i];
      egg.timer -= dt;
      
      // Pulse visuals
      const pulse = Math.sin(time * 4 + egg.phase) * 0.1 + 1.0;
      egg.mesh.scale.setScalar(pulse);
      egg.mesh.material.emissiveIntensity = 0.5 + pulse * 0.5;
      
      if (egg.timer <= 0) {
        this._hatchEgg(i);
      }
    }

    // 2. Update Minions AI
    for (let i = this.minions.length - 1; i >= 0; i--) {
      const m = this.minions[i];
      
      if (m.health <= 0) {
        this.scene.remove(m.model);
        this.minions.splice(i, 1);
        this._updateHUD();
        continue;
      }

      if (m.mixer) m.mixer.update(dt);

      switch(m.state) {
        case MINION_STATE.SPAWNING:
          m.scalePhase += dt * 2.0;
          const targetScale = this.minionModel ? this.minionModel.scale.x : 0.5;
          m.model.scale.setScalar(Math.min(targetScale, m.scalePhase * targetScale));
          if (m.scalePhase >= 1.0) {
            m.state = MINION_STATE.PATROL;
          }
          break;

        case MINION_STATE.PATROL:
          if (m.runAction) { m.runAction.timeScale = 1.0; m.runAction.play(); }

          // Minions are LEASHED to the burrow — they only consider enemies
          // within their leash radius and never wander past the boundary.
          const leashRadius = 28.0;
          const detectionRadius = 25.0;
          let closestDist = detectionRadius;
          let closestEnemy = null;

          for (const enemy of enemies) {
            if (enemy.state === 'dead' || enemy.state === 'dying') continue;
            // Distance from BURROW (not minion) — keeps the leash anchored
            const enemyDistFromBurrow = Math.sqrt(
              Math.pow(enemy.position.x - this.position.x, 2) +
              Math.pow(enemy.position.z - this.position.z, 2)
            );
            if (enemyDistFromBurrow > leashRadius) continue; // outside leash, ignore
            const dist = m.model.position.distanceTo(enemy.position);
            if (dist < closestDist) {
              closestDist = dist;
              closestEnemy = enemy;
            }
          }

          if (closestEnemy) {
            m.target = closestEnemy;
            m.state = MINION_STATE.ATTACK;
          } else {
            // Idle patrol around burrow
            m.timer += dt;
            const patrolRadius = 8.0;
            const px = this.position.x + Math.cos(m.timer * 0.5 + i) * patrolRadius;
            const pz = this.position.z + Math.sin(m.timer * 0.5 + i) * patrolRadius;

            const dx = px - m.model.position.x;
            const dz = pz - m.model.position.z;

            m.model.position.x += dx * dt * 2.0;
            m.model.position.z += dz * dt * 2.0;
            m.model.position.y = this.world.getTerrainHeight(m.model.position.x, m.model.position.z);

            if (Math.abs(dx) > 0.1 || Math.abs(dz) > 0.1) {
              m.model.rotation.y = Math.atan2(dx, dz);
            }
          }
          break;

        case MINION_STATE.ATTACK:
          // Drop the target if it's dead OR has wandered outside the leash
          const _leashR = 28.0;
          if (!m.target || m.target.state === 'dead' || m.target.state === 'dying') {
            m.target = null;
            m.state = MINION_STATE.PATROL;
            break;
          }
          const targetDistFromBurrow = Math.sqrt(
            Math.pow(m.target.position.x - this.position.x, 2) +
            Math.pow(m.target.position.z - this.position.z, 2)
          );
          if (targetDistFromBurrow > _leashR) {
            m.target = null;
            m.state = MINION_STATE.PATROL;
            break;
          }

          const tx = m.target.position.x - m.model.position.x;
          const tz = m.target.position.z - m.model.position.z;
          const tDist = Math.sqrt(tx*tx + tz*tz);

          if (tDist > 3.0) { // Chase
            if (m.runAction) m.runAction.timeScale = 3.0; // Fast sprint
            m.model.position.x += (tx / tDist) * m.speed * dt;
            m.model.position.z += (tz / tDist) * m.speed * dt;
            m.model.position.y = this.world.getTerrainHeight(m.model.position.x, m.model.position.z);
            m.model.rotation.y = Math.atan2(tx, tz);
          } else { // Melee Attack
            if (m.runAction) m.runAction.timeScale = 1.0;
            // Face target
            m.model.rotation.y = Math.atan2(tx, tz);

            m.attackCooldown -= dt;
            if (m.attackCooldown <= 0) {
              m.attackCooldown = 0.5; // Attack twice a second

              // Deal damage using EnemyManager to properly update healthbars and trigger death
              enemyManager.damageEnemy(m.target, m.damage);

              // Minion lunge animation (simple procedural push)
              m.model.position.x += (tx / tDist) * 1.5;
              m.model.position.z += (tz / tDist) * 1.5;
            }
          }
          break;
      }

      // ── Hard leash clamp — applied AFTER state movement so minions can
      //    never end up outside the radius regardless of state. If they
      //    would, project them back to the boundary.
      const _BURROW_LEASH_RADIUS = 28.0;
      const _dxB = m.model.position.x - this.position.x;
      const _dzB = m.model.position.z - this.position.z;
      const _dB = Math.sqrt(_dxB * _dxB + _dzB * _dzB);
      if (_dB > _BURROW_LEASH_RADIUS) {
        const _nx = _dxB / _dB;
        const _nz = _dzB / _dB;
        m.model.position.x = this.position.x + _nx * _BURROW_LEASH_RADIUS;
        m.model.position.z = this.position.z + _nz * _BURROW_LEASH_RADIUS;
        m.model.position.y = this.world.getTerrainHeight(m.model.position.x, m.model.position.z);
      }
    }
  }

  _updateHUD() {
    const elHealth = document.getElementById('burrow-health');
    const elMinions = document.getElementById('burrow-minions');
    const elLevel = document.getElementById('burrow-level');
    const elCost = document.getElementById('burrow-cost');

    if (elHealth) {
      if (this.state === BURROW_STATE.DESTROYED) {
        elHealth.textContent = `DESTROYED`;
        elHealth.style.color = '#555555';
      } else if (this.state === BURROW_STATE.REBUILDING) {
        elHealth.textContent = `REBUILDING...`;
        elHealth.style.color = '#FFD700';
      } else {
        elHealth.textContent = `${Math.max(0, Math.floor(this.health))}/${this.maxHealth} HP`;
        if (this.health < this.maxHealth * 0.3) elHealth.style.color = '#FF0000';
        else elHealth.style.color = '#44FF44';
      }
    }
    
    if (elMinions) {
      if (this.state === BURROW_STATE.ACTIVE) {
        elMinions.textContent = `${this.eggs.length + this.minions.length}/${this.maxMinions}`;
      } else {
        elMinions.textContent = `OFFLINE`;
      }
    }
    
    if (elLevel) elLevel.textContent = this.level;
    
    if (elCost) {
      if (this.state === BURROW_STATE.DESTROYED) {
        elCost.textContent = `Rebuild: 15 Shells`;
        elCost.style.color = '#FF4444';
      } else if (this.state === BURROW_STATE.REBUILDING) {
        elCost.textContent = `Please Wait...`;
        elCost.style.color = '#FFD700';
      } else {
        if (this.eggs.length + this.minions.length >= this.maxMinions) {
           elCost.textContent = `MAX CAPACITY`;
           elCost.style.color = '#AAAAAA';
        } else {
           const currentCount = this.eggs.length + this.minions.length;
           const currentCost = 5 * Math.pow(2, currentCount);
           elCost.textContent = `Cost: ${currentCost} Shells`;
           elCost.style.color = '#FFD700';
        }
      }
    }
  }
}
