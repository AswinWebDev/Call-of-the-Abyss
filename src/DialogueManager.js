import * as THREE from 'three';

export class DialogueManager {
  constructor(camera, audioManager) {
    this.camera = camera;
    this.audioManager = audioManager;
    this.layer = document.getElementById('dialogue-layer');
    this.activeDialogues = [];
    
    // Mapping exact texts to their audio file names
    this.dialogueFiles = {
      "I am the terror of the deep! Your water gun is nothing!": "terror-of-the-deep.mp3",
      "Need more water... hold on.": "need-more-water.mp3",
      "Oh crab... here comes the big one.": "oh-crab-big-one.mp3",
      "Snap him in half!": "snap-him-in-half.mp3",
      "The beach belongs to us!": "beach-belongs-to-us.mp3",
      "The tide washes all away... starting with you!": "tide-washes-all-away.mp3",
      "Time to clean up this beach.": "time-to-clean-up.mp3",
      "Your pathetic squirt gun cannot pierce my armor!": "pathetic-squirt-gun.mp3",
      "You're gonna feel my wrath, shell-face!": "yourgonnafeelmywrathshellface_turtle.mp3",
      // New Burrow Events (Crab)
      "Oh no! The burrow is destroyed!": "burrow-destroyed.mp3",
      "Rebuilding the burrow... hold them off!": "rebuilding-burrow.mp3",
      "The burrow is back online!": "burrow-back-online.mp3",
      "Little one is on the way!": "little-one-on-the-way.mp3",
      "Go get 'em, little buddy!": "go-get-em-little-buddy.mp3",
      // Octopus Dialogues
      "You hear it too… don't you The call of the abyss… it calls for you.": "hear-it-too-call-of-abyss.mp3",
      "The call of Cthulhu echoes.": "call-of-cthulhu-echoes.mp3",
      "The abyss is awake.... Wakey wakey!!!": "abyss-is-awake.mp3",
      "Swallow my darkness!": "swallow-my-darkness.mp3",
      "Ahh, The abyss… remembers you.": "abyss-remembers-you.mp3",
      // Death dialogue lines (played when crab dies, with echo)
      "You belong to the deep now… Cthulhu waits below.": "belong-to-the-deep.mp3",
      "Sink without fear… the deep has already claimed you.": "sink-without-fear.mp3"
    };

    this.audioBuffers = {};
    
    this.monsterCooldown = 0;
    this.heroCooldown = 0;

    // Preload audio array buffers (don't decode yet, ctx is null until click)
    this._preloadAudio();
  }

  async _preloadAudio() {
    Object.entries(this.dialogueFiles).forEach(([text, filename]) => {
      fetch(`./models/dialogues/${filename}`)
        .then(response => response.arrayBuffer())
        .then(buffer => {
          // If the AudioManager has a context, decode it immediately for zero-latency playback
          if (this.audioManager && this.audioManager.ctx) {
            this.audioManager.ctx.decodeAudioData(buffer)
              .then(decodedData => {
                this.audioBuffers[filename] = decodedData; // Store decoded AudioBuffer
              })
              .catch(() => {});
          } else {
            this.audioBuffers[filename] = buffer; // Fallback to ArrayBuffer if ctx not ready
          }
        })
        .catch(() => {});
    });
  }

  isMonsterSpeaking() {
    return this.monsterCooldown > 0;
  }

  /**
   * Speak a line above an entity
   * @param {THREE.Object3D} entity The 3D object to follow
   * @param {string} text The text to display
   * @param {string} type 'monster' | 'hero'
   * @param {number} fallbackDuration Duration in seconds if audio isn't loaded
   * @param {number} heightOffset How high above the entity to place it
   * @returns {boolean} True if the dialogue successfully started playing
   */
  speak(entity, text, type = 'monster', fallbackDuration = 3.0, heightOffset = 2.5) {
    // Cthulhu cinematic moments (rise/death) — silence ALL dialogue
    // (monster AND hero) while their echoes are playing.
    if (this.audioManager && (this.audioManager._cthuluRisesActive ||
                              this.audioManager._cthuluDiesActive ||
                              this.isRageLocked)) {
      return false;
    }

    // Prevent overlapping dialogues
    if (type === 'monster' && this.monsterCooldown > 0) return false;
    if (type === 'hero' && this.heroCooldown > 0) return false;

    // Dynamically calculate duration from audio file
    let actualDuration = fallbackDuration;
    const filename = this.dialogueFiles[text];
    if (filename && this.audioBuffers[filename]) {
      // If pre-decoded, use precise duration
      if (this.audioBuffers[filename] instanceof AudioBuffer) {
        actualDuration = this.audioBuffers[filename].duration;
      }
    }

    if (type === 'monster') {
      this.monsterCooldown = actualDuration + 0.1; // Small gap between lines
    } else {
      this.heroCooldown = actualDuration + 0.5;
    }

    // Create DOM element
    const el = document.createElement('div');
    el.className = `speech-bubble ${type}`;
    el.textContent = text;
    this.layer.appendChild(el);

    const dialogueEntry = {
      entity,
      el,
      text,
      timer: actualDuration,
      heightOffset,
      panner: null
    };

    // Play Audio (passes the entry so it can attach a panner for live tracking)
    this._playAudioForText(text, type, entity, dialogueEntry);

    this.activeDialogues.push(dialogueEntry);

    return true;
  }

  async _playAudioForText(text, type, entity, dialogueEntry) {
    if (!this.audioManager || !this.audioManager.ctx) return;

    const filename = this.dialogueFiles[text];
    if (!filename) return;

    let buffer = this.audioManager[`dialogue_${filename}`];

    // If not decoded yet, decode it now
    if (!buffer && this.audioBuffers[filename]) {
      if (this.audioBuffers[filename] instanceof AudioBuffer) {
        // Already pre-decoded
        buffer = this.audioBuffers[filename];
        this.audioManager[`dialogue_${filename}`] = buffer;
      } else {
        try {
          // Must clone the arraybuffer because decodeAudioData detaches it
          const ab = this.audioBuffers[filename].slice(0);
          buffer = await this.audioManager.ctx.decodeAudioData(ab);
          this.audioManager[`dialogue_${filename}`] = buffer;
        } catch (e) {
          // decode failed
          return;
        }
      }
    }

    if (!buffer) return;

    if (!this.audioManager.masterGain) return; // Wait until initialized

    const ctx = this.audioManager.ctx;
    const src = ctx.createBufferSource();
    src.buffer = buffer;

    const gain = ctx.createGain();
    // Boss/monster lines louder; player ("hero") is centered (no panner) but a touch lower
    gain.gain.value = type === 'monster' ? 1.0 : 0.8;

    // Hero is the player's own crab — keep it flat (you don't hear yourself in 3D).
    // For monsters, route through a PannerNode positioned at the entity for HRTF spatialization.
    let panner = null;
    if (type === 'monster' && entity && entity.position && this.audioManager.createPositionalPanner) {
      panner = this.audioManager.createPositionalPanner(
        entity.position.x,
        entity.position.y + 2.0,
        entity.position.z
      );
    }

    src.connect(gain);
    if (panner) {
      gain.connect(panner);
      panner.connect(this.audioManager.masterGain);
      if (dialogueEntry) dialogueEntry.panner = panner;
    } else {
      gain.connect(this.audioManager.masterGain);
    }
    src.start();
  }

  clearAll() {
    this.monsterCooldown = 0;
    this.heroCooldown = 0;
    for (const d of this.activeDialogues) {
      if (d.el) d.el.remove();
    }
    this.activeDialogues = [];
  }

  update(dt) {
    if (this.monsterCooldown > 0) this.monsterCooldown -= dt;
    if (this.heroCooldown > 0) this.heroCooldown -= dt;

    const widthHalf = window.innerWidth / 2;
    const heightHalf = window.innerHeight / 2;

    for (let i = this.activeDialogues.length - 1; i >= 0; i--) {
      const d = this.activeDialogues[i];
      d.timer -= dt;

      if (d.timer <= 0) {
        // Fade out and remove
        d.el.style.opacity = '0';
        d.el.style.transform = `${d.el.style.transform} scale(0.8)`;
        setTimeout(() => d.el.remove(), 200);
        this.activeDialogues.splice(i, 1);
        continue;
      }

      // Track 3D panner to the entity's current world position so the
      // sound follows them as they walk around mid-line.
      if (d.panner && d.entity && d.entity.position) {
        const ep = d.entity.position;
        if (d.panner.positionX) {
          const t = this.audioManager.ctx.currentTime;
          d.panner.positionX.setValueAtTime(ep.x, t);
          d.panner.positionY.setValueAtTime(ep.y + 2.0, t);
          d.panner.positionZ.setValueAtTime(ep.z, t);
        } else if (d.panner.setPosition) {
          d.panner.setPosition(ep.x, ep.y + 2.0, ep.z);
        }
      }

      // Update 2D Screen Position
      if (d.entity && d.entity.position) {
        // Calculate distance from camera to scale the bubble
        const dist = this.camera.position.distanceTo(d.entity.position);
        
        // Scale logic: close = 1.2x, far = 0.5x, clamped
        let scale = 1.2 - ((dist - 20) / 80) * 0.7; 
        scale = Math.max(0.4, Math.min(1.2, scale));

        // Clone position and add height offset (e.g. above head)
        const pos = d.entity.position.clone();
        pos.y += d.heightOffset;
        
        // Project to screen space
        pos.project(this.camera);
        
        // Check if behind camera
        if (pos.z > 1) {
          d.el.style.display = 'none';
        } else {
          d.el.style.display = 'block';
          const x = (pos.x * widthHalf) + widthHalf;
          const y = -(pos.y * heightHalf) + heightHalf;
          
          // Add some vertical float animation based on time left
          const floatY = Math.sin(d.timer * 4) * 5;
          
          d.el.style.left = `${x}px`;
          d.el.style.top = `${y + floatY}px`;
          d.el.style.transform = `translate(-50%, -100%) scale(${scale})`;
        }
      }
    }
  }
}
