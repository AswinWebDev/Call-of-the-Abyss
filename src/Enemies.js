/**
 * Enemies.js — Turtle enemy manager with wave spawning
 * Walk-only model handled with lunge attack + red flash + cooldown.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';

const TURTLE_STATE = {
  SPAWNING: 'spawning',   // Rising from water
  WALKING: 'walking',     // Approaching crab
  ATTACKING: 'attacking', // Lunge attack
  COOLDOWN: 'cooldown',   // Post-attack pause
  DYING: 'dying',         // Death animation
  DEAD: 'dead'
};

// --- Upgrade 2.0: Spawn Caps ---
const SPAWN_MAX = { boss: 2, octopus: 3, turtle: 8 };

// Reusable scratch vector for drop spawn offsets — avoids per-drop GC
// pressure during heavy waves.
const _DROP_SCRATCH = new THREE.Vector3();

// --- Upgrade 2.0: Variant Modifiers (wave >= 5) ---
const VARIANTS = {
  octopus: {
    spreader: { extraProjectiles: 2, cooldownMod: 1.0, tint: 0x6600cc },
    hunter: { speedMod: 1.5, cooldownMod: -1.0, tint: 0xcc0066 },
    corruptor: { poolDurationMod: 5, tint: 0x003300 }
  },
  turtle: {
    charger: { dash: true, tint: 0xff4400 },
    tank: { hpMultiplier: 3, speedMod: 0.9, tint: 0x444488 },
    swarm: { hpMultiplier: 0.7, speedMod: 2.0, tint: 0x88ff00 }
  },
  boss: {
    enraged: { dashCooldownMod: -2, tint: 0xff0000 },
    summoner: { spawnAdds: true, tint: 0x8800ff },
    corrupter: { slamCreatesPool: true, tint: 0x006600 }
  }
};

// --- Upgrade 2.0: Cached level label textures ---
const _levelLabelCache = {};
function _getLevelLabelTexture(text) {
  if (_levelLabelCache[text]) return _levelLabelCache[text];
  const canvas = document.createElement('canvas');
  canvas.width = 128; canvas.height = 48;
  const ctx = canvas.getContext('2d');
  ctx.font = 'bold 32px Outfit, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 3;
  ctx.strokeText(text, 64, 34);
  ctx.fillText(text, 64, 34);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  _levelLabelCache[text] = tex;
  return tex;
}

export class EnemyManager {
  constructor(scene, world, audioManager, dialogueManager) {
    this.scene = scene;
    this.world = world;
    this.audio = audioManager;
    this.dialogue = dialogueManager;
    this.loader = new GLTFLoader();

    this.enemies = [];
    this.turtleModel = null;
    this.turtleAnimClip = null;
    this._modelLoaded = false;

    // Boss system
    this.bossModel = null;
    this.bossAnimClip = null;
    this._bossModelLoaded = false;
    this._bossLoadStarted = false;

    // Octopus system
    this.octopusModel = null;
    this.octopusAnimClip = null;
    this._octopusModelLoaded = false;

    // Cthulhu mega-boss system (wave 7, 12, 17, ...). Outside the budget
    // economy — spawned directly in startWave() and only one alive at a time.
    this.cthulhuModel = null;
    this.cthulhuAnimClip = null;
    this._cthulhuModelLoaded = false;
    this._cthulhuLoadStarted = false;
    this._cthulhuPending = false; // set true in startWave on a Cthulhu wave
    this._cthulhuAlive = false;   // true while a Cthulhu enemy is on screen

    // Wave system
    this.currentWave = 0;
    this.waveActive = false;
    this.enemiesAliveInWave = 0;
    this.totalKills = 0;
    this.waveSpawnTimer = 0;
    this.waveBudget = 0;
    this._waveDelay = 3.0; // Seconds between waves
    this._waveTimer = this._waveDelay;

    // Test mode
    this.testBossMode = new URLSearchParams(window.location.search).get('test_boss') === 'true';

    // Collectibles
    this.collectibles = [];

    // Dialogue System
    this.spawnDialogueQueue = [];
    this._globalTauntTimer = 5.0 + Math.random() * 5.0; // Starts timer

    // --- Upgrade 2.0 ---
    this.waveJustCompleted = false;
    this._summonerTimer = 0; // For summoner variant

    this._loadModel();
  }

  // Push enemy out of burrow collider so they can't phase through
  _enforceBurrowCollision(enemy) {
    const bx = -60, bz = 0, br = 14.0; // burrow center and collision radius
    const dx = enemy.position.x - bx;
    const dz = enemy.position.z - bz;
    const dist = Math.sqrt(dx * dx + dz * dz);
    if (dist < br && dist > 0.01) {
      const pushAngle = Math.atan2(dz, dx);
      enemy.position.x = bx + Math.cos(pushAngle) * br;
      enemy.position.z = bz + Math.sin(pushAngle) * br;
    }
  }

  /**
   * Wipe all live state (enemies, drops, wave counters) for a Retry.
   * Loaded models / animations are kept so we don't re-fetch GLBs.
   */
  reset() {
    for (const e of this.enemies) {
      if (e.model) this.scene.remove(e.model);
    }
    this.enemies = [];
    for (const c of this.collectibles) {
      if (c.mesh) this.scene.remove(c.mesh);
    }
    this.collectibles = [];

    this.currentWave = 0;
    this.waveActive = false;
    this.enemiesAliveInWave = 0;
    this.totalKills = 0;
    this.waveSpawnTimer = 0;
    this.waveBudget = 0;
    this._waveTimer = this._waveDelay;
    this.waveJustCompleted = false;
    this._summonerTimer = 0;
    this._globalTauntTimer = 5.0 + Math.random() * 5.0;
    this.spawnDialogueQueue.length = 0;
    this._cthulhuAlive = false;
    this._cthulhuPending = false;
    this._cthulhuRiseGrace = 0;

    // Hide the cinematic boss bar if a Retry happens mid-fight
    const bossBarEl = document.getElementById('cthulhu-bossbar');
    if (bossBarEl) bossBarEl.classList.remove('visible');

    const killEl = document.getElementById('kill-count');
    if (killEl) killEl.textContent = '0';
    const waveEl = document.getElementById('wave-number');
    if (waveEl) waveEl.textContent = '—';
  }

  // --- Upgrade 2.0: Count alive enemies by type ---
  _getAliveCount(type) {
    let count = 0;
    for (const e of this.enemies) {
      if (e.state === TURTLE_STATE.DEAD || e.state === TURTLE_STATE.DYING) continue;
      if (type === 'boss' && e.isBoss) count++;
      else if (type === 'octopus' && e.isOctopus) count++;
      else if (type === 'turtle' && !e.isBoss && !e.isOctopus) count++;
    }
    return count;
  }

  // --- Upgrade 2.0: Apply level, variant, and elite modifiers to an enemy ---
  _applyModifiers(enemy, enemyType) {
    // Level system
    let level = 1;
    if (this.currentWave >= 5) {
      level = Math.min(3, Math.floor((this.currentWave - 5) / 3) + 2);
    }
    enemy.level = level;
    if (level >= 2) {
      enemy.maxHealth *= 2;
      enemy.health = enemy.maxHealth;
    }
    if (level >= 3) {
      enemy.maxHealth *= 1.5;
      enemy.health = enemy.maxHealth;
      enemy.speed *= 1.2;
      enemy._attackCooldown *= 0.85;
    }

    // Level label sprite (only for level 2+)
    if (level >= 2) {
      const labelText = `Lv.${level}`;
      const tex = _getLevelLabelTexture(labelText);
      const spriteMat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(2.5, 1.0, 1);
      const hbY = enemy.healthBarGroup ? enemy.healthBarGroup.position.y : 5;
      sprite.position.y = hbY + 1.5;
      enemy.model.add(sprite);
      enemy._levelSprite = sprite;
    }

    // Variant system (wave >= 5)
    if (this.currentWave >= 5 && VARIANTS[enemyType]) {
      const pool = VARIANTS[enemyType];
      const names = Object.keys(pool);
      const pick = names[Math.floor(Math.random() * names.length)];
      const mods = pool[pick];
      enemy.variant = pick;
      enemy.variantMods = mods;

      if (mods.hpMultiplier) { enemy.maxHealth *= mods.hpMultiplier; enemy.health = enemy.maxHealth; }
      if (mods.speedMod) enemy.speed *= mods.speedMod;
      if (mods.cooldownMod !== undefined) enemy._attackCooldown = Math.max(0.5, enemy._attackCooldown + mods.cooldownMod);
      if (mods.dash) {
        enemy._canDash = true;
        enemy._dashTimer = 3.0 + Math.random() * 2.0; // Random initial delay
        enemy._dashCooldown = 0;
        enemy._isDashing = false;
      }
      if (mods.dashCooldownMod) enemy._dashTimer = Math.max(1, (enemy._dashTimer || 7) + mods.dashCooldownMod);
      if (mods.extraProjectiles) enemy._extraProjectiles = mods.extraProjectiles;
      if (mods.spawnAdds) enemy._spawnAdds = true;
      if (mods.slamCreatesPool) enemy._slamCreatesPool = true;

      // Tint
      if (mods.tint) {
        const tintColor = new THREE.Color(mods.tint);
        enemy.model.traverse((child) => {
          if (child.isMesh && child.material && child.material.emissive) {
            child.material.emissive.copy(tintColor);
            child.material.emissiveIntensity = 0.3;
            child.userData.originalEmissive = tintColor.clone();
          }
        });
      }
    }

    // Elite system (wave >= 7, 25% chance)
    if (this.currentWave >= 7 && Math.random() < 0.25) {
      enemy.isElite = true;
      enemy.maxHealth *= 2;
      enemy.health = enemy.maxHealth;
      enemy.attackDamage *= 2;

      // Gold glow
      enemy.model.traverse((child) => {
        if (child.isMesh && child.material && child.material.emissive) {
          child.material.emissive.setHex(0xffaa00);
          child.material.emissiveIntensity = 0.6;
          child.userData.originalEmissive = new THREE.Color(0xffaa00);
        }
      });

      // Elite label
      const eliteTex = _getLevelLabelTexture('ELITE');
      const eliteSpriteMat = new THREE.SpriteMaterial({ map: eliteTex, transparent: true, depthTest: false });
      const eliteSprite = new THREE.Sprite(eliteSpriteMat);
      eliteSprite.scale.set(3.0, 1.2, 1);
      const hbY = enemy.healthBarGroup ? enemy.healthBarGroup.position.y : 5;
      eliteSprite.position.y = hbY + 3.0;
      enemy.model.add(eliteSprite);
    }
  }

  _loadModel() {
    this.loader.load('./models/stylized_turtle.glb',
      (gltf) => {
        this.turtleModel = gltf.scene;

        // Auto-scale
        const box = new THREE.Box3().setFromObject(this.turtleModel);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 5.0 / maxDim;
        this.turtleModel.scale.setScalar(scale);

        // Store animation
        if (gltf.animations && gltf.animations.length > 0) {
          this.turtleAnimClip = gltf.animations[0];
          console.log(`Turtle anim: "${this.turtleAnimClip.name}" — ${this.turtleAnimClip.duration.toFixed(2)}s`);
        }

        this._modelLoaded = true;
        console.log('✓ Turtle model loaded');

        // Wait for all other game assets to finish loading, then load the heavy boss model
        const oldOnLoad = THREE.DefaultLoadingManager.onLoad;
        THREE.DefaultLoadingManager.onLoad = () => {
          if (oldOnLoad) oldOnLoad();
          if (!this._bossLoadStarted) {
            this._lazyLoadBoss();
          }
        };

        // Load Octopus
        this.loader.load('./models/dave_the_octopus_rig_animation.glb', (octoGltf) => {
          this.octopusModel = octoGltf.scene;
          const oBox = new THREE.Box3().setFromObject(this.octopusModel);
          const oSize = oBox.getSize(new THREE.Vector3());
          const oMaxDim = Math.max(oSize.x, oSize.y, oSize.z);
          const oScale = 20.0 / oMaxDim; // Make it massive (1.5x larger than before)
          this.octopusModel.scale.setScalar(oScale);

          if (octoGltf.animations && octoGltf.animations.length > 0) {
            this.octopusAnimClip = octoGltf.animations[0];
            // Remove position tracks to prevent root motion (which causes bouncing/jumping)
            this.octopusAnimClip.tracks = this.octopusAnimClip.tracks.filter(track => !track.name.endsWith('.position'));
          }
          this._octopusModelLoaded = true;
          console.log('✓ Octopus model loaded');
        }, undefined, (err) => console.error('Failed to load octopus model:', err));
      },
      undefined,
      (err) => console.error('Failed to load turtle model:', err)
    );
  }

  _lazyLoadBoss() {
    if (this._bossLoadStarted) return;
    this._bossLoadStarted = true;

    // Kick off the wave drums fetch alongside the boss — both are lazy
    // assets the player only needs after they've been in the world for a bit.
    if (this.audio && this.audio.loadWaveDrums) this.audio.loadWaveDrums();

    this.loader.load('./models/zombie_monster_slasher_necromorph.glb', (gltf) => {
      this.bossModel = gltf.scene;

      // Auto-scale
      const box = new THREE.Box3().setFromObject(this.bossModel);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 12.0 / maxDim; // Boss is large
      this.bossModel.scale.setScalar(scale);

      if (gltf.animations && gltf.animations.length > 0) {
        this.bossAnimClip = gltf.animations.find(a => a.name === 'anim') || gltf.animations[0];
      }

      this._bossModelLoaded = true;
      console.log('✓ Boss zombie monster loaded');

      // If test mode and wave already started before load completes
      if (this.testBossMode && this.waveActive && this.bossesToSpawn === 0) {
        this.bossesToSpawn = 1;
      }
    }, undefined, (err) => console.error('Failed to load boss model:', err));
  }

  /**
   * Lazy-load the Cthulhu mega-boss model. Called when the next wave is
   * close to a Cthulhu spawn (preloaded one wave early to avoid hitches).
   */
  _lazyLoadCthulhu() {
    if (this._cthulhuLoadStarted) return;
    this._cthulhuLoadStarted = true;

    // Preload the rise + death SFX in parallel so they're decoded and
    // ready by spawn / death time
    if (this.audio && this.audio.preloadCthuluRises) {
      this.audio.preloadCthuluRises();
    }
    if (this.audio && this.audio.preloadCthuluDies) {
      this.audio.preloadCthuluDies();
    }

    this.loader.load('./models/boss_octopus.glb', (gltf) => {
      this.cthulhuModel = gltf.scene;
      // Normalize size — we'll scale further per spawn for the mega effect
      const box = new THREE.Box3().setFromObject(this.cthulhuModel);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z) || 1;
      const baseScale = 600.0 / maxDim; // truly massive
      this.cthulhuModel.scale.setScalar(baseScale);

      if (gltf.animations && gltf.animations.length > 0) {
        this.cthulhuAnimClip = gltf.animations[0];
      }
      this._cthulhuModelLoaded = true;
      console.log('✓ Cthulhu mega-boss loaded');
    }, undefined, (err) => console.error('Failed to load Cthulhu model:', err));
  }

  /**
   * Returns true if `wave` should spawn Cthulhu (7, 12, 17, 22, …).
   */
  _isCthulhuWave(wave) {
    return wave >= 7 && (wave - 7) % 5 === 0;
  }

  /**
   * Spawn a Cthulhu mega-boss far out in the water. Stays put — never
   * approaches the shore, but spams the crab with attacks.
   */
  _spawnCthulhu() {
    if (!this._cthulhuModelLoaded || !this.cthulhuModel) {
      // Model didn't load in time — try again in a moment
      this._cthulhuPending = true;
      return;
    }

    const innerModel = SkeletonUtils.clone(this.cthulhuModel);

    // Each Cthulhu wave makes it larger to keep the fight escalating
    const waveScale = 1.0 + Math.max(0, (this.currentWave - 7) / 12);
    innerModel.scale.multiplyScalar(waveScale);

    const model = new THREE.Group();
    model.add(innerModel);

    // Park it deep in the ocean — far enough to read as huge-on-the-horizon
    // and so the lower half is properly submerged.
    const spawnX = 240;       // pushed a bit further back so he looms
    const spawnZ = (Math.random() - 0.5) * 60;
    const finalY = -10;       // resting Y — deeply seated in the water
    const startY = -140;      // very deep, scales with the now-bigger body
    model.position.set(spawnX, startY, spawnZ);
    model.rotation.y = -Math.PI / 2; // face the shore (-X)

    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = false;
      }
    });
    this.scene.add(model);

    // Animation mixer
    let mixer = null;
    let walkAction = null;
    if (this.cthulhuAnimClip) {
      mixer = new THREE.AnimationMixer(innerModel);
      walkAction = mixer.clipAction(this.cthulhuAnimClip);
      walkAction.play();
      walkAction.timeScale = 0.7;
    }

    // Health scales with wave so later Cthulhus are tougher
    const baseHealth = 3000 + (this.currentWave - 7) * 800;
    const baseAttack = 25 + this.currentWave * 2;
    const tickAttack = baseAttack * 0.4;

    // Cthulhu uses an HTML cinematic boss bar at the top of the screen
    // (always visible regardless of camera angle / FOV / model size).
    // We still attach a (hidden) 3D bar group so the existing damageEnemy
    // code path doesn't error out on enemy.healthBarFill.
    const healthBarGroup = this._createHealthBar();
    healthBarGroup.visible = false;            // 3D bar hidden — HTML bar is canonical
    model.add(healthBarGroup);

    // Show & reset the HTML boss bar
    const bossBarEl = document.getElementById('cthulhu-bossbar');
    const bossFillEl = document.getElementById('cthulhu-bossbar-fill');
    if (bossBarEl) bossBarEl.classList.add('visible');
    if (bossFillEl) bossFillEl.style.width = '100%';

    const enemy = {
      model,
      innerModel,
      mixer,
      walkAction,
      healthBarGroup,
      healthBarFill: healthBarGroup.children[1],

      isCthulhu: true,
      isBoss: true,        // counts as boss for systems that key off this
      isStationary: true,  // tells AI loop not to advance toward player

      // Stats
      maxHealth: baseHealth,
      health: baseHealth,
      speed: 0,             // never moves
      attackDamage: baseAttack,
      tickDamage: tickAttack,
      attackRange: 9999,
      // Hit radius scales with the gigantic visible body (and grows per
      // Cthulhu wave). Generous so bullets that visually clip any part of
      // the head/torso register as hits even with bullet drop at long range.
      // Bumped from 100 → 120 to absorb the extra drop from the new
      // x=240 spawn distance.
      hitRadius: 120.0 * waveScale,

      // State — starts SPAWNING and rises out of the deep over 5 seconds
      state: TURTLE_STATE.SPAWNING,
      alive: true,
      position: model.position,
      yOffset: 0,
      _emergeStartY: startY,
      _emergeFinalY: finalY,
      _emergeDuration: 5.0,
      _spawnTimer: 0,
      _attackTimer: 0,
      _attackCooldown: 1.0,   // poison every 1 second
      _cooldownTimer: 0.5,    // first throw shortly after fully emerged
      _deathTimer: 0,
      _flashTimer: 0,
      _knockbackVelocity: new THREE.Vector3(),
      _staggerTimer: 0,
      _bobTimer: 0,
      targetEntity: 'crab',
      throwCount: 0,
      _dialogueTimer: 8.0
    };

    this.enemies.push(enemy);
    this._cthulhuAlive = true;
    this.enemiesAliveInWave++;

    // Cinematic rise SFX — fires the moment the boss starts emerging.
    // Cthulhu speaks NO dialogue (no spawn line, no hit taunts, no random
    // taunts) — the rise SFX with abyssal echo is his only voice.
    if (this.audio && this.audio.playCthuluRises) {
      this.audio.playCthuluRises();
    }

    // Grace period — no trash mobs spawn during the rise + echo.
    // Lets the cinematic moment land without enemies running across the beach.
    this._cthulhuRiseGrace = 20.0;

    // Storm onset — handled in main update via storm-system poll
  }

  /**
   * Start the next wave
   */
  startWave() {
    this.currentWave++;

    if (this.testBossMode && !this._bossLoadStarted) {
      this._lazyLoadBoss(); // Ensure test mode always loads immediately
    }

    // Pre-load Cthulhu one wave before he appears so the spawn is hitch-free
    if (this.currentWave === 6 || this._isCthulhuWave(this.currentWave + 1)) {
      this._lazyLoadCthulhu();
    }
    // Spawn Cthulhu *outside* the wave economy (no budget cost, ignores caps)
    if (this._isCthulhuWave(this.currentWave)) {
      // Also kick a load if we somehow missed pre-load
      if (!this._cthulhuLoadStarted) this._lazyLoadCthulhu();
      // Defer to next frame to let the wave-start banner show first
      setTimeout(() => this._spawnCthulhu(), 200);
    }

    // --- Upgrade 3.0: Economy-Based Wave Spawning ---
    // Cthulhu waves are focused boss fights — small staggered batches of 10
    // (refilled when each batch is cleared) instead of the normal horde.
    if (this._isCthulhuWave(this.currentWave)) {
      this.waveBudget = 10;
    } else {
      this.waveBudget = Math.floor(4 + this.currentWave * 3);
    }

    this.waveSpecialSpawned = {
      octopus: 0,
      boss: 0
    };
    // Lighter cap on octopuses during Cthulhu fights so the trash mob
    // doesn't drown the boss spectacle.
    this.maxOctopusPerWave = this._isCthulhuWave(this.currentWave)
      ? 1
      : Math.floor(this.currentWave / 2);
    
    if (this.testBossMode) {
      this.maxBossPerWave = 1;
    } else if (this.currentWave >= 4 && (this.currentWave % 2 === 0 || this.currentWave % 5 === 0)) {
      this.maxBossPerWave = 1;
    } else {
      this.maxBossPerWave = 0;
    }

    this.enemiesAliveInWave = 0;
    this.waveActive = true;
    this.waveSpawnTimer = 0;

    if (window.showNotification) {
      window.showNotification(`Wave ${this.currentWave}`, `Defend the Burrow!`);
    }

    this._bossSpokeThisWave = false;
    this._octopusSpokeThisWave = false;

    if (this.currentWave >= 3 && this.dialogue && this.crab && this.crab.model) {
      if (Math.random() < 0.3) {
         this.dialogue.speak(this.crab.model, "They are bringing the heavy hitters.", 'hero', 4.0, 4.0);
      }
    }
    console.log(`Wave ${this.currentWave} starting with budget: ${this.waveBudget}`);

    // Update HUD
    const waveEl = document.getElementById('wave-number');
    if (waveEl) waveEl.textContent = this.currentWave;
  }

  /**
   * Spawn a single turtle enemy
   */
  _spawnTurtle() {
    if (!this._modelLoaded) return;
    if (this._getAliveCount('turtle') >= SPAWN_MAX.turtle) return;

    const model = SkeletonUtils.clone(this.turtleModel);

    // Spawn from the ocean (right side), random Z
    const spawnX = 55 + Math.random() * 20;
    const spawnZ = -190 + Math.random() * 380;
    const spawnY = this.world.getTerrainHeight(spawnX, spawnZ);

    model.position.set(spawnX, spawnY, spawnZ);
    model.rotation.y = Math.PI; // Face toward beach

    // Set up shadows
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        // Store original material colors for flash effect
        if (child.material) {
          child.material = child.material.clone(); // Don't share materials
          child.userData.originalColor = child.material.color.clone();
          child.userData.originalEmissive = child.material.emissive ? child.material.emissive.clone() : new THREE.Color(0);
        }
      }
    });

    this.scene.add(model);

    // Animation mixer
    let mixer = null;
    let walkAction = null;
    if (this.turtleAnimClip) {
      mixer = new THREE.AnimationMixer(model);
      walkAction = mixer.clipAction(this.turtleAnimClip);
      walkAction.play();
      walkAction.timeScale = 1.0;
    }

    // Health bar
    const healthBarGroup = this._createHealthBar();
    model.add(healthBarGroup);
    healthBarGroup.position.y = 3.5;

    const baseHealth = 40 + this.currentWave * 10;

    const enemy = {
      model,
      mixer,
      walkAction,
      healthBarGroup,
      healthBarFill: healthBarGroup.children[1],

      // Stats
      maxHealth: baseHealth,
      health: baseHealth,
      speed: 12 + this.currentWave * 0.75, // 1.5x original speed
      attackDamage: 8 + this.currentWave * 2,
      attackRange: 5.0,
      hitRadius: 5.0,

      // State
      state: TURTLE_STATE.SPAWNING,
      alive: true,
      position: model.position,
      _spawnTimer: 0,
      _attackTimer: 0,
      _attackCooldown: 1.5,
      _cooldownTimer: 0,
      _deathTimer: 0,
      _flashTimer: 0,
      _lungeDir: new THREE.Vector3(),
      _lungeProgress: 0,
      targetEntity: Math.random() > 0.5 ? 'burrow' : 'crab'
    };

    // Apply level / variant / elite modifiers
    this._applyModifiers(enemy, 'turtle');

    this.enemies.push(enemy);
    this.enemiesAliveInWave++;

    // 25% chance to shout when spawning
    if (this.dialogue && Math.random() < 0.25) {
      this.dialogue.speak(model, "The beach belongs to us!", 'monster', 2.5, 4.5);
    }
  }

  /**
   * Spawn an octopus enemy
   */
  _spawnOctopus() {
    if (!this._octopusModelLoaded) return;
    if (this._getAliveCount('octopus') >= SPAWN_MAX.octopus) return;

    const innerModel = SkeletonUtils.clone(this.octopusModel);

    // Center it horizontally using Box3 to fix the swinging issue
    const oBox = new THREE.Box3().setFromObject(innerModel);
    const center = oBox.getCenter(new THREE.Vector3());

    // Shift innerModel so its visual center is exactly at the Group's origin (0,0,0) horizontally
    innerModel.position.x = -center.x;
    innerModel.position.z = -center.z;
    // Hardcode the Y offset based on user feedback to prevent floating
    innerModel.position.y = -12;

    const model = new THREE.Group();
    model.add(innerModel);

    // Spawn from the ocean (right side), random Z
    const spawnX = 55 + Math.random() * 20;
    const spawnZ = -190 + Math.random() * 380;
    // Group's origin sits exactly on the terrain height.
    const yOffset = 0;
    const spawnY = this.world.getTerrainHeight(spawnX, spawnZ) + yOffset;

    model.position.set(spawnX, spawnY, spawnZ);
    model.rotation.y = Math.PI; // Face toward beach

    // Set up shadows and fix culling on the actual meshes
    innerModel.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.frustumCulled = false; // Prevent it from disappearing when origin is off-screen
        // Store original material colors for flash effect
        if (child.material) {
          child.material = child.material.clone();
          child.userData.originalColor = child.material.color.clone();
          child.userData.originalEmissive = child.material.emissive ? child.material.emissive.clone() : new THREE.Color(0);
        }
      }
    });

    this.scene.add(model);

    // Animation mixer MUST target innerModel so bones animate correctly
    let mixer = null;
    let walkAction = null;
    if (this.octopusAnimClip) {
      mixer = new THREE.AnimationMixer(innerModel);
      walkAction = mixer.clipAction(this.octopusAnimClip);
      walkAction.play();
      walkAction.timeScale = 1.0;
    }

    // Health bar is added to the Group so it stays centered above the Octopus
    const healthBarGroup = this._createHealthBar();
    model.add(healthBarGroup);
    healthBarGroup.position.y = 13.0; // Health bar high above the Octopus head
    healthBarGroup.scale.set(2.5, 2.5, 2.5); // Larger to match new size

    // Octopus is double turtle health
    const turtleHealth = 60 + this.currentWave * 20;
    const baseHealth = turtleHealth * 2;
    // Octopus attack damage is double turtle attack for impact, 0.3x for tick
    const turtleAttack = 8 + this.currentWave * 2;
    const baseAttack = turtleAttack * 2;
    const tickAttack = turtleAttack * 0.3;

    const enemy = {
      model,
      mixer,
      walkAction,
      healthBarGroup,
      healthBarFill: healthBarGroup.children[1],

      isOctopus: true,

      // Stats
      maxHealth: baseHealth,
      health: baseHealth,
      speed: 10 + this.currentWave * 0.5, // Move as fast as the original turtles
      attackDamage: baseAttack,
      tickDamage: tickAttack,
      attackRange: 40.0, // Throwing range
      hitRadius: 4.0,

      // State
      state: TURTLE_STATE.SPAWNING,
      alive: true,
      position: model.position,
      yOffset: yOffset, // Dynamically calculated offset to stay exactly on the ground
      _spawnTimer: 0,
      _attackTimer: 0,
      _attackCooldown: 5.0, // Throws every 5 seconds
      _cooldownTimer: 0,
      _deathTimer: 0,
      _flashTimer: 0,
      _lungeDir: new THREE.Vector3(),
      _lungeProgress: 0,
      targetEntity: 'crab', // Usually targets crab
      throwCount: 0,
      _dialogueTimer: 12.0
    };

    // Apply level / variant / elite modifiers
    this._applyModifiers(enemy, 'octopus');

    this.enemies.push(enemy);

    // Queue initial spawn dialogue for Octopus
    if (this.dialogue && !this._octopusSpokeThisWave) {
      this._octopusSpokeThisWave = true;
      this.spawnDialogueQueue.push({
        entity: enemy,
        text: "You hear it too… don't you The call of the abyss… it calls for you.",
        heightOffset: 15.0
      });
    }
    this.enemiesAliveInWave++;
  }

  /**
   * Spawn a boss enemy
   */
  _spawnBoss() {
    if (!this._bossModelLoaded) return;
    if (this._getAliveCount('boss') >= SPAWN_MAX.boss) return;

    const innerModel = SkeletonUtils.clone(this.bossModel);

    if (this.isBigBossWave) {
      innerModel.scale.multiplyScalar(2.0);
    }

    const model = new THREE.Group();
    model.add(innerModel);

    // Spawn from the ocean (right side), random Z
    const spawnX = 55 + Math.random() * 20;
    const spawnZ = -190 + Math.random() * 380;
    const spawnY = this.world.getTerrainHeight(spawnX, spawnZ);

    model.position.set(spawnX, spawnY, spawnZ);
    // Face toward beach initially
    model.rotation.y = Math.PI;

    // Set up shadows
    innerModel.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          child.material = child.material.clone();
          child.userData.originalColor = child.material.color.clone();
          child.userData.originalEmissive = child.material.emissive ? child.material.emissive.clone() : new THREE.Color(0);
        }
      }
    });

    this.scene.add(model);

    // Animation mixer
    let mixer = null;
    let walkAction = null;
    if (this.bossAnimClip) {
      mixer = new THREE.AnimationMixer(innerModel);
      walkAction = mixer.clipAction(this.bossAnimClip);
      walkAction.play();
      walkAction.timeScale = 1.0;
    }

    // Health bar
    const healthBarGroup = this._createHealthBar();
    model.add(healthBarGroup);

    if (this.isBigBossWave) {
      healthBarGroup.position.y = 26.0; // Higher for big boss
      healthBarGroup.scale.set(7, 7, 7);
    } else {
      healthBarGroup.position.y = 14.0;
      healthBarGroup.scale.set(4, 4, 4);
    }

    const baseHealth = this.isBigBossWave ? 600 + this.currentWave * 100 : 400 + this.currentWave * 50;

    const enemy = {
      model,
      mixer,
      walkAction,
      healthBarGroup,
      healthBarFill: healthBarGroup.children[1],

      isBoss: true,

      // Stats
      maxHealth: baseHealth,
      health: baseHealth,
      speed: this.isBigBossWave ? 8 + this.currentWave * 0.2 : 10 + this.currentWave * 0.5,
      attackDamage: this.isBigBossWave ? 40 + this.currentWave * 5 : 20 + this.currentWave * 5,
      attackRange: this.isBigBossWave ? 12.0 : 8.0,
      hitRadius: this.isBigBossWave ? 12.0 : 8.0,

      // State
      state: TURTLE_STATE.SPAWNING,
      alive: true,
      position: model.position,
      _spawnTimer: 0,
      _attackTimer: 0,
      _attackCooldown: this.isBigBossWave ? 2.5 : 1.5,
      _cooldownTimer: 0,
      _deathTimer: 0,
      _flashTimer: 0,
      _lungeDir: new THREE.Vector3(),
      _lungeProgress: 0,
      _needsFlashReset: false,
      targetEntity: 'crab', // Bosses always target player
      _isDashing: false,
      _dashTimer: 7.0,
      _dashCooldown: 0,
      isBigBoss: this.isBigBossWave
    };

    // Apply level / variant / elite modifiers
    this._applyModifiers(enemy, 'boss');

    this.enemies.push(enemy);
    this.enemiesAliveInWave++;

    // Queue boss spawn line
    if (this.dialogue && !this._bossSpokeThisWave) {
      this._bossSpokeThisWave = true;
      const taunts = [
        "I am the terror of the deep! Your water gun is nothing!",
        "The tide washes all away... starting with you!"
      ];
      const taunt = taunts[Math.floor(Math.random() * taunts.length)];
      const heightOffset = this.isBigBossWave ? 22.0 : 15.0;

      this.spawnDialogueQueue.push({
        entity: enemy,
        text: taunt,
        heightOffset: heightOffset
      });
    }
  }

  _createHealthBar() {
    const group = new THREE.Group();

    // Background (dark)
    const bgGeo = new THREE.PlaneGeometry(2.0, 0.25);
    const bgMat = new THREE.MeshBasicMaterial({ color: 0x333333, side: THREE.DoubleSide });
    const bg = new THREE.Mesh(bgGeo, bgMat);
    group.add(bg);

    // Fill (red → green)
    const fillGeo = new THREE.PlaneGeometry(1.9, 0.18);
    const fillMat = new THREE.MeshBasicMaterial({ color: 0x44ff44, side: THREE.DoubleSide });
    const fill = new THREE.Mesh(fillGeo, fillMat);
    fill.position.z = 0.01;
    group.add(fill);

    return group;
  }

  /**
   * Apply damage to an enemy
   */
  damageEnemy(enemy, damage) {
    if (!enemy.alive) return;

    enemy.health -= damage;
    enemy._flashTimer = 0.15; // Red flash duration

    // Update health bar
    const ratio = Math.max(0, enemy.health / enemy.maxHealth);
    enemy.healthBarFill.scale.x = ratio;
    enemy.healthBarFill.position.x = -(1 - ratio) * 0.95;

    if (enemy.isCthulhu) {
      // Cthulhu uses the HTML cinematic boss bar at the top of the screen.
      const bossFillEl = document.getElementById('cthulhu-bossbar-fill');
      if (bossFillEl) bossFillEl.style.width = `${ratio * 100}%`;
    } else {
      // Color: green → yellow → red
      const r = ratio < 0.5 ? 1 : (1 - ratio) * 2;
      const g = ratio > 0.5 ? 1 : ratio * 2;
      enemy.healthBarFill.material.color.setRGB(r, g, 0);
    }

    if (enemy.health <= 0) {
      this._killEnemy(enemy);
    } else {
      // Chance to taunt when hit (Cthulhu stays silent — only the rise SFX)
      if (this.dialogue && !enemy.isCthulhu && Math.random() < 0.1) {
        if (enemy.isBoss) {
          const bossTaunts = [
            "Your pathetic squirt gun cannot pierce my armor!",
            "I am the terror of the deep! Your water gun is nothing!",
            "The tide washes all away... starting with you!"
          ];
          const taunt = bossTaunts[Math.floor(Math.random() * bossTaunts.length)];
          const heightOffset = enemy.healthBarGroup.position.y - 1;
          this.dialogue.speak(enemy.model, taunt, 'monster', 3.5, heightOffset);
        } else {
          const turtleTaunts = [
            "You're gonna feel my wrath, shell-face!",
            "Snap him in half!",
            "The beach belongs to us!"
          ];
          const taunt = turtleTaunts[Math.floor(Math.random() * turtleTaunts.length)];
          this.dialogue.speak(enemy.model, taunt, 'monster', 2.5, 4.5);
        }
      }
    }

    // Hit sound
    if (this.audio && this.audio.initialized) {
      this.audio.playEnemyHitSound(enemy.isBoss);
    }
  }

  _triggerRandomTaunt() {
    // Filter out Cthulhu — he stays silent (only the rise SFX).
    const aliveEnemies = this.enemies.filter(e => e.alive && !e.isCthulhu);
    if (aliveEnemies.length === 0) return;

    // Pick a completely random enemy (equal probability as requested)
    const speaker = aliveEnemies[Math.floor(Math.random() * aliveEnemies.length)];

    let taunt = "";
    let heightOffset = 15.0;

    if (speaker.isBoss) {
      const bossTaunts = [
        "Your pathetic squirt gun cannot pierce my armor!",
        "I am the terror of the deep! Your water gun is nothing!",
        "The tide washes all away... starting with you!"
      ];
      taunt = bossTaunts[Math.floor(Math.random() * bossTaunts.length)];
      heightOffset = speaker.healthBarGroup ? speaker.healthBarGroup.position.y - 1 : 20.0;
    } else if (speaker.isOctopus) {
      const octoTaunts = [
        "The call of Cthulhu echoes.",
        "The abyss is awake.... Wakey wakey!!!"
      ];
      taunt = octoTaunts[Math.floor(Math.random() * octoTaunts.length)];
      heightOffset = 15.0;
    } else {
      const turtleTaunts = [
        "You're gonna feel my wrath, shell-face!",
        "Snap him in half!",
        "The beach belongs to us!"
      ];
      taunt = turtleTaunts[Math.floor(Math.random() * turtleTaunts.length)];
      heightOffset = 4.5;
    }

    this.dialogue.speak(speaker.model, taunt, 'monster', 3.0, heightOffset);
  }

  _killEnemy(enemy) {
    enemy.alive = false;
    enemy.state = TURTLE_STATE.DYING;
    enemy._deathTimer = 0;
    enemy._deathDuration = (enemy.isCthulhu ? 6.0 : (enemy.isOctopus ? 4.0 : 0.6));
    this.totalKills++;
    this.enemiesAliveInWave--;
    if (enemy.isCthulhu) {
      this._cthulhuAlive = false;
      // Cinematic death SFX with the same abyssal echo as the rise.
      if (this.audio && this.audio.playCthuluDies) {
        this.audio.playCthuluDies();
      }
      // Hide the cinematic boss bar
      const bossBarEl = document.getElementById('cthulhu-bossbar');
      if (bossBarEl) bossBarEl.classList.remove('visible');
    }

    // Octopus specific death dialogue
    if (enemy.isOctopus && this.dialogue) {
      this.dialogue.monsterCooldown = 0; // Force play
      this.dialogue.speak(enemy.model, "Ahh, The abyss… remembers you.", 'monster', 4.0, 15.0);
    }

    // --- Upgrade 2.0: Drop System ---
    this._spawnDrops(enemy);

    // Update kills HUD
    const killEl = document.getElementById('kill-count');
    if (killEl) killEl.textContent = this.totalKills;

    // Death sound
    if (this.audio && this.audio.initialized) {
      this.audio.playEnemyDeathSound(enemy.isBoss);
    }
  }

  _spawnDrops(enemy) {
    const isBoss = enemy.isBoss;
    const isBigBoss = enemy.isBigBoss; 
    const isOctopus = enemy.isOctopus;
    const isTurtle = enemy.type === 'turtle' || (!isBoss && !isOctopus);
    const pos = enemy.position;
    // Reuse a single scratch vector for offset math instead of allocating
    // a new THREE.Vector3 per drop. _spawnDrop does orb.position.copy(...)
    // so it doesn't retain the reference — safe to recycle.
    const tmp = _DROP_SCRATCH;
    const rndOffset = (spread) => {
      tmp.set(
        pos.x + (Math.random() - 0.5) * spread,
        pos.y,
        pos.z + (Math.random() - 0.5) * spread
      );
      return tmp;
    };

    // Bosses drop guaranteed large coin chest
    if (isBoss) {
      const dropCount = isBigBoss ? 15 : 8;
      for (let i = 0; i < dropCount; i++) {
        this._spawnDrop(rndOffset(8), 'coin', 3 + Math.floor(Math.random() * 3));
      }
      this._spawnDrop(pos, 'health', 150 + Math.floor(Math.random() * 100));
      return;
    }

    // Elites drop multiple coins
    if (enemy.isElite) {
      for (let i = 0; i < 4; i++) {
        this._spawnDrop(rndOffset(5), 'coin', 2 + Math.floor(Math.random() * 3));
      }
      if (Math.random() < 0.5) {
        this._spawnDrop(pos, 'health', 50 + Math.floor(Math.random() * 50));
      }
      return;
    }

    // Octopus (Medium drop)
    if (isOctopus) {
      for (let i = 0; i < 2; i++) {
        this._spawnDrop(rndOffset(4), 'coin', 1 + Math.floor(Math.random() * 2));
      }
      if (Math.random() < 0.2) {
        this._spawnDrop(pos, 'health', 30 + Math.floor(Math.random() * 20));
      }
      return;
    }

    // Normal Turtle (Luck-based drops)
    const roll = Math.random();
    if (roll < 0.02) { // 2% Jackpot
      for (let i = 0; i < 4; i++) {
        this._spawnDrop(rndOffset(4), 'coin', 2 + Math.floor(Math.random() * 3));
      }
    } else if (roll < 0.17) { // 15% Cluster
      for (let i = 0; i < 2; i++) {
        this._spawnDrop(rndOffset(3), 'coin', 1 + Math.floor(Math.random() * 2));
      }
    } else if (roll < 0.77) { // 60% Single Coin
      this._spawnDrop(rndOffset(2), 'coin', 1);
    }

    if (Math.random() < 0.10) { // 10% chance for health
      this._spawnDrop(pos, 'health', 15 + Math.floor(Math.random() * 10));
    }
  }

  _spawnDrop(position, dropType, value = 1) {
    const geo = new THREE.IcosahedronGeometry(0.5, 0);
    let color, emissive;
    if (dropType === 'health') {
      color = 0x44ff66;
      emissive = 0x00ff44;
    } else {
      color = 0xffdd44;
      emissive = 0xffaa00;
    }
    const mat = new THREE.MeshStandardMaterial({
      color, emissive,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8
    });
    const orb = new THREE.Mesh(geo, mat);
    orb.position.copy(position);
    orb.position.y += 1.5;
    orb.castShadow = true;
    this.scene.add(orb);

    // Glow ring
    const glowGeo = new THREE.RingGeometry(0.6, 0.9, 12);
    const glowMat = new THREE.MeshBasicMaterial({
      color: dropType === 'health' ? 0x44ff66 : 0xffdd44,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.rotation.x = -Math.PI / 2;
    orb.add(glow);

    this.collectibles.push({
      mesh: orb,
      baseY: position.y + 1.5,
      collected: false,
      dropType, // 'coin' or 'health'
      value
    });
  }

  /**
   * Main update — handles all enemy AI, collectibles, wave progression
   */
  update(dt, time, crabPosition, cameraRef, burrowManager, isPlaying, enemyProjectiles) {
    // --- DIALOGUE SYSTEM UPDATE ---
    if (this.dialogue) {
      // Hold the queue while a Cthulhu cinematic SFX (rise/death echo) is
      // playing — otherwise we'd shift items off only to have speak() reject them.
      const cthuluLocked = this.audio && (this.audio._cthuluRisesActive ||
                                          this.audio._cthuluDiesActive);

      if (!cthuluLocked && !this.dialogue.isMonsterSpeaking()) {
        if (this.spawnDialogueQueue.length > 0) {
          // Play the next queued spawn dialogue
          const next = this.spawnDialogueQueue.shift();
          if (next.entity && next.entity.alive) {
            this.dialogue.speak(next.entity.model, next.text, 'monster', 4.0, next.heightOffset);
          }
        } else {
          // Global Random Taunt (only when queue is empty)
          if (this._globalTauntTimer !== undefined) {
            this._globalTauntTimer -= dt;
            if (this._globalTauntTimer <= 0) {
              this._triggerRandomTaunt();
              this._globalTauntTimer = 5.0 + Math.random() * 5.0; // Reset for next time
            }
          }
        }
      }
    }

    // ─── WAVE SPAWNING ─────────────────────────────────────────
    this.waveJustCompleted = false;
    if (!this.waveActive) {
      this._waveTimer -= dt;
      if (this._waveTimer <= 0) {
        this.startWave();
      }
    } else {
      // Calculate current active threat
      let currentActiveThreat = 0;
      for (const e of this.enemies) {
        if (e.state !== TURTLE_STATE.DEAD && e.state !== TURTLE_STATE.DYING) {
          if (e.isBoss) currentActiveThreat += 10;
          else if (e.isOctopus) currentActiveThreat += 3;
          else currentActiveThreat += 1;
        }
      }

      // Tick down the Cthulhu rise grace timer. While > 0, no trash mobs
      // spawn — the boss's cinematic entrance gets the spotlight.
      if (this._cthulhuRiseGrace > 0) {
        this._cthulhuRiseGrace = Math.max(0, this._cthulhuRiseGrace - dt);
      }
      const cthulhuRiseLock = this._cthulhuRiseGrace > 0;

      if (this.waveBudget > 0 && !cthulhuRiseLock) {
        this.waveSpawnTimer += dt;
        const staggerDelay = 0.5 + Math.random() * 0.5;
        const maxActiveThreat = Math.min(20, 3 + this.currentWave * 2);

        if (this.waveSpawnTimer > staggerDelay && currentActiveThreat < maxActiveThreat) {
          this.waveSpawnTimer = 0;
          let spawned = false;
          
          // Try Boss (cost 10)
          if (this.currentWave >= 4 && this._bossModelLoaded && this.waveBudget >= 10 && currentActiveThreat + 10 <= maxActiveThreat && this._getAliveCount('boss') < SPAWN_MAX.boss && this.waveSpecialSpawned.boss < this.maxBossPerWave) {
            // Boss spawn chance or forced if budget only has boss money
            if (Math.random() < 0.2 || this.waveBudget <= 15) {
              this.isBigBossWave = (this.currentWave % 5 === 0);
              this._spawnBoss();
              this.waveSpecialSpawned.boss++;
              this.waveBudget -= 10;
              spawned = true;
            }
          }
          
          // Try Octopus (cost 3)
          if (!spawned && this.currentWave >= 2 && this._octopusModelLoaded && this.waveBudget >= 3 && currentActiveThreat + 3 <= maxActiveThreat && this._getAliveCount('octopus') < SPAWN_MAX.octopus && this.waveSpecialSpawned.octopus < this.maxOctopusPerWave) {
            if (Math.random() < 0.25 || this.waveBudget === 3) {
              this._spawnOctopus();
              this.waveSpecialSpawned.octopus++;
              this.waveBudget -= 3;
              spawned = true;
            }
          }
          
          // Try Turtle (cost 1)
          if (!spawned && this.waveBudget >= 1 && currentActiveThreat + 1 <= maxActiveThreat && this._getAliveCount('turtle') < SPAWN_MAX.turtle) {
            this._spawnTurtle();
            this.waveBudget -= 1;
          }
        }
      }
      
      // Continuous trash-mob refill during Cthulhu fights — every time the
      // current batch is fully cleared, send another 10-budget worth.
      if (this._cthulhuAlive && this.waveBudget <= 0 && currentActiveThreat === 0) {
        this.waveBudget = 10;
        this.waveSpawnTimer = 0;
        // Reset spawn caps so each wave of summoned trash is its own group
        this.waveSpecialSpawned.octopus = 0;
        this.waveSpecialSpawned.boss = 0;
      }

      // Check wave complete — but never finish a Cthulhu wave while he's alive
      if (this.waveBudget <= 0 && currentActiveThreat === 0 && !this._cthulhuAlive) {
        this.waveActive = false;
        this._waveTimer = this._waveDelay;
        this.waveJustCompleted = true;
        console.log(`Wave ${this.currentWave} complete!`);
      }
    }

    let damageToPlayer = 0;

    // ─── ENEMY AI ──────────────────────────────────────────────
    for (const enemy of this.enemies) {
      if (enemy.state === TURTLE_STATE.DEAD) continue;

      // Animation
      if (enemy.mixer) enemy.mixer.update(dt);

      // Handle knockback velocity
      if (enemy._knockbackVelocity && enemy._knockbackVelocity.lengthSq() > 0.01) {
        enemy.position.addScaledVector(enemy._knockbackVelocity, dt * 10.0);
        enemy._knockbackVelocity.multiplyScalar(0.8); // strong friction
        enemy.position.y = this.world.getTerrainHeight(enemy.position.x, enemy.position.z) + (enemy.yOffset || 0);
      }

      // Handle stagger
      if (enemy._staggerTimer > 0) {
        enemy._staggerTimer -= dt;
        if (enemy.walkAction) enemy.walkAction.timeScale = 0.2; // slow motion animation
        if (enemy.healthBarGroup && cameraRef) enemy.healthBarGroup.lookAt(cameraRef.position);
        continue; // Skip AI (movement, attacking) while staggered
      }

      // Health bar always faces camera
      if (enemy.healthBarGroup && cameraRef) {
        enemy.healthBarGroup.lookAt(cameraRef.position);
      }

      // Red flash effect
      if (enemy._flashTimer > 0) {
        enemy._flashTimer -= dt;
        const flashIntensity = enemy._flashTimer / 0.15;
        enemy.model.traverse((child) => {
          if (child.isMesh && child.material && child.material.emissive) {
            child.material.emissive.setRGB(flashIntensity, 0, 0);
          }
        });
        // Mark that we need to reset
        enemy._needsFlashReset = true;
      } else if (enemy._needsFlashReset) {
        // Reset emissive only once when flash ends
        enemy._needsFlashReset = false;
        enemy.model.traverse((child) => {
          if (child.isMesh && child.material && child.material.emissive) {
            if (child.userData.originalEmissive) {
              child.material.emissive.copy(child.userData.originalEmissive);
            } else {
              child.material.emissive.setRGB(0, 0, 0);
            }
          }
        });
      }

      let targetPos = crabPosition;
      let attackingBurrow = false;
      let targetEntity = null; // Can be a minion object

      if (enemy.targetEntity === 'burrow' && burrowManager && burrowManager.health > 0) {
        targetPos = burrowManager.position;
        attackingBurrow = true;
      }

      // Check if a minion is closer
      if (burrowManager && burrowManager.minions) {
        let currentDist = enemy.position.distanceTo(targetPos);
        for (const m of burrowManager.minions) {
          if (m.health <= 0) continue;
          const distToMinion = enemy.position.distanceTo(m.model.position);
          if (distToMinion < currentDist) {
            currentDist = distToMinion;
            targetPos = m.model.position;
            targetEntity = m;
            attackingBurrow = false;
          }
        }
      }

      const distToTarget = enemy.position.distanceTo(targetPos);

      switch (enemy.state) {
        case TURTLE_STATE.SPAWNING:
          enemy._spawnTimer += dt;
          // Cthulhu: 5-second slow emerge from the deep with eased Y
          if (enemy.isCthulhu) {
            const t = Math.min(1, enemy._spawnTimer / (enemy._emergeDuration || 5.0));
            // Ease-out cubic for a heavy cinematic rise
            const eased = 1 - Math.pow(1 - t, 3);
            const startY = enemy._emergeStartY ?? -45;
            const finalY = enemy._emergeFinalY ?? -2;
            enemy.position.y = startY + (finalY - startY) * eased;
            // Slow head-turn during emerge
            if (enemy.walkAction) enemy.walkAction.timeScale = 0.35;
            if (t >= 1) {
              enemy.state = TURTLE_STATE.WALKING;
              enemy._cooldownTimer = 0.4; // first poison shortly after fully out
            }
            break;
          }
          // Default rise from water over 1 second
          if (enemy._spawnTimer > 1.0) {
            enemy.state = TURTLE_STATE.WALKING;
          }
          break;

        case TURTLE_STATE.WALKING:
          // ── CTHULHU MEGA-BOSS ──────────────────────────────────
          if (enemy.isCthulhu) {
            // Subtle bobbing in the water so it feels alive
            enemy._bobTimer += dt;
            enemy.position.y = (enemy._emergeFinalY ?? -2) + Math.sin(enemy._bobTimer * 0.7) * 1.4;
            if (enemy.walkAction) enemy.walkAction.timeScale = 0.6;

            // Face the crab roughly
            const dxC = targetPos.x - enemy.position.x;
            const dzC = targetPos.z - enemy.position.z;
            if (Math.abs(dxC) > 0.1 || Math.abs(dzC) > 0.1) {
              const wantAngle = Math.atan2(dxC, dzC);
              let cur = enemy.model.rotation.y;
              let diff = wantAngle - cur;
              while (diff > Math.PI) diff -= Math.PI * 2;
              while (diff < -Math.PI) diff += Math.PI * 2;
              enemy.model.rotation.y = cur + diff * Math.min(1, dt * 0.8);
            }

            // ── Poison-bomb: only attack. One per second, puddle lasts 5s.
            enemy._cooldownTimer -= dt;
            if (enemy._cooldownTimer <= 0) {
              enemy._cooldownTimer = enemy._attackCooldown; // 1.0s
              enemy.throwCount++;
              if (enemyProjectiles && enemyProjectiles.throwBlob) {
                const startPos = enemy.position.clone();
                startPos.y += 18.0; // throw from above the head
                const throwTarget = targetPos.clone();
                // Cthulhu poison: 2× impact, 2× tick, but puddle lasts only 5s
                enemyProjectiles.throwBlob(
                  startPos, throwTarget,
                  enemy.attackDamage * 2.0,
                  enemy.tickDamage * 2.0,
                  5.0 // puddleDuration
                );
              }
              // (No dialogue — Cthulhu speaks ONLY through cthulu-rises /
              //  cthulu-dies SFX. "Swallow my darkness!" is an octopus line.)
            }
            break;
          }

          if (enemy.isOctopus) {
            enemy._cooldownTimer -= dt;

            const dirX = targetPos.x - enemy.position.x;
            const dirZ = targetPos.z - enemy.position.z;
            const dirLen = Math.sqrt(dirX * dirX + dirZ * dirZ);

            // Face player
            if (dirLen > 0.1) {
              enemy.model.rotation.y = Math.atan2(dirX, dirZ);
            }

            if (enemy.position.x > 25) {
              // In water: move fast toward land
              const nx = dirX / dirLen;
              const nz = dirZ / dirLen;
              const actualNx = Math.min(-0.5, nx); // Force left towards shore

              enemy.position.x += actualNx * enemy.speed * 2.0 * dt;
              enemy.position.z += nz * enemy.speed * 2.0 * dt;
              this._enforceBurrowCollision(enemy);
              enemy.position.y = this.world.getTerrainHeight(enemy.position.x, enemy.position.z) + (enemy.yOffset || 0);
              if (enemy.walkAction) enemy.walkAction.timeScale = 2.0;
            } else if (dirLen > 20.0) {
              // Far away: move slowly toward player
              const nx = dirX / dirLen;
              const nz = dirZ / dirLen;
              enemy.position.x += nx * enemy.speed * 0.5 * dt;
              enemy.position.z += nz * enemy.speed * 0.5 * dt;
              this._enforceBurrowCollision(enemy);
              enemy.position.y = this.world.getTerrainHeight(enemy.position.x, enemy.position.z) + (enemy.yOffset || 0);
              if (enemy.walkAction) enemy.walkAction.timeScale = 0.5;
            } else {
              // Close enough: stand still
              if (enemy.walkAction) enemy.walkAction.timeScale = 0.0;
            }

            // Throw poison on cooldown constantly, even while moving
            if (enemy._cooldownTimer <= 0) {
              enemy._cooldownTimer = enemy._attackCooldown; // reset to 5s
              enemy.throwCount++;

              if (Math.random() < 0.25 && this.dialogue && !this.dialogue.isMonsterSpeaking()) {
                this.dialogue.speak(enemy.model, "Swallow my darkness!", 'monster', 3.0, 15.0);
              }

              if (enemyProjectiles) {
                const throwTarget = targetPos.clone();
                const startPos = enemy.position.clone();
                startPos.y += 6.0; // throw from above head
                enemyProjectiles.throwBlob(startPos, throwTarget, enemy.attackDamage, enemy.tickDamage);
              }
            }
            break;
          }

          let currentSpeed = enemy.speed;
          let timeScale = 1.0;

          if (enemy.isBoss) {
            enemy._dashTimer -= dt;
            if (enemy._isDashing) {
              if (enemy._dashTimer <= 0) {
                enemy._isDashing = false;
                enemy._dashTimer = 7.0; // Cooldown for 7s
              } else {
                currentSpeed *= 3.0;
                timeScale = 3.0;
                
                // Deal damage on contact while dashing
                if (distToTarget < enemy.hitRadius + 2.0 && enemy._dashTimer < 2.8) {
                  if (targetEntity && targetEntity.health !== undefined) {
                    targetEntity.health -= enemy.attackDamage * dt * 2;
                  } else if (attackingBurrow) {
                    burrowManager.takeDamage(enemy.attackDamage * dt * 2);
                  } else {
                    damageToPlayer += enemy.attackDamage * dt * 2;
                    if (cameraRef) {
                      cameraRef.position.x += (Math.random() - 0.5) * 0.4;
                      cameraRef.position.y += (Math.random() - 0.5) * 0.4;
                    }
                  }
                }
              }
            } else {
              if (enemy._dashTimer <= 0) {
                enemy._isDashing = true;
                enemy._dashTimer = 3.0; // Dash for 3s
              }
            }
          } else if (enemy._canDash) {
            if (enemy._dashCooldown && enemy._dashCooldown > 0) {
              enemy._dashCooldown -= dt;
              currentSpeed = 0.1; // Stop moving
              timeScale = 0.1;
            } else {
              enemy._dashTimer -= dt;
              if (enemy._isDashing) {
                if (enemy._dashTimer <= 0) {
                  enemy._isDashing = false;
                  enemy._dashTimer = 4.0; // Cooldown
                  enemy._dashCooldown = 0.5; // Post-dash pause
                } else {
                  currentSpeed *= 6.0; // Fast straight dash
                  timeScale = 3.0;
                  
                  const nx = enemy._dashDir.x;
                  const nz = enemy._dashDir.z;
                  
                  enemy.position.x += nx * currentSpeed * dt;
                  enemy.position.z += nz * currentSpeed * dt;
                  this._enforceBurrowCollision(enemy);
                  enemy.position.y = this.world.getTerrainHeight(enemy.position.x, enemy.position.z) + (enemy.yOffset || 0);
                  
                  // Face dash direction
                  enemy.model.rotation.y = Math.atan2(nx, nz);
                  
                  // Deal damage on contact while dashing
                  if (distToTarget < enemy.hitRadius + 2.0 && enemy._dashTimer < 0.4) {
                    if (targetEntity && targetEntity.health !== undefined) {
                      targetEntity.health -= enemy.attackDamage * dt * 3;
                    } else if (attackingBurrow) {
                      burrowManager.takeDamage(enemy.attackDamage * dt * 3);
                    } else {
                      damageToPlayer += enemy.attackDamage * dt * 3;
                      if (cameraRef) {
                        cameraRef.position.x += (Math.random() - 0.5) * 0.6;
                        cameraRef.position.y += (Math.random() - 0.5) * 0.6;
                      }
                    }
                  }
                  
                  if (enemy.walkAction) {
                    enemy.walkAction.timeScale = timeScale;
                  }
                  continue; // Skip normal walking logic
                }
              } else {
                if (enemy._dashTimer <= 0 && distToTarget < 30.0) {
                  enemy._isDashing = true;
                  enemy._dashTimer = 0.5; // Dash duration (quick burst)
                  
                  const dirLen = Math.sqrt((targetPos.x - enemy.position.x) ** 2 + (targetPos.z - enemy.position.z) ** 2);
                  enemy._dashDir = new THREE.Vector3(
                    (targetPos.x - enemy.position.x) / dirLen,
                    0,
                    (targetPos.z - enemy.position.z) / dirLen
                  );
                }
              }
            }
          }

          // Walk toward crab (Turtle / Boss)
          if (enemy.walkAction) {
            enemy.walkAction.timeScale = timeScale;
          }

          const dirX = targetPos.x - enemy.position.x;
          const dirZ = targetPos.z - enemy.position.z;
          const dirLen = Math.sqrt(dirX * dirX + dirZ * dirZ);

          if (dirLen > 0.1) {
            const nx = dirX / dirLen;
            const nz = dirZ / dirLen;

            enemy.position.x += nx * currentSpeed * dt;
            enemy.position.z += nz * currentSpeed * dt;
            this._enforceBurrowCollision(enemy);
            enemy.position.y = this.world.getTerrainHeight(enemy.position.x, enemy.position.z) + (enemy.yOffset || 0);

            // Face crab
            enemy.model.rotation.y = Math.atan2(nx, nz);
          }

          // Enter attack range
          const effectiveAttackRange = attackingBurrow ? enemy.attackRange + 16.0 : enemy.attackRange;
          if (distToTarget < effectiveAttackRange) {
            enemy.state = TURTLE_STATE.ATTACKING;
            enemy._attackTimer = 0;
            enemy._lungeProgress = 0;
            enemy._lungeDir.set(dirX / dirLen, 0, dirZ / dirLen);

            if (this.audio && this.audio.initialized) {
              this.audio.playEnemyAttackSound(enemy.isBoss);
            }



            // Speed up walk for lunge animation
            if (enemy.walkAction) {
              enemy.walkAction.timeScale = 4.0;
            }
          }
          break;

        case TURTLE_STATE.ATTACKING:
          enemy._attackTimer += dt;


          enemy._lungeProgress = Math.min(1, enemy._attackTimer / 0.3);

          // Lunge forward rapidly
          const lungeSpeed = enemy.speed * 3;
          if (enemy._lungeProgress < 1) {
            enemy.position.x += enemy._lungeDir.x * lungeSpeed * dt;
            enemy.position.z += enemy._lungeDir.z * lungeSpeed * dt;
            this._enforceBurrowCollision(enemy);
            enemy.position.y = this.world.getTerrainHeight(enemy.position.x, enemy.position.z) + (enemy.yOffset || 0);

            // Flash red during lunge
            enemy.model.traverse((child) => {
              if (child.isMesh && child.material && child.material.emissive) {
                child.material.emissive.setRGB(0.8, 0.1, 0.0);
              }
            });
          }

          // Deal damage at peak of lunge
          if (enemy._attackTimer > 0.25 && enemy._attackTimer < 0.35) {
            const effectiveAttackRange = attackingBurrow ? enemy.attackRange + 12.0 : enemy.attackRange + 2;
            if (distToTarget < effectiveAttackRange) {
              if (targetEntity && targetEntity.health !== undefined) {
                targetEntity.health -= enemy.attackDamage;
              } else if (attackingBurrow) {
                burrowManager.takeDamage(enemy.attackDamage);
              } else {
                damageToPlayer += enemy.attackDamage;
                // Camera shake
                if (cameraRef) {
                  cameraRef.position.x += (Math.random() - 0.5) * 0.8;
                  cameraRef.position.y += (Math.random() - 0.5) * 0.5;
                }
              }
            }
            enemy.state = TURTLE_STATE.COOLDOWN;
            enemy._cooldownTimer = 0;
            enemy._needsFlashReset = true;
          }
          break;

        case TURTLE_STATE.COOLDOWN:
          enemy._cooldownTimer += dt;

          // Retreat slightly
          if (enemy._cooldownTimer < 0.4) {
            enemy.position.x -= enemy._lungeDir.x * enemy.speed * 0.5 * dt;
            enemy.position.z -= enemy._lungeDir.z * enemy.speed * 0.5 * dt;
            enemy.position.y = this.world.getTerrainHeight(enemy.position.x, enemy.position.z);
          }

          // Slow walk during cooldown
          if (enemy.walkAction) {
            enemy.walkAction.timeScale = 0.3;
          }

          if (enemy._cooldownTimer > enemy._attackCooldown) {
            enemy.state = TURTLE_STATE.WALKING;
          }
          break;

        case TURTLE_STATE.DYING:
          enemy._deathTimer += dt;

          const duration = enemy._deathDuration || 0.6;
          const deathProgress = enemy._deathTimer / duration;

          // Make materials transparent on first frame
          if (!enemy._materialsFaded) {
            enemy._materialsFaded = true;
            enemy.model.traverse((child) => {
              if (child.isMesh && child.material) {
                child.material.transparent = true;
                child.material.needsUpdate = true;
              }
            });
          }

          // Death effect: shrink + spin + true fade
          const baseScale = enemy.isBoss || enemy.isOctopus ? 1.0 : this.turtleModel.scale.x;

          enemy.model.scale.setScalar(
            baseScale * Math.max(0, 1 - deathProgress)
          );

          // Fade out opacity
          enemy.model.traverse((child) => {
            if (child.isMesh && child.material) {
              child.material.opacity = Math.max(0, 1 - deathProgress);
            }
          });

          // Spin (Octopus spins slower)
          const spinSpeed = enemy.isOctopus ? 2 : 12;
          enemy.model.rotation.y += dt * spinSpeed;
          enemy.model.position.y += dt * (enemy.isOctopus ? 0.5 : 2);

          if (enemy.walkAction) {
            enemy.walkAction.timeScale = enemy.isOctopus ? 2 : 8; // Frantic or slow death spin
          }

          if (enemy._deathTimer > duration) {
            enemy.state = TURTLE_STATE.DEAD;
            this.scene.remove(enemy.model);
          }
          break;
      }
    }

    // ─── ENEMY SEPARATION PASS (Optimized O(N²/2)) ─────────────
    // Separated out of the main AI loop so we only check each pair exactly once
    const numEnemies = this.enemies.length;
    for (let i = 0; i < numEnemies; i++) {
      const e1 = this.enemies[i];
      if (e1.state === TURTLE_STATE.DEAD || e1.state === TURTLE_STATE.DYING || e1.state === TURTLE_STATE.SPAWNING) continue;
      
      for (let j = i + 1; j < numEnemies; j++) {
        const e2 = this.enemies[j];
        if (e2.state === TURTLE_STATE.DEAD || e2.state === TURTLE_STATE.DYING || e2.state === TURTLE_STATE.SPAWNING) continue;
        
        const dx = e1.position.x - e2.position.x;
        const dz = e1.position.z - e2.position.z;
        const distSq = dx * dx + dz * dz;

        const r1 = e1.hitRadius || 1.5;
        const r2 = e2.hitRadius || 1.5;
        const minDist = (r1 + r2) * 0.85;

        if (distSq > 0 && distSq < minDist * minDist) {
          const dist = Math.sqrt(distSq);
          const overlap = minDist - dist;
          const nx = dx / dist;
          const nz = dz / dist;

          const w1 = e1.isCthulhu ? 100 : (e1.isBoss ? 10 : 1);
          const w2 = e2.isCthulhu ? 100 : (e2.isBoss ? 10 : 1);
          const totalW = w1 + w2;
          
          // Push both simultaneously proportional to their weight difference
          const push1 = overlap * (w2 / totalW) * 8.0 * dt;
          const push2 = overlap * (w1 / totalW) * 8.0 * dt;

          e1.position.x += nx * push1;
          e1.position.z += nz * push1;
          e2.position.x -= nx * push2;
          e2.position.z -= nz * push2;

          // Re-enforce bounds
          this._enforceBurrowCollision(e1);
          e1.position.y = this.world.getTerrainHeight(e1.position.x, e1.position.z) + (e1.yOffset || 0);
          
          this._enforceBurrowCollision(e2);
          e2.position.y = this.world.getTerrainHeight(e2.position.x, e2.position.z) + (e2.yOffset || 0);
        }
      }
    }

    // ─── COLLECTIBLES ──────────────────────────────────────────
    let coinsCollected = 0;
    let healthCollected = 0;
    for (const c of this.collectibles) {
      if (c.collected) continue;

      const dist = c.mesh.position.distanceTo(crabPosition);

      // Auto-magnetize towards player if within 15 units
      if (dist < 15) {
        const dir = new THREE.Vector3().subVectors(crabPosition, c.mesh.position);
        dir.y += 1.0; // Aim slightly above crab's center
        dir.normalize();
        c.mesh.position.addScaledVector(dir, dt * 25.0); // Fly towards crab fast
        c.baseY = c.mesh.position.y; // Disable bobbing while magnetizing
      } else {
        // Bob + spin naturally
        c.mesh.position.y = c.baseY + Math.sin(time * 3) * 0.5;
        c.mesh.rotation.y = time * 2;
      }

      // Check pickup
      if (dist < 4) {
        c.collected = true;
        this.scene.remove(c.mesh);

        if (c.dropType === 'health') {
          healthCollected += c.value;
        } else {
          coinsCollected += c.value;
        }

        if (this.audio && this.audio.initialized) {
          this.audio.playUpgradeSound();
        }
      }
    }

    // Cleanup dead enemies and collected orbs periodically
    if (this.enemies.length > 50) {
      this.enemies = this.enemies.filter(e => e.state !== TURTLE_STATE.DEAD);
    }
    if (this.collectibles.length > 50) {
      this.collectibles = this.collectibles.filter(c => !c.collected);
    }

    return { damageToPlayer, coinsCollected, healthCollected, waveJustCompleted: this.waveJustCompleted };
  }
}
