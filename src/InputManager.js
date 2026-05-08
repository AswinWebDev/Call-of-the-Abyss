/**
 * InputManager.js — Centralized input for Call Of The Abyss
 * Handles keyboard, mouse, and pointer lock in a single clean module.
 */

export class InputManager {
  constructor() {
    // Movement keys
    this.keys = {
      w: false, a: false, s: false, d: false,
      shift: false, space: false,
      e: false, r: false, q: false
    };

    // Mouse state
    this.mouse = {
      dx: 0, dy: 0,
      leftDown: false,
      rightDown: false,
      locked: false
    };

    // Accumulated mouse delta (consumed each frame)
    this._mouseDeltaX = 0;
    this._mouseDeltaY = 0;

    // Edge-triggered jump (one-shot per press, no auto-repeat)
    this._jumpRequested = false;

    // Touch-mode analog stick. Set by TouchControls to override the WASD
    // discrete vector with a continuous one. Null on desktop.
    this.analogMove = null;
    // Touch-mode sprint flag (TouchControls sets this from joystick magnitude)
    this._touchSprint = false;

    this._bindEvents();
  }

  _bindEvents() {
    // Keyboard
    window.addEventListener('keydown', (e) => {
      const key = e.key.toLowerCase();
      if (key in this.keys) this.keys[key] = true;
      if (key === ' ') {
        this.keys.space = true;
        e.preventDefault();
        // Edge-triggered jump (only on the actual key press, not auto-repeat)
        if (!e.repeat) this._jumpRequested = true;
      }
    });

    window.addEventListener('keyup', (e) => {
      const key = e.key.toLowerCase();
      if (key in this.keys) this.keys[key] = false;
      if (key === ' ') this.keys.space = false;
    });

    // Mouse movement (only in pointer lock)
    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement) {
        this._mouseDeltaX += e.movementX;
        this._mouseDeltaY += e.movementY;
        this.mouse.locked = true;
      }
    });

    // Mouse buttons
    document.addEventListener('mousedown', (e) => {
      if (e.button === 0) this.mouse.leftDown = true;
      if (e.button === 2) this.mouse.rightDown = true;
    });

    document.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.mouse.leftDown = false;
      if (e.button === 2) this.mouse.rightDown = false;
    });

    // Pointer lock change tracking
    document.addEventListener('pointerlockchange', () => {
      this.mouse.locked = !!document.pointerLockElement;
    });

    // Prevent context menu on right click
    document.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  /**
   * Call once per frame to read and reset mouse delta
   */
  consumeMouseDelta() {
    this.mouse.dx = this._mouseDeltaX;
    this.mouse.dy = this._mouseDeltaY;
    this._mouseDeltaX = 0;
    this._mouseDeltaY = 0;
  }

  /**
   * Returns movement vector {x, z, magnitude} from either:
   *  - touch joystick (analogMove), if active — analog magnitude 0..1
   *  - WASD keyboard otherwise — discrete magnitude (0 or 1)
   */
  getMovementInput() {
    if (this.analogMove && this.analogMove.magnitude > 0.05) {
      return {
        x: this.analogMove.x,
        z: this.analogMove.z,
        magnitude: this.analogMove.magnitude
      };
    }
    let x = 0, z = 0;
    if (this.keys.w) z -= 1;
    if (this.keys.s) z += 1;
    if (this.keys.a) x -= 1;
    if (this.keys.d) x += 1;

    const len = Math.sqrt(x * x + z * z);
    if (len > 0) { x /= len; z /= len; }
    return { x, z, magnitude: len > 0 ? 1 : 0 };
  }

  get isSprinting() {
    if (this._touchSprint) return true;
    return this.keys.shift;
  }

  get isShooting() {
    return this.mouse.leftDown;
  }

  get isJumping() {
    return this.keys.space;
  }

  /**
   * One-shot consume — returns true if the jump key was just pressed since the
   * last call. Resets internally so a held key won't fire repeatedly.
   */
  consumeJump() {
    const r = this._jumpRequested;
    this._jumpRequested = false;
    return r;
  }
}
