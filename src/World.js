/**
 * World.js — Production-quality beach environment
 * Handles terrain, ocean, rocks (GLB), vegetation, and atmospheric effects
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export class World {
  constructor(scene) {
    this.scene = scene;
    this.loader = new GLTFLoader();

    // References
    this.sand = null;
    this.ocean = null;
    this.trees = [];
    this.rocks = [];
    this.props = [];

    // Colliders for Crab collision (public — accessed by Crab.js)
    this.colliders = [];

    this.terrainSize = 700;

    // Footprint system
    this.sandCanvas = null;
    this.sandCtx = null;
    this.sandTexture = null;
    this.colorCanvas = null;
    this.colorCtx = null;
    this.colorTexture = null;
    this.lastFootprintPos = new THREE.Vector3();

    this._buildTerrain();
    this._buildOcean();
    this._loadRocks();
    this._spawnVegetation();
    this._spawnBeachProps();
    this._loadTrees();
    this._loadFerns();
    this._spawnSeagulls();

    // Subtle distance fog. Density kept low so nearby objects keep their
    // saturation and detail — only the far horizon dissolves slightly.
    // Sky stays its original cyan so we don't lose vertical color contrast.
    this.scene.background = new THREE.Color(0x87CEEB);
    this.scene.fog = new THREE.FogExp2(0x87CEEB, 0.0035);
  }

  /**
   * Calculate terrain height at any world position
   */
  getTerrainHeight(x, z) {
    const coastlineWobble = Math.sin(z * 0.05) * 15.0;
    const nx = x + coastlineWobble;

    let y = 2.0;
    if (nx < -120) {
      y += Math.pow(Math.abs(nx + 120) * 0.08, 1.8);
    } else if (nx > 30) {
      y -= (nx - 30) * 0.15;
      if (y < -20) y = -20;
    }

    // Side hills (Z-axis boundaries)
    if (Math.abs(z) > 130) {
      const diff = Math.abs(z) - 130;
      let sideHill = Math.pow(diff * 0.15, 1.5);

      // Fade out the hill as it approaches the sea (x > -30) to keep the horizon open
      if (x > -30) {
        let fade = 1.0 - ((x + 30) / 60); // from x=-30 (fade=1) to x=30 (fade=0)
        if (fade < 0) fade = 0;
        sideHill *= fade;
      }
      y += sideHill;
    }
    y += Math.sin(x * 0.2) * 0.2 + Math.cos(z * 0.2) * 0.2;

    // Flatten spawn area
    if (Math.abs(x) < 10 && Math.abs(z - 40) < 10) y = 2.0;

    return y;
  }

  // ─── TERRAIN ────────────────────────────────────────────────────

  _buildTerrain() {
    const segs = 192;
    const geo = new THREE.PlaneGeometry(this.terrainSize, this.terrainSize, segs, segs);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      pos.setY(i, this.getTerrainHeight(x, z));
    }
    geo.computeVertexNormals();

    // ─── FOOTPRINT CANVASES ────────────────────────────────────────
    this.sandCanvas = document.createElement('canvas');
    this.sandCanvas.width = 1024;
    this.sandCanvas.height = 1024;
    this.sandCtx = this.sandCanvas.getContext('2d');
    this.sandCtx.fillStyle = '#000000';
    this.sandCtx.fillRect(0, 0, 1024, 1024);
    this.sandTexture = new THREE.CanvasTexture(this.sandCanvas);
    this.sandTexture.anisotropy = 4;

    this.colorCanvas = document.createElement('canvas');
    this.colorCanvas.width = 1024;
    this.colorCanvas.height = 1024;
    this.colorCtx = this.colorCanvas.getContext('2d');

    // Rich warm sand base
    this.colorCtx.fillStyle = '#d4a86a';
    this.colorCtx.fillRect(0, 0, 1024, 1024);

    // Sand grain noise
    const imgData = this.colorCtx.getImageData(0, 0, 1024, 1024);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 20;
      data[i] += noise;
      data[i + 1] += noise * 0.8;
      data[i + 2] += noise * 0.5;
    }
    this.colorCtx.putImageData(imgData, 0, 0);
    this.colorTexture = new THREE.CanvasTexture(this.colorCanvas);
    this.colorTexture.anisotropy = 4;

    const mat = new THREE.MeshStandardMaterial({
      map: this.colorTexture,
      bumpMap: this.sandTexture,
      bumpScale: 3.0,
      roughness: 0.85,
      metalness: 0.05,
      color: 0xffffff
    });

    this.sand = new THREE.Mesh(geo, mat);
    this.sand.receiveShadow = true;
    this.scene.add(this.sand);

    // Wet sand strip
    this._buildWetSandStrip();
  }

  _buildWetSandStrip() {
    const stripWidth = 25;
    const segsX = 32;
    const segsZ = 160;
    const geo = new THREE.PlaneGeometry(stripWidth, this.terrainSize, segsX, segsZ);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 4);

    for (let i = 0; i < pos.count; i++) {
      const localX = pos.getX(i);
      const z = pos.getZ(i);
      const wobble = Math.sin(z * 0.05) * 15.0;

      const wx = 20 + (localX / (stripWidth / 2)) * (stripWidth / 2) - wobble * 0.2;
      let y = this.getTerrainHeight(wx, z) + 0.03;
      pos.setX(i, wx);
      pos.setY(i, y);

      const t = (localX + stripWidth / 2) / stripWidth;
      const alpha = Math.sin(t * Math.PI) * 0.45;

      colors[i * 4] = 0.40;
      colors[i * 4 + 1] = 0.30;
      colors[i * 4 + 2] = 0.20;
      colors[i * 4 + 3] = alpha;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 4));
    geo.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.35,
      metalness: 0.15,
      transparent: true,
      depthWrite: false
    });

    const wetStrip = new THREE.Mesh(geo, mat);
    wetStrip.receiveShadow = true;
    this.scene.add(wetStrip);
  }

  // ─── OCEAN (only in water area — no bleed onto beach) ──────────

  _buildOcean() {
    // Create ocean ONLY in the water zone (X > 20, the waterline)
    const oceanWidth = 500;  // Extends from waterline out to sea
    const oceanLength = 750;
    // 64x64 segments — vertex displacement still reads smooth at this scale,
    // saves ~6.7k vertices vs the previous 100x100 mesh.
    const geo = new THREE.PlaneGeometry(oceanWidth, oceanLength, 64, 64);
    geo.rotateX(-Math.PI / 2);

    // Offset vertices so ocean starts at X=25 (waterline) and extends to X=525
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pos.setX(i, pos.getX(i) + oceanWidth / 2 + 25);
    }
    geo.computeBoundingBox();
    geo.computeBoundingSphere();

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        cameraPos: { value: new THREE.Vector3() }
      },
      vertexShader: `
        uniform float time;
        varying vec3 vWorldPos;
        varying float vElevation;

        void main() {
          vec3 pos = position;
          vec4 worldPos = modelMatrix * vec4(pos, 1.0);

          // Multi-octave waves
          float wave1 = sin(worldPos.x * 0.15 + time * 1.2) * cos(worldPos.z * 0.12 + time * 0.8);
          float wave2 = sin(worldPos.x * 0.04 - time * 0.6) * sin(worldPos.z * 0.06 + time * 0.5);
          float detail = sin(worldPos.x * 1.0 + time * 2.5) * sin(worldPos.z * 0.8 - time * 1.5) * 0.08;
          float swell = sin(worldPos.x * 0.015 + time * 0.2) * 1.5;

          // Shore waves — bigger near shore, calmer deep
          float shoreProximity = 1.0 - clamp((worldPos.x - 25.0) / 80.0, 0.0, 1.0);
          float shoreWave = sin(worldPos.x * 0.3 - time * 2.0 + worldPos.z * 0.1) * shoreProximity * 1.2;

          vElevation = wave1 * 0.6 + wave2 * 1.0 + detail + swell + shoreWave;

          vec3 newPos = position;
          newPos.y += vElevation;

          // Reduce wave height near the very edge (smooth transition)
          float edgeFade = smoothstep(25.0, 40.0, worldPos.x);
          newPos.y *= edgeFade;

          vWorldPos = (modelMatrix * vec4(newPos, 1.0)).xyz;
          gl_Position = projectionMatrix * viewMatrix * vec4(newPos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 cameraPos;

        varying vec3 vWorldPos;
        varying float vElevation;

        // ── Procedural value noise (no texture asset, cheap on GPU) ──
        float hash21(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 34.345);
          return fract(p.x * p.y);
        }
        float vnoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = hash21(i);
          float b = hash21(i + vec2(1.0, 0.0));
          float c = hash21(i + vec2(0.0, 1.0));
          float d = hash21(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
        }
        // 2 octaves is enough for the dither effect on foam — perceptually
        // identical to 4 at our zoom levels but ~half the noise samples.
        float fbm(vec2 p) {
          float v = 0.5 * vnoise(p);
          v += 0.25 * vnoise(p * 2.13 + vec2(13.0, 7.0));
          return v;
        }

        void main() {
          // ── Coarse analytic normal from the same wave field as the vertex shader
          float dx = 0.15 * cos(vWorldPos.x * 0.15 + time * 1.2) * cos(vWorldPos.z * 0.12 + time * 0.8) +
                     0.04 * cos(vWorldPos.x * 0.04 - time * 0.6) * sin(vWorldPos.z * 0.06 + time * 0.5);
          float dz = -0.12 * sin(vWorldPos.x * 0.15 + time * 1.2) * sin(vWorldPos.z * 0.12 + time * 0.8) +
                      0.06 * sin(vWorldPos.x * 0.04 - time * 0.6) * cos(vWorldPos.z * 0.06 + time * 0.5);

          // ── High-frequency noise normal (2 layers, scrolling opposite directions)
          // Adds the "ripple" detail that pure analytic waves can't produce.
          vec2 nuv1 = vWorldPos.xz * 0.55 + vec2( time * 0.30, -time * 0.18);
          vec2 nuv2 = vWorldPos.xz * 1.25 + vec2(-time * 0.21,  time * 0.27);
          float n1 = vnoise(nuv1);
          float n2 = vnoise(nuv2);
          // Centred derivatives via finite differences (cheap, 2 extra samples)
          float h = 0.35;
          float nDX = (vnoise(nuv1 + vec2(h, 0.0)) - n1) * 0.6
                    + (vnoise(nuv2 + vec2(h, 0.0)) - n2) * 0.4;
          float nDZ = (vnoise(nuv1 + vec2(0.0, h)) - n1) * 0.6
                    + (vnoise(nuv2 + vec2(0.0, h)) - n2) * 0.4;

          vec3 normal = normalize(vec3(-(dx + nDX * 1.4), 1.0, -(dz + nDZ * 1.4)));

          // ── Depth-based color
          float shoreDist = clamp((vWorldPos.x - 25.0) / 120.0, 0.0, 1.0);

          vec3 shallowColor = vec3(0.10, 0.78, 0.82);
          vec3 midColor     = vec3(0.02, 0.35, 0.65);
          vec3 deepColor    = vec3(0.01, 0.06, 0.22);

          float depth = clamp(shoreDist - vElevation * 0.08, 0.0, 1.0);
          vec3 baseColor = mix(shallowColor, midColor, min(1.0, depth * 2.0));
          baseColor = mix(baseColor, deepColor, max(0.0, depth * 2.0 - 1.0));

          // ── Lighting setup
          vec3 lightDir = normalize(vec3(1.0, 1.5, -0.5));
          vec3 viewDir  = normalize(cameraPos - vWorldPos);

          // ── Soft, slightly anisotropic sun glint (replaces the hard pow 512)
          // Combine a tight inner highlight with a wider halo for a cinematic look.
          vec3 halfVec = normalize(lightDir + viewDir);
          float ndoth  = max(0.0, dot(normal, halfVec));
          float specSharp = pow(ndoth, 220.0) * 1.6;
          float specHalo  = pow(ndoth,  32.0) * 0.35;
          // Stretch slightly along the wave-crest axis so the glint isn't a perfect circle
          float stretch = 1.0 - abs(normal.x) * 0.55;
          float sunGlint = (specSharp + specHalo) * stretch;

          // ── Sky-gradient reflection (zenith → horizon) for a nicer fresnel
          // Reflect view direction roughly upward; the higher the bounce, the
          // more zenith colour shows through.
          vec3 reflDir = normalize(reflect(-viewDir, normal));
          float skyT   = clamp(reflDir.y * 0.5 + 0.5, 0.0, 1.0);
          vec3 zenith  = vec3(0.42, 0.66, 0.95);
          vec3 horizon = vec3(0.78, 0.88, 1.00);
          vec3 skyColor = mix(horizon, zenith, smoothstep(0.0, 0.85, skyT));

          float fresnel = pow(1.0 - max(0.0, dot(viewDir, normal)), 5.0);
          baseColor = mix(baseColor, skyColor, fresnel * 0.55);

          // ── Caustics (slight reduction; the high-freq normals carry detail now)
          vec2 p = vWorldPos.xz * 0.25;
          float c1 = sin(p.x + time * 0.8) + sin(p.y - time * 0.7);
          float c2 = sin(p.x * 0.6 - p.y * 0.5 + time * 1.2) * sin(p.x * 0.4 + p.y * 0.7 - time * 0.6);
          float caustic = smoothstep(0.0, 1.5, max(0.0, c1 + c2 * 2.0)) * 0.18;
          baseColor += caustic * shallowColor * (1.0 - shoreDist) * 1.0;

          // ── Shore foam — rolling tide
          float tidePhase = time * 0.8;
          float tidePos = sin(tidePhase) * 8.0 + 35.0;
          float distToTide = abs(vWorldPos.x - tidePos);
          float tideFoam = smoothstep(5.0, 0.0, distToTide) * 0.8;
          float foam2 = smoothstep(3.0, 0.0, abs(vWorldPos.x - tidePos - 10.0)) * 0.3;
          float foam3 = smoothstep(2.0, 0.0, abs(vWorldPos.x - tidePos - 18.0)) * 0.15;

          // Multi-octave foam dither — replaces single sine for a textured look
          vec2 foamUv = vWorldPos.xz * vec2(0.4, 0.85) + vec2(time * 0.5, time * 0.3);
          float foamDetail = fbm(foamUv);
          float totalFoam = (tideFoam + foam2 + foam3) * mix(0.45, 1.05, foamDetail);

          // Tiny scattered whitecaps far from shore where wave amplitude is high
          float capMask = smoothstep(0.55, 1.0, abs(vElevation) * 0.85)
                        * smoothstep(0.10, 0.30, fbm(vWorldPos.xz * 0.6 + time * 0.15))
                        * (1.0 - shoreDist);
          totalFoam += capMask * 0.65;

          vec3 foamColor = vec3(1.0, 1.0, 1.0) * totalFoam;

          // Subtle horizon haze — only kicks in past x=240 and tops out at
          // 35% mix so the deep ocean keeps most of its color.
          float fogMix = smoothstep(240.0, 480.0, vWorldPos.x);
          vec3 hazeColor = vec3(0.69, 0.79, 0.88);
          baseColor = mix(baseColor, hazeColor, fogMix * 0.35);

          // ── Edge transparency at shore
          float edgeAlpha = smoothstep(25.0, 35.0, vWorldPos.x);
          float alpha = mix(0.0, 0.92, edgeAlpha);

          // ── Subsurface scattering — soft green-blue translucency near shore
          float sss = max(0.0, dot(lightDir, -normal)) * (1.0 - shoreDist) * 0.12;
          baseColor += vec3(0.0, 0.25, 0.18) * sss;

          gl_FragColor = vec4(baseColor + foamColor + vec3(sunGlint), alpha);
        }
      `,
      transparent: true,
      depthWrite: false
    });

    this.ocean = new THREE.Mesh(geo, mat);
    this.ocean.position.y = 1.2;
    this.scene.add(this.ocean);
  }

  // ─── ROCKS (GLB Assets) ─────────────────────────────────────────

  _loadRocks() {
    // Load simple_rock_iv.glb — beach rocks only
    this.loader.load('./models/simple_rock_iv.glb', (gltf) => {
      this._placeRocks(gltf.scene, 'simple_rock', 20);
      console.log('✓ Rocks loaded');
    });
  }

  _placeRocks(baseModel, type, count) {
    for (let i = 0; i < count; i++) {
      const rock = baseModel.clone();

      let rx, rz;
      if (type === 'mountain') {
        // Mountains: distant background scenery behind the cliff
        const spots = [
          { x: -80, z: -100 },
          { x: -90, z: 80 },
          { x: -100, z: -30 },
          { x: -85, z: 180 },
        ];
        const spot = spots[i % spots.length];
        rx = spot.x + (Math.random() - 0.5) * 10;
        rz = spot.z + (Math.random() - 0.5) * 20;
      } else {
        const zone = Math.random();
        if (zone < 0.4) {
          rx = 15 + Math.random() * 25;
          rz = -190 + Math.random() * 380;
        } else if (zone < 0.7) {
          rx = -10 + Math.random() * 40;
          rz = -190 + Math.random() * 380;
        } else {
          rx = -30 - Math.random() * 90; // Spread to the deep cliff
          rz = -190 + Math.random() * 380;
        }
      }

      // Avoid crab spawn area
      if (Math.abs(rx) < 12 && Math.abs(rz - 40) < 25) {
        rx += rx > 0 ? 18 : -18;
      }

      const ry = this.getTerrainHeight(rx, rz);

      let scale;
      if (type === 'mountain') {
        scale = 4.0 + Math.random() * 3.0;
        rock.position.set(rx, ry + scale * 0.1, rz);
      } else {
        scale = 1.2 + Math.random() * 2.0;
        rock.position.set(rx, ry + scale * 0.15, rz);
      }
      rock.scale.setScalar(scale);

      rock.rotation.y = Math.random() * Math.PI * 2;
      if (type === 'simple_rock') {
        rock.rotation.x = (Math.random() - 0.5) * 0.3;
        rock.rotation.z = (Math.random() - 0.5) * 0.2;
      }

      rock.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      this.scene.add(rock);
      this.rocks.push(rock);
      this.colliders.push({ x: rx, z: rz, radius: scale * (type === 'mountain' ? 1.5 : 0.8) });
    }
  }

  // ─── VEGETATION ─────────────────────────────────────────────────

  _spawnVegetation() {
    const grassMat = new THREE.MeshStandardMaterial({
      roughness: 0.8,
      metalness: 0.1,
      side: THREE.DoubleSide,
      vertexColors: true
    });

    // Custom shader for GPU wind sway
    grassMat.onBeforeCompile = (shader) => {
      shader.uniforms.time = { value: 0 };
      this.grassShader = shader; // save to update time in update()

      shader.vertexShader = `
        uniform float time;
        ${shader.vertexShader}
      `;
      // Insert wind sway
      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `
        #include <begin_vertex>
        // instanceMatrix[3] contains world position translations
        vec3 worldPos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
        // Sway based on world x and z, and time. Height amplifies sway.
        float swayX = sin(time * 1.5 + worldPos.x * 0.1) * 0.15 * position.y;
        float swayZ = cos(time * 1.2 + worldPos.z * 0.1) * 0.1 * position.y;
        transformed.x += swayX;
        transformed.z += swayZ;
        `
      );
    };

    const tuftGeo = this._createTuftGeometry();
    const count = 15000;
    const instancedMesh = new THREE.InstancedMesh(tuftGeo, grassMat, count);
    instancedMesh.castShadow = true;
    instancedMesh.receiveShadow = true;

    const dummy = new THREE.Object3D();
    let index = 0;

    for (let i = 0; i < count; i++) {
      // Natural organic scattering:
      // Density is high near the back cliff (-130) and side hills (+/-190)
      const rawX = Math.random();

      // Bias X towards the back cliff
      const x = -130 + Math.pow(rawX, 1.5) * 150;

      // Bias Z towards edges
      const zSign = Math.random() < 0.5 ? -1 : 1;
      const zMag = Math.pow(Math.random(), 0.8) * 190;
      const z = zSign * zMag;

      const y = this.getTerrainHeight(x, z);

      if (y < 4) continue; // Keep away from water

      dummy.position.set(x, y - 0.1, z);
      dummy.rotation.y = Math.random() * Math.PI * 2;

      // Wildly vary scale: from tiny patches (0.3) to towering elephant grass (2.5)
      const scaleVariance = Math.random();
      const scale = 0.3 + Math.pow(scaleVariance, 2.0) * 2.2;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();

      instancedMesh.setMatrixAt(index, dummy.matrix);
      index++;
    }

    instancedMesh.count = index; // limit to successfully spawned count
    instancedMesh.instanceMatrix.needsUpdate = true;
    this.scene.add(instancedMesh);
  }

  _createTuftGeometry() {
    const geometries = [];
    const bladeCount = 16;

    for (let i = 0; i < bladeCount; i++) {
      const h = 1.5 + Math.random() * 2.0;
      const w = 0.2 + Math.random() * 0.2;

      const geo = new THREE.PlaneGeometry(w, h, 1, 4);
      geo.translate(0, h / 2, 0);

      const posAttribute = geo.attributes.position;
      const colorAttribute = new THREE.BufferAttribute(new Float32Array(posAttribute.count * 3), 3);

      const bend = 0.5 + Math.random() * 1.0;

      for (let v = 0; v < posAttribute.count; v++) {
        const localX = posAttribute.getX(v);
        const localY = posAttribute.getY(v);
        const localZ = posAttribute.getZ(v);

        const t = Math.max(0, localY / h);
        const taper = 1.0 - Math.pow(t, 2);
        posAttribute.setX(v, localX * taper);

        const bendZ = Math.pow(t, 1.5) * bend;
        posAttribute.setZ(v, localZ + bendZ);

        const colorBase = new THREE.Color(0x2d4c1e);
        const colorTip = new THREE.Color(0x6ca332);
        const color = colorBase.clone().lerp(colorTip, t);

        colorAttribute.setXYZ(v, color.r, color.g, color.b);
      }

      geo.setAttribute('color', colorAttribute);
      geo.computeVertexNormals();

      const angle = (i / bladeCount) * Math.PI * 2 + (Math.random() * 0.5);
      const radius = Math.random() * 0.2;

      const matrix = new THREE.Matrix4();

      const rotX = (Math.random() - 0.5) * 0.2;
      const rotY = -angle + Math.PI / 2;

      const euler = new THREE.Euler(rotX, rotY, 0, 'XYZ');
      const quaternion = new THREE.Quaternion().setFromEuler(euler);
      const position = new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
      const scale = new THREE.Vector3(1, 1, 1);

      matrix.compose(position, quaternion, scale);
      geo.applyMatrix4(matrix);

      geometries.push(geo);
    }

    return BufferGeometryUtils.mergeGeometries(geometries);
  }

  // ─── BEACH PROPS ────────────────────────────────────────────────

  _spawnBeachProps() {
    // Driftwood
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x8B6914, roughness: 0.95, metalness: 0.0 });
    for (let i = 0; i < 12; i++) { // Doubled driftwood
      const x = -10 + Math.random() * 35;
      const z = -190 + Math.random() * 380;
      const y = this.getTerrainHeight(x, z);
      if (y < 1 || y > 5) continue;

      const length = 2 + Math.random() * 4;
      const geo = new THREE.CylinderGeometry(0.15, 0.25, length, 6);
      const p = geo.attributes.position;
      for (let j = 0; j < p.count; j++) {
        p.setX(j, p.getX(j) + (Math.random() - 0.5) * 0.1);
        p.setZ(j, p.getZ(j) + (Math.random() - 0.5) * 0.1);
      }
      geo.computeVertexNormals();

      const dw = new THREE.Mesh(geo, woodMat);
      dw.position.set(x, y + 0.1, z);
      dw.rotation.x = Math.PI / 2;
      dw.rotation.z = Math.random() * Math.PI;
      dw.castShadow = true;
      dw.receiveShadow = true;
      this.scene.add(dw);
      this.props.push(dw);
    }

    // Seashells
    const shellColors = [0xFFF5E1, 0xFFE4C4, 0xF5DEB3, 0xFFDAB9, 0xFAEBD7];
    for (let i = 0; i < 30; i++) {
      const x = -5 + Math.random() * 30;
      const z = -190 + Math.random() * 380;
      const y = this.getTerrainHeight(x, z);
      if (y < 1 || y > 4) continue;

      const geo = new THREE.SphereGeometry(0.3, 6, 4);
      geo.scale(1, 0.3, 1.3);
      const mat = new THREE.MeshStandardMaterial({ color: shellColors[i % 5], roughness: 0.5, metalness: 0.2 });
      const shell = new THREE.Mesh(geo, mat);
      shell.position.set(x, y + 0.05, z);
      shell.rotation.y = Math.random() * Math.PI * 2;
      shell.scale.setScalar(0.5 + Math.random() * 0.8);
      shell.castShadow = true;
      this.scene.add(shell);
      this.props.push(shell);
    }
  }

  // ─── TREES ──────────────────────────────────────────────────────

  _loadTrees() {
    this.loader.load('./models/coconut_tree.glb', (gltf) => {
      for (let i = 0; i < 15; i++) { // Fewer trees to avoid blocking movement
        const tree = gltf.scene.clone();
        const x = -20 - Math.random() * 100;
        const z = -190 + Math.random() * 380;
        let y = this.getTerrainHeight(x, z);

        tree.position.set(x, y - 1.5, z);
        tree.rotation.y = Math.random() * Math.PI * 2;
        tree.rotation.z = (Math.random() - 0.5) * 0.15;
        const scale = 14.0 + Math.random() * 10.0;
        tree.scale.setScalar(scale);

        tree.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.side = THREE.DoubleSide;
              child.material.alphaTest = 0.5;
              child.material.transparent = false;
              child.material.depthWrite = true;
            }
          }
        });

        this.scene.add(tree);
        this.trees.push(tree);

        // Collider
        this.colliders.push({ x: x, z: z, radius: scale * 0.35 });
      }

      // Small undergrowth trees / fallen logs
      for (let i = 0; i < 60; i++) {
        const tree = SkeletonUtils.clone(gltf.scene);

        // Scatter mostly on cliffs and deep sides
        const rawX = Math.random();
        const x = -130 + Math.pow(rawX, 2.0) * 120; // Bias towards back cliff

        const zSign = Math.random() < 0.5 ? -1 : 1;
        const zMag = Math.pow(Math.random(), 0.6) * 190;
        const z = zSign * zMag;

        const y = this.getTerrainHeight(x, z);

        tree.position.set(x, y - 0.5, z); // Sunk slightly
        tree.rotation.y = Math.random() * Math.PI * 2;

        // Wild, chaotic tilts for underbrush (some almost fallen over)
        tree.rotation.z = (Math.random() - 0.5) * 1.5;
        tree.rotation.x = (Math.random() - 0.5) * 1.5;

        const scale = 2.0 + Math.random() * 5.0; // Very small compared to 14-24 scale of big trees
        tree.scale.setScalar(scale);

        tree.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.side = THREE.DoubleSide;
              child.material.alphaTest = 0.5;
              child.material.transparent = false;
              child.material.depthWrite = true;
            }
          }
        });

        this.scene.add(tree);
      }

      console.log('✓ Coconut trees loaded');
    });
  }

  _loadFerns() {
    this.loader.load('./models/fern_grass_02.glb', (gltf) => {
      // Auto-scale to ensure massive visibility regardless of asset authoring scale
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      // 3x larger base scale for massive ferns
      const baseScale = maxDim > 0 ? (40.0 / maxDim) : 1.0;

      // 3 hero ferns at original spots + a clustered band along the now-climbable
      // back cliff (x in [-150, -120]) so the climb has greenery to discover.
      const heroSpots = [
        { x: -95, z: -140 }, // Deep left side
        { x: -65, z: -60 },  // Mid back
        { x: -85, z: 140 }   // Front area
      ];

      const cliffBand = [];
      // Spread 9 bushes in a rough band along the back cliff
      for (let k = 0; k < 9; k++) {
        cliffBand.push({
          x: -150 + Math.random() * 30, // x ∈ [-150, -120]
          z: -170 + (k / 8) * 340 + (Math.random() - 0.5) * 18 // jittered z spread
        });
      }
      const positions = heroSpots.concat(cliffBand);

      for (let i = 0; i < positions.length; i++) {
        // Use SkeletonUtils in case the vegetation is rigged
        const fern = SkeletonUtils.clone(gltf.scene);

        const spot = positions[i];
        let y = this.getTerrainHeight(spot.x, spot.z);

        fern.position.set(spot.x, y - 0.1, spot.z);
        fern.rotation.y = Math.random() * Math.PI * 2;

        // Hero ferns stay big; cliff-band bushes are smaller and varied
        const isHero = i < heroSpots.length;
        const instanceScale = isHero
          ? baseScale * (1.0 + Math.random() * 0.5)
          : baseScale * (0.45 + Math.random() * 0.35);
        fern.scale.setScalar(instanceScale);

        fern.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.side = THREE.DoubleSide;
              child.material.alphaTest = 0.5;
              child.material.transparent = false;
              child.material.depthWrite = true;
            }
          }
        });

        this.scene.add(fern);
      }
      console.log('✓ Ferns loaded prominently');
    }, undefined, (err) => console.log('Failed to load ferns', err));
  }

  // ─── SEAGULLS ───────────────────────────────────────────────────

  _spawnSeagulls() {
    this.seagulls = [];
    const wingMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, side: THREE.DoubleSide });
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.6 });

    for (let i = 0; i < 5; i++) {
      const bird = new THREE.Group();

      const bodyGeo = new THREE.CapsuleGeometry(0.3, 1.2, 4, 8);
      bodyGeo.rotateZ(Math.PI / 2);
      bird.add(new THREE.Mesh(bodyGeo, bodyMat));

      const wingGeo = new THREE.PlaneGeometry(2.0, 0.6);
      const lw = new THREE.Mesh(wingGeo, wingMat);
      lw.position.set(0, 0.1, 1.0);
      bird.add(lw);
      const rw = new THREE.Mesh(wingGeo, wingMat);
      rw.position.set(0, 0.1, -1.0);
      bird.add(rw);

      const orbitR = 40 + Math.random() * 100;
      const orbitS = 0.15 + Math.random() * 0.2;
      const h = 50 + Math.random() * 60;
      const phase = Math.random() * Math.PI * 2;
      const cx = -20 + Math.random() * 40;
      const cz = Math.random() * 60;

      bird.position.set(cx, h, cz);
      this.scene.add(bird);
      this.seagulls.push({ group: bird, leftWing: lw, rightWing: rw, orbitR, orbitS, h, phase, cx, cz });
    }
  }

  // ─── FOOTPRINTS ─────────────────────────────────────────────────

  stampFootprint(worldPos, moveDirX, moveDirZ) {
    const dist = worldPos.distanceTo(this.lastFootprintPos);
    if (dist < 0.8) return;

    const halfSize = this.terrainSize / 2;
    const canvasSize = 1024;

    const px = Math.floor(((worldPos.x + halfSize) / this.terrainSize) * canvasSize);
    const py = Math.floor(((worldPos.z + halfSize) / this.terrainSize) * canvasSize);

    if (px < 8 || px > canvasSize - 8 || py < 8 || py > canvasSize - 8) return;

    // Crab walks sideways — claw marks appear as pairs of small scratches
    this._footprintCount = (this._footprintCount || 0) + 1;
    const side = this._footprintCount % 2 === 0 ? -1 : 1;

    // Two small claw marks (left + right of center line)
    for (let claw = -1; claw <= 1; claw += 2) {
      const cx = px + side * 3 + claw * 1;
      const cy = py + claw * 2;

      // Small elongated scratch mark (not a circle)
      this.sandCtx.save();
      this.sandCtx.translate(cx, cy);
      this.sandCtx.rotate(Math.random() * 0.5 - 0.25);
      this.sandCtx.scale(1, 1.8); // Elongated vertically

      const bGrad = this.sandCtx.createRadialGradient(0, 0, 0, 0, 0, 3);
      bGrad.addColorStop(0, 'rgba(255,255,255,0.6)');
      bGrad.addColorStop(1, 'rgba(255,255,255,0)');
      this.sandCtx.fillStyle = bGrad;
      this.sandCtx.beginPath();
      this.sandCtx.arc(0, 0, 3, 0, Math.PI * 2);
      this.sandCtx.fill();
      this.sandCtx.restore();

      // Color darkening — subtle wet mark
      this.colorCtx.save();
      this.colorCtx.translate(cx, cy);
      this.colorCtx.rotate(Math.random() * 0.5 - 0.25);
      this.colorCtx.scale(1, 1.8);

      const cGrad = this.colorCtx.createRadialGradient(0, 0, 0, 0, 0, 3);
      cGrad.addColorStop(0, 'rgba(160, 120, 75, 0.5)');
      cGrad.addColorStop(1, 'rgba(160, 120, 75, 0)');
      this.colorCtx.fillStyle = cGrad;
      this.colorCtx.beginPath();
      this.colorCtx.arc(0, 0, 3, 0, Math.PI * 2);
      this.colorCtx.fill();
      this.colorCtx.restore();
    }

    this.sandTexture.needsUpdate = true;
    this.colorTexture.needsUpdate = true;
    this.lastFootprintPos.copy(worldPos);
  }

  // ─── UPDATE LOOP ────────────────────────────────────────────────

  update(dt, time) {
    // Ocean shader time
    if (this.ocean && this.ocean.material.uniforms) {
      this.ocean.material.uniforms.time.value = time;
    }

    // ─── FOOTPRINT FADE ───────────────────────────────────────────
    // Gradually paint base color back over canvases so prints fade in ~4s
    this._fadeTimer = (this._fadeTimer || 0) + dt;
    if (this._fadeTimer > 0.3) {
      this._fadeTimer = 0;

      // Fade bump map toward black (no displacement)
      this.sandCtx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      this.sandCtx.fillRect(0, 0, 1024, 1024);
      this.sandTexture.needsUpdate = true;

      // Fade color map toward base sand color
      this.colorCtx.fillStyle = 'rgba(212, 168, 106, 0.08)'; // #d4a86a base sand
      this.colorCtx.fillRect(0, 0, 1024, 1024);
      this.colorTexture.needsUpdate = true;
    }

    // Seagulls
    for (const g of this.seagulls) {
      const t = time * g.orbitS + g.phase;
      g.group.position.x = g.cx + Math.cos(t) * g.orbitR;
      g.group.position.z = g.cz + Math.sin(t) * g.orbitR;
      g.group.position.y = g.h + Math.sin(t * 2) * 3;
      g.group.rotation.y = -t + Math.PI / 2;
      const wing = Math.sin(time * 4 + g.phase) * 0.35;
      g.leftWing.rotation.x = wing;
      g.rightWing.rotation.x = -wing;
    }

    // Grass wind sway (GPU)
    if (this.grassShader) {
      this.grassShader.uniforms.time.value = time;
    }
  }
}
