/**
 * Projectile.js — Water projectile pool with trails + splash impact
 * Object pool for zero GC pressure at 60 FPS.
 */
import * as THREE from 'three';

const POOL_SIZE = 40;
const MAX_LIFETIME = 3.0;
const SPLASH_POOL_SIZE = 20;
const SPLASH_PARTICLE_COUNT = 8;

export class ProjectilePool {
  constructor(scene) {
    this.scene = scene;
    this.pool = [];

    // Shared geometry/material
    this._geo = new THREE.SphereGeometry(0.3, 6, 4);
    this._trailGeo = new THREE.SphereGeometry(0.15, 4, 3);

    // Pre-allocate projectile pool
    for (let i = 0; i < POOL_SIZE; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0x44ddff,
        transparent: true,
        opacity: 0.9
      });
      const mesh = new THREE.Mesh(this._geo, mat);
      mesh.visible = false;
      scene.add(mesh);

      // Trail particles
      const trails = [];
      for (let t = 0; t < 3; t++) {
        const trailMat = new THREE.MeshBasicMaterial({
          color: 0x88eeff,
          transparent: true,
          opacity: 0.4
        });
        const trail = new THREE.Mesh(this._trailGeo, trailMat);
        trail.visible = false;
        scene.add(trail);
        trails.push(trail);
      }

      this.pool.push({
        mesh,
        trails,
        velocity: new THREE.Vector3(),
        damage: 0,
        tier: 0,
        lifetime: 0,
        active: false,
        trailPositions: [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()],
        options: null,
        hitEnemies: null
      });
    }

    // ─── SPLASH IMPACT POOL ─────────────────────────────────────
    this._splashGeo = new THREE.SphereGeometry(0.2, 4, 3);
    this.splashPool = [];

    for (let i = 0; i < SPLASH_POOL_SIZE; i++) {
      const particles = [];
      for (let p = 0; p < SPLASH_PARTICLE_COUNT; p++) {
        const mat = new THREE.MeshBasicMaterial({
          color: 0x66ddff,
          transparent: true,
          opacity: 0.8
        });
        const particle = new THREE.Mesh(this._splashGeo, mat);
        particle.visible = false;
        scene.add(particle);
        particles.push({
          mesh: particle,
          velocity: new THREE.Vector3()
        });
      }

      // Impact ring
      const ringGeo = new THREE.RingGeometry(0.2, 0.5, 12);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x88eeff,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.visible = false;
      scene.add(ring);

      this.splashPool.push({
        particles,
        ring,
        timer: 0,
        active: false,
        origin: new THREE.Vector3()
      });
    }
  }

  /**
   * Hide & deactivate every projectile and splash for a fresh run.
   */
  reset() {
    for (const p of this.pool) {
      p.active = false;
      if (p.mesh) p.mesh.visible = false;
      if (p.trails) p.trails.forEach(t => { if (t) t.visible = false; });
    }
    for (const s of this.splashPool) {
      s.active = false;
      if (s.ring) s.ring.visible = false;
      if (s.particles) s.particles.forEach(part => { if (part) part.visible = false; });
    }
  }

  /**
   * Spawn a projectile
   */
  spawn(position, velocity, damage, tier, options = {}) {
    const p = this.pool.find(p => !p.active);
    if (!p) return;

    p.mesh.position.copy(position);
    p.velocity.copy(velocity);
    p.damage = damage;
    p.tier = tier;
    p.lifetime = 0;
    p.active = true;
    p.options = options;
    p.hitEnemies = options.penetrating ? new Set() : null;
    p.mesh.visible = true;

    const colors = [0x44ddff, 0x0088ff, 0x00ff88, 0xffaa00];
    p.mesh.material.color.setHex(colors[tier] || 0x44ddff);
    p.mesh.material.opacity = 0.9;

    const scales = [1.0, 1.2, 0.8, 2.0];
    p.mesh.scale.setScalar((scales[tier] || 1.0) * (options.hitScale || 1.0));

    for (let i = 0; i < p.trails.length; i++) {
      p.trails[i].visible = false;
      p.trailPositions[i].copy(position);
    }
  }

  /**
   * Spawn a water splash at impact point
   */
  _spawnSplash(position, tier) {
    const splash = this.splashPool.find(s => !s.active);
    if (!splash) return;

    splash.active = true;
    splash.timer = 0;
    splash.origin.copy(position);

    // Ring at impact point
    splash.ring.position.copy(position);
    splash.ring.visible = true;
    splash.ring.scale.setScalar(0.5);
    splash.ring.material.opacity = 0.8;

    // Colors per tier (if crit, tier is mapped to red/gold)
    const colors = [0x44ddff, 0x0088ff, 0x00ff88, 0xffaa00, 0xff3300]; // tier 4 = crit
    const color = colors[tier] || 0x44ddff;

    // Scatter particles outward
    for (const p of splash.particles) {
      p.mesh.position.copy(position);
      p.mesh.visible = true;
      p.mesh.material.color.setHex(color);
      p.mesh.material.opacity = 0.9;

      // Random burst direction
      const angle = Math.random() * Math.PI * 2;
      const upForce = 8 + Math.random() * 12;
      const outForce = 4 + Math.random() * 8;
      p.velocity.set(
        Math.cos(angle) * outForce,
        upForce,
        Math.sin(angle) * outForce
      );

      const size = 0.3 + Math.random() * 0.4;
      p.mesh.scale.setScalar(size);
    }
  }

  /**
   * Update projectiles + splashes. Returns hit data array.
   */
  update(dt, enemies) {
    const hits = [];

    // ─── PROJECTILES ────────────────────────────────────────────
    for (const p of this.pool) {
      if (!p.active) continue;

      p.lifetime += dt;
      if (p.lifetime > MAX_LIFETIME) {
        this._deactivate(p);
        continue;
      }

      // Move
      p.velocity.y -= 12 * dt; // Lighter gravity for longer range
      p.mesh.position.addScaledVector(p.velocity, dt);

      // Ground check
      if (p.mesh.position.y < 0) {
        this._spawnSplash(p.mesh.position, p.tier);
        this._deactivate(p);
        continue;
      }

      // Trail
      for (let i = p.trails.length - 1; i > 0; i--) {
        p.trailPositions[i].copy(p.trailPositions[i - 1]);
      }
      p.trailPositions[0].copy(p.mesh.position);

      for (let i = 0; i < p.trails.length; i++) {
        p.trails[i].visible = p.lifetime > 0.02 * (i + 1);
        p.trails[i].position.copy(p.trailPositions[i]);
        p.trails[i].material.opacity = 0.4 * (1 - i / p.trails.length);
        p.trails[i].scale.setScalar(0.7 * (1 - i / p.trails.length));
      }

      // Collision with enemies
      if (enemies) {
        for (const enemy of enemies) {
          if (!enemy.alive) continue;
          
          let hitRadius = enemy.hitRadius;
          if (p.options && p.options.isChargerHose) hitRadius *= 3.0;

          const dist = p.mesh.position.distanceTo(enemy.position);
          if (dist < hitRadius) {
            // Penetrating check
            if (p.hitEnemies && p.hitEnemies.has(enemy)) continue;

            // Shotgun distance dropoff (3x close range -> 1x at long range)
            let finalDamage = p.damage;
            if (p.options && p.options.isShotgun) {
               const traveled = p.lifetime * p.velocity.length();
               let dropoff = 1.0;
               if (traveled < 8) dropoff = 3.0;
               else if (traveled < 25) dropoff = 3.0 - 2.0 * ((traveled - 8) / 17);
               finalDamage = p.damage * dropoff;
            }

            hits.push({
              enemy,
              damage: finalDamage,
              position: p.mesh.position.clone(),
              isCrit: p.options && p.options.isCrit
            });
            
            // Water splash on impact! (Use a special tier 4 for crit red splash)
            const splashTier = (p.options && p.options.isCrit) ? 4 : p.tier;
            this._spawnSplash(p.mesh.position, splashTier);
            
            if (p.options && p.options.penetrating) {
              p.hitEnemies.add(enemy);
            } else {
              this._deactivate(p);
              break;
            }
          }
        }
      }
    }

    // ─── SPLASH PARTICLES ───────────────────────────────────────
    for (const splash of this.splashPool) {
      if (!splash.active) continue;

      splash.timer += dt;

      // Animate particles
      for (const p of splash.particles) {
        p.velocity.y -= 25 * dt; // Gravity on splash
        p.mesh.position.addScaledVector(p.velocity, dt);

        // Fade out
        const fade = 1 - (splash.timer / 0.6);
        p.mesh.material.opacity = Math.max(0, fade * 0.9);
        p.mesh.scale.multiplyScalar(0.97); // Shrink
      }

      // Expand + fade ring
      splash.ring.scale.addScalar(dt * 8);
      splash.ring.material.opacity = Math.max(0, 0.8 - splash.timer * 2);

      // Cleanup
      if (splash.timer > 0.6) {
        splash.active = false;
        splash.ring.visible = false;
        for (const p of splash.particles) p.mesh.visible = false;
      }
    }

    return hits;
  }

  _deactivate(p) {
    p.active = false;
    p.mesh.visible = false;
    for (const t of p.trails) t.visible = false;
  }
}
