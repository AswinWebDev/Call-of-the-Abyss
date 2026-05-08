import * as THREE from 'three';

const POOL_SIZE = 20;
const POISON_DURATION = 15.0;
const POISON_RADIUS = 13.5;

export class EnemyProjectiles {
  constructor(scene) {
    this.scene = scene;

    // Pools
    this.blobs = [];
    this.poisonAreas = [];

    // Geometries & Materials
    this._blobGeo = new THREE.SphereGeometry(0.8, 8, 6);
    this._blobMat = new THREE.MeshStandardMaterial({
      color: 0x66ff33, // Bright toxic green
      emissive: 0x24401a,
      roughness: 0.2,
      metalness: 0.1
    });

    // We will dynamically conform a high-res plane to the terrain
    const textureLoader = new THREE.TextureLoader();
    const splashTex = textureLoader.load('/textures/toxic_splash.png');

    this._poisonMat = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: splashTex },
        opacity: { value: 1.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float opacity;
        varying vec2 vUv;
        void main() {
          vec4 texColor = texture2D(tDiffuse, vUv);
          
          vec2 offset1 = vec2(-0.015, 0.015);
          vec2 offset2 = vec2(-0.030, 0.030);
          vec4 shadow1 = texture2D(tDiffuse, vUv + offset1);
          vec4 shadow2 = texture2D(tDiffuse, vUv + offset2);
          
          float brightness = max(texColor.r, max(texColor.g, texColor.b));
          float s1 = max(shadow1.r, max(shadow1.g, shadow1.b));
          float s2 = max(shadow2.r, max(shadow2.g, shadow2.b));
          
          float alpha = smoothstep(0.01, 0.1, brightness);
          float alphaS1 = smoothstep(0.01, 0.1, s1);
          float alphaS2 = smoothstep(0.01, 0.1, s2);
          
          vec3 finalColor = texColor.rgb * 0.5;
          
          if (alpha < 0.05) {
             if (alphaS1 > 0.05) {
                gl_FragColor = vec4(shadow1.rgb * 0.25, alphaS1 * opacity);
                return;
             }
             if (alphaS2 > 0.05) {
                gl_FragColor = vec4(shadow2.rgb * 0.15, alphaS2 * opacity);
                return;
             }
             discard;
          }
          
          gl_FragColor = vec4(finalColor, alpha * opacity);
        }
      `,
      transparent: true,
      depthWrite: false
    });

    // Initialize Pools
    for (let i = 0; i < POOL_SIZE; i++) {
      // Blob
      const blobMesh = new THREE.Mesh(this._blobGeo, this._blobMat);
      blobMesh.visible = false;
      blobMesh.castShadow = true;
      this.scene.add(blobMesh);

      this.blobs.push({
        mesh: blobMesh,
        velocity: new THREE.Vector3(),
        active: false,
        damage: 0,
        tickDamage: 0
      });

      // Poison Area
      // Each needs its own geometry so we can deform it independently
      const poisonGeo = new THREE.PlaneGeometry(POISON_RADIUS * 2, POISON_RADIUS * 2, 12, 12);
      poisonGeo.rotateX(-Math.PI / 2);
      
      const poisonMesh = new THREE.Mesh(poisonGeo, this._poisonMat);
      poisonMesh.visible = false;
      this.scene.add(poisonMesh);

      this.poisonAreas.push({
        mesh: poisonMesh,
        active: false,
        timer: 0,
        tickDamage: 0,
        tickTimer: 0 // Cooldown for player taking damage inside it
      });
    }
  }

  /**
   * Hide & deactivate every blob and poison area for a Retry.
   */
  reset() {
    for (const b of this.blobs) {
      b.active = false;
      if (b.mesh) b.mesh.visible = false;
    }
    for (const a of this.poisonAreas) {
      a.active = false;
      if (a.mesh) a.mesh.visible = false;
      a.timer = 0;
      a.tickTimer = 0;
    }
  }

  /**
   * Throws a blob toward a target position.
   * `puddleDuration` controls how long the resulting poison puddle persists.
   */
  throwBlob(startPos, targetPos, impactDamage, tickDamage, puddleDuration) {
    const blob = this.blobs.find(b => !b.active);
    if (!blob) return;

    blob.active = true;
    blob.mesh.visible = true;
    blob.mesh.position.copy(startPos);
    blob.damage = impactDamage;
    blob.tickDamage = tickDamage;
    blob.puddleDuration = (typeof puddleDuration === 'number') ? puddleDuration : POISON_DURATION;

    // Calculate velocity for an arc
    const dir = new THREE.Vector3().subVectors(targetPos, startPos);
    const dist = dir.length();

    // Time in air
    const timeToTarget = dist / 20.0; // Assume horizontal speed of 20

    dir.normalize();

    blob.velocity.x = dir.x * 20.0;
    blob.velocity.z = dir.z * 20.0;

    // Calculate required upward velocity to land at target y
    const gravity = 30.0; // Gravity for blobs
    // y = y0 + vy*t - 0.5*g*t^2 => vy = (y - y0 + 0.5*g*t^2) / t
    const vy = (targetPos.y - startPos.y + 0.5 * gravity * timeToTarget * timeToTarget) / timeToTarget;
    blob.velocity.y = vy;
  }

  /**
   * Spawns a poison area at the given position
   */
  _spawnPoisonArea(position, tickDamage, scaleMultiplier = 1.0, duration) {
    const area = this.poisonAreas.find(a => !a.active);
    if (!area) return;

    area.active = true;
    area.mesh.visible = true;
    area.mesh.position.copy(position);
    area.mesh.scale.set(0.1, 1, 0.1); // Start small, will expand
    area.targetScale = scaleMultiplier;
    area.timer = (typeof duration === 'number') ? duration : POISON_DURATION;
    area.tickDamage = tickDamage;
    area.tickTimer = 0;
  }

  /**
   * Spawns a massive poison area around the entity
   */

  /**
   * Updates blobs and poison areas.
   * Returns array of direct hits on the crab.
   */
  update(dt, world, crab) {
    const hits = [];
    const gravity = 30.0;

    // Update Blobs
    for (const blob of this.blobs) {
      if (!blob.active) continue;

      blob.velocity.y -= gravity * dt;
      blob.mesh.position.addScaledVector(blob.velocity, dt);

      // Rotate for visual effect
      blob.mesh.rotation.x += dt * 5;
      blob.mesh.rotation.y += dt * 3;

      // Check Crab impact
      if (crab && crab.loaded) {
        const dist = blob.mesh.position.distanceTo(crab.position);
        if (dist < 4.0) { // Crab radius + blob radius
          hits.push({ damage: blob.damage });
          this._spawnPoisonArea(blob.mesh.position, blob.tickDamage, 1.0, blob.puddleDuration);
          blob.active = false;
          blob.mesh.visible = false;
          continue;
        }
      }

      // Check ground collision
      const groundY = world.getTerrainHeight(blob.mesh.position.x, blob.mesh.position.z);
      if (blob.mesh.position.y <= groundY) {
        blob.mesh.position.y = groundY;
        this._spawnPoisonArea(blob.mesh.position, blob.tickDamage, 1.0, blob.puddleDuration);
        blob.active = false;
        blob.mesh.visible = false;
      }
    }

    // Update Poison Areas & check crab inside
    let totalTickDamage = 0;
    let crabInPoison = false;

    for (const area of this.poisonAreas) {
      if (!area.active) continue;

      area.timer -= dt;
      if (area.timer <= 0) {
        area.active = false;
        area.mesh.visible = false;
        continue;
      }

      // Expand visual
      const targetScale = area.targetScale || 1.0;
      if (area.mesh.scale.x < targetScale) {
        area.mesh.scale.x = Math.min(targetScale, area.mesh.scale.x + dt * 5 * targetScale);
        area.mesh.scale.z = area.mesh.scale.x;
      }

      // Solid opacity - no blinking
      const currentOpacity = 0.9;
      if (area.mesh.material.uniforms) {
        area.mesh.material.uniforms.opacity.value = currentOpacity;
      }

      // Morph geometry to exactly match terrain height
      const posAttr = area.mesh.geometry.attributes.position;
      const scale = area.mesh.scale.x;
      const worldX = area.mesh.position.x;
      const worldZ = area.mesh.position.z;
      const baseY = area.mesh.position.y;
      
      for (let i = 0; i < posAttr.count; i++) {
         const localX = posAttr.getX(i);
         const localZ = posAttr.getZ(i);
         const wx = worldX + localX * scale;
         const wz = worldZ + localZ * scale;
         const terrainY = world.getTerrainHeight(wx, wz);
         
         // Set local Y to the height difference plus a tiny offset to avoid z-fighting
         posAttr.setY(i, (terrainY - baseY) / scale + 0.1); 
      }
      posAttr.needsUpdate = true;

      // Check Crab inside area — only ticks while grounded. Jumping over a
      // poison puddle should be a clean dodge, not a "hit while in mid-air".
      if (crab && crab.loaded && !crab.isAirborne && area.mesh.scale.x > targetScale * 0.5) {
        const distSq =
          Math.pow(crab.position.x - area.mesh.position.x, 2) +
          Math.pow(crab.position.z - area.mesh.position.z, 2);

        // Use horizontal distance
        const currentRadius = POISON_RADIUS * area.mesh.scale.x;
        if (distSq < currentRadius * currentRadius) {
          crabInPoison = true;
          area.tickTimer -= dt;
          if (area.tickTimer <= 0) {
            totalTickDamage += area.tickDamage;
            area.tickTimer = 0.5; // Apply tick damage every 0.5 seconds
          }
        }
      }
    }

    if (totalTickDamage > 0) {
      hits.push({ damage: totalTickDamage });
    }

    return hits;
  }
}
