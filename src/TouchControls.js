/**
 * TouchControls.js — Mobile / tablet input handler.
 *
 * Bridges touch events into the existing InputManager + game callbacks
 * without requiring pointer lock. Supports up to 3 simultaneous touches:
 *  - left joystick (movement, analog; far from centre = sprint)
 *  - right look pad (camera rotation, treated as mouse delta)
 *  - any number of action buttons (fire, jump, burst, pause)
 *
 * The HTML markup lives in index.html under #mobile-controls. This class
 * binds the listeners and wires them into InputManager state. Desktop is
 * untouched: TouchControls is only constructed when touch is detected.
 */

const DEAD_ZONE = 0.12;       // joystick magnitude below this → no movement
const SPRINT_THRESHOLD = 0.85; // magnitude above this → sprint

export class TouchControls {
  constructor(input, opts = {}) {
    this.input = input;
    this.onPause = opts.onPause || (() => {});
    this.onSandBurst = opts.onSandBurst || (() => {});
    // Mobile fingers travel fewer pixels than a desktop mouse, so the
    // base sensitivity is bumped well above 1.0. The acceleration curve in
    // the move handler gives flicks an extra punch on top of this.
    this.lookSensitivity = opts.lookSensitivity || 3.0;

    // Per-touch state, keyed by touch identifier
    this._touches = {}; // id → { kind: 'move'|'look', startX, startY, lastX, lastY, baseRect }

    // Current move-stick offsets (in px, clamped to maxRadius)
    this._moveDX = 0;
    this._moveDY = 0;
    this._maxMoveRadius = 56;

    this._bindEvents();
  }

  _el(id) { return document.getElementById(id); }

  _bindEvents() {
    const moveBase = this._el('move-stick-base');
    const lookArea = this._el('look-area');
    const fireBtn  = this._el('btn-fire');
    const jumpBtn  = this._el('btn-jump');
    const burstBtn = this._el('btn-burst');
    const pauseBtn = this._el('btn-pause');

    if (!moveBase || !lookArea) {
      console.warn('[TouchControls] mobile UI elements missing');
      return;
    }

    // ─── Move joystick ──────────────────────────────────────
    moveBase.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      for (const t of e.changedTouches) {
        if (this._anyKind('move')) continue; // only one move touch
        const rect = moveBase.getBoundingClientRect();
        this._touches[t.identifier] = {
          kind: 'move',
          baseX: rect.left + rect.width / 2,
          baseY: rect.top + rect.height / 2
        };
        this._updateMoveFromTouch(t);
      }
    }, { passive: false });

    // ─── Look pad ───────────────────────────────────────────
    lookArea.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      for (const t of e.changedTouches) {
        if (this._anyKind('look')) continue; // only one look touch
        this._touches[t.identifier] = {
          kind: 'look',
          lastX: t.clientX,
          lastY: t.clientY
        };
      }
    }, { passive: false });

    // ─── Global touchmove + touchend (track by id) ──────────
    const moveHandler = (e) => {
      let consumed = false;
      for (const t of e.changedTouches) {
        const data = this._touches[t.identifier];
        if (!data) continue;
        consumed = true;
        if (data.kind === 'move') {
          this._updateMoveFromTouch(t);
        } else if (data.kind === 'look') {
          const dx = t.clientX - data.lastX;
          const dy = t.clientY - data.lastY;
          data.lastX = t.clientX;
          data.lastY = t.clientY;

          // Combined distance + intensity scaling:
          // - base sensitivity multiplies every pixel of drag (distance feel)
          // - a per-frame magnitude boost gives flicks extra turn on top
          //   (intensity feel — fast swipe rotates much further than a slow
          //   drag of the same total distance, like CoD/PUBG mobile)
          const stepLen = Math.sqrt(dx * dx + dy * dy);
          const flickBoost = 1 + Math.min(2, stepLen / 30); // 1× → 3×

          // Feed into InputManager's accumulated mouse delta — same path
          // the desktop pointer-lock mousemove uses. mouse.locked is set
          // true so Camera.update() will read from this delta.
          this.input._mouseDeltaX += dx * this.lookSensitivity * flickBoost;
          this.input._mouseDeltaY += dy * this.lookSensitivity * flickBoost;
          this.input.mouse.locked = true;
        }
      }
      if (consumed) e.preventDefault();
    };

    const endHandler = (e) => {
      for (const t of e.changedTouches) {
        const data = this._touches[t.identifier];
        if (!data) continue;
        if (data.kind === 'move') {
          this._moveDX = 0;
          this._moveDY = 0;
          this.input.analogMove = null;
          this.input._touchSprint = false;
          this._renderKnob();
        }
        delete this._touches[t.identifier];
      }
    };

    document.addEventListener('touchmove', moveHandler, { passive: false });
    document.addEventListener('touchend', endHandler, { passive: false });
    document.addEventListener('touchcancel', endHandler, { passive: false });

    // ─── Action buttons ─────────────────────────────────────
    const bindHold = (btn, downFn, upFn) => {
      if (!btn) return;
      btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        btn.classList.add('pressed');
        downFn();
      }, { passive: false });
      const release = (e) => {
        btn.classList.remove('pressed');
        if (upFn) upFn();
      };
      btn.addEventListener('touchend', release, { passive: false });
      btn.addEventListener('touchcancel', release, { passive: false });
    };

    bindHold(
      fireBtn,
      () => { this.input.mouse.leftDown = true; },
      () => { this.input.mouse.leftDown = false; }
    );

    bindHold(
      jumpBtn,
      () => {
        if (!this.input.keys.space) {
          this.input._jumpRequested = true; // edge-triggered consume
        }
        this.input.keys.space = true;
      },
      () => { this.input.keys.space = false; }
    );

    if (burstBtn) {
      burstBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        burstBtn.classList.add('pressed');
        this.onSandBurst();
        setTimeout(() => burstBtn.classList.remove('pressed'), 120);
      }, { passive: false });
    }

    if (pauseBtn) {
      pauseBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.onPause();
      }, { passive: false });
    }
  }

  _anyKind(kind) {
    for (const id in this._touches) {
      if (this._touches[id].kind === kind) return true;
    }
    return false;
  }

  _updateMoveFromTouch(touch) {
    // Find this touch's saved data
    const data = this._touches[touch.identifier];
    if (!data) return;
    let dx = touch.clientX - data.baseX;
    let dy = touch.clientY - data.baseY;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len > this._maxMoveRadius) {
      dx = (dx / len) * this._maxMoveRadius;
      dy = (dy / len) * this._maxMoveRadius;
    }
    this._moveDX = dx;
    this._moveDY = dy;
    const nx = dx / this._maxMoveRadius;
    const nz = dy / this._maxMoveRadius;
    const magnitude = Math.min(1, len / this._maxMoveRadius);

    if (magnitude < DEAD_ZONE) {
      this.input.analogMove = null;
      this.input._touchSprint = false;
    } else {
      this.input.analogMove = { x: nx, z: nz, magnitude };
      this.input._touchSprint = magnitude > SPRINT_THRESHOLD;
    }
    this._renderKnob();
  }

  _renderKnob() {
    const knob = this._el('move-stick-knob');
    if (!knob) return;
    knob.style.transform =
      `translate(calc(-50% + ${this._moveDX}px), calc(-50% + ${this._moveDY}px))`;
  }
}
