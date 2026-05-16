/**
 * AudioManager.js — Procedural sound design for Call Of The Abyss
 * All sounds generated via Web Audio API — zero file downloads.
 * Ocean waves, wind ambience, crab scuttle clicks.
 */
export class AudioManager {
  constructor() {
    this.ctx = null;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      // It starts in 'suspended' state without user interaction.
    } catch (e) {
      console.warn('Web Audio not supported:', e);
    }

    this.masterGain = null;
    this.initialized = false;

    // Sound nodes
    this.oceanGain = null;
    this.windGain = null;
    this.scuttleGain = null;

    // Loaded sound buffers
    this.gunBuffers = [null, null, null, null]; // pistol, shotgun, smg, heavy
    this.hitBuffer = null; // Still used for player taking damage maybe?
    this.reloadBuffer = null;

    // Realistic enemy sounds
    this.turtleHitBuffer = null;
    this.turtleAttackBuffer = null;
    this.turtleDieBuffer = null;

    this.bossHitBuffer = null;
    this.bossAttackBuffer = null;
    this.bossDieBuffer = null;

    // State
    this.isMoving = false;
    this._scuttleTimer = 0;
    this._wavePhase = 0;

    // Preload all audio files over the network immediately
    if (this.ctx) {
      this._loadSounds();
    }
  }

  /**
   * Must be called from a user gesture (click/keydown) per browser policy
   */
  init() {
    if (this.initialized || !this.ctx) return;

    // Master volume and Compressor (prevents radio static/clipping)
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0.7;

    this.compressor = this.ctx.createDynamicsCompressor();
    this.compressor.threshold.value = -12;
    this.compressor.knee.value = 10;
    this.compressor.ratio.value = 12;
    this.compressor.attack.value = 0.003;
    this.compressor.release.value = 0.25;

    // Soft-clipping WaveShaper after the compressor. Anything that *would*
    // clip the digital ceiling (overlapping shot tails, charger transients)
    // gets a smooth tanh roll-off instead of producing audible "krrr".
    this.softClip = this.ctx.createWaveShaper();
    {
      const N = 4096;
      const curve = new Float32Array(N);
      const drive = 0.95;
      for (let i = 0; i < N; i++) {
        const x = (i * 2) / (N - 1) - 1; // -1..+1 input
        curve[i] = Math.tanh(x * drive);
      }
      this.softClip.curve = curve;
      this.softClip.oversample = '4x';
    }

    this.masterGain.connect(this.compressor);
    this.compressor.connect(this.softClip);
    this.softClip.connect(this.ctx.destination);

    this._createOceanSound();
    this._createWindSound();
    this._createScuttleSystem();

    this.initialized = true;
    console.log('✓ Audio initialized');
  }

  // ─── OCEAN WAVES ──────────────────────────────────────────────

  _createOceanSound() {
    // White noise source → bandpass filter → gain modulation
    const bufferSize = this.ctx.sampleRate * 4; // 4 seconds of noise
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);

    // Pink-ish noise (weighted random for more bass)
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.05;
      b6 = white * 0.115926;
    }

    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;

    // Low-pass filter for deep ocean rumble
    const lowpass = this.ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 400;
    lowpass.Q.value = 0.7;

    // Second filter for distant waves
    const bandpass = this.ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = 200;
    bandpass.Q.value = 0.5;

    this.oceanGain = this.ctx.createGain();
    this.oceanGain.gain.value = 0.35;

    noiseSource.connect(lowpass);
    lowpass.connect(bandpass);
    bandpass.connect(this.oceanGain);
    this.oceanGain.connect(this.masterGain);

    noiseSource.start();

    // Modulate ocean volume for wave rhythm
    this._oceanLFO = this.ctx.createOscillator();
    this._oceanLFO.type = 'sine';
    this._oceanLFO.frequency.value = 0.15; // Slow wave rhythm
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 0.12; // Modulation depth
    this._oceanLFO.connect(lfoGain);
    lfoGain.connect(this.oceanGain.gain);
    this._oceanLFO.start();

    // Higher frequency wash layer (shore foam hiss)
    const foamSource = this.ctx.createBufferSource();
    foamSource.buffer = noiseBuffer;
    foamSource.loop = true;

    const foamFilter = this.ctx.createBiquadFilter();
    foamFilter.type = 'highpass';
    foamFilter.frequency.value = 2000;

    const foamGain = this.ctx.createGain();
    foamGain.gain.value = 0.06;

    foamSource.connect(foamFilter);
    foamFilter.connect(foamGain);
    foamGain.connect(this.masterGain);

    foamSource.start();

    // Foam LFO for wave crash timing
    const foamLFO = this.ctx.createOscillator();
    foamLFO.type = 'sine';
    foamLFO.frequency.value = 0.12;
    const foamLFOGain = this.ctx.createGain();
    foamLFOGain.gain.value = 0.04;
    foamLFO.connect(foamLFOGain);
    foamLFOGain.connect(foamGain.gain);
    foamLFO.start();
  }

  // ─── WIND AMBIENCE ────────────────────────────────────────────

  _createWindSound() {
    const bufferSize = this.ctx.sampleRate * 3;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.5;
    }

    const windSource = this.ctx.createBufferSource();
    windSource.buffer = noiseBuffer;
    windSource.loop = true;

    // Band-pass for whooshy wind feel
    const bp = this.ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 600;
    bp.Q.value = 0.3;

    this.windGain = this.ctx.createGain();
    this.windGain.gain.value = 0.08;

    windSource.connect(bp);
    bp.connect(this.windGain);
    this.windGain.connect(this.masterGain);
    windSource.start();

    // Slow modulation for wind gusts
    const windLFO = this.ctx.createOscillator();
    windLFO.type = 'sine';
    windLFO.frequency.value = 0.08; // Very slow gusts
    const windLFOGain = this.ctx.createGain();
    windLFOGain.gain.value = 0.05;
    windLFO.connect(windLFOGain);
    windLFOGain.connect(this.windGain.gain);
    windLFO.start();

    // Second LFO for random variation
    const windLFO2 = this.ctx.createOscillator();
    windLFO2.type = 'triangle';
    windLFO2.frequency.value = 0.03;
    const windLFO2Gain = this.ctx.createGain();
    windLFO2Gain.gain.value = 0.03;
    windLFO2.connect(windLFO2Gain);
    windLFO2Gain.connect(bp.frequency);
    windLFO2.start();
  }

  // ─── CRAB SCUTTLE SOUNDS ──────────────────────────────────────

  _createScuttleSystem() {
    // Pre-create a reusable noise buffer for sand shuffling
    const bufLen = Math.floor(this.ctx.sampleRate * 0.08); // 80ms — soft shuffle
    this._shuffleBuffer = this.ctx.createBuffer(1, bufLen, this.ctx.sampleRate);
    const d = this._shuffleBuffer.getChannelData(0);
    for (let i = 0; i < bufLen; i++) {
      // Gentle noise with smooth envelope (not sharp attack)
      const env = Math.sin((i / bufLen) * Math.PI); // Bell curve — soft in, soft out
      d[i] = (Math.random() * 2 - 1) * env * 0.3;
    }
  }

  /**
   * Play a soft sand shuffle — muffled, low-frequency, like legs brushing sand
   */
  _playScuttleTap() {
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    const src = this.ctx.createBufferSource();
    src.buffer = this._shuffleBuffer;

    // Low-pass filter — muffled sand sound (NO highpass = no sharp click)
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 300 + Math.random() * 200; // 300-500Hz — very muffled
    lp.Q.value = 0.5;

    // Gentle volume — quiet and subtle
    const tapGain = this.ctx.createGain();
    tapGain.gain.setValueAtTime(0.06 + Math.random() * 0.03, now);
    tapGain.gain.linearRampToValueAtTime(0.0, now + 0.08);

    src.connect(lp);
    lp.connect(tapGain);
    tapGain.connect(this.masterGain);

    src.start(now);
    src.stop(now + 0.08);
  }

  // ─── PUBLIC API ───────────────────────────────────────────────

  /**
   * Call every frame with movement state
   */
  update(dt, isMoving, isSprinting) {
    if (!this.initialized) return;

    this.isMoving = isMoving;

    // Crab scuttle — soft sand shuffles when moving
    if (isMoving) {
      const tapRate = isSprinting ? 0.09 : 0.14; // Slightly faster when sprinting
      this._scuttleTimer += dt;
      if (this._scuttleTimer > tapRate) {
        this._scuttleTimer = 0;
        this._playScuttleTap();
      }
    } else {
      this._scuttleTimer = 0;
    }
  }

  /**
   * Sync the Web Audio listener with the camera so PannerNodes pan correctly.
   * Call once per frame.
   */
  updateListener(camera) {
    if (!this.ctx || !this.ctx.listener || !camera) return;
    const L = this.ctx.listener;
    const cp = camera.position;

    // Camera forward in world space
    const fwd = this._listenerFwd || (this._listenerFwd = { x: 0, y: 0, z: -1 });
    // Reuse a temp vec3-like by reading from camera matrix
    // (avoids THREE import here — extract from matrixWorld col 2 negated)
    const m = camera.matrixWorld.elements;
    fwd.x = -m[8]; fwd.y = -m[9]; fwd.z = -m[10];

    if (L.positionX) {
      // Modern API (AudioParam)
      const t = this.ctx.currentTime;
      L.positionX.setValueAtTime(cp.x, t);
      L.positionY.setValueAtTime(cp.y, t);
      L.positionZ.setValueAtTime(cp.z, t);
      L.forwardX.setValueAtTime(fwd.x, t);
      L.forwardY.setValueAtTime(fwd.y, t);
      L.forwardZ.setValueAtTime(fwd.z, t);
      L.upX.setValueAtTime(0, t);
      L.upY.setValueAtTime(1, t);
      L.upZ.setValueAtTime(0, t);
    } else if (L.setPosition) {
      // Legacy API
      L.setPosition(cp.x, cp.y, cp.z);
      L.setOrientation(fwd.x, fwd.y, fwd.z, 0, 1, 0);
    }
  }

  /**
   * Build a 3D PannerNode tuned for our beach-scale world.
   */
  createPositionalPanner(x, y, z) {
    if (!this.ctx) return null;
    const p = this.ctx.createPanner();
    p.panningModel = 'HRTF';
    p.distanceModel = 'inverse';
    p.refDistance = 50;      // Full volume within 50 units (covers most of the beach)
    p.maxDistance = 250;
    p.rolloffFactor = 0.35;  // Gentle drop-off — distant enemies still clearly audible
    p.coneInnerAngle = 360;
    p.coneOuterAngle = 0;
    p.coneOuterGain = 0;
    if (p.positionX) {
      const t = this.ctx.currentTime;
      p.positionX.setValueAtTime(x, t);
      p.positionY.setValueAtTime(y, t);
      p.positionZ.setValueAtTime(z, t);
    } else if (p.setPosition) {
      p.setPosition(x, y, z);
    }
    return p;
  }

  /**
   * Set master volume (0 to 1)
   */
  setVolume(v) {
    if (this.masterGain) {
      this.masterGain.gain.value = Math.max(0, Math.min(1, v));
    }
  }

  /**
   * Resume audio context (needed after tab switch)
   */
  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // ─── GUN SOUND LOADING ─────────────────────────────────────────

  async _loadSounds() {
    const files = [
      './sounds/pistol.mp3',   // Tier 0
      './sounds/shotgun.mp3',  // Tier 1
      './sounds/smg.mp3',      // Tier 2
      './sounds/heavy.mp3',    // Tier 3
    ];

    for (let i = 0; i < files.length; i++) {
      try {
        const response = await fetch(files[i]);
        const arrayBuffer = await response.arrayBuffer();
        this.gunBuffers[i] = await this.ctx.decodeAudioData(arrayBuffer);
        console.log(`✓ Loaded gun sound: ${files[i]}`);
      } catch (e) {
        console.warn(`Failed to load ${files[i]}:`, e);
      }
    }

    // Hit sound
    try {
      const resp = await fetch('./sounds/hit.mp3');
      if (resp.ok) {
        const ab = await resp.arrayBuffer();
        this.hitBuffer = await this.ctx.decodeAudioData(ab);
        console.log('✓ Loaded hit sound');
      }
    } catch (e) {
      console.warn('Failed to load hit sound:', e);
    }

    // Reload sound
    try {
      const resp = await fetch('./sounds/reload.wav');
      if (resp.ok) {
        const ab = await resp.arrayBuffer();
        this.reloadBuffer = await this.ctx.decodeAudioData(ab);
        console.log('✓ Loaded reload sound');
      }
    } catch (e) {
      console.warn('Failed to load reload sound:', e);
    }

    // Load Realistic Enemy Sounds
    const enemyFiles = {
      'turtleHitBuffer': './sounds/turtle_hit.mp3',
      'turtleAttackBuffer': './sounds/turtle_attack.mp3',
      'turtleDieBuffer': './sounds/turtle_die.mp3',
      'bossHitBuffer': './sounds/boss_hit.mp3',
      'bossAttackBuffer': './sounds/boss_attack.mp3',
      'bossDieBuffer': './sounds/boss_die.mp3'
    };

    for (const [key, path] of Object.entries(enemyFiles)) {
      try {
        const response = await fetch(path);
        if (response.ok) {
          const arrayBuffer = await response.arrayBuffer();
          this[key] = await this.ctx.decodeAudioData(arrayBuffer);
          console.log(`✓ Loaded enemy sound: ${path}`);
        } else {
          console.warn(`Missing audio file: ${path}`);
        }
      } catch (e) {
        console.warn(`Failed to load ${path}:`, e);
      }
    }
  }

  // ─── COMBAT SOUNDS ──────────────────────────────────────────

  /**
   * Play real gun sound for the given tier
   */
  playShootSound(tier) {
    if (!this.ctx) return;
    const buffer = this.gunBuffers[tier];

    if (!buffer && tier === 1) {
      this._playProceduralShotgun();
      return;
    }

    if (!buffer) return;

    const src = this.ctx.createBufferSource();
    src.buffer = buffer;

    // Volume per tier — scaled to 70% of the previous mix
    const volumes = [0.35, 0.42, 0.245, 0.49];
    const v = volumes[tier] || 0.35;
    const gain = this.ctx.createGain();

    // For SMG, play faster (higher pitch = rapid fire feel)
    if (tier === 2) {
      src.playbackRate.value = 1.5;
    }

    // Cap each shot to prevent built-in MP3 tails from stacking when firing
    // rapidly. After the cap a quick fade-out kills the tail cleanly without
    // a click. This is what fixes the "krrr aftereffect" the player hears
    // once they stop firing — overlapping tails were summing into the
    // hard-clip ceiling.
    const now = this.ctx.currentTime;
    const HOLD = 0.18;   // 180ms of full-volume punch
    const FADE = 0.10;   // 100ms tail fade
    gain.gain.setValueAtTime(v, now);
    gain.gain.setValueAtTime(v, now + HOLD);
    gain.gain.linearRampToValueAtTime(0.0001, now + HOLD + FADE);

    src.connect(gain);
    gain.connect(this.masterGain);
    src.start(now);
    src.stop(now + HOLD + FADE + 0.02);
  }

  /**
   * Impact sound on enemy hit — using real MP3 files
   */
  playEnemyHitSound(isBoss) {
    if (!this.ctx) return;

    // Rate-limit. Without this, every projectile that lands triggers its own
    // hit sound — and because projectiles take 2-5s to fly, the hits land
    // long after the player has stopped firing. The result is the "ta ta ta"
    // decay tail. We collapse hits within a short window into one sound.
    const now = this.ctx.currentTime;
    const minGap = isBoss ? 0.05 : 0.07;
    if (this._lastHitTime && now - this._lastHitTime < minGap) return;
    this._lastHitTime = now;

    const buffer = isBoss ? this.bossHitBuffer : this.turtleHitBuffer;

    // Fallback if realistic sounds aren't loaded yet
    if (!buffer) {
      if (this.hitBuffer) {
        const src = this.ctx.createBufferSource();
        src.buffer = this.hitBuffer;
        src.playbackRate.value = isBoss ? 0.6 : 0.8 + Math.random() * 0.6;
        const gain = this.ctx.createGain();
        gain.gain.value = 0.4;
        src.connect(gain);
        gain.connect(this.masterGain);
        src.start();
      }
      return;
    }

    const src = this.ctx.createBufferSource();
    src.buffer = buffer;

    // Add slight random pitch variation so it doesn't sound repetitive
    src.playbackRate.value = 0.9 + Math.random() * 0.2;

    const gain = this.ctx.createGain();
    gain.gain.value = isBoss ? 0.8 : 0.5; // Boss hits are louder

    // Cap hit-sound playback so its own MP3 tail doesn't pile up either.
    const HOLD = 0.18;
    const FADE = 0.08;
    gain.gain.setValueAtTime(gain.gain.value, now);
    gain.gain.setValueAtTime(gain.gain.value, now + HOLD);
    gain.gain.linearRampToValueAtTime(0.0001, now + HOLD + FADE);

    src.connect(gain);
    gain.connect(this.masterGain);
    src.start(now);
    src.stop(now + HOLD + FADE + 0.02);
  }

  /**
   * Shell casing hitting the ground (reusing hit.mp3)
   * Only one shell sound can exist at a time — previous is cancelled.
   */
  playShellDropSound() {
    if (!this.ctx || !this.hitBuffer) return;

    // Stop any previously scheduled shell sound
    if (this._shellSource) {
      try { this._shellSource.stop(); } catch (e) { }
      this._shellSource = null;
    }

    const src = this.ctx.createBufferSource();
    src.buffer = this.hitBuffer;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;

    const gain = this.ctx.createGain();
    gain.gain.value = 0.3;
    src.connect(gain);
    gain.connect(this.masterGain);

    // Delay 0.4s to simulate the casing flying and hitting the ground
    src.start(this.ctx.currentTime + 0.4);
    this._shellSource = src;

    // Clear reference when done
    src.onended = () => {
      if (this._shellSource === src) this._shellSource = null;
    };
  }

  /**
   * One-shot splash — used when the crab first enters the water. A short
   * filtered noise burst (water rush) layered over a deep "plop" sine.
   */
  playSplashSound() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Noise burst (water rush)
    const bufLen = Math.floor(this.ctx.sampleRate * 0.5);
    const buf = this.ctx.createBuffer(1, bufLen, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) {
      // Front-loaded noise envelope so it sounds like a sudden splash
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufLen * 0.35));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buf;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(5000, now);
    filter.frequency.exponentialRampToValueAtTime(700, now + 0.28);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.55, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(now);
    noise.stop(now + 0.5);

    // Deep "plop" sine — gives the splash some body
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(280, now);
    osc.frequency.exponentialRampToValueAtTime(55, now + 0.18);
    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(0.45, now);
    oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
    osc.connect(oscGain);
    oscGain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.32);
  }

  /**
   * Water bubbling reload sound
   */
  playReloadSound() {
    if (!this.ctx || !this.reloadBuffer) return;

    const now = this.ctx.currentTime;
    // Don't restart the sound if we're already playing it within the last 0.9 seconds
    if (this._lastReloadTime && now - this._lastReloadTime < 0.9) return;
    this._lastReloadTime = now;

    const src = this.ctx.createBufferSource();
    src.buffer = this.reloadBuffer;
    src.playbackRate.value = 0.8 + Math.random() * 0.4; // vary pitch slightly

    const gain = this.ctx.createGain();
    gain.gain.value = 0.10; // 50% of the previous mix

    src.connect(gain);
    gain.connect(this.masterGain);

    src.start();
  }

  /**
   * Generic loader for a Cthulhu cinematic SFX (rise/death/etc.).
   * Idempotent — safe to call multiple times. Each entry is keyed by `key`
   * (used for buffer field, loading flag, pending flag) and points at the
   * audio file at `./models/dialogues/${file}`.
   */
  _preloadCthuluCinematic(key, file) {
    if (!this.ctx) return;
    const bufKey = `_${key}Buffer`;
    const loadKey = `_${key}Loading`;
    const pendingKey = `_${key}PlayPending`;
    if (this[bufKey] || this[loadKey]) return;
    this[loadKey] = true;

    fetch(`./models/dialogues/${file}`)
      .then(r => r.arrayBuffer())
      .then(ab => this.ctx.decodeAudioData(ab))
      .then(decoded => {
        this[bufKey] = decoded;
        this[loadKey] = false;
        if (this[pendingKey]) {
          this[pendingKey] = false;
          this._fireCthuluCinematic(key);
        }
      })
      .catch(err => {
        this[loadKey] = false;
        console.warn(`Failed to load ${file}:`, err);
      });
  }

  /**
   * Generic player — uses the same dry/wet feedback echo chain for any
   * Cthulhu cinematic moment (rise, death, …). Sets a per-key "active"
   * flag (`_<key>Active`) that DialogueManager and the enemy update loop
   * check to suppress competing dialogues during the moment.
   */
  _fireCthuluCinematic(key) {
    const bufKey = `_${key}Buffer`;
    const activeKey = `_${key}Active`;
    const timerKey = `_${key}EndTimer`;
    const buffer = this[bufKey];
    if (!this.ctx || !buffer || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Dry source
    const src = this.ctx.createBufferSource();
    src.buffer = buffer;

    // FULL VOLUME dry channel (same routing as death dialogue echo)
    const dryGain = this.ctx.createGain();
    dryGain.gain.value = 1.6;

    // Wet (echo) channel — feedback delay loop with lowpass to soften
    const delay = this.ctx.createDelay(2.0);
    delay.delayTime.value = 0.38;

    const feedback = this.ctx.createGain();
    feedback.gain.value = 0.55; // long, looming repeats

    const wetFilter = this.ctx.createBiquadFilter();
    wetFilter.type = 'lowpass';
    wetFilter.frequency.value = 1200; // dark/muffled echoes — abyssal feel

    const wetGain = this.ctx.createGain();
    wetGain.gain.value = 0.9;

    // Routing: src → dryGain → master
    //          src → delay → wetFilter → wetGain → master
    //          delay → feedback → delay (loop)
    src.connect(dryGain);
    dryGain.connect(this.masterGain);

    src.connect(delay);
    delay.connect(wetFilter);
    wetFilter.connect(wetGain);
    wetGain.connect(this.masterGain);
    delay.connect(feedback);
    feedback.connect(delay);

    src.start(now);

    // Allow echoes to ring out then fade wet to silence
    const dur = buffer.duration;
    const tail = 3.0;
    wetGain.gain.setValueAtTime(0.9, now + dur);
    wetGain.gain.linearRampToValueAtTime(0.0, now + dur + tail);

    // Lock other enemy dialogues out for the full duration + echo tail.
    this[activeKey] = true;
    if (this[timerKey]) clearTimeout(this[timerKey]);
    this[timerKey] = setTimeout(() => {
      this[activeKey] = false;
    }, (dur + tail) * 1000);
  }

  // ─── Cthulhu Rises (spawn) ──────────────────────────────────
  preloadCthuluRises() { this._preloadCthuluCinematic('cthuluRises', 'cthulu-rises.mp3'); }
  playCthuluRises() {
    if (!this.ctx) return;
    if (this._cthuluRisesBuffer) {
      this._fireCthuluCinematic('cthuluRises');
      return;
    }
    this._cthuluRisesPlayPending = true;
    if (!this._cthuluRisesLoading) this.preloadCthuluRises();
  }

  // ─── Cthulhu Dies (death) ───────────────────────────────────
  preloadCthuluDies() { this._preloadCthuluCinematic('cthuluDies', 'cthulu-dies.mp3'); }
  playCthuluDies() {
    if (!this.ctx) return;
    if (this._cthuluDiesBuffer) {
      this._fireCthuluCinematic('cthuluDies');
      return;
    }
    this._cthuluDiesPlayPending = true;
    if (!this._cthuluDiesLoading) this.preloadCthuluDies();
  }

  /**
   * Enemy attacks — realistic sound files
   */
  playEnemyAttackSound(isBoss) {
    if (!this.ctx) return;
    const buffer = isBoss ? this.bossAttackBuffer : this.turtleAttackBuffer;
    if (!buffer) return;

    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    src.playbackRate.value = 0.9 + Math.random() * 0.2;

    const gain = this.ctx.createGain();
    gain.gain.value = isBoss ? 0.9 : 0.6;

    src.connect(gain);
    gain.connect(this.masterGain);
    src.start();
  }

  // ─── RAGE SOUNDS ──────────────────────────────────────────────

  playRageResurrectSound() {
    if (!this.ctx) return;
    if (this._rageResurrectBuffer) {
      const src = this.ctx.createBufferSource();
      src.buffer = this._rageResurrectBuffer;
      const gain = this.ctx.createGain();
      gain.gain.value = 1.0;
      src.connect(gain);
      gain.connect(this.masterGain);
      src.start();
      return;
    }
    if (this._rageResurrectLoading) return;
    this._rageResurrectLoading = true;
    fetch("./models/dialogues/Back-from-the-deep-now-its-YOUR-turn.mp3")
      .then(r => r.arrayBuffer())
      .then(ab => this.ctx.decodeAudioData(ab))
      .then(b => {
        this._rageResurrectBuffer = b;
        this._rageResurrectLoading = false;
        this.playRageResurrectSound();
      }).catch(e => {
        this._rageResurrectLoading = false;
        console.warn('Failed to load rage resurrect sound', e);
      });
  }

  playRageEndSound() {
    if (!this.ctx) return;
    if (this._rageEndBuffer) {
      const src = this.ctx.createBufferSource();
      src.buffer = this._rageEndBuffer;
      const gain = this.ctx.createGain();
      gain.gain.value = 1.0;
      src.connect(gain);
      gain.connect(this.masterGain);
      src.start();
      return;
    }
    if (this._rageEndLoading) return;
    this._rageEndLoading = true;
    fetch("./models/dialogues/Alright-Alright-maybe-I-overdid-that.mp3")
      .then(r => r.arrayBuffer())
      .then(ab => this.ctx.decodeAudioData(ab))
      .then(b => {
        this._rageEndBuffer = b;
        this._rageEndLoading = false;
        this.playRageEndSound();
      }).catch(e => {
        this._rageEndLoading = false;
        console.warn('Failed to load rage end sound', e);
      });
  }

  playRageMusic() {
    if (!this.ctx) return;
    if (this._rageMusicSource) return; // Already playing

    if (this._rageMusicBuffer) {
      const src = this.ctx.createBufferSource();
      src.buffer = this._rageMusicBuffer;
      const gain = this.ctx.createGain();
      gain.gain.value = 1.0; // Full volume
      src.connect(gain);
      gain.connect(this.masterGain);
      
      const now = this.ctx.currentTime;
      src.start(now, 30.0); // Start at 30 seconds
      this._rageMusicSource = src;
      this._rageMusicGain = gain;
      return;
    }

    if (this._rageMusicLoading) return;
    this._rageMusicLoading = true;
    fetch("./sounds/alec_koff-epic-drums-tribal.ogg")
      .then(r => r.arrayBuffer())
      .then(ab => this.ctx.decodeAudioData(ab))
      .then(b => {
        this._rageMusicBuffer = b;
        this._rageMusicLoading = false;
        this.playRageMusic();
      }).catch(e => {
        this._rageMusicLoading = false;
        console.warn('Failed to load rage music', e);
      });
  }

  stopRageMusic() {
    if (this._rageMusicSource && this._rageMusicGain) {
      const now = this.ctx.currentTime;
      this._rageMusicGain.gain.linearRampToValueAtTime(0, now + 1.0);
      try {
        this._rageMusicSource.stop(now + 1.0);
      } catch (e) {}
      this._rageMusicSource = null;
    }
  }

  playRageResurrectSound() {
    if (!this.ctx) return;
    if (this._rageResurrectBuffer) {
      const src = this.ctx.createBufferSource();
      src.buffer = this._rageResurrectBuffer;
      const gain = this.ctx.createGain();
      gain.gain.value = 1.4; // Loud and clear
      src.connect(gain);
      gain.connect(this.masterGain);
      src.start();
      return;
    }
    if (this._rageResurrectLoading) return;
    this._rageResurrectLoading = true;
    fetch("./models/dialogues/Back-from-the-deep-now-its-YOUR-turn.mp3")
      .then(r => r.arrayBuffer())
      .then(ab => this.ctx.decodeAudioData(ab))
      .then(b => {
        this._rageResurrectBuffer = b;
        this._rageResurrectLoading = false;
        this.playRageResurrectSound();
      }).catch(e => {
        this._rageResurrectLoading = false;
        console.warn('Failed to load rage resurrect sound', e);
      });
  }

  /**
   * Enemy death — using real MP3 files
   */
  playEnemyDeathSound(isBoss) {
    if (!this.ctx) return;
    const buffer = isBoss ? this.bossDieBuffer : this.turtleDieBuffer;

    if (!buffer) {
      // Fallback artificial sound
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(isBoss ? 300 : 600, now);
      osc.frequency.exponentialRampToValueAtTime(isBoss ? 50 : 100, now + 0.2);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(isBoss ? 0.4 : 0.2, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.25);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.25);
      return;
    }

    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    src.playbackRate.value = 0.9 + Math.random() * 0.2;

    const gain = this.ctx.createGain();
    gain.gain.value = isBoss ? 1.0 : 0.35; // Boss death stays loud; turtle halved

    src.connect(gain);
    gain.connect(this.masterGain);
    src.start();
  }

  /**
   * Upgrade chime — ascending tones
   */
  playUpgradeSound() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const notes = [523, 659, 784]; // C5, E5, G5
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0, now + i * 0.1);
      gain.gain.linearRampToValueAtTime(0.12, now + i * 0.1 + 0.05);
      gain.gain.linearRampToValueAtTime(0, now + i * 0.1 + 0.2);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + i * 0.1);
      osc.stop(now + i * 0.1 + 0.25);
    });
  }

  // ─── PROCEDURAL WEAPON SOUNDS ──────────────────────────────────

  _playProceduralShotgun() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // 1. Noise burst (the blast)
    const bufferSize = this.ctx.sampleRate * 0.5;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuffer;

    // Filter sweep for punch
    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(2000, now);
    noiseFilter.frequency.exponentialRampToValueAtTime(100, now + 0.25);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(1.0, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    // 2. Punchy low oscillator (the kick of the gun)
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.1);

    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(0.8, now);
    oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);

    noise.start(now);
    osc.start(now);
    noise.stop(now + 0.4);
    osc.stop(now + 0.3);
  }

  playChargeSound(duration = 3.0) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(100, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + duration);

    const lfo = this.ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(5, now);
    lfo.frequency.linearRampToValueAtTime(25, now + duration);

    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 200;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.5, now + Math.max(0.05, duration - 0.05));
    // Final 50ms drops to near-zero so the oscillator can stop cleanly
    // without a click that lingers as a "krrr"-flavored aftereffect.
    gain.gain.linearRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    lfo.start(now);
    osc.stop(now + duration + 0.02);
    lfo.stop(now + duration + 0.02);

    this._currentChargeOsc = osc;
    this._currentChargeLfo = lfo;
    this._currentChargeGain = gain; // exposed so playDischargeSound can fade us
  }

  playDischargeSound(duration = 5.0) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    if (this._currentChargeOsc) {
      // Quick fade-out (30ms) instead of an immediate cut, so the
      // mid-charge release doesn't pop a click that turns into "krrr".
      try {
        if (this._currentChargeGain) {
          this._currentChargeGain.gain.cancelScheduledValues(now);
          this._currentChargeGain.gain.setValueAtTime(this._currentChargeGain.gain.value, now);
          this._currentChargeGain.gain.linearRampToValueAtTime(0.0001, now + 0.03);
        }
        this._currentChargeOsc.stop(now + 0.04);
        this._currentChargeLfo.stop(now + 0.04);
      } catch (e) { }
      this._currentChargeOsc = null;
      this._currentChargeLfo = null;
      this._currentChargeGain = null;
    }

    const bufferSize = this.ctx.sampleRate * duration;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(3000, now);
    filter.frequency.exponentialRampToValueAtTime(500, now + 0.5);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.8, now);
    gain.gain.setValueAtTime(0.8, now + duration - 1.0);
    gain.gain.linearRampToValueAtTime(0.01, now + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
    noise.stop(now + duration);
  }

  /**
   * Lazy-load the wave background drums. Called only when the game is about
   * to need them (e.g. when the boss model starts loading), so the initial
   * page load — including portal arrivals — never has to wait on this asset.
   * Idempotent: calling it twice will not re-fetch.
   */
  loadWaveDrums() {
    if (!this.ctx) return;
    if (this.waveDrumsBuffer || this._waveDrumsLoading) return;
    this._waveDrumsLoading = true;
    fetch('./sounds/alec_koff-epic-drums-tribal.ogg')
      .then(r => (r.ok ? r.arrayBuffer() : Promise.reject(new Error('HTTP ' + r.status))))
      .then(ab => this.ctx.decodeAudioData(ab))
      .then(buf => {
        this.waveDrumsBuffer = buf;
        this._waveDrumsLoading = false;
        console.log('✓ Loaded wave drums');
      })
      .catch(e => {
        this._waveDrumsLoading = false;
        console.warn('Failed to load wave drums:', e);
      });
  }

  /**
   * Wave background drums. Loops for the full duration of the wave with this
   * volume envelope:
   *   0.0s  → 0.00  (silent at start)
   *   0.4s  → 0.85  (very fast attack — loud intro)
   *   10s   → 0.85  (sustain at strong)
   *   25s   → 0.30  (fade down to background)
   *   55s   → 0.20  (settle to a quiet background level by the loop point)
   *   then  → 0.20  (loops indefinitely at 0.20 until stopWaveDrums())
   */
  playWaveDrums() {
    if (!this.ctx || !this.masterGain || !this.waveDrumsBuffer) return;
    if (this._waveDrumsSrc) return; // already playing

    const now = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.waveDrumsBuffer;
    src.loop = true; // keeps the music going past the file's ~1-min duration
    const gain = this.ctx.createGain();

    gain.gain.setValueAtTime(0.0, now);
    gain.gain.linearRampToValueAtTime(0.85, now + 0.4);
    gain.gain.setValueAtTime(0.85, now + 10.0);
    gain.gain.linearRampToValueAtTime(0.30, now + 25.0);
    gain.gain.linearRampToValueAtTime(0.20, now + 55.0);
    // Beyond 55s the gain holds at 0.20 while the buffer loops underneath.

    src.connect(gain);
    gain.connect(this.masterGain);
    src.start(now);

    this._waveDrumsSrc = src;
    this._waveDrumsGain = gain;
    src.onended = () => {
      if (this._waveDrumsSrc === src) {
        this._waveDrumsSrc = null;
        this._waveDrumsGain = null;
      }
    };
  }

  /**
   * Stop the wave drums with a quick fade-out (called when a wave ends).
   */
  stopWaveDrums() {
    if (!this._waveDrumsSrc || !this.ctx) return;
    const src = this._waveDrumsSrc;
    const gain = this._waveDrumsGain;
    const now = this.ctx.currentTime;
    try {
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(0.0, now + 0.6);
      src.stop(now + 0.65);
    } catch (e) { /* already stopping */ }
    this._waveDrumsSrc = null;
    this._waveDrumsGain = null;
  }

  /**
   * Death sequence audio: silences all ambient/music and plays the given decoded
   * AudioBuffer loud, with a long reverb-like echo (delay + feedback + lowpass).
   * Returns the duration in seconds (0 if no buffer).
   */
  playDeathDialogueWithEcho(buffer) {
    if (!this.ctx || !this.masterGain || !buffer) return 0;
    const now = this.ctx.currentTime;

    // Silence ocean / wind / scuttle so the death line stands alone
    const fadeOut = (gainNode) => {
      if (!gainNode) return;
      try {
        const cur = gainNode.gain.value;
        gainNode.gain.cancelScheduledValues(now);
        gainNode.gain.setValueAtTime(cur, now);
        gainNode.gain.linearRampToValueAtTime(0.0, now + 0.4);
      } catch (e) { /* noop */ }
    };
    fadeOut(this.oceanGain);
    fadeOut(this.windGain);
    fadeOut(this.scuttleGain);
    fadeOut(this._waveDrumsGain);

    // Dry source
    const src = this.ctx.createBufferSource();
    src.buffer = buffer;

    // Loud dry channel
    const dryGain = this.ctx.createGain();
    dryGain.gain.value = 1.4;

    // Wet (echo) channel — feedback delay loop with lowpass to soften
    const delay = this.ctx.createDelay(2.0);
    delay.delayTime.value = 0.38;

    const feedback = this.ctx.createGain();
    feedback.gain.value = 0.55; // long, looming repeats

    const wetFilter = this.ctx.createBiquadFilter();
    wetFilter.type = 'lowpass';
    wetFilter.frequency.value = 1200; // dark/muffled echoes

    const wetGain = this.ctx.createGain();
    wetGain.gain.value = 0.9;

    // Routing: src → dryGain → master
    //          src → delay → wetFilter → wetGain → master
    //          delay → feedback → delay (loop)
    src.connect(dryGain);
    dryGain.connect(this.masterGain);

    src.connect(delay);
    delay.connect(wetFilter);
    wetFilter.connect(wetGain);
    wetGain.connect(this.masterGain);
    delay.connect(feedback);
    feedback.connect(delay);

    src.start(now);
    
    // Store nodes so we can stop them early if needed
    this._deathEchoNodes = { src, dryGain, wetGain, delay, feedback };

    // After dialogue finishes, allow echoes to ring out then drop wet to silence
    const dur = buffer.duration;
    wetGain.gain.setValueAtTime(0.9, now + dur);
    wetGain.gain.linearRampToValueAtTime(0.0, now + dur + 3.0);

    this._deathAudioActive = true;
    return dur;
  }

  stopDeathDialogueWithEcho() {
    if (this._deathEchoNodes) {
      const { src, dryGain, wetGain, delay, feedback } = this._deathEchoNodes;
      try { src.stop(); } catch(e){}
      try { dryGain.disconnect(); } catch(e){}
      try { wetGain.disconnect(); } catch(e){}
      try { delay.disconnect(); } catch(e){}
      try { feedback.disconnect(); } catch(e){}
      this._deathEchoNodes = null;
    }
    this._deathAudioActive = false;
  }

  /**
   * Procedural thunder — short rumble (low-frequency noise + slow pitch
   * sweep) used during the Cthulhu storm sequence. No asset needed.
   */
  playThunderSound() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Thick low-frequency noise burst with envelope
    const dur = 1.6 + Math.random() * 0.8;
    const bufLen = Math.floor(this.ctx.sampleRate * dur);
    const buf = this.ctx.createBuffer(1, bufLen, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < bufLen; i++) {
      // Pink-ish brown noise (heavy lowpass via running average)
      const w = Math.random() * 2 - 1;
      last = last * 0.92 + w * 0.08;
      // Front-loaded envelope (initial crack), exponential decay
      const env = Math.exp(-i / (bufLen * 0.45));
      d[i] = last * env * 1.4;
    }
    const src = this.ctx.createBufferSource();
    src.buffer = buf;

    // Lowpass to keep it deep and rumbly
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(450, now);
    lp.frequency.exponentialRampToValueAtTime(120, now + dur * 0.8);
    lp.Q.value = 0.6;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0, now);
    gain.gain.linearRampToValueAtTime(1.05, now + 0.04); // sharp crack
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    src.connect(lp);
    lp.connect(gain);
    gain.connect(this.masterGain);
    src.start(now);
    src.stop(now + dur + 0.05);
  }

  playSandBurstSound() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // 1a. The Heavy Kick (Sub-bass thud)
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(20, now + 0.3);
    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(1.8, now);
    oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
    osc.connect(oscGain);
    oscGain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.5);

    // 1b. Deep ground-shudder THUD layered on top — slow, fat, body-felt
    const thud = this.ctx.createOscillator();
    thud.type = 'sine';
    thud.frequency.setValueAtTime(70, now);
    thud.frequency.exponentialRampToValueAtTime(28, now + 0.55);
    const thudGain = this.ctx.createGain();
    thudGain.gain.setValueAtTime(0.0, now);
    thudGain.gain.linearRampToValueAtTime(2.5, now + 0.02); // very fast attack
    thudGain.gain.exponentialRampToValueAtTime(0.01, now + 0.9);
    // Lowpass to keep it round and chest-y, no harshness
    const thudFilter = this.ctx.createBiquadFilter();
    thudFilter.type = 'lowpass';
    thudFilter.frequency.value = 220;
    thudFilter.Q.value = 0.8;
    thud.connect(thudFilter);
    thudFilter.connect(thudGain);
    thudGain.connect(this.masterGain);
    thud.start(now);
    thud.stop(now + 0.95);

    // 1c. Click/transient at the top so the impact has bite
    const clickBufLen = Math.floor(this.ctx.sampleRate * 0.04);
    const clickBuf = this.ctx.createBuffer(1, clickBufLen, this.ctx.sampleRate);
    const cd = clickBuf.getChannelData(0);
    for (let i = 0; i < clickBufLen; i++) {
      const env = Math.exp(-i / (clickBufLen * 0.25));
      cd[i] = (Math.random() * 2 - 1) * env;
    }
    const click = this.ctx.createBufferSource();
    click.buffer = clickBuf;
    const clickFilter = this.ctx.createBiquadFilter();
    clickFilter.type = 'lowpass';
    clickFilter.frequency.value = 1500;
    const clickGain = this.ctx.createGain();
    clickGain.gain.value = 0.6;
    click.connect(clickFilter);
    clickFilter.connect(clickGain);
    clickGain.connect(this.masterGain);
    click.start(now);

    // 2. The Stormy Rushing Sand (Brown Noise approximation)
    const bufferSize = this.ctx.sampleRate * 2.0; // 2 seconds
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02; // Brown noise filter
      lastOut = data[i];
      data[i] *= 4.0; // Boost volume
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuffer;

    // Lowpass filter that sweeps down to simulate settling dust
    const filter2 = this.ctx.createBiquadFilter();
    filter2.type = 'lowpass';
    filter2.frequency.setValueAtTime(5000, now); // Initial burst
    filter2.frequency.exponentialRampToValueAtTime(200, now + 1.5);

    // Gain envelope for the sandstorm
    const gain2 = this.ctx.createGain();
    gain2.gain.setValueAtTime(0.0, now);
    gain2.gain.linearRampToValueAtTime(1.5, now + 0.05); // sharp attack
    gain2.gain.linearRampToValueAtTime(0.3, now + 0.5); // heavy sustain
    gain2.gain.linearRampToValueAtTime(0.01, now + 2.0); // fade out

    noise.connect(filter2);
    filter2.connect(gain2);
    gain2.connect(this.masterGain);

    noise.start(now);
    noise.stop(now + 2.0);

    // 3. Howling Wind (LFO on Bandpass)
    const windNoise = this.ctx.createBufferSource();
    windNoise.buffer = noiseBuffer; // reuse brown noise

    const windFilter = this.ctx.createBiquadFilter();
    windFilter.type = 'bandpass';
    windFilter.Q.value = 4.0; // Resonant wind howl
    windFilter.frequency.setValueAtTime(800, now);
    windFilter.frequency.linearRampToValueAtTime(300, now + 1.5); // Pitch drops as wind slows

    const windGain = this.ctx.createGain();
    windGain.gain.setValueAtTime(0.0, now);
    windGain.gain.linearRampToValueAtTime(0.8, now + 0.2);
    windGain.gain.linearRampToValueAtTime(0.01, now + 1.5);

    windNoise.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(this.masterGain);

    windNoise.start(now);
    windNoise.stop(now + 1.5);
  }
}
