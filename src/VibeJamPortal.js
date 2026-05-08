/**
 * VibeJamPortal — uses /models/desert_portal.glb as the visible portal mesh,
 * surrounded by an optional purple floor fog and a label.
 *
 * The GLB is **lazy-loaded** through a shared promise so:
 *   - The page's initial bundle never includes the model fetch.
 *   - Multiple portals (exit + start) share the same network request.
 *   - The first portal to call loadModel() triggers the fetch; later callers
 *     reuse the cached promise without spawning a duplicate request.
 *
 * The portal is fully usable for collision/redirect even before the model
 * arrives — the floor fog + label are present, and the trigger zone is
 * defined by basePos. If the GLB never resolves, the portal still works.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Shared cache — fetched at most once per page load.
let _portalGltfPromise = null;
function getPortalModel() {
  if (!_portalGltfPromise) {
    const loader = new GLTFLoader();
    _portalGltfPromise = new Promise((resolve, reject) => {
      loader.load(
        '/models/desert_portal.glb',
        (gltf) => resolve(gltf),
        undefined,
        (err) => reject(err)
      );
    });
  }
  return _portalGltfPromise;
}

export class VibeJamPortal {
  /**
   * @param {THREE.Scene} scene
   * @param {object} opts
   *   - position          : THREE.Vector3 — ground anchor
   *   - label             : string        — small canvas label drawn above
   *   - tint              : THREE.Color   — model material colour
   *   - emissive          : THREE.Color   — model emissive (defaults to tint·0.5)
   *   - fogColor          : THREE.Color   — floor-fog disc colour (defaults to tint)
   *   - fog               : boolean       — false to skip the fog disc entirely
   *   - delay             : ms            — grace period before trigger can fire
   *   - autoLoad          : boolean       — true to fetch the GLB immediately
   *   - requireExitFirst  : boolean       — if true, the portal only fires
   *                                          AFTER the player has been outside
   *                                          its trigger zone at least once.
   *                                          Used by the return portal so a
   *                                          player who arrives standing on
   *                                          the portal isn't auto-pulled back
   *                                          when the grace period expires.
   *   - world             : World ref     — used to snap Y to terrain height
   *   - onEnter           : () => void    — collision callback
   */
  constructor(scene, opts) {
    this.scene = scene;
    this.world = opts.world || null;
    this.basePos = opts.position.clone();
    this.label = opts.label || 'PORTAL';
    // Optional — when omitted, the GLB's native materials are kept.
    this.tintColor = opts.tint || null;
    this.emissiveColor = opts.emissive || null;
    this.fogColor = opts.fogColor || new THREE.Color(0.65, 0.30, 0.95);
    this.fogVisible = opts.fog !== false;
    this.activateAt = performance.now() + (opts.delay || 0);
    this.onEnter = opts.onEnter || (() => {});
    this.requireExitFirst = !!opts.requireExitFirst;
    this._hasExitedZone = false;
    this.triggered = false;
    this._t = 0;
    this.modelLoaded = false;
    this._loadStarted = false;
    this._modelBaseY = 8; // updated when the model resolves

    this.group = new THREE.Group();
    let groundY = this.basePos.y;
    if (this.world && this.world.getTerrainHeight) {
      groundY = this.world.getTerrainHeight(this.basePos.x, this.basePos.z);
    }
    this.group.position.set(this.basePos.x, groundY, this.basePos.z);

    this._buildBase();
    scene.add(this.group);

    if (opts.autoLoad) this.loadModel();
  }

  _buildBase() {
    // ── Optional floor fog (radial gradient on a flat disc, additive)
    if (this.fogVisible) {
      const c = document.createElement('canvas');
      c.width = 256; c.height = 256;
      const ctx = c.getContext('2d');
      const r = Math.round(this.fogColor.r * 255);
      const g = Math.round(this.fogColor.g * 255);
      const b = Math.round(this.fogColor.b * 255);
      const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      grad.addColorStop(0.00, `rgba(${Math.min(255, r + 30)}, ${Math.min(255, g + 30)}, ${Math.min(255, b + 30)}, 1.0)`);
      grad.addColorStop(0.35, `rgba(${r}, ${g}, ${b}, 0.75)`);
      grad.addColorStop(0.70, `rgba(${r}, ${g}, ${b}, 0.30)`);
      grad.addColorStop(1.00, `rgba(${r}, ${g}, ${b}, 0.00)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);
      const tex = new THREE.CanvasTexture(c);
      tex.minFilter = THREE.LinearFilter;
      const geo = new THREE.CircleGeometry(15, 48);
      geo.rotateX(-Math.PI / 2);
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 1.0,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      this.fog = new THREE.Mesh(geo, mat);
      this.fog.position.y = 0.05;
      this.group.add(this.fog);
    }

    // ── Floating label
    if (this.label) {
      const c = document.createElement('canvas');
      c.width = 512; c.height = 64;
      const ctx = c.getContext('2d');
      ctx.font = 'bold 28px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(0,0,0,0.85)';
      ctx.fillText(this.label, c.width / 2 + 2, c.height / 2 + 2);
      ctx.fillStyle = '#cccccc';
      ctx.fillText(this.label, c.width / 2, c.height / 2);
      const tex = new THREE.CanvasTexture(c);
      tex.minFilter = THREE.LinearFilter;
      const mat = new THREE.MeshBasicMaterial({
        map: tex, transparent: true, side: THREE.DoubleSide, depthWrite: false
      });
      this.labelMesh = new THREE.Mesh(new THREE.PlaneGeometry(10, 1.25), mat);
      this.labelMesh.position.y = 18;
      this.group.add(this.labelMesh);
    }
  }

  /**
   * Trigger the GLB fetch. Idempotent — safe to call from a per-frame
   * distance check, only the first call kicks off the network request.
   */
  loadModel() {
    if (this.modelLoaded || this._loadStarted) return;
    this._loadStarted = true;
    getPortalModel()
      .then((gltf) => {
        const model = gltf.scene.clone(true);
        // Only override materials when an explicit tint is provided.
        if (this.tintColor || this.emissiveColor) {
          model.traverse((node) => {
            if (node.isMesh && node.material) {
              node.material = node.material.clone();
              if (this.tintColor && node.material.color) {
                node.material.color.copy(this.tintColor);
              }
              if (this.emissiveColor && node.material.emissive) {
                node.material.emissive.copy(this.emissiveColor);
              }
            }
          });
        }
        // Auto-fit large — reads as a real landmark from across the beach
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const scale = 40 / maxDim;
        model.scale.setScalar(scale);
        // Anchor bbox bottom to ground, then bury the base ~2 units into
        // the sand so the platform is flush and the player can't walk under it.
        const yOffset = -box.min.y * scale - 2.0;
        model.position.y = yOffset;
        this._modelBaseY = yOffset;
        this.portalModel = model;
        this.group.add(model);

        // Drive the GLB's built-in animation clips (e.g. swirling portal
        // surface). These are *content* animations — not the rigid Y rotation
        // we removed earlier.
        if (gltf.animations && gltf.animations.length > 0) {
          this.mixer = new THREE.AnimationMixer(model);
          for (const clip of gltf.animations) {
            this.mixer.clipAction(clip).play();
          }
        }

        this.modelLoaded = true;
      })
      .catch((err) => {
        console.warn('[VibeJamPortal] portal model failed to load', err);
      });
  }

  update(dt, time, playerPos) {
    this._t += dt;

    // Drive any built-in GLB animation clips (swirl, particles, etc.)
    if (this.mixer) this.mixer.update(dt);

    // Slow breathing pulse on the floor fog
    if (this.fog) {
      const pulse = 0.85 + 0.15 * Math.sin(this._t * 0.6);
      this.fog.material.opacity = pulse;
      this.fog.scale.setScalar(0.95 + pulse * 0.08);
    }

    if (this.triggered) return false;
    if (performance.now() < this.activateAt) return false;
    if (!playerPos) return false;

    // Horizontal cylindrical proximity around the anchor — fires the moment
    // the crab walks into the doorway footprint, regardless of model state.
    const dx = playerPos.x - this.basePos.x;
    const dz = playerPos.z - this.basePos.z;
    const r = 7.5;
    const insideZone = (dx * dx + dz * dz) < (r * r);

    // For "return" portals where the player spawns AT the portal: don't
    // fire until the player has stepped outside the trigger zone at least
    // once. Otherwise an idle player gets auto-pulled back the instant
    // the grace period expires.
    if (this.requireExitFirst && !this._hasExitedZone) {
      if (!insideZone) this._hasExitedZone = true;
      return false;
    }

    if (insideZone) {
      this.triggered = true;
      this.onEnter();
      return true;
    }
    return false;
  }
}
