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
    this.depositRadius = 10.0;
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
    // Restore base capacities — upgrades had mutated these upward
    this.maxHealth = 400;
    this.maxMinions = 3;
    this.health = this.maxHealth;
    this.level = 1;
    this.state = BURROW_STATE.ACTIVE;
    this.rebuildTimer = 0;
    this.coinTimer = 0;
    // Snap back to ground in case it had sunk during destruction
    if (this.world) {
      this.burrowGroup.position.y = this.world.getTerrainHeight(this.position.x, this.position.z) - 0.2;
    } else {
      this.burrowGroup.position.copy(this.position);
    }
    this._updateHUD();
  }

  _buildBurrow() {
    // Load rocks to create a protective circle
    this.loader.load('./models/simple_rock_iv.glb', (gltf) => {
      const rockModel = gltf.scene;
      
      const rockCount = 20;
      const radius = 9.0;
      for (let i = 0; i < rockCount; i++) {
        // Create a nearly full circle (leave a small gap in the front)
        if (i === 0) continue; 

        const rock = rockModel.clone();
        const angle = (i / rockCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        rock.position.set(x, 0, z);
        // Make the rocks massive to look like a fortified base
        rock.scale.setScalar(4.0 + Math.random() * 3.5);
        rock.rotation.y = Math.random() * Math.PI;
        rock.rotation.z = (Math.random() - 0.5) * 0.5;
        
        rock.traverse(child => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material = child.material.clone();
            }
          }
        });
        
        this.burrowGroup.add(rock);
        
        // Add random driftwood pieces sticking out of the barricade for extra detail
        if (Math.random() < 0.4) {
          const woodGeo = new THREE.CylinderGeometry(0.2, 0.4, 4 + Math.random() * 3, 6);
          const woodMat = new THREE.MeshStandardMaterial({ color: 0x8B6914, roughness: 0.95, metalness: 0.0 });
          const wood = new THREE.Mesh(woodGeo, woodMat);
          wood.position.set(x + (Math.random() - 0.5), 1.5, z + (Math.random() - 0.5));
          wood.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
          wood.castShadow = true;
          this.burrowGroup.add(wood);
        }
      }
      
      // Add a massive sand mound in center
      const moundGeo = new THREE.CylinderGeometry(0.1, 8.5, 2.5, 16);
      const moundMat = new THREE.MeshStandardMaterial({ color: 0xd4a86a, roughness: 1.0 });
      const mound = new THREE.Mesh(moundGeo, moundMat);
      mound.position.y = 0.75;
      mound.receiveShadow = true;
      this.burrowGroup.add(mound);

      // Add a central glow and massive beacon so it's obvious from anywhere
      const light = new THREE.PointLight(0xffaa00, 3.0, 25);
      light.position.y = 2.0;
      this.burrowGroup.add(light);

      const beaconGeo = new THREE.CylinderGeometry(1.5, 0.4, 60.0, 12);
      const beaconMat = new THREE.MeshBasicMaterial({ 
        color: 0xFFD700, 
        transparent: true, 
        opacity: 0.2,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.y = 20.0;
      this.burrowGroup.add(beacon);
      
      // Correct burrow Y position to match terrain
      this.burrowGroup.position.y = this.world.getTerrainHeight(this.position.x, this.position.z) - 0.2;

      // Unhide HUD
      const hud = document.getElementById('burrow-hud');
      if (hud) hud.style.display = 'block';
    });
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
    // Lose all unhatched eggs
    for (const egg of this.eggs) {
      this.burrowGroup.remove(egg.mesh);
    }
    this.eggs = [];
    this.level = 1;
    this.maxMinions = 3;
    
    // Make burrow look broken (sink into ground)
    this.burrowGroup.position.y -= 2.0;
    
    if (window.showNotification) {
      window.showNotification("Burrow Destroyed!", "Deposit 15 Shells to rebuild it.");
    }
    if (this.dialogue && this.crab && this.crab.model) {
      this.dialogue.heroCooldown = 0; // Force override
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
        const angle = Math.random() * Math.PI * 2;
        const r = 2.0 + Math.random() * 2.0; // Near burrow
        const dropPos = this.position.clone();
        dropPos.x += Math.cos(angle) * r;
        dropPos.z += Math.sin(angle) * r;
        enemyManager._spawnDrop(dropPos, 'coin', 1);
      }
    }

    // 0. Rebuilding Logic
    if (this.state === BURROW_STATE.REBUILDING) {
      this.rebuildTimer += dt;
      const progress = Math.min(1.0, this.rebuildTimer / this.rebuildDuration);
      
      this.rebuildFill.scale.x = Math.max(0.01, progress);
      this.rebuildFill.position.x = -2.5 + (2.5 * progress);
      
      // Animate rising slowly
      this.burrowGroup.position.y += (2.0 / this.rebuildDuration) * dt;
      
      if (progress >= 1.0) {
        this.state = BURROW_STATE.ACTIVE;
        this.health = this.maxHealth;
        this.burrowGroup.position.y = this.world.getTerrainHeight(this.position.x, this.position.z) - 0.2;
        this.burrowGroup.remove(this.rebuildBg);
        this.burrowGroup.remove(this.rebuildFill);
        
        if (window.showNotification) {
          window.showNotification("Burrow Restored!", "Your Burrow is back online.");
        }
        if (this.dialogue && this.crab && this.crab.model) {
          this.dialogue.heroCooldown = 0; // Force override
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
