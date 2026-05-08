/**
 * Physics.js — Cannon-es physics world for Call Of The Abyss
 * Handles rigid body creation, terrain heightfield, and sync with Three.js
 */
import * as CANNON from 'cannon-es';

export class Physics {
  constructor() {
    this.world = new CANNON.World({
      gravity: new CANNON.Vec3(0, -30, 0) // Strong gravity for snappy feel
    });

    // Solver settings for stable stacking and collisions
    this.world.solver.iterations = 10;
    this.world.broadphase = new CANNON.SAPBroadphase(this.world);
    this.world.allowSleep = true;

    // Material definitions
    this.groundMaterial = new CANNON.Material('ground');
    this.playerMaterial = new CANNON.Material('player');

    // Contact material — player on ground
    this.world.addContactMaterial(new CANNON.ContactMaterial(
      this.groundMaterial,
      this.playerMaterial,
      {
        friction: 0.4,
        restitution: 0.0 // No bouncing
      }
    ));

    // Track bodies for sync
    this.syncPairs = []; // [{body, mesh}]
  }

  /**
   * Step the physics simulation
   */
  update(dt) {
    // Fixed timestep with interpolation
    this.world.step(1 / 60, dt, 3);
  }

  /**
   * Create a static ground plane from terrain height data
   */
  createTerrainBody(heightData, sizeX, sizeZ, segmentsX, segmentsZ) {
    const heightfield = new CANNON.Heightfield(heightData, {
      elementSize: sizeX / segmentsX
    });

    const body = new CANNON.Body({
      mass: 0, // Static
      material: this.groundMaterial,
      shape: heightfield,
    });

    // Cannon heightfields are oriented differently — rotate and position
    body.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    body.position.set(
      -sizeX / 2,
      0,
      sizeZ / 2
    );

    this.world.addBody(body);
    return body;
  }

  /**
   * Create a simple static ground plane (fallback)
   */
  createGroundPlane(y = 0) {
    const body = new CANNON.Body({
      mass: 0,
      material: this.groundMaterial,
      shape: new CANNON.Plane()
    });
    body.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    body.position.y = y;
    this.world.addBody(body);
    return body;
  }

  /**
   * Create a player capsule body (sphere + cylinder approximation)
   */
  createPlayerBody(position = { x: 0, y: 5, z: 40 }) {
    const radius = 2.0;
    const body = new CANNON.Body({
      mass: 5,
      material: this.playerMaterial,
      fixedRotation: true, // Don't let the crab tumble
      linearDamping: 0.9,  // Quick deceleration
      shape: new CANNON.Sphere(radius)
    });

    body.position.set(position.x, position.y, position.z);

    this.world.addBody(body);
    return body;
  }

  /**
   * Create a static sphere collider (for rocks)
   */
  createStaticSphere(x, y, z, radius) {
    const body = new CANNON.Body({
      mass: 0,
      material: this.groundMaterial,
      shape: new CANNON.Sphere(radius)
    });
    body.position.set(x, y, z);
    this.world.addBody(body);
    return body;
  }

  /**
   * Create a static cylinder (for tree trunks)
   */
  createStaticCylinder(x, y, z, radius, height) {
    const body = new CANNON.Body({
      mass: 0,
      material: this.groundMaterial,
      shape: new CANNON.Cylinder(radius, radius, height, 8)
    });
    body.position.set(x, y + height / 2, z);
    this.world.addBody(body);
    return body;
  }

  /**
   * Register a body-mesh pair for automatic position sync
   */
  addSyncPair(body, mesh) {
    this.syncPairs.push({ body, mesh });
  }

  /**
   * Sync all registered Three.js meshes with their physics bodies
   */
  syncMeshes() {
    for (const pair of this.syncPairs) {
      pair.mesh.position.copy(pair.body.position);
      pair.mesh.quaternion.copy(pair.body.quaternion);
    }
  }
}
