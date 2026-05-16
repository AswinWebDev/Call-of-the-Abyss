/**
 * Crab.js — Player character with direct movement + terrain following
 * Uses manual height sampling (reliable) instead of physics heightfield.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const STATE = {
  IDLE: 'idle',
  WALK: 'walk',
  RUN: 'run',
  ATTACK: 'attack'
};

export class Crab {
  constructor(scene, world, input, cameraController) {
    this.scene = scene;
    this.world = world;   // World reference for terrain height + colliders
    this.input = input;
    this.cameraController = cameraController;

    this.model = null;
    this.mixer = null;
    this.animations = {};
    this.currentState = STATE.IDLE;
    this._singleAnimMode = false;
    this._targetTimeScale = 0.15;
    this.loaded = false;

    // Movement
    this.walkSpeed = 25;
    this.runSpeed = 45;
    this.rotationSmoothing = 10.0;
    this.targetRotationY = Math.PI; // Face ocean initially

    // Position (direct — no physics body)
    this.position = new THREE.Vector3(0, 2.5, 40);
    this.velocity = new THREE.Vector3(0, 0, 0);

    // Jump (vertical hop — Space). gravity is shared across levels;
    // jumpForce scales with the jumpPower utility level.
    this.verticalVelocity = 0;
    this.isAirborne = false;
    this.jumpForce = 25;           // base initial upward velocity (Lv.1)
    this.gravity = 55;             // m/s² downward — higher = faster landing

    // Ammo
    this.maxAmmo = 100;
    this.currentAmmo = 100;
    
    // Abilities
    this.sandBurstCooldown = 0;
    this.sandBurstCooldownMax = 15.0; // Level 1 default
    this._initSandBurstParticles();
    this.isInWater = false;

    // Health
    this.maxHealth = 100;
    this.health = 100;
    this._damageFlashTimer = 0;

    // Water droplets overlay state — driven per frame by Crab.update().
    // Opacity ramps up slowly while in water (droplets accumulate) and
    // ramps down fast on exit (max ~2s linger from full).
    this._dropletOpacity = 0;

    // Death state
    this.isDead = false;
    this.deathTimer = 0;          // counts down from 7 once dead
    this._deathTriggered = false; // ensures death sequence runs only once

    // Resurrection rage mode (one-time)
    this.hasResurrection = true;
    this.isRaging = false;
    this.rageTimer = 0;
    this.rageDuration = 30.0;
    this._ragePhase = null; // 'ascend', 'transform', 'descend', 'active'
    this._ragePhaseTimer = 0;
    this._rageBeamLight = null;
    this._originalScale = 4.0;
    this._originalMaterials = []; // cache original colors

    // --- Upgrade 3.0 State ---
    this.coins = 0;
    this.totalCoinsCollected = 0; // lifetime stat for death window
    this.coinMultiplier = 1.0;
    this.weaponType = 'pistol';
    this.weaponLevels = {
      pistol: 1,
      shotgun: 1,
      charger: 1
    };
    
    // Utilities
    this.utilityLevels = {
      maxHealth: 1,
      waterCapacity: 1,
      burrowStrength: 1,
      minionCapacity: 1,
      minionLevel: 1,
      sandBurst: 1,
      jumpPower: 1
    };

    this._initSandBurstParticles();
    this._load();
  }

  _initSandBurstParticles() {
    this.sandParticleCount = 1500;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(this.sandParticleCount * 3);
    const vel = [];
    
    // Initialize offscreen
    for (let i = 0; i < this.sandParticleCount * 3; i++) pos[i] = 9999;
    for (let i = 0; i < this.sandParticleCount; i++) vel.push(new THREE.Vector3());
    
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    
    // Procedural sand particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 16; canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(8,8,0, 8,8,8);
    gradient.addColorStop(0, 'rgba(255, 230, 150, 1)');
    gradient.addColorStop(1, 'rgba(255, 230, 150, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,16,16);
    const texture = new THREE.CanvasTexture(canvas);
    
    const mat = new THREE.PointsMaterial({
      color: 0xEEDD88,
      size: 0.8,
      map: texture,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.NormalBlending
    });
    
    this.sandParticleSystem = new THREE.Points(geo, mat);
    this.sandParticleSystem.frustumCulled = false;
    this.scene.add(this.sandParticleSystem);
    this.sandParticleVelocities = vel;
    this.sandBurstActive = false;
    this.sandBurstTimer = 0;

    // Add Shader Ripple Shockwave — sized to match the doubled-AoE radius
    const swGeo = new THREE.RingGeometry(0.1, 30, 96, 96);
    
    this._sandShockwaveUniforms = {
      uTime: { value: 0 },
      uSpeed: { value: 50.0 },      // Doubled to sweep the larger ring in the same duration
      uFrequency: { value: 1.5 },
      uAmplitude: { value: 4.0 },
      uDecay: { value: 0.15 },      // Slower falloff so the wave is visible at the new outer edge
      uThickness: { value: 0.4 },
      uDuration: { value: 1.5 }
    };
    
    const swMat = new THREE.ShaderMaterial({
      uniforms: this._sandShockwaveUniforms,
      vertexShader: `
        uniform float uTime;
        uniform float uSpeed;
        uniform float uFrequency;
        uniform float uAmplitude;
        uniform float uDecay;
        uniform float uThickness;
        
        varying float vElevation;
        varying float vDist;
        
        void main() {
          float d = length(position.xy);
          vDist = d / 30.0; // 0 to 1 normalized radius (matches doubled ring outer)
          
          float currentRadius = uTime * uSpeed;
          
          float mask = exp(-pow((d - currentRadius) * uThickness, 2.0));
          float wave = sin((d - currentRadius) * uFrequency);
          float amp = uAmplitude / (1.0 + d * uDecay);
          
          float elevation = wave * mask * amp;
          elevation *= smoothstep(0.0, 1.5, d); // fade center so it doesn't clip crab
          
          vElevation = elevation;
          
          vec3 newPosition = position;
          newPosition.z += elevation; 
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uDuration;

        varying float vElevation;
        varying float vDist;

        void main() {
          vec3 baseColor = vec3(0.93, 0.86, 0.53);
          vec3 peakColor = vec3(1.0, 0.95, 0.7);

          vec3 color = mix(baseColor, peakColor, clamp(vElevation * 0.5, 0.0, 1.0));

          float timeFade = max(0.0, 1.0 - (uTime / uDuration));

          float edgeFade = 1.0 - smoothstep(0.85, 1.0, vDist);

          float alpha = (0.05 + abs(vElevation) * 0.8) * timeFade * edgeFade;

          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.NormalBlending,
      wireframe: false
    });
    
    this._sandShockwave = new THREE.Mesh(swGeo, swMat);
    this._sandShockwave.rotation.x = -Math.PI / 2; // Flat on the ground
    this._sandShockwave.visible = false;
    this.scene.add(this._sandShockwave);
  }

  _load() {
    const loader = new GLTFLoader();
    loader.load('./models/sweet_crab_sketchfabweekly.glb',
      (gltf) => this._onModelLoaded(gltf),
      undefined,
      (err) => {
        console.warn('Sweet crab failed, falling back to animated_crab.glb', err);
        loader.load('./models/animated_crab.glb',
          (gltf) => this._onModelLoaded(gltf),
          undefined,
          (err2) => console.error('Failed to load any crab model', err2)
        );
      }
    );
  }

  _onModelLoaded(gltf) {
    this.model = gltf.scene;

    // Auto-scale to ~4 units wide
    const box = new THREE.Box3().setFromObject(this.model);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 4.0 / maxDim;
    this.model.scale.setScalar(scale);
    this._originalScale = scale; // Save actual scale for rage mode

    // Recalculate bounding box after scale
    box.setFromObject(this.model);
    this._modelBottomOffset = box.min.y * scale; // How far below origin the feet are

    this.model.position.copy(this.position);

    // Shadows + material polish
    this.model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material && child.material.isMeshStandardMaterial) {
          child.material.roughness = Math.min(child.material.roughness, 0.7);
          child.material.envMapIntensity = 0.5;
        }
      }
    });

    this.scene.add(this.model);

    // Setup animations
    if (gltf.animations && gltf.animations.length > 0) {
      this.mixer = new THREE.AnimationMixer(this.model);

      console.log(`Crab: ${gltf.animations.length} animation(s):`);
      gltf.animations.forEach((clip, i) =>
        console.log(`  [${i}] "${clip.name}" — ${clip.duration.toFixed(2)}s`)
      );

      // Map by name
      for (const clip of gltf.animations) {
        const n = clip.name.toLowerCase();
        const a = this.mixer.clipAction(clip);
        if (n.includes('idle') || n.includes('breath')) this.animations.idle = a;
        else if (n.includes('walk') || n.includes('crawl')) this.animations.walk = a;
        else if (n.includes('run') || n.includes('sprint')) this.animations.run = a;
        else if (n.includes('attack') || n.includes('shoot')) this.animations.attack = a;
      }

      // Single animation — reuse at different speeds
      if (gltf.animations.length === 1) {
        const action = this.mixer.clipAction(gltf.animations[0]);
        this.animations.idle = action;
        this.animations.walk = action;
        this.animations.run = action;
        this._singleAnimMode = true;
      }

      // Start playing
      const startAction = this.animations.idle || this.animations.walk;
      if (startAction) {
        startAction.play();
        startAction.timeScale = 0.15;
      }
    }

    this.loaded = true;
    console.log('✓ Crab loaded and ready');
    this._hasSpokenIntro = false;
  }

  _transitionTo(newState) {
    if (this.currentState === newState) return;
    this.currentState = newState;

    if (this._singleAnimMode) {
      // Same action, just change target speed
      const speeds = {
        [STATE.IDLE]: 0.12,
        [STATE.WALK]: 3.5,   // Visible scurrying
        [STATE.RUN]: 7.0,    // Frantic scramble matching sprint speed
        [STATE.ATTACK]: 0.8
      };
      this._targetTimeScale = speeds[newState] || 1.0;
      return;
    }

    // Multi-anim crossfade (future use)
    const action = this.animations[newState];
    if (action) {
      // Fade out all others
      for (const [key, a] of Object.entries(this.animations)) {
        if (a && a !== action) a.fadeOut(0.3);
      }
      action.reset().fadeIn(0.3).play();
    }
  }

  update(dt, time, isPlaying = true) {
    if (!this.loaded || !this.model) return;

    // Tick the death countdown so main.js can drive UI off it
    if (this.isDead && this.deathTimer > 0) {
      this.deathTimer = Math.max(0, this.deathTimer - dt);
    }

    // ─── RAGE MODE PHASES ──────────────────────────────────
    if (this._ragePhase) {
      // Only tick rage phases while game is active (pause in menu/upgrades)
      if (isPlaying) {
        this._ragePhaseTimer -= dt;
        if (this._ragePhase === 'ascend') {
          // Float upward fast
          this.position.y += 10.0 * dt;
          if (this._ragePhaseTimer <= 0) {
            this._ragePhase = 'transform';
            this._ragePhaseTimer = 1.0;
            // Scale up (no color change — keep natural look)
            if (this.model) this.model.scale.setScalar(this._originalScale * 3.0);
          }
        } else if (this._ragePhase === 'transform') {
          // Hold at top, glowing
          if (this._ragePhaseTimer <= 0) {
            this._ragePhase = 'descend';
            this._ragePhaseTimer = 0.4;
            
            // Add a burst effect at transformation peak
            if (this._sandShockwave) {
              this._sandShockwave.position.copy(this.position);
              this._sandShockwave.position.y += 0.05;
              this._sandShockwaveUniforms.uTime.value = 0;
              this._sandShockwave.scale.setScalar(1.5);
              this._sandShockwave.visible = true;
              this.sandBurstActive = true;
              this.sandBurstTimer = 1.5;
            }
          }
        } else if (this._ragePhase === 'descend') {
          // Fall back to ground fast
          const groundY = this.world.getTerrainHeight(this.position.x, this.position.z);
          this.position.y -= 40.0 * dt;
          if (this.position.y <= groundY + 0.5 || this._ragePhaseTimer <= 0) {
            this.position.y = groundY;
            this._ragePhase = 'active';
            this.rageTimer = this.rageDuration;
            // Remove beam light
            if (this._rageBeamLight) {
              this.scene.remove(this._rageBeamLight);
              this._rageBeamLight = null;
            }
            // Sand burst + knockback on LANDING
            this._onRageLand?.();
          }
        } else if (this._ragePhase === 'active') {
          this.rageTimer -= dt;
          if (this.rageTimer <= 0) {
            this.deactivateRage();
          }
        }
      }
      // During non-active phases, skip normal movement
      if (this._ragePhase && this._ragePhase !== 'active') {
        if (this.model) this.model.position.copy(this.position);
        if (this.mixer) this.mixer.update(dt);
        return;
      }
    }

    // If not playing (e.g. in Main Menu) OR dead, freeze input
    const canControl = isPlaying && !this.isDead;
    const moveInput = canControl ? this.input.getMovementInput() : { x: 0, z: 0, magnitude: 0 };
    const isMoving = moveInput.magnitude > 0;
    const isSprinting = canControl && this.input.isSprinting && isMoving;

    // Animation state
    if (isMoving) {
      this._transitionTo(isSprinting ? STATE.RUN : STATE.WALK);
    } else {
      this._transitionTo(STATE.IDLE);
    }

    // ─── MOVEMENT ───────────────────────────────────────────
    if (isMoving) {
      const speed = isSprinting ? this.runSpeed : this.walkSpeed;
      const camYaw = this.cameraController.yaw;

      const sinY = Math.sin(camYaw);
      const cosY = Math.cos(camYaw);

      const worldDirX = moveInput.x * cosY - moveInput.z * sinY;
      const worldDirZ = moveInput.z * cosY + moveInput.x * sinY;

      this.velocity.x = worldDirX * speed;
      this.velocity.z = worldDirZ * speed;

      // Rotate to face movement
      this.targetRotationY = Math.atan2(worldDirX, worldDirZ);
    } else {
      // Decelerate
      this.velocity.x *= 0.85;
      this.velocity.z *= 0.85;
    }

    // Apply movement
    let nx = this.position.x + this.velocity.x * dt;
    let nz = this.position.z + this.velocity.z * dt;

    // ─── TERRAIN HEIGHT ─────────────────────────────────────
    const groundY = this.world.getTerrainHeight(nx, nz);

    // Slope physics — allow climbing further up the back cliff (similar to
    // the Z-axis side hills which let you walk all the way to the edge).
    // Threshold pushed from -125 to -145 so the player has 20 more units of
    // free climb before any pushback engages.
    const coastWobble = Math.sin(nz * 0.05) * 15.0;
    const normalizedX = nx + coastWobble;
    if (normalizedX < -145) {
      // Gradual pushback ramps up as the slope steepens.
      const slopeForce = Math.pow(Math.abs(normalizedX + 145) * 0.08, 2.0);
      if (slopeForce > 0.4) {
        nx += slopeForce * 0.35 * dt * 60;
      }
    }

    // ─── COLLISIONS ─────────────────────────────────────────
    const crabRadius = 3.0;
    for (const col of this.world.colliders) {
      // Skip height-limited colliders when crab is above them (jumping over)
      if (col.height && this.position.y > groundY + col.height) continue;
      const dist = Math.sqrt((nx - col.x) ** 2 + (nz - col.z) ** 2);
      if (dist < col.radius + crabRadius) {
        const angle = Math.atan2(nz - col.z, nx - col.x);
        nx = col.x + Math.cos(angle) * (col.radius + crabRadius);
        nz = col.z + Math.sin(angle) * (col.radius + crabRadius);
      }
    }

    // ─── WORLD BOUNDS ───────────────────────────────────────
    nx = Math.max(-160, Math.min(70, nx));    // Extended back-cliff bound: was -130
    nz = Math.max(-190, Math.min(190, nz));

    // Apply position
    this.position.x = nx;
    this.position.z = nz;

    // ─── JUMP / GRAVITY ─────────────────────────────────────
    // Trigger a jump only on a fresh Space press while grounded.
    if (canControl && !this.isAirborne && this.input.consumeJump()) {
      this.verticalVelocity = this.jumpForce;
      this.isAirborne = true;
    }

    const groundTargetY = groundY - 0.1;
    if (this.isAirborne) {
      // Apply gravity and integrate vertical motion
      this.verticalVelocity -= this.gravity * dt;
      this.position.y += this.verticalVelocity * dt;
      // Land
      if (this.position.y <= groundTargetY) {
        this.position.y = groundTargetY;
        this.verticalVelocity = 0;
        this.isAirborne = false;
      }
    } else {
      // Snap crab firmly to ground (no float)
      this.position.y += (groundTargetY - this.position.y) * Math.min(1, 15 * dt);
      // Very subtle bounce when moving (natural crab scurry, not floating)
      if (isMoving) {
        this.position.y += Math.abs(Math.sin(time * 22)) * 0.08;
      } else {
        this.position.y += Math.sin(time * 2.0) * 0.02;
      }
    }

    // Apply to model
    this.model.position.copy(this.position);

    // Smooth rotation
    let rotDiff = this.targetRotationY - this.model.rotation.y;
    while (rotDiff > Math.PI) rotDiff -= Math.PI * 2;
    while (rotDiff < -Math.PI) rotDiff += Math.PI * 2;
    this.model.rotation.y += rotDiff * Math.min(1, this.rotationSmoothing * dt);

    // ─── WATER/AMMO ─────────────────────────────────────────
    const wasInWater = this.isInWater;
    this.isInWater = groundY < 1.5 && nx > 25;

    // Fresh entry: only regenerate the droplet texture if the previous
    // pattern has fully faded. Otherwise re-using the existing one keeps
    // continuity ("if it already has droplets, no need another").
    if (this.isInWater && !wasInWater && this._dropletOpacity < 0.05) {
      this._generateDropletTexture();
    }

    // Per-frame opacity ramp:
    //   in water  → climb toward 1.0 at +0.30/s (≈3.3s to fully wet)
    //   out water → drop toward 0   at -0.50/s (max ~2s linger from full)
    const targetOpacity = this.isInWater ? 1.0 : 0.0;
    const rampRate = this.isInWater ? 0.30 : 0.50;
    if (this._dropletOpacity < targetOpacity) {
      this._dropletOpacity = Math.min(targetOpacity, this._dropletOpacity + rampRate * dt);
    } else if (this._dropletOpacity > targetOpacity) {
      this._dropletOpacity = Math.max(targetOpacity, this._dropletOpacity - rampRate * dt);
    }
    const dropOv = document.getElementById('water-droplets-overlay');
    if (dropOv) dropOv.style.opacity = this._dropletOpacity.toFixed(3);

    if (this.isInWater) {
      if (this.currentAmmo < this.maxAmmo) {
        this.currentAmmo = Math.min(this.maxAmmo, this.currentAmmo + 30 * dt);
        if (this.audio) this.audio.playReloadSound();
      }
    }

    // Smooth animation timeScale
    if (this._singleAnimMode && this.animations.idle) {
      const a = this.animations.idle;
      a.timeScale += (this._targetTimeScale - a.timeScale) * Math.min(1, 15 * dt);
    }
    
    // Sand Burst Ability Update
    if (this.sandBurstCooldown > 0) {
      this.sandBurstCooldown -= dt;
      if (this.sandBurstCooldown < 0) this.sandBurstCooldown = 0;
    }
    
    // Update Sand Burst circular cooldown ring (SVG circle, r=44 → C=276.46)
    const burstFill = document.getElementById('sandburst-fill');
    if (burstFill) {
      const C = 276.46;
      if (this.sandBurstCooldown <= 0) {
        burstFill.style.strokeDashoffset = '0'; // fully drawn = ready
        burstFill.style.stroke = '#FFD55A';
      } else {
        const ratio = 1.0 - (this.sandBurstCooldown / this.sandBurstCooldownMax);
        burstFill.style.strokeDashoffset = (C * (1 - ratio)).toFixed(2);
        // Dim while charging so "ready" reads clearly
        burstFill.style.stroke = '#7a6a3a';
      }
    }
    // Mobile BURST button: drive the conic cooldown sweep + ready/cooldown class.
    // --cd is in degrees: 0 = ready, 360 = just used.
    const burstBtnEl = document.getElementById('btn-burst');
    if (burstBtnEl) {
      if (this.sandBurstCooldown <= 0) {
        burstBtnEl.style.setProperty('--cd', '0');
        burstBtnEl.classList.add('ready');
        burstBtnEl.classList.remove('cooldown');
      } else {
        const remaining = this.sandBurstCooldown / this.sandBurstCooldownMax; // 1 → 0
        burstBtnEl.style.setProperty('--cd', (remaining * 360).toFixed(1));
        burstBtnEl.classList.add('cooldown');
        burstBtnEl.classList.remove('ready');
      }
    }
    
    // Update Sand Burst Visual Rings
    if (this.sandBurstActive) {
      this.sandBurstTimer -= dt;
      const posArr = this.sandParticleSystem.geometry.attributes.position.array;
      for (let i = 0; i < this.sandParticleCount; i++) {
        const v = this.sandParticleVelocities[i];
        
        // gravity
        v.y -= 45.0 * dt; 
        // air friction
        v.x *= 0.94;
        v.z *= 0.94;
        
        posArr[i*3] += v.x * dt;
        posArr[i*3+1] += v.y * dt;
        posArr[i*3+2] += v.z * dt;
        
        // floor collision
        if (posArr[i*3+1] < 0.1) {
           posArr[i*3+1] = 0.1;
           v.y *= -0.3; // bounce slightly
           v.x *= 0.8;
           v.z *= 0.8;
        }
      }
      this.sandParticleSystem.geometry.attributes.position.needsUpdate = true;
      this.sandParticleSystem.material.opacity = Math.max(0, this.sandBurstTimer / 1.5);
      
      // Update shockwave shader
      if (this._sandShockwave && this._sandShockwave.visible) {
        const t = 1.5 - this.sandBurstTimer; // elapsed time
        this._sandShockwaveUniforms.uTime.value = t;
        
        if (this.sandBurstTimer <= 0) {
          this._sandShockwave.visible = false;
        }
      }
      
      if (this.sandBurstTimer <= 0) {
        this.sandBurstActive = false;
        for (let i = 0; i < this.sandParticleCount * 3; i++) posArr[i] = 9999;
        this.sandParticleSystem.geometry.attributes.position.needsUpdate = true;
      }
    }

    // Update mixer
    if (this.mixer) this.mixer.update(dt);

    // ─── DAMAGE FLASH ───────────────────────────────────────
    if (this._damageFlashTimer > 0) {
      this._damageFlashTimer -= dt;
      const flashIntensity = this._damageFlashTimer / 0.2;
      // Cache the mesh materials once instead of traversing the whole model
      // every flash frame (12 frames per damage tick × every enemy hit).
      if (!this._flashMaterials) {
        this._flashMaterials = [];
        this.model.traverse((child) => {
          if (child.isMesh && child.material) {
            if (!child.material.emissive) child.material.emissive = new THREE.Color();
            this._flashMaterials.push(child.material);
          }
        });
      }
      for (let i = 0; i < this._flashMaterials.length; i++) {
        this._flashMaterials[i].emissive.setRGB(flashIntensity * 0.8, 0, 0);
      }
    } else if (this._flashMaterials && this._flashWasNonZero) {
      // Make sure we leave emissive at 0 cleanly when the flash ends
      for (let i = 0; i < this._flashMaterials.length; i++) {
        this._flashMaterials[i].emissive.setRGB(0, 0, 0);
      }
      this._flashWasNonZero = false;
    }
    this._flashWasNonZero = this._damageFlashTimer > 0;

    // ─── HUD ────────────────────────────────────────────────
    const ammoEl = document.getElementById('ammo-count');
    const fillEl = document.getElementById('ammo-fill');
    if (ammoEl) ammoEl.textContent = Math.round(this.currentAmmo);
    if (fillEl) {
      const ratio = this.currentAmmo / this.maxAmmo;
      fillEl.style.width = `${ratio * 100}%`;
      if (ratio < 0.3) {
        fillEl.style.background = '#ff4444';
      } else if (ratio < 0.6) {
        fillEl.style.background = '#ffaa00';
      } else {
        fillEl.style.background = 'linear-gradient(90deg, #00BFFF, #00FF88)';
      }
    }

    const healthFill = document.getElementById('health-fill');
    if (healthFill) healthFill.style.width = `${(this.health / this.maxHealth) * 100}%`;

    const healthNum = document.getElementById('health-count');
    if (healthNum) healthNum.textContent = Math.round(this.health);

    // ─── LOW-HEALTH VIGNETTE ────────────────────────────────
    // Below 30% HP starts to tint reddish-gray; below 10% it's strong.
    const lowHpEl = document.getElementById('low-health-overlay');
    if (lowHpEl) {
      const hpPct = this.health / this.maxHealth;
      let tint = 0;
      if (hpPct < 0.30) tint = (0.30 - hpPct) / 0.30;       // 0 → 1 over 30%→0%
      if (hpPct < 0.10) tint = Math.min(1, tint + 0.35);    // extra punch under 10%
      lowHpEl.style.opacity = tint.toFixed(3);
    }

    const tierEl = document.getElementById('gun-tier');
    if (tierEl) {
      const weaponNames = { pistol: 'Pistol', shotgun: 'Shotgun', charger: 'Charger' };
      const currentLevel = this.weaponLevels[this.weaponType] || 1;
      tierEl.textContent = `${weaponNames[this.weaponType] || 'Pistol'} Lv.${currentLevel}`;
    }

    // Devil Symbol Update (Aura under feet)
    if (this._devilSymbol) {
      this._devilSymbol.rotation.z += dt * 0.2; // Slowly rotate
      
      if (this._devilSymbolScale < 1.0) {
        this._devilSymbolScale = Math.min(1.0, this._devilSymbolScale + dt * 1.0);
        this._devilSymbol.scale.setScalar(this._devilSymbolScale);
        this._devilSymbol.material.opacity = this._devilSymbolScale;
      }
      // (Symbol remains stationary where the crab died as a summoning circle)
      
      // Fade out when rage ends and we are alive
      if (!this.isDead && !this.isRaging && this._devilSymbolScale >= 1.0) {
        this._devilSymbolFadeOut = true;
      }
      
      if (this._devilSymbolFadeOut) {
        this._devilSymbol.material.opacity -= dt * 2.0;
        if (this._devilSymbol.material.opacity <= 0) {
          this.scene.remove(this._devilSymbol);
          this._devilSymbol.material.map.dispose();
          this._devilSymbol.material.dispose();
          this._devilSymbol.geometry.dispose();
          this._devilSymbol = null;
          this._devilSymbolFadeOut = false;
        }
      }
    }

    // Camera
    this.cameraController.update(dt, this.position);
  }

  /**
   * Take damage from enemy attack
   */
  takeDamage(amount) {
    // Invulnerable during rage mode
    if (this.isRaging) return;
    this.health = Math.max(0, this.health - amount);
    this._damageFlashTimer = 0.2;

    // Screen red flash via CSS
    const overlay = document.getElementById('damage-overlay');
    if (overlay) {
      overlay.style.opacity = '0.4';
      setTimeout(() => { overlay.style.opacity = '0'; }, 200);
    }

    if (this.health <= 0) {
      // Trigger the death sequence exactly once
      if (!this._deathTriggered) {
        this._deathTriggered = true;
        if (this.hasResurrection) {
          // First death — will be intercepted by main.js for resurrection
          this.isDead = true;
          this.deathTimer = 7.0;
          this._showDevilSymbol(); // Spawn pentagram on the ground
          this._onDeath?.();
        } else {
          // Second death — permanent
          this.isDead = true;
          this.deathTimer = 7.0;
          this._onDeath?.();
        }
      }
    } else {
      // Small chance to complain when taking damage
      if (this.dialogue && Math.random() < 0.25) {
        // We only have limited voice lines generated by the user right now, 
        // so we reuse a dramatic one if we get low on health
        if (this.health < 40 && (!this._lastLowHealthVoice || performance.now() - this._lastLowHealthVoice > 15000)) {
          this._lastLowHealthVoice = performance.now();
          this.dialogue.heroCooldown = 0; // Override
          this.dialogue.speak(this.model, "Need more water... hold on.", 'hero', 3.0);
        }
      }
    }
  }

  /**
   * Spawn a glowing red pentagram aura under the crab for the Rage mode
   */
  _showDevilSymbol() {
    if (this._devilSymbol) return;

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, 512, 512);
    ctx.strokeStyle = '#ff2222';
    ctx.lineWidth = 14;
    ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 25;

    const cx = 256, cy = 256, r = 210;
    
    // Outer Circle
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    // Pentagram
    ctx.beginPath();
    for (let i = 0; i <= 5; i++) {
      const angle = (i * 4 * Math.PI / 5) - Math.PI / 2;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Inner markings (small circles)
    ctx.lineWidth = 6;
    for (let i = 0; i < 5; i++) {
      const angle = (i * 2 * Math.PI / 5) - Math.PI / 2;
      const x = cx + Math.cos(angle) * (r * 0.5);
      const y = cy + Math.sin(angle) * (r * 0.5);
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2);
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xff4444
    });

    // Make it significantly larger than the crab
    const geo = new THREE.PlaneGeometry(18, 18);
    this._devilSymbol = new THREE.Mesh(geo, mat);
    this._devilSymbol.rotation.x = -Math.PI / 2;
    
    const groundY = this.world.getTerrainHeight(this.position.x, this.position.z);
    this._devilSymbol.position.set(this.position.x, groundY + 0.1, this.position.z);
    
    this._devilSymbol.material.opacity = 0;
    this._devilSymbolScale = 0.2;
    this._devilSymbol.scale.setScalar(this._devilSymbolScale);

    this.scene.add(this._devilSymbol);
  }

  /**
   * Build a fresh random droplet pattern and apply it to the overlay's
   * background-image. Random count + random sizes keep each entry unique.
   */
  _generateDropletTexture() {
    const ov = document.getElementById('water-droplets-overlay');
    if (!ov) return;
    const c = document.createElement('canvas');
    c.width = 1920; c.height = 1080;
    const ctx = c.getContext('2d');
    // Random density per entry: 40 = sparse splash, 130 = soaked.
    const COUNT = 40 + Math.floor(Math.random() * 90);
    for (let i = 0; i < COUNT; i++) {
      const x = Math.random() * c.width;
      const y = Math.random() * c.height;
      const r = 4 + Math.random() * 22;

      const halo = ctx.createRadialGradient(x, y, 0, x, y, r);
      halo.addColorStop(0.00, 'rgba(220, 240, 255, 0.55)');
      halo.addColorStop(0.55, 'rgba(180, 220, 255, 0.22)');
      halo.addColorStop(1.00, 'rgba(100, 180, 255, 0.00)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();

      const hx = x - r * 0.30;
      const hy = y - r * 0.30;
      const hl = ctx.createRadialGradient(hx, hy, 0, hx, hy, r * 0.42);
      hl.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      hl.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = hl;
      ctx.beginPath();
      ctx.arc(hx, hy, r * 0.42, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(20, 60, 110, 0.25)';
      ctx.beginPath();
      ctx.arc(x + r * 0.05, y + r * 0.55, r * 0.55, 0.1, Math.PI * 0.95);
      ctx.fill();
    }
    ov.style.backgroundImage = `url(${c.toDataURL('image/png')})`;
  }

  /**
   * Reset all run-state to a fresh game (called on Retry).
   * Keeps the loaded model — only resets gameplay variables.
   */
  reset() {
    // Restore base capacities — upgrades had mutated maxHealth/maxAmmo upward
    this.maxHealth = 100;
    this.maxAmmo = 100;
    this.health = this.maxHealth;
    this.currentAmmo = this.maxAmmo;
    this.coins = 0;
    this.totalCoinsCollected = 0;
    this.isDead = false;
    this.deathTimer = 0;
    this._deathTriggered = false;
    this._damageFlashTimer = 0;
    this._lastLowHealthVoice = 0;
    this._lastLowWaterVoice = 0;
    this.weaponType = 'pistol';
    this.weaponLevels = { pistol: 1, shotgun: 1, charger: 1 };
    this.utilityLevels = {
      maxHealth: 1, waterCapacity: 1, burrowStrength: 1,
      minionCapacity: 1, minionLevel: 1, sandBurst: 1, jumpPower: 1
    };
    this.coinMultiplier = 1.0;
    this.sandBurstCooldown = 0;
    this.sandBurstActive = false;
    this.sandBurstTimer = 0;
    // Resurrection rage reset
    this.hasResurrection = true;
    this.isRaging = false;
    this.rageTimer = 0;
    this._ragePhase = null;
    this._ragePhaseTimer = 0;
    if (this._rageBeamLight) {
      this.scene.remove(this._rageBeamLight);
      this._rageBeamLight = null;
    }
    if (this.model) this.model.scale.setScalar(this._originalScale);
    this._clearRageTint();
    this.position.set(0, 2.5, 40);
    this.velocity.set(0, 0, 0);
    this.targetRotationY = Math.PI;
    this.verticalVelocity = 0;
    this.isAirborne = false;
    this.jumpForce = 25; // base — Jump upgrade re-applies on next purchase
    this._dropletOpacity = 0;
    const _dropOv = document.getElementById('water-droplets-overlay');
    if (_dropOv) _dropOv.style.opacity = '0';
    if (this.model) {
      this.model.position.copy(this.position);
      this.model.rotation.y = this.targetRotationY;
      // clear any lingering damage flash
      this.model.traverse((c) => {
        if (c.isMesh && c.material && c.material.emissive) c.material.emissive.setRGB(0, 0, 0);
      });
    }
    if (this._sandShockwave) this._sandShockwave.visible = false;
    if (this.sandParticleSystem) {
      const arr = this.sandParticleSystem.geometry.attributes.position.array;
      for (let i = 0; i < arr.length; i++) arr[i] = 9999;
      this.sandParticleSystem.geometry.attributes.position.needsUpdate = true;
    }

    // Force HUD elements that are written outside the per-frame update path
    // back to their fresh values immediately (otherwise stale text lingers).
    const coinEl = document.getElementById('coin-count');
    if (coinEl) coinEl.textContent = '0';
    const ammoEl = document.getElementById('ammo-count');
    if (ammoEl) ammoEl.textContent = String(Math.round(this.maxAmmo));
    const ammoFill = document.getElementById('ammo-fill');
    if (ammoFill) ammoFill.style.width = '100%';
    const healthFill = document.getElementById('health-fill');
    if (healthFill) healthFill.style.width = '100%';
    const healthNum = document.getElementById('health-count');
    if (healthNum) healthNum.textContent = String(Math.round(this.maxHealth));
    const burstFill = document.getElementById('sandburst-fill');
    if (burstFill) {
      // Reset the SVG cooldown ring to "ready" state
      burstFill.style.strokeDashoffset = '0';
      burstFill.style.stroke = '#FFD55A';
    }
    const burstBtnEl = document.getElementById('btn-burst');
    if (burstBtnEl) {
      burstBtnEl.style.setProperty('--cd', '0');
      burstBtnEl.classList.add('ready');
      burstBtnEl.classList.remove('cooldown');
    }
    const tierEl = document.getElementById('gun-tier');
    if (tierEl) tierEl.textContent = 'Pistol Lv.1';
  }

  /**
   * Add coins from drops (scaled by coinMultiplier)
   */
  addCoins(amount) {
    const gained = Math.round(amount * this.coinMultiplier);
    this.coins += gained;
    this.totalCoinsCollected += gained;
    const coinEl = document.getElementById('coin-count');
    if (coinEl) coinEl.textContent = this.coins;
  }

  // ─── RESURRECTION RAGE MODE ─────────────────────────────────────

  activateRage() {
    this.hasResurrection = false;
    this.isRaging = true;
    this.isDead = false;
    this._deathTriggered = false;
    this.health = this.maxHealth; // Full health during ascension

    // Cache original material colors
    this._originalMaterials = [];
    if (this.model) {
      this.model.traverse(c => {
        if (c.isMesh && c.material && c.material.color) {
          this._originalMaterials.push({
            mesh: c,
            color: c.material.color.clone(),
            emissive: c.material.emissive ? c.material.emissive.clone() : null
          });
        }
      });
    }

    this._ragePhase = 'ascend';
    this._ragePhaseTimer = 2.0; // Float up slowly

    if (this.audio && this.audio.playRageMusic) {
      this.audio.playRageMusic();
    }

    // Create subtle beam light
    const beamGeo = new THREE.CylinderGeometry(1.5, 4, 40, 8, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xFFFFCC,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this._rageBeamLight = new THREE.Mesh(beamGeo, beamMat);
    this._rageBeamLight.position.copy(this.position);
    this._rageBeamLight.position.y += 20;
    this.scene.add(this._rageBeamLight);

    const glow = new THREE.PointLight(0xFFFFCC, 4, 30);
    glow.position.set(0, 10, 0);
    this._rageBeamLight.add(glow);
  }

  deactivateRage() {
    this.isRaging = false;
    this._ragePhase = null;
    this.rageTimer = 0;

    if (this.audio && this.audio.playRageEndSound) {
      this.audio.playRageEndSound();
    }
    if (this.audio && this.audio.stopRageMusic) {
      this.audio.stopRageMusic();
    }

    // Restore scale
    if (this.model) this.model.scale.setScalar(this._originalScale);

    // Restore colors
    this._clearRageTint();

    // Set 50% health
    this.health = Math.round(this.maxHealth * 0.5);

    // Remove beam if still present
    if (this._rageBeamLight) {
      this.scene.remove(this._rageBeamLight);
      this._rageBeamLight = null;
    }

    // Update HUD
    const healthFill = document.getElementById('health-fill');
    if (healthFill) healthFill.style.width = `${(this.health / this.maxHealth) * 100}%`;
    const healthNum = document.getElementById('health-count');
    if (healthNum) healthNum.textContent = String(Math.round(this.health));
  }

  _applyRageTint() {
    if (!this.model) return;
    this.model.traverse(c => {
      if (c.isMesh && c.material) {
        c.material.color.setHex(0xCC2200);
        if (c.material.emissive) {
          c.material.emissive.setHex(0xFF3300);
          c.material.emissiveIntensity = 0.6;
        }
      }
    });
  }

  _clearRageTint() {
    for (const entry of this._originalMaterials) {
      if (entry.mesh && entry.mesh.material) {
        entry.mesh.material.color.copy(entry.color);
        if (entry.emissive && entry.mesh.material.emissive) {
          entry.mesh.material.emissive.copy(entry.emissive);
          entry.mesh.material.emissiveIntensity = 0;
        }
      }
    }
    this._originalMaterials = [];
  }

  // ─── ABILITIES ──────────────────────────────────────────────────

  triggerSandBurst(enemyManager, audio) {
    if (this.sandBurstCooldown > 0 || !this.loaded || this.isDead) return false;
    
    const sbLevel = this.utilityLevels.sandBurst || 1;
    
    // Scale stats — radii doubled (huge AoE intentional given long cooldown)
    let radius = 30.0;
    let damage = 25;
    let cooldown = 15.0;

    if (sbLevel >= 2) radius = 40.0;
    if (sbLevel >= 3) cooldown = 12.0;
    if (sbLevel >= 4) damage = 50;
    if (sbLevel >= 5) { radius = 50.0; damage = 75; cooldown = 10.0; }

    this.sandBurstCooldownMax = cooldown;
    this.sandBurstCooldown = this.sandBurstCooldownMax;
    
    // 1. Play Audio
    if (audio && audio.initialized && audio.playSandBurstSound) {
      audio.playSandBurstSound();
    }
    
    // 2. Spawn Particle Visuals (High Performance Sandstorm Wave)
    const posArr = this.sandParticleSystem.geometry.attributes.position.array;
    for (let i = 0; i < this.sandParticleCount; i++) {
      // Origin (spread tight around crab at ground level)
      posArr[i*3] = this.position.x + (Math.random() - 0.5) * 1.5;
      posArr[i*3+1] = this.position.y + 0.2 + (Math.random() * 0.8);
      posArr[i*3+2] = this.position.z + (Math.random() - 0.5) * 1.5;
      
      // Explosive horizontal wave velocity
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.2) * 0.5; // Mostly horizontal, slight arc
      const speed = 25 + Math.random() * 25; // Very fast pushing wave
      
      this.sandParticleVelocities[i].set(
        Math.cos(theta) * speed,
        Math.sin(phi) * speed,
        Math.sin(theta) * speed
      );
    }
    this.sandParticleSystem.geometry.attributes.position.needsUpdate = true;
    
    // Activate shockwave shader
    if (this._sandShockwave) {
      this._sandShockwave.position.copy(this.position);
      this._sandShockwave.position.y += 0.05; // Just above ground
      this._sandShockwaveUniforms.uTime.value = 0;
      this._sandShockwave.visible = true;
    }

    this.sandBurstActive = true;
    this.sandBurstTimer = 1.5; // 1.5 seconds duration
    
    // 3. Apply logic to enemies
    // Values scaled above
    const knockbackForce = 25.0 + (sbLevel * 2);
    
    if (enemyManager) {
      for (const enemy of enemyManager.enemies) {
        if (enemy.state === 'dead' || enemy.state === 'dying') continue;
        
        const dist = enemy.position.distanceTo(this.position);
        if (dist <= radius) {
          // Apply damage
          enemyManager.damageEnemy(enemy, damage);
          
          // Apply knockback
          const dir = enemy.position.clone().sub(this.position).normalize();
          dir.y = 0; // Flat knockback
          enemy._knockbackVelocity = dir.multiplyScalar(knockbackForce);
          
          // Apply Stagger
          enemy._staggerTimer = 1.5; // 1.5 seconds of stun/slow
        }
      }
    }
    
    return true;
  }

  /**
   * Massive rage resurrection burst — 3× visual, pushes ALL enemies far back
   */
  triggerRageBurst(enemyManager, audio) {
    // Play audio
    if (audio && audio.initialized && audio.playSandBurstSound) {
      audio.playSandBurstSound();
    }

    // Use exactly the same visual logic as normal sand burst but scaled up slightly
    const posArr = this.sandParticleSystem.geometry.attributes.position.array;
    for (let i = 0; i < this.sandParticleCount; i++) {
      posArr[i*3] = this.position.x + (Math.random() - 0.5) * 1.5;
      posArr[i*3+1] = this.position.y + 0.2 + (Math.random() * 0.8);
      posArr[i*3+2] = this.position.z + (Math.random() - 0.5) * 1.5;

      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.2) * 0.5;
      const speed = (25 + Math.random() * 25) * 1.5; // Slightly faster for bigger spread
      this.sandParticleVelocities[i].set(
        Math.cos(theta) * speed,
        Math.sin(phi) * speed,
        Math.sin(theta) * speed
      );
    }
    this.sandParticleSystem.geometry.attributes.position.needsUpdate = true;

    // Big shockwave
    if (this._sandShockwave) {
      this._sandShockwave.position.copy(this.position);
      this._sandShockwave.position.y += 0.05;
      this._sandShockwaveUniforms.uTime.value = 0;
      this._sandShockwave.scale.setScalar(2.0); // 2× bigger shockwave ring
      this._sandShockwave.visible = true;
    }
    this.sandBurstActive = true;
    this.sandBurstTimer = 1.5; // MUST be 1.5 to match update loop logic and shader

    // Push ALL enemies back (half radius knockback)
    if (enemyManager) {
      for (const enemy of enemyManager.enemies) {
        if (enemy.state === 'dead' || enemy.state === 'dying') continue;
        const dir = enemy.position.clone().sub(this.position).normalize();
        dir.y = 0;
        enemy._knockbackVelocity = dir.multiplyScalar(40.0); // Halved pushback
        enemy._staggerTimer = 3.0;
      }
    }
  }
}
