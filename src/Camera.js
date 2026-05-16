/**
 * Camera.js — Spring-damped third-person camera with collision avoidance
 */
import * as THREE from 'three';

export class Camera {
  constructor(threeCamera, input) {
    this.camera = threeCamera;
    this.input = input;

    // Orbital angles
    this.yaw = 0;
    this.pitch = 0.35; // Start slightly above

    // Camera distance
    this.baseDistance = 22;
    this.currentDistance = 22;
    this.minDistance = 5;
    this.maxDistance = 35;

    // Spring-damped position for smooth follow
    this.currentPos = new THREE.Vector3();
    this.targetPos = new THREE.Vector3();

    // Camera settings
    this.mouseSensitivity = 0.003;
    this.pitchMin = -0.05; // Allow looking slightly up (camera drops close to ground)
    this.pitchMax = Math.PI / 6; // Restrict looking down to roughly 40 degrees, preventing top-down view
    this.smoothness = 8.0; // Higher = snappier camera
    this.heightOffset = 3.5; // Look above the crab

    // Collision raycaster
    this.raycaster = new THREE.Raycaster();
    this.collisionLayers = []; // Meshes to check collision against
  }

  /**
   * Register objects the camera should not clip through
   */
  addCollisionObject(mesh) {
    this.collisionLayers.push(mesh);
  }

  /**
   * Update camera each frame
   * @param {number} dt - Delta time in seconds
   * @param {THREE.Vector3} targetWorldPos - The position to follow (crab position)
   */
  update(dt, targetWorldPos) {
    // Consume mouse input
    this.input.consumeMouseDelta();

    // Apply mouse look
    if (this.input.mouse.locked) {
      this.yaw += this.input.mouse.dx * this.mouseSensitivity;
      // Mouse down → look down (camera rises and tilts down at target)
      this.pitch += this.input.mouse.dy * this.mouseSensitivity;
      this.pitch = Math.max(this.pitchMin, Math.min(this.pitchMax, this.pitch));
    }

    // Calculate ideal camera position
    const cosP = Math.cos(this.pitch);
    const sinP = Math.sin(this.pitch);
    const sinY = Math.sin(this.yaw);
    const cosY = Math.cos(this.yaw);

    const idealX = targetWorldPos.x - this.baseDistance * sinY * cosP;
    const idealY = targetWorldPos.y + this.baseDistance * sinP + this.heightOffset;
    const idealZ = targetWorldPos.z + this.baseDistance * cosY * cosP;

    this.targetPos.set(idealX, idealY, idealZ);

    // Collision check — cast ray from target to ideal camera position
    const lookTarget = new THREE.Vector3(
      targetWorldPos.x,
      targetWorldPos.y + this.heightOffset,
      targetWorldPos.z
    );

    const direction = new THREE.Vector3().subVectors(this.targetPos, lookTarget).normalize();
    const maxDist = this.targetPos.distanceTo(lookTarget);

    this.raycaster.set(lookTarget, direction);
    this.raycaster.far = maxDist;
    this.raycaster.near = 0.1;

    if (this.collisionLayers.length > 0) {
      const hits = this.raycaster.intersectObjects(this.collisionLayers, true);
      if (hits.length > 0 && hits[0].distance < maxDist) {
        // Move camera in front of the obstacle
        const safeDistance = Math.max(this.minDistance, hits[0].distance - 1.0);
        const ratio = safeDistance / maxDist;
        this.targetPos.lerpVectors(lookTarget, this.targetPos, ratio);
      }
    }

    // Explicit ground collision check (O(1) math instead of heavy raycasting)
    if (this.world) {
      const groundY = this.world.getTerrainHeight(this.targetPos.x, this.targetPos.z);
      if (this.targetPos.y < groundY + 1.0) {
        this.targetPos.y = groundY + 1.0;
      }
    }

    // Spring-damped smooth follow
    const lerpFactor = 1.0 - Math.exp(-this.smoothness * dt);
    this.currentPos.lerp(this.targetPos, lerpFactor);

    // Apply
    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(lookTarget);
  }
}
