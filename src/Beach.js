import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class Beach {
  constructor() {
    this.group = new THREE.Group();
    this.loader = new GLTFLoader();

    // Core game state
    this.components = {
      trees: [],
      rocks: [],
      crab: null,
      sand: null,
      ocean: null,
      mixers: []
    };

    // Physics Colliders [ {x, z, r} ]
    this.colliders = [];

    // Footprint tracking
    this.lastFootprintPos = new THREE.Vector3(0, 0, 0);

    // Mouse Tracking
    this.cameraAngles = { yaw: 0, pitch: 0.2 };

    // Attempt pointer lock on canvas click
    document.addEventListener('click', () => {
      if (!document.pointerLockElement) {
        document.body.requestPointerLock();
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement) {
        this.cameraAngles.yaw -= e.movementX * 0.003;
        // Restrict pitch so camera doesn't flip or go under ground
        this.cameraAngles.pitch -= e.movementY * 0.003;
        this.cameraAngles.pitch = Math.max(0.1, Math.min(Math.PI / 2.5, this.cameraAngles.pitch));
      }
    });

    // Input tracking for WASD
    this.keys = { w: false, a: false, s: false, d: false };
    window.addEventListener('keydown', (e) => {
      if (this.keys.hasOwnProperty(e.key.toLowerCase())) this.keys[e.key.toLowerCase()] = true;
    });
    window.addEventListener('keyup', (e) => {
      if (this.keys.hasOwnProperty(e.key.toLowerCase())) this.keys[e.key.toLowerCase()] = false;
    });

    this._buildSand();
    this._buildOcean();
    this._loadAssets();
  }

  // 1. Physically Reactive Sand Coastline
  _buildSand() {
    // Large coastal plane
    const geo = new THREE.PlaneGeometry(600, 600, 256, 256);
    geo.rotateX(-Math.PI / 2);

    // Sculpt the vertices to create a coastline:
    // Left side (-X): High grassy cliff/embankment
    // Middle (X=0): Flat sandy beach 
    // Right side (+X): Slopes down into the ocean
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);

      let y = 2.0; // Base beach level

      // Define the slope based on X position, with some wavey curves to the coastline
      const coastlineWobble = Math.sin(z * 0.05) * 15.0;
      const normalizedX = x + coastlineWobble;

      if (normalizedX < -30) {
        // Embankment / Cliff rising up exponentially
        y += Math.pow(Math.abs(normalizedX + 30) * 0.08, 1.8);
      } else if (normalizedX > 30) {
        // Sloping down into the water
        y -= (normalizedX - 30) * 0.15;
        // Floor it to avoid going endlessly deep
        if (y < -20) y = -20;
      }

      // Micro-dune noise
      y += Math.sin(x * 0.2) * 0.2 + Math.cos(z * 0.2) * 0.2;

      // Smooth out the crab's starting area explicitly so it doesn't spawn under ground
      if (Math.abs(x) < 10 && Math.abs(z - 20) < 10) {
        y = 2.0;
      }

      pos.setY(i, y);
    }
    geo.computeVertexNormals();

    // Setup Interactive Footprint Canvas
    this.sandCanvas = document.createElement('canvas');
    this.sandCanvas.width = 1024; // Optimized from 2048 to prevent memory drops
    this.sandCanvas.height = 1024;
    this.sandCtx = this.sandCanvas.getContext('2d');

    // Fill with Black (0 displacement)
    this.sandCtx.fillStyle = '#000000';
    this.sandCtx.fillRect(0, 0, 1024, 1024);

    this.sandTexture = new THREE.CanvasTexture(this.sandCanvas);
    this.sandTexture.anisotropy = 4; // Downgraded anisotropy for performance

    // Base color map canvas (also holds footprint darkening)
    const noiseCanvas = document.createElement('canvas');
    noiseCanvas.width = 1024;
    noiseCanvas.height = 1024;
    this.colorCtx = noiseCanvas.getContext('2d');

    // Fill with base warm sand color
    this.colorCtx.fillStyle = '#d2b48c'; // Restored rich, warm sand color
    this.colorCtx.fillRect(0, 0, 1024, 1024);

    // Add dense procedural sand grain over the whole surface
    for (let x = 0; x < 1024; x++) {
      for (let y = 0; y < 1024; y++) {
        if (Math.random() > 0.6) {
          // High frequency high contrast grain
          this.colorCtx.fillStyle = Math.random() > 0.5 ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)';
          this.colorCtx.fillRect(x, y, 1, 1);
        }
      }
    }

    this.colorTexture = new THREE.CanvasTexture(noiseCanvas);
    this.colorTexture.anisotropy = 4;

    // Upgrade to per-pixel Bump Mapping for high-fidelity sand textures and footprint depth
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffffff, // White because the map holds the color now
      roughness: 0.95,
      metalness: 0.1,
      map: this.colorTexture,
      bumpMap: this.sandTexture, // Generates per-pixel shadows based on footprints!
      bumpScale: 5.0 // High contrast indentations
    });

    this.components.sand = new THREE.Mesh(geo, mat);
    this.components.sand.receiveShadow = true;
    this.group.add(this.components.sand);

    this._spawnProceduralRocks();
  }

  // Generate beautiful low-poly styled stones scattered on out-spread shoreline
  _spawnProceduralRocks() {
    const rockGeo = new THREE.DodecahedronGeometry(1, 1);
    const rockMat = new THREE.MeshStandardMaterial({
      color: 0x5a5f66,
      roughness: 0.9,
      metalness: 0.3
    });

    // Scatter 60 rocks over a wider area
    for (let i = 0; i < 60; i++) {
      const rock = new THREE.Mesh(rockGeo, rockMat);

      let rx = (Math.random() < 0.5) ? (30 + Math.random() * 80) : (-50 - Math.random() * 30);
      let rz = -200 + Math.random() * 400;

      const coastlineWobble = Math.sin(rz * 0.05) * 15.0;
      let ry = 2.0;
      const nx = rx + coastlineWobble;
      if (nx < -30) ry += Math.pow(Math.abs(nx + 30) * 0.08, 1.8);
      else if (nx > 30) ry -= (nx - 30) * 0.15;

      rock.position.set(rx, ry - 0.5, rz);

      const scale = 2.0 + Math.random() * 8.0;
      rock.scale.set(scale, scale, scale);

      rock.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      rock.castShadow = true;
      rock.receiveShadow = true;

      this.group.add(rock);
      this.components.rocks.push(rock);

      this.colliders.push({ x: rx, z: rz, radius: scale * 0.8 });
    }
  }

  // 2. Advanced Procedural Water Shader
  _buildOcean() {
    // High res geometry for vertex waves
    const geo = new THREE.PlaneGeometry(800, 800, 256, 256);
    geo.rotateX(-Math.PI / 2);

    // Shader with procedural noise for normals and displacement
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        waterColor: { value: new THREE.Color(0x006994) }, // Deep sea
        foamColor: { value: new THREE.Color(0xdffff) }, // Cyan/White foam
        sunDirection: { value: new THREE.Vector3(100, 150, -100).normalize() }
      },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec3 vNormal;
        
        // Pseudo-random function
        float hash(float n) { return fract(sin(n) * 43758.5453123); }
        float noise(vec2 x) {
          vec2 p = floor(x); vec2 f = fract(x);
          f = f*f*(3.0-2.0*f);
          float n = p.x + p.y*57.0;
          return mix(mix(hash(n+0.0), hash(n+1.0),f.x), mix(hash(n+57.0), hash(n+58.0),f.x),f.y);
        }
        varying float vElevation;
        
        void main() {
          vUv = uv;
          vec3 pos = position;
          vec4 worldPos = modelMatrix * vec4(pos, 1.0);
          
          // Complex wave calculation - Elevation only (Normals calculate per-pixel now)
          float wave1 = sin(worldPos.x * 0.2 + time * 1.5) * cos(worldPos.z * 0.15 + time);
          float wave2 = sin(worldPos.x * 0.05 - time) * sin(worldPos.z * 0.08 + time * 0.8);
          float detailedWave = sin(worldPos.x * 1.5 + time * 3.0) * sin(worldPos.z * 1.2 - time * 2.0) * 0.1;
          
          vElevation = wave1 * 0.8 + wave2 * 1.5 + detailedWave;
          
          vec3 newPos = position;
          newPos.y += vElevation;
          
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * vec4(newPos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 waterColor;
        uniform vec3 foamColor;
        uniform float time;
        
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying float vElevation;

        void main() {
          // Per-Pixel Normal Calculation for perfectly smooth water (eliminates diamond artifacts)
          float dx = 0.2 * cos(vWorldPos.x * 0.2 + time * 1.5) * cos(vWorldPos.z * 0.15 + time) +
                     0.05 * cos(vWorldPos.x * 0.05 - time) * sin(vWorldPos.z * 0.08 + time * 0.8) +
                     1.5 * cos(vWorldPos.x * 1.5 + time * 3.0) * sin(vWorldPos.z * 1.2 - time * 2.0) * 0.1;
                     
          float dz = -0.15 * sin(vWorldPos.x * 0.2 + time * 1.5) * sin(vWorldPos.z * 0.15 + time) +
                      0.08 * sin(vWorldPos.x * 0.05 - time) * cos(vWorldPos.z * 0.08 + time * 0.8) -
                      1.2 * sin(vWorldPos.x * 1.5 + time * 3.0) * cos(vWorldPos.z * 1.2 - time * 2.0) * 0.1;
                      
          vec3 vNormal = normalize(vec3(-dx, 1.0, -dz));
          // Calculate distance from shoreline (X = 20 is the beach shore)
          // Smooth depth transition stretching 100 meters out to sea
          float shoreDist = clamp((vWorldPos.x - 20.0) / 100.0, 0.0, 1.0);
          
          // Ocean color palette
          vec3 shallowWaterColor = vec3(0.0, 0.8, 0.9); // Bright Cyan shore
          vec3 midWaterColor = vec3(0.0, 0.4, 0.8);     // Rich Blue
          vec3 deepWaterColor = vec3(0.0, 0.1, 0.4);    // Deep Navy
          
          // Blend base color purely on distance from shore, modified slightly by wave height so crests are brighter
          float depthFactor = clamp(shoreDist - vElevation * 0.1, 0.0, 1.0);
          vec3 baseColor = mix(shallowWaterColor, midWaterColor, min(1.0, depthFactor * 2.0));
          baseColor = mix(baseColor, deepWaterColor, max(0.0, depthFactor * 2.0 - 1.0));
          
          // Specular highlights (Sun reflection)
          vec3 lightDir = normalize(vec3(1.0, 1.5, -1.0)); // Match the sun direction
          vec3 viewDir = normalize(cameraPosition - vWorldPos);
          vec3 halfVector = normalize(lightDir + viewDir);
          
          // High-frequency glossy highlights (sun reflecting off waves)
          float specPow = max(0.0, dot(vNormal, halfVector));
          float highlight = pow(specPow, 150.0) * 2.5; 
          
          // Organic fluid caustics (replacing the grid/diamond pattern)
          vec2 p = vWorldPos.xz * 0.3; // Scale the caustics
          float c1 = sin(p.x + time) + sin(p.y - time);
          float c2 = sin(p.x * 0.7 - p.y * 0.6 + time * 1.5) * sin(p.x * 0.5 + p.y * 0.8 - time * 0.8);
          float caustic = smoothstep(0.0, 1.5, max(0.0, c1 + c2 * 2.0)) * 0.3;
          baseColor += caustic * shallowWaterColor * (1.0 - shoreDist) * 2.0; // Blend fluid lines into shore
          
          // Stylized shoreline foam edges
          float foamThickness = 0.5 + sin(time * 2.0 + vWorldPos.x * 0.5) * 0.2;
          float foamBlend = 1.0 - smoothstep(0.0, foamThickness, shoreDist * 10.0);
          vec3 foam = vec3(1.0) * foamBlend * (1.0 + highlight * 0.5); // Add bloom to foam
          
          gl_FragColor = vec4(baseColor + foam + vec3(highlight), 0.85); // Organic slight translucency
        }
      `,
      transparent: true
    });

    this.components.ocean = new THREE.Mesh(geo, mat);
    this.components.ocean.position.y = 1.0;

    this.group.add(this.components.ocean);
  }

  // 3. Asset Loading (Crab & Coconut Trees)
  _loadAssets() {
    const loadingManager = new THREE.LoadingManager();
    loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
    };
    loadingManager.onError = (url) => {
    };

    const loader = new GLTFLoader(loadingManager);

    // Load Protagonist (Crab)
    loader.load('./models/animated_crab.glb', (gltf) => {
      this.components.crab = gltf.scene;

      // Scale and position the crab in the center of the beach
      this.components.crab.scale.set(3, 3, 3);
      this.components.crab.position.set(0, 2.5, 40);
      this.components.crab.rotation.y = Math.PI; // Face the ocean (-Z)

      // Enable Shadows
      this.components.crab.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      this.group.add(this.components.crab);

      // Play internal animations if the crab has them
      if (gltf.animations && gltf.animations.length > 0) {
        const mixer = new THREE.AnimationMixer(this.components.crab);
        const action = mixer.clipAction(gltf.animations[0]);
        action.play();
        this.components.mixers.push(mixer);
      }

    });

    // Load Environment (Coconut Trees)
    loader.load('./models/coconut_tree.glb', (gltf) => {
      // Spawn a huge jungle canopy on the left cliff structure using multiple trees
      // Significantly reduced tree count to avoid crowded chunks of shadows!
      for (let i = 0; i < 12; i++) {
        const tree = gltf.scene.clone();

        // Spread trees from the deep cliff edge all the way down closer to the flat sand
        const x = -20 - Math.random() * 50;
        // Spread trees hugely across the entire Z length of the beach
        const z = -200 + Math.random() * 400;

        const coastlineWobble = Math.sin(z * 0.05) * 15.0;
        const nx = x + coastlineWobble;

        // Calculate the height the same way as the sand terrain
        let y = 2.0;
        if (nx < -30) y += Math.pow(Math.abs(nx + 30) * 0.08, 1.8);
        y += Math.sin(x * 0.2) * 0.2 + Math.cos(z * 0.2) * 0.2;

        tree.position.set(x, y - 1.0, z); // Bury roots deep

        // Random rotation and varied ENORMOUS scale
        tree.rotation.y = Math.random() * Math.PI * 2;
        tree.rotation.z = (Math.random() - 0.5) * 0.2; // Slight lean
        const scale = 15.0 + Math.random() * 10.0; // Trees are massive
        tree.scale.set(scale, scale, scale);

        tree.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            // Hack to make leaves double-sided if they are transparent
            if (child.material) {
              child.material.side = THREE.DoubleSide;
              child.material.alphaTest = 0.5;
            }
          }
        });

        this.components.trees.push(tree);
        this.group.add(tree);

        // Add Collider so Crab cannot walk into the forest wall
        // Reduced the radius heavily so Crab can comfortably navigate between trees
        this.colliders.push({ x: x, z: z, radius: scale * 0.4 });
      }
    });
  }

  // Update loop for shaders and animations
  update(dt, time) {
    if (this.components.sand && this.components.sand.material.uniforms) {
      this.components.sand.material.uniforms.time.value = time;
    }

    if (this.components.ocean && this.components.ocean.material.uniforms) {
      this.components.ocean.material.uniforms.time.value = time;
    }

    // Crab Movement
    if (this.components.crab) {
      const speed = 25.0 * dt;
      let moved = false;

      // Calculate camera-relative movement vector
      let inputX = 0;
      let inputZ = 0;

      if (this.keys.w) inputZ -= 1;
      if (this.keys.s) inputZ += 1;
      if (this.keys.a) inputX -= 1;
      if (this.keys.d) inputX += 1;

      // Ensure input is magnitude 1 max
      if (inputX !== 0 || inputZ !== 0) {
        const length = Math.sqrt(inputX * inputX + inputZ * inputZ);
        inputX /= length;
        inputZ /= length;

        // Rotate input vector by Camera's Yaw
        const sinYaw = Math.sin(this.cameraAngles.yaw);
        const cosYaw = Math.cos(this.cameraAngles.yaw);

        // Note: -Z is forward in Three.js, so w input (-dz) rotated by yaw:
        let dx = (inputX * cosYaw - inputZ * sinYaw) * speed;
        let dz = (inputZ * cosYaw + inputX * sinYaw) * speed;

        let nx = this.components.crab.position.x + dx;
        let nz = this.components.crab.position.z + dz;

        // Get current slope and apply Gravity Slide Physics
        const wobble = Math.sin(nz * 0.05) * 15.0;
        const normalizedX = nx + wobble;

        // Calculate Slope (Height differential)
        // Shifted the slope trigger deep into the forest so player can navigate between trees
        let heightDifferential = 0;
        if (normalizedX < -32) {
          // Sharper exponential climb further up the hill
          heightDifferential = Math.pow(Math.abs(normalizedX + 32) * 0.1, 2.0);
        }

        // Gravity sliding logic: if slope is too intense, pull crab downhill (+X direction)
        if (heightDifferential > 0.8) {
          // Push crab towards the beach center (Gravity pull)
          nx += (heightDifferential * 0.5);
        }

        // Hard Environmental bounds! Ocean boundary
        if (nx > 80) nx = 80;   // Deep Ocean blocker
        if (nz < -250) nz = -250; // Map bounds
        if (nz > 250) nz = 250;

        // Apply Physics Collisions (Trees and Rocks)
        for (const col of this.colliders) {
          const dist = Math.sqrt((nx - col.x) ** 2 + (nz - col.z) ** 2);
          if (dist < col.radius + 3.0) { // 3.0 is Crab's body radius
            const angle = Math.atan2(nz - col.z, nx - col.x);
            nx = col.x + Math.cos(angle) * (col.radius + 3.0);
            nz = col.z + Math.sin(angle) * (col.radius + 3.0);
          }
        }

        this.components.crab.position.x = nx;
        this.components.crab.position.z = nz;

        // Rotate crab to face actual movement direction
        const targetAngle = Math.atan2(dx, dz);

        // Smooth rotation
        let currentRotation = this.components.crab.rotation.y;
        let angleDiff = targetAngle - currentRotation;

        // Normalize nearest turn angle
        while (angleDiff <= -Math.PI) angleDiff += Math.PI * 2;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;

        this.components.crab.rotation.y += angleDiff * 0.15;

        moved = true;
      }

      // Lock crab to sand height
      const cx = this.components.crab.position.x;
      const cz = this.components.crab.position.z;

      const coastlineWobble = Math.sin(cz * 0.05) * 15.0;
      const nx = cx + coastlineWobble;

      let groundY = 2.0;
      if (nx < -30) groundY += Math.pow(Math.abs(nx + 30) * 0.08, 1.8);
      else if (nx > 30) groundY -= (nx - 30) * 0.15;

      groundY += Math.sin(cx * 0.2) * 0.2 + Math.cos(cz * 0.2) * 0.2;

      // Flatten spawn area
      if (Math.abs(cx) < 10 && Math.abs(cz - 40) < 10) groundY = 2.0;

      // Procedural run bouncing if moving
      if (moved) {
        this.components.crab.position.y = groundY + Math.abs(Math.sin(time * 20)) * 0.5;
      } else {
        // Idle breathing
        this.components.crab.position.y = groundY + Math.sin(time * 3) * 0.1;
      }

      // Interactive Canvas Footprint Writing
      // Only draw a footprint if the crab moved sufficiently far from the last footprint
      if (moved) {
        const distFromLast = this.components.crab.position.distanceTo(this.lastFootprintPos);
        if (distFromLast > 1.5) {
          // Convert Crab World Position to Canvas Pixel Coordinates (1024 resolution)
          const pixelX = Math.floor(((cx + 300) / 600) * 1024);
          const pixelY = Math.floor((1.0 - (cz + 300) / 600) * 1024);

          // Draw a soft white dot on the canvas (White = displacement)
          const grad = this.sandCtx.createRadialGradient(pixelX, pixelY, 0, pixelX, pixelY, 3);
          grad.addColorStop(0, 'rgba(255,255,255,0.5)'); // Soft indent
          grad.addColorStop(1, 'rgba(255,255,255,0)');
          this.sandCtx.fillStyle = grad;
          this.sandCtx.beginPath();
          this.sandCtx.arc(pixelX, pixelY, 3, 0, Math.PI * 2);
          this.sandCtx.fill();

          // Visual Color Map (Dark/wet sand)
          const cGrad = this.colorCtx.createRadialGradient(pixelX, pixelY, 0, pixelX, pixelY, 3);
          cGrad.addColorStop(0, 'rgba(128, 100, 71, 0.7)'); // Darker wet sand
          cGrad.addColorStop(1, 'rgba(128, 100, 71, 0)');
          this.colorCtx.fillStyle = cGrad;
          this.colorCtx.beginPath();
          this.colorCtx.arc(pixelX, pixelY, 3, 0, Math.PI * 2);
          this.colorCtx.fill();

          // Tell ThreeJS the textures changed so it re-uploads to GPU
          this.sandTexture.needsUpdate = true;
          this.colorTexture.needsUpdate = true;

          this.lastFootprintPos.copy(this.components.crab.position);
        }
      }

      // Third-person Mouse Orbital camera
      if (this.cameraRef) {
        // Calculate camera position orbiting the crab
        const orbitRadius = 25;
        // The camera angle pitch rotates it upwards looking down
        // The camera yaw rotates it around the y axis
        const camX = cx - orbitRadius * Math.sin(this.cameraAngles.yaw) * Math.cos(this.cameraAngles.pitch);
        const camY = groundY + orbitRadius * Math.sin(this.cameraAngles.pitch) + 3;
        const camZ = cz + orbitRadius * Math.cos(this.cameraAngles.yaw) * Math.cos(this.cameraAngles.pitch);

        this.cameraRef.position.set(camX, camY, camZ);

        // Look at the crab slightly above its body
        this.cameraRef.lookAt(cx, groundY + 3.0, cz);
      }
    }

    // Update internal GLB animations
    for (const mixer of this.components.mixers) {
      mixer.update(dt);
    }
  }
}
