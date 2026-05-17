/**
 * Engine.js — High fidelity rendering core for Call Of The Abyss
 * Manages renderer, scene, lighting, sky dome, and the game loop glue.
 */
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

export class Engine {
  constructor(canvas) {
    this.canvas = canvas;
    this.time = 0;

    this._initRenderer();
    this._initScene();
    this._initCamera();
    this._initLighting();
    this._initPostProcessing();

    this.entities = [];
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance',
      stencil: false
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Cap pixel ratio at 1.5 to keep things sharp but prevent 4K retina blowouts.
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // AAA colour pipeline
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    // Shadows
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  _initPostProcessing() {
    const size = this.renderer.getDrawingBufferSize(new THREE.Vector2());
    const renderTarget = new THREE.WebGLRenderTarget(size.width, size.height, {
      type: THREE.HalfFloatType
    });
    
    this.composer = new EffectComposer(this.renderer, renderTarget);
    
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);
    
    // Resolution, strength, radius, threshold
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.25, // intensity
      0.8,  // radius
      0.9   // threshold
    );
    this.composer.addPass(bloomPass);

    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);
  }

  _initScene() {
    this.scene = new THREE.Scene();
    this._buildSkyDome();

    // Atmospheric fog blending into horizon
    this.scene.fog = new THREE.FogExp2(0xc8e0f0, 0.0015);
  }

  _buildSkyDome() {
    const skyGeo = new THREE.SphereGeometry(800, 32, 15);
    const skyMat = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(0x0066dd) },    // Vivid tropical sky
        horizonColor: { value: new THREE.Color(0x87CEEB) }, // Soft horizon
        bottomColor: { value: new THREE.Color(0xfff5d6) },  // Warm glow at base
        sunColor: { value: new THREE.Color(0xFFE4B5) },
        sunDirection: { value: new THREE.Vector3(0.4, 0.5, -0.3).normalize() },
        offset: { value: 20 },
        exponent: { value: 0.5 }
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        varying vec3 vDirection;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          vDirection = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        uniform vec3 bottomColor;
        uniform vec3 sunColor;
        uniform vec3 sunDirection;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        varying vec3 vDirection;

        void main() {
          float h = normalize(vWorldPosition + offset).y;
          float t = max(pow(max(h, 0.0), exponent), 0.0);

          // Three-way gradient: bottom → horizon → top
          vec3 color;
          if (t < 0.3) {
            color = mix(bottomColor, horizonColor, t / 0.3);
          } else {
            color = mix(horizonColor, topColor, (t - 0.3) / 0.7);
          }

          // Sun glow
          float sunDot = max(0.0, dot(vDirection, sunDirection));
          float sunGlow = pow(sunDot, 32.0) * 0.8;
          float sunDisc = pow(sunDot, 256.0) * 2.0;
          color += sunColor * (sunGlow + sunDisc);

          // Subtle warm haze near horizon
          float haze = exp(-abs(h) * 8.0) * 0.15;
          color += vec3(1.0, 0.9, 0.7) * haze;

          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false
    });

    const sky = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(sky);
    // Expose sky uniforms so other systems (e.g. boss storm) can mutate them
    this.skyUniforms = skyMat.uniforms;
  }

  _initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1200
    );
    this.camera.position.set(0, 10, 50);
  }

  _initLighting() {
    // 1. Hemisphere — sky/ground ambient (exposed so storm can shift it
    //    toward moonlit cool tones during a Cthulhu fight)
    this.hemiLight = new THREE.HemisphereLight(0x87CEEB, 0xc2b280, 1.0);
    this.hemiLight.position.set(0, 200, 0);
    this.scene.add(this.hemiLight);

    // 2. Sun (directional)
    this.sunLight = new THREE.DirectionalLight(0xfff4e5, 3.0);
    this.sunLight.position.set(150, 200, -80);
    this.sunLight.castShadow = true;

    // Shadow map — balanced quality vs performance
    this.sunLight.shadow.mapSize.width = 1024;
    this.sunLight.shadow.mapSize.height = 1024;
    this.sunLight.shadow.bias = -0.0004;
    this.sunLight.shadow.normalBias = 0.02;

    const shadowSize = 200;
    this.sunLight.shadow.camera.near = 10;
    this.sunLight.shadow.camera.far = 600;
    this.sunLight.shadow.camera.left = -shadowSize;
    this.sunLight.shadow.camera.right = shadowSize;
    this.sunLight.shadow.camera.top = shadowSize;
    this.sunLight.shadow.camera.bottom = -shadowSize;

    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    // 3. Soft ambient fill from below (sand bounce)
    const fillLight = new THREE.DirectionalLight(0xffeedd, 0.3);
    fillLight.position.set(-50, 5, 50);
    this.scene.add(fillLight);
  }

  add(entity) {
    this.entities.push(entity);
  }

  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.composer.setSize(window.innerWidth, window.innerHeight);
  }

  render(dt) {
    this.time += dt;

    // Update all entities
    for (const entity of this.entities) {
      if (entity.update) entity.update(dt, this.time);
    }

    // Very slow sun drift for dynamic shadows
    const driftSpeed = 0.005;
    this.sunLight.position.set(
      150 + Math.sin(this.time * driftSpeed) * 30,
      200,
      -80 + Math.cos(this.time * driftSpeed) * 80
    );

    this.composer.render();
  }
}
