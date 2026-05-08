// Silence all console output (submission build).
['log', 'warn', 'info', 'debug', 'error', 'trace'].forEach(k => { console[k] = () => {}; });

/**
 * main.js — Call Of The Abyss: A Crab's Last Stand
 * Bootstrap — wires Engine, World, Crab, Camera, Input, Audio, Weapons, Enemies
 */
import * as THREE from 'three';

import { Engine } from './Engine.js';
import { InputManager } from './InputManager.js';
import { Camera } from './Camera.js';
import { World } from './World.js';
import { Crab } from './Crab.js';
import { AudioManager } from './AudioManager.js';
import { WeaponSystem } from './Weapons.js';
import { ProjectilePool } from './Projectile.js';
import { EnemyManager } from './Enemies.js';
import { BurrowManager } from './Burrow.js';
import { DialogueManager } from './DialogueManager.js';
import { EnemyProjectiles } from './EnemyProjectiles.js';
import { UpgradeSystem } from './UpgradeSystem.js';
import { submitScore, fetchTopScores, fetchPlayerRank, initWavedash } from './wavedash.js';

import { TouchControls } from './TouchControls.js';

// Touch / mobile detection. Three signals so DevTools "responsive" mode and
// real touch devices both light up:
//   1. URL ?touch=1            — explicit override for testing
//   2. (pointer: coarse) media — true on iOS / Android / DevTools mobile
//   3. ontouchstart / maxTouch — fallback for older browsers
const _searchParams = (typeof window !== 'undefined')
  ? new URLSearchParams(window.location.search) : null;
const FORCE_TOUCH = _searchParams && _searchParams.get('touch') === '1';
const POINTER_COARSE = (typeof window !== 'undefined' && window.matchMedia)
  ? window.matchMedia('(pointer: coarse)').matches : false;
const HAS_TOUCH = FORCE_TOUCH || POINTER_COARSE ||
  (typeof window !== 'undefined' && (
    ('ontouchstart' in window) ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 0)
  ));
if (HAS_TOUCH) {
  document.documentElement.classList.add('touch-mode');
  document.body && document.body.classList.add('touch-mode');
}

let engine, input, cameraController, world, crab, audio, dialogue;
let weapons, projectiles, enemyManager, burrowManager, enemyProjectiles;
let upgradeSystem;

// FPS Counter
let frameCount = 0;
let fpsTime = 0;
const fpsEl = document.getElementById('fps-counter');

// Wave-tracking for the background drums (detects wave-number transitions)
let _lastWaveForDrums = 0;

// Game State: 'MENU' or 'PLAYING'
let gameState = 'MENU';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  if (!canvas) { console.error('Canvas not found'); return; }

  // Re-apply touch-mode class once <body> is definitely available
  if (HAS_TOUCH && document.body) document.body.classList.add('touch-mode');

  // Portrait → "rotate device" overlay (touch only). Re-evaluated on resize.
  const updateOrientation = () => {
    if (!HAS_TOUCH) return;
    const portrait = window.innerHeight > window.innerWidth;
    document.body.classList.toggle('portrait', portrait);
  };
  updateOrientation();
  window.addEventListener('resize', updateOrientation);
  window.addEventListener('orientationchange', updateOrientation);

  // 1. Core systems
  engine = new Engine(canvas);
  input = new InputManager();
  audio = new AudioManager();

  // 2. Camera
  cameraController = new Camera(engine.camera, input);

  // 3. World
  world = new World(engine.scene);
  if (world.sand) cameraController.addCollisionObject(world.sand);

  // 4. Player
  crab = new Crab(engine.scene, world, input, cameraController);

  // 5. Combat systems
  dialogue = new DialogueManager(engine.camera, audio);
  crab.dialogue = dialogue; // Inject
  crab.audio = audio;       // Inject (used for splash + reload sounds)
  
  // ─── DEATH SEQUENCE HOOK ───────────────────────────────────
  // Fired once when crab.health hits 0. Plays an echo'd Cthulhu line,
  // silences the ambient audio, and starts the 7s darkening overlay.
  let deathWindowShown = false;
  crab._onDeath = () => {
    console.log('💀 Crab died — starting death sequence');
    mouseHeld = false;
    gameState = 'DEAD';

    // Pick one of the two death lines at random
    const deathLines = [
      'You belong to the deep now… Cthulhu waits below.mp3',
      'Sink without fear… the deep has already claimed you.mp3'
    ];
    const chosen = deathLines[Math.floor(Math.random() * deathLines.length)];

    // Resolve preloaded buffer (DialogueManager preloads + AudioManager decodes)
    const resolveAndPlay = () => {
      const raw = dialogue && dialogue.audioBuffers ? dialogue.audioBuffers[chosen] : null;
      if (raw && raw instanceof AudioBuffer) {
        audio.playDeathDialogueWithEcho(raw);
      } else if (raw && audio && audio.ctx) {
        // ArrayBuffer fallback — decode then play
        audio.ctx.decodeAudioData(raw.slice(0)).then(decoded => {
          audio.playDeathDialogueWithEcho(decoded);
        }).catch(() => {});
      }
    };
    resolveAndPlay();

    // Trigger the 7-second darkening animation
    const deathOverlay = document.getElementById('death-overlay');
    if (deathOverlay) deathOverlay.classList.add('dying');

    // Fire-and-forget score submission as soon as the player dies.
    // We don't block on it — even if the network is slow, the death
    // window appears at 7s and the leaderboard refreshes when ready.
    const runStats = {
      wave: enemyManager.currentWave || 0,
      kills: enemyManager.totalKills || 0,
      coins: crab.totalCoinsCollected || 0
    };
    const submission = submitScore(runStats);

    // After 7s, show the Death Window with run stats
    setTimeout(() => {
      if (deathWindowShown) return;
      deathWindowShown = true;
      try { document.exitPointerLock(); } catch (e) {}

      const waveEl = document.getElementById('death-wave');
      const killsEl = document.getElementById('death-kills');
      const coinsEl = document.getElementById('death-coins');
      if (waveEl) waveEl.textContent = runStats.wave;
      if (killsEl) killsEl.textContent = runStats.kills;
      if (coinsEl) coinsEl.textContent = runStats.coins;

      // Personalize the subtitle with the player's name
      const subtitleEl = document.querySelector('#death-window .death-subtitle');
      if (subtitleEl && window.playerName) {
        subtitleEl.textContent = `${window.playerName}, the abyss has claimed you`;
      }

      const dw = document.getElementById('death-window');
      if (dw) dw.classList.add('visible');

      // Render leaderboard after submission resolves so this run is included
      submission.then(() => renderLeaderboard('death-leaderboard', 3));
    }, 7000);
  };

  weapons = new WeaponSystem(engine.scene, audio);
  projectiles = new ProjectilePool(engine.scene);
  enemyManager = new EnemyManager(engine.scene, world, audio, dialogue);
  enemyManager.crab = crab; // Pass crab for dialogue triggers

  // Expose key refs on window for dev / console debugging
  window.enemyManager = enemyManager;
  window.crab = crab;
  window.world = world;
  window.audio = audio;
  window.weapons = weapons;

  // Dev helper: ?startWave=N jumps straight to wave N. Useful for testing
  // Cthulhu (waves 7, 12, 17…). The wave starts when the game state goes
  // PLAYING — by then enemyManager.startWave() will tick from currentWave
  // → currentWave+1, so we set currentWave = N - 1 here.
  if (_searchParams) {
    const startWaveParam = parseInt(_searchParams.get('startWave'), 10);
    if (Number.isFinite(startWaveParam) && startWaveParam > 1) {
      enemyManager.currentWave = startWaveParam - 1;
      // Pre-load Cthulhu now so there's no hitch when wave 7 hits
      if (startWaveParam >= 6) enemyManager._lazyLoadCthulhu();
      // Pre-load boss too
      if (startWaveParam >= 4) enemyManager._lazyLoadBoss();
    }
  }
  burrowManager = new BurrowManager(engine.scene, world, audio);
  burrowManager.dialogue = dialogue; // Inject
  burrowManager.crab = crab; // Inject
  enemyProjectiles = new EnemyProjectiles(engine.scene);
  upgradeSystem = new UpgradeSystem();

  // 6. Menu Logic & Audio Init
  const mainMenu = document.getElementById('main-menu');
  const howToPlayMenu = document.getElementById('how-to-play');
  const uiLayer = document.getElementById('ui-layer');

  // ─── PLAYER NAME (session-scoped) ─────────────────────────
  // Stored in sessionStorage so retries/deaths reuse it but a fresh
  // tab/page reload (new session) prompts again.
  const NAME_STORAGE_KEY = 'cota_playerName';
  const nameOverlay = document.getElementById('name-entry-overlay');
  const nameInput = document.getElementById('player-name-input');
  const btnNameConfirm = document.getElementById('btn-name-confirm');
  const nameBadge = document.getElementById('player-name-badge');

  const setPlayerName = (name) => {
    const clean = String(name || '').trim().slice(0, 20);
    if (!clean) return false;
    window.playerName = clean;
    try { sessionStorage.setItem(NAME_STORAGE_KEY, clean); } catch (e) {}
    if (nameBadge) nameBadge.textContent = `Playing as ${clean}`;
    return true;
  };

  const confirmName = () => {
    if (!setPlayerName(nameInput.value)) {
      nameInput.focus();
      return;
    }
    nameOverlay.classList.add('hidden');
    mainMenu.classList.remove('hidden');
  };

  // ─── WAVEDASH SDK INIT ────────────────────────────────────
  // If running on Wavedash, the SDK provides player identity and we
  // skip the name-entry overlay. Otherwise fall back to the custom
  // name input for local dev.
  const wavedashUser = initWavedash();

  // If we already have a name from this session, skip the overlay
  let cachedName = '';
  try { cachedName = sessionStorage.getItem(NAME_STORAGE_KEY) || ''; } catch (e) {}

  if (wavedashUser && wavedashUser.username) {
    // Running on Wavedash — use platform identity, skip name overlay
    setPlayerName(wavedashUser.username);
    nameOverlay.classList.add('hidden');
    mainMenu.classList.remove('hidden');
  } else if (cachedName) {
    setPlayerName(cachedName);
    nameOverlay.classList.add('hidden');
    mainMenu.classList.remove('hidden');
  } else {
    setTimeout(() => nameInput && nameInput.focus(), 100);
  }

  // Bind both pointerdown (fast on mobile, no 300ms tap delay) and click
  // (desktop fallback) — guarded so a single tap can't fire twice.
  if (btnNameConfirm) {
    let _nameConfirming = false;
    const onConfirm = (e) => {
      if (_nameConfirming) return;
      _nameConfirming = true;
      if (e && e.preventDefault) e.preventDefault();
      confirmName();
      setTimeout(() => { _nameConfirming = false; }, 400);
    };
    btnNameConfirm.addEventListener('pointerdown', onConfirm);
    btnNameConfirm.addEventListener('click', onConfirm);
  }
  if (nameInput) {
    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        confirmName();
      }
    });
  }

  // ─── LEADERBOARD RENDERER ─────────────────────────────────
  // Used by the main menu, the dedicated leaderboard screen, and the death
  // window. Highlights the current player's row, and if their best is not
  // in the top N, appends an extra row showing their actual rank below.
  // Wavedash matches the current player by userId from the SDK

  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));

  function leaderboardRow(rank, entry, isYou) {
    return `
      <div class="leaderboard-row${isYou ? ' you' : ''}">
        <div class="lb-rank">${rank}</div>
        <div class="lb-name">${escapeHtml(entry.name || 'Anonymous')}</div>
        <div class="lb-num">${entry.wave || 0}</div>
        <div class="lb-num">${entry.kills || 0}</div>
        <div class="lb-num">${entry.coins || 0}</div>
      </div>
    `;
  }

  async function renderLeaderboard(targetId, topN = 10) {
    const el = document.getElementById(targetId);
    if (!el) return;
    el.innerHTML = `<div class="leaderboard-title">Loading…</div>`;

    const rows = await fetchTopScores(topN);
    const playerName = window.playerName;

    // Are they in the top N? Match by name.
    const inTop = rows.some(r =>
      (playerName && r.name === playerName)
    );

    // If they have a name but aren't in the top N, fetch their rank
    let myEntry = null;
    let myRank = null;
    if (playerName && !inTop) {
      const result = await fetchPlayerRank();
      if (result) {
        myEntry = result.entry;
        myRank = result.rank;
      }
    }

    const title = `<div class="leaderboard-title">Top ${topN} Survivors</div>`;

    if (!rows.length) {
      el.innerHTML = `${title}<div class="leaderboard-empty">No runs yet — be the first.</div>`;
      return;
    }

    const header = `
      <div class="leaderboard-row header">
        <div class="lb-rank">#</div><div>Name</div>
        <div class="lb-num">Wave</div><div class="lb-num">Kills</div><div class="lb-num">Coins</div>
      </div>
    `;

    const body = rows.map((r, i) => {
      const isYou = (playerName && r.name === playerName);
      return leaderboardRow(i + 1, r, isYou);
    }).join('');

    let mine = '';
    if (myEntry && myRank) {
      mine = `
        <div class="leaderboard-divider">⋯ Your rank ⋯</div>
        ${leaderboardRow(myRank, myEntry, true)}
      `;
    }

    el.innerHTML = `${title}${header}${body}${mine}`;
  }

  const btnPlay = document.getElementById('btn-play');
  const btnRetry = document.getElementById('btn-retry');
  const btnHowToPlay = document.getElementById('btn-how-to-play');
  const btnBack = document.getElementById('btn-back');
  const btnDeathRetry = document.getElementById('btn-death-retry');

  // ─── TOUCH CONTROLS ──────────────────────────────────────
  // Instantiated only for touch devices. Sets InputManager.analogMove and
  // simulates mouse/keys so the rest of the game logic doesn't have to
  // know whether it's running on desktop or mobile.
  let touchControls = null;
  if (HAS_TOUCH) {
    touchControls = new TouchControls(input, {
      onPause: () => {
        // Mobile pause: surface the main menu, hide HUD, stop firing.
        if (gameState !== 'PLAYING') return;
        mouseHeld = false;
        input.mouse.leftDown = false;
        gameState = 'MENU';
        mainMenu.classList.remove('hidden');
        uiLayer.style.display = 'none';
        btnPlay.textContent = 'RESUME GAME';
        if (btnRetry) btnRetry.style.display = 'inline-block';
      },
      onSandBurst: () => {
        if (gameState === 'PLAYING' && crab && crab.triggerSandBurst) {
          crab.triggerSandBurst(enemyManager, audio);
        }
      },
      lookSensitivity: 1.0
    });
  }

  // Retry resets game state in-place and re-acquires pointer lock immediately.
  // The Retry button click itself counts as the user gesture for pointer lock,
  // so the player skips straight back into PLAYING with no menu in between.
  const resetGame = () => {
    // 1. Tear down all UI overlays from the previous run
    const dw = document.getElementById('death-window');
    if (dw) dw.classList.remove('visible');
    const deathOverlay = document.getElementById('death-overlay');
    if (deathOverlay) {
      deathOverlay.classList.remove('dying');
      deathOverlay.style.opacity = '0';
    }
    const lowHp = document.getElementById('low-health-overlay');
    if (lowHp) lowHp.style.opacity = '0';
    const dmg = document.getElementById('damage-overlay');
    if (dmg) dmg.style.opacity = '0';
    mainMenu.classList.add('hidden');

    // 2. Reset all game systems
    crab.reset();
    enemyManager.reset();
    burrowManager.reset();
    projectiles.reset();
    enemyProjectiles.reset();
    upgradeSystem.reset();
    if (weapons.setWeapon) weapons.setWeapon('pistol', 1);
    if (audio.stopWaveDrums) audio.stopWaveDrums();
    _lastWaveForDrums = 0;

    // 3. Restore ambient audio (death sequence faded ocean/wind to 0)
    if (audio && audio.ctx) {
      const now = audio.ctx.currentTime;
      const restore = (g, v) => {
        if (!g) return;
        try {
          g.gain.cancelScheduledValues(now);
          g.gain.setValueAtTime(g.gain.value, now);
          g.gain.linearRampToValueAtTime(v, now + 0.4);
        } catch (e) {}
      };
      restore(audio.oceanGain, 0.35);
      restore(audio.windGain, 0.08);
      restore(audio.scuttleGain, 1.0);
    }

    // 4. Reset death-window flag so a future death triggers it again
    deathWindowShown = false;

    // 5. Show HUD, lock pointer (or skip on touch), resume play
    uiLayer.style.display = 'flex';
    gameState = 'PLAYING';
    if (HAS_TOUCH) {
      // Touch: no pointer lock — just hide menu (already handled above)
    } else {
      canvas.requestPointerLock();
    }
  };
  // Robust retry binding — pointerdown for mobile speed, click for desktop fallback
  let _retrying = false;
  const onRetry = (e) => {
    if (_retrying) return;
    _retrying = true;
    if (e && e.preventDefault) e.preventDefault();
    resetGame();
    setTimeout(() => { _retrying = false; }, 600);
  };
  if (btnRetry) {
    btnRetry.addEventListener('pointerdown', onRetry);
    btnRetry.addEventListener('click', onRetry);
  }
  if (btnDeathRetry) {
    btnDeathRetry.addEventListener('pointerdown', onRetry);
    btnDeathRetry.addEventListener('click', onRetry);
  }

  // ─── MODAL VISIBILITY TRACKER ─────────────────────────────
  // Whenever ANY menu/death/leaderboard/how-to-play overlay is open,
  // tag the body with `in-modal` so CSS can hide the gameplay touch
  // controls + game HUD underneath. Refreshed every time we toggle a
  // .menu-overlay, the death window, or pause state.
  const refreshModalState = () => {
    const anyOverlayVisible =
      (mainMenu && !mainMenu.classList.contains('hidden')) ||
      (howToPlayMenu && !howToPlayMenu.classList.contains('hidden')) ||
      (document.getElementById('leaderboard-screen') &&
       !document.getElementById('leaderboard-screen').classList.contains('hidden')) ||
      (document.getElementById('credits-screen') &&
       !document.getElementById('credits-screen').classList.contains('hidden')) ||
      (document.getElementById('death-window') &&
       document.getElementById('death-window').classList.contains('visible')) ||
      (document.getElementById('name-entry-overlay') &&
       !document.getElementById('name-entry-overlay').classList.contains('hidden'));
    document.body.classList.toggle('in-modal', !!anyOverlayVisible);
  };
  // Run it once now (initial state has name-entry visible) and then on a
  // mutation observer so future class flips also update the body class.
  refreshModalState();
  const overlayTargets = [
    mainMenu,
    howToPlayMenu,
    document.getElementById('leaderboard-screen'),
    document.getElementById('credits-screen'),
    document.getElementById('death-window'),
    document.getElementById('name-entry-overlay')
  ].filter(Boolean);
  const overlayObserver = new MutationObserver(refreshModalState);
  for (const t of overlayTargets) {
    overlayObserver.observe(t, { attributes: true, attributeFilter: ['class'] });
  }

  // Touch devices can't pointer-lock — start the game directly when PLAY
  // is tapped, exactly as the pointerlockchange handler would.
  const startMobileSession = () => {
    mainMenu.classList.add('hidden');
    uiLayer.style.display = 'flex';
    setTimeout(() => {
      gameState = 'PLAYING';
      if (crab && crab.loaded && crab.dialogue && !crab._hasSpokenIntro) {
        crab._hasSpokenIntro = true;
        setTimeout(() => {
          crab.dialogue.speak(crab.model, "Time to clean up this beach.", 'hero', 4.0);
        }, 500);
      }
    }, 50);
  };

  // Robust start binding — pointerdown fires fast on mobile (no 300ms tap
  // delay), click is a fallback for desktops/edge cases, both gated by a
  // started flag to prevent the same button firing the game twice.
  // EVERY audio/lock call is try-wrapped so a single failure can NEVER
  // leave the player stuck on the menu.
  let _gameStarting = false;
  const initGame = (e) => {
    if (_gameStarting) return;
    _gameStarting = true;
    if (e && e.preventDefault) e.preventDefault();

    // Audio initialization — never let a failure here block game start
    try { audio.init && audio.init(); } catch (err) { console.warn('audio.init failed', err); }
    try {
      const p = audio.resume && audio.resume();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch (err) { console.warn('audio.resume failed', err); }

    // Branch by platform — both paths must always result in PLAYING state
    if (HAS_TOUCH) {
      try { startMobileSession(); } catch (err) {
        console.error('startMobileSession failed', err);
        // Last-ditch: force the menu off and switch to PLAYING anyway
        mainMenu.classList.add('hidden');
        uiLayer.style.display = 'flex';
        gameState = 'PLAYING';
      }
    } else {
      // Desktop: request pointer lock. The lockchange listener starts the game.
      try { canvas.requestPointerLock(); } catch (err) { /* ignore */ }
    }
    // Reset the guard a moment later so RESUME from pause still works
    setTimeout(() => { _gameStarting = false; }, 600);
  };

  btnPlay.addEventListener('pointerdown', initGame);
  btnPlay.addEventListener('click', initGame);

  btnHowToPlay.addEventListener('click', () => {
    mainMenu.classList.add('hidden');
    howToPlayMenu.classList.remove('hidden');
  });

  btnBack.addEventListener('click', () => {
    howToPlayMenu.classList.add('hidden');
    mainMenu.classList.remove('hidden');
  });

  // Leaderboard screen navigation
  const leaderboardScreen = document.getElementById('leaderboard-screen');
  const btnLeaderboard = document.getElementById('btn-leaderboard');
  const btnLeaderboardBack = document.getElementById('btn-leaderboard-back');
  if (btnLeaderboard) {
    btnLeaderboard.addEventListener('click', () => {
      mainMenu.classList.add('hidden');
      leaderboardScreen.classList.remove('hidden');
      renderLeaderboard('full-leaderboard', 50);
    });
  }
  if (btnLeaderboardBack) {
    btnLeaderboardBack.addEventListener('click', () => {
      leaderboardScreen.classList.add('hidden');
      mainMenu.classList.remove('hidden');
    });
  }

  // Credits screen navigation
  const creditsScreen = document.getElementById('credits-screen');
  const btnCreditsLink = document.getElementById('btn-credits-link');
  const btnCreditsBack = document.getElementById('btn-credits-back');
  if (btnCreditsLink) {
    btnCreditsLink.addEventListener('click', () => {
      mainMenu.classList.add('hidden');
      if (creditsScreen) creditsScreen.classList.remove('hidden');
    });
  }
  if (btnCreditsBack) {
    btnCreditsBack.addEventListener('click', () => {
      if (creditsScreen) creditsScreen.classList.add('hidden');
      mainMenu.classList.remove('hidden');
    });
  }

  // How to Play tab switching
  const htpTabs = document.querySelectorAll('.htp-tab');
  const htpPages = document.querySelectorAll('.htp-page');
  const htpDots = document.querySelectorAll('.htp-dot');
  htpTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      htpTabs.forEach(t => t.classList.remove('active'));
      htpPages.forEach(p => p.classList.remove('active'));
      htpDots.forEach(d => d.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('htp-' + target).classList.add('active');
      document.querySelector(`.htp-dot[data-tab="${target}"]`).classList.add('active');
    });
  });

  // Handle true game state changes via pointer lock events
  document.addEventListener('pointerlockchange', () => {
    if (document.pointerLockElement === canvas) {
      // Successfully acquired pointer lock — hide menu, show HUD, start game
      mainMenu.classList.add('hidden');
      uiLayer.style.display = 'flex';
      
      // Slight delay to prevent immediate firing from the click that locked it
      setTimeout(() => {
        gameState = 'PLAYING';
        
        // Trigger intro dialogue only once when the game actually starts
        if (crab && crab.loaded && crab.dialogue && !crab._hasSpokenIntro) {
          crab._hasSpokenIntro = true;
          // Give it a half second breath before speaking
          setTimeout(() => {
            crab.dialogue.speak(crab.model, "Time to clean up this beach.", 'hero', 4.0);
          }, 500);
        }
      }, 50);
    } else {
      // Lost pointer lock. Skip the pause-menu in cases where another UI
      // already owns the screen (death sequence / upgrade shop), otherwise
      // pause and show the menu.
      mouseHeld = false;
      if (crab && crab.isDead) return;
      if (gameState === 'UPGRADING') return; // shop window is on top, no menu
      gameState = 'MENU';
      mainMenu.classList.remove('hidden');
      uiLayer.style.display = 'none';
      btnPlay.textContent = 'RESUME GAME';
      if (btnRetry) btnRetry.style.display = 'inline-block';
    }
  });

  document.addEventListener('pointerlockerror', () => {
    console.warn("Pointer lock failed. Please wait a second and try again.");
    btnPlay.textContent = 'TRY AGAIN';
  });

  document.addEventListener('contextmenu', (e) => {
    if (gameState === 'PLAYING') e.preventDefault();
  });

  let mouseHeld = false;
  let _wasTouchFiring = false; // edge-detect charger start/release on touch
  document.addEventListener('mousedown', (e) => {
    if (gameState === 'PLAYING') {
      if (e.button === 0) {
        mouseHeld = true;
        // Start charge for charger weapon
        if (weapons.stats.isCharge) {
          weapons.startCharge();
        }
      } else if (e.button === 2) {
        // Sand Burst on right click
        crab.triggerSandBurst(enemyManager, audio);
      }
    }
  });
  document.addEventListener('mouseup', (e) => {
    if (e.button === 0) {
      // Release charge for charger weapon
      if (mouseHeld && weapons.stats.isCharge && crab.loaded) {
        const fireResult = weapons.releaseCharge(
          crab.position,
          cameraController.yaw,
          crab.currentAmmo
        );
        if (fireResult) {
          crab.currentAmmo -= fireResult.ammoCost;
          for (const p of fireResult.projectiles) {
            projectiles.spawn(p.position, p.velocity, p.damage, p.tier, p.options);
          }
        } else if (crab.currentAmmo < weapons.stats.ammoPerShot) {
          if (dialogue && crab.model) {
            if (!crab._lastLowWaterVoice || Date.now() - crab._lastLowWaterVoice > 5000) {
              crab._lastLowWaterVoice = Date.now();
              dialogue.speak(crab.model, "Need more water... hold on.", 'hero', 3.0);
            }
          }
        }
      }
      mouseHeld = false;
    }
  });


  // Register update callback
  // ─── BOSS STORM SYSTEM ───────────────────────────────────
  // When a Cthulhu mega-boss is alive, the sky/fog/lights shift to a
  // MOONLIT NIGHT palette — silvery-blue tones, visible silhouettes & shadows,
  // dramatic lightning + heavy thunder. NOT pitch-black.
  const _stormCalm = {
    top:    new THREE.Color(0x0066dd),
    horiz:  new THREE.Color(0x87CEEB),
    bottom: new THREE.Color(0xfff5d6),
    sun:    new THREE.Color(0xFFE4B5),
    fogColor: new THREE.Color(0x87CEEB),
    fogDensity: 0.0035,
    sunLightColor: new THREE.Color(0xfff4e5),
    sunLightIntensity: 3.0,
    hemiSky:  new THREE.Color(0x87CEEB),
    hemiGround: new THREE.Color(0xc2b280),
    hemiIntensity: 1.0
  };
  // Moonlit-night palette — bright enough that the boss's face & details
  // read clearly, dim enough to feel ominous. Cool silver-blue cast.
  const _stormDark = {
    top:    new THREE.Color(0x0a1535),  // deep midnight blue (not black)
    horiz:  new THREE.Color(0x3a5278),  // moonlit silver-blue horizon
    bottom: new THREE.Color(0x1a2540),  // dark cool blue
    sun:    new THREE.Color(0xc8d8ff),  // moon glow tint on horizon
    fogColor: new THREE.Color(0x2a3858),// cool blue-grey fog (lifts shadows)
    fogDensity: 0.005,                  // light fog — keep distance readable
    sunLightColor: new THREE.Color(0xb0c8ff),  // moonlight (cool silver-blue)
    sunLightIntensity: 1.4,             // dimmer than day, but enough for shadows
    hemiSky:  new THREE.Color(0x2a3858),
    hemiGround: new THREE.Color(0x1a1a28),
    hemiIntensity: 0.55
  };
  let _stormBlend = 0; // 0 = calm, 1 = full storm
  let _nextLightningAt = 0;
  let _lightningFlashUntil = 0;
  let _lightningOnCooldown = false;
  const lightningEl = document.getElementById('lightning-overlay');

  const _lerpColor = (out, a, b, t) => {
    out.r = a.r + (b.r - a.r) * t;
    out.g = a.g + (b.g - a.g) * t;
    out.b = a.b + (b.b - a.b) * t;
  };
  const _lerp = (a, b, t) => a + (b - a) * t;

  function updateStorm(dt, time) {
    const stormActive = enemyManager && enemyManager._cthulhuAlive;
    const target = stormActive ? 1 : 0;
    if (_stormBlend < target) _stormBlend = Math.min(target, _stormBlend + dt * 0.5);
    else if (_stormBlend > target) _stormBlend = Math.max(target, _stormBlend - dt * 0.4);

    // Sky shader uniform interpolation
    if (engine.skyUniforms) {
      _lerpColor(engine.skyUniforms.topColor.value,    _stormCalm.top,    _stormDark.top,    _stormBlend);
      _lerpColor(engine.skyUniforms.horizonColor.value,_stormCalm.horiz,  _stormDark.horiz,  _stormBlend);
      _lerpColor(engine.skyUniforms.bottomColor.value, _stormCalm.bottom, _stormDark.bottom, _stormBlend);
      _lerpColor(engine.skyUniforms.sunColor.value,    _stormCalm.sun,    _stormDark.sun,    _stormBlend);
    }
    // Scene fog
    if (engine.scene.fog) {
      _lerpColor(engine.scene.fog.color, _stormCalm.fogColor, _stormDark.fogColor, _stormBlend);
      engine.scene.fog.density = _lerp(_stormCalm.fogDensity, _stormDark.fogDensity, _stormBlend);
    }
    if (engine.scene.background && engine.scene.background.isColor) {
      _lerpColor(engine.scene.background, _stormCalm.fogColor, _stormDark.fogColor, _stormBlend);
    }
    // Sun (directional) light → moonlight while storming. Keeps shadows
    // casting but with a cool silver-blue tone instead of warm daylight.
    if (engine.sunLight) {
      _lerpColor(engine.sunLight.color, _stormCalm.sunLightColor, _stormDark.sunLightColor, _stormBlend);
      engine.sunLight.intensity = _lerp(_stormCalm.sunLightIntensity, _stormDark.sunLightIntensity, _stormBlend);
    }
    // Hemisphere ambient — also shifts cool so unlit faces aren't black voids
    if (engine.hemiLight) {
      _lerpColor(engine.hemiLight.color,       _stormCalm.hemiSky,    _stormDark.hemiSky,    _stormBlend);
      _lerpColor(engine.hemiLight.groundColor, _stormCalm.hemiGround, _stormDark.hemiGround, _stormBlend);
      engine.hemiLight.intensity = _lerp(_stormCalm.hemiIntensity, _stormDark.hemiIntensity, _stormBlend);
    }

    // Lightning scheduler — HEAVY strikes once storm is active
    if (_stormBlend > 0.4 && stormActive) {
      if (_nextLightningAt === 0) _nextLightningAt = time + 0.8 + Math.random() * 1.2;
      if (time >= _nextLightningAt) {
        // Multi-flicker flash sequence (4-6 flickers per strike — denser)
        const fire = (delay) => setTimeout(() => {
          if (lightningEl) {
            lightningEl.classList.add('flash');
            setTimeout(() => lightningEl.classList.remove('flash'), 80 + Math.random() * 70);
          }
        }, delay);
        fire(0);
        fire(90);
        fire(180);
        fire(280);
        if (Math.random() < 0.7) fire(400);
        if (Math.random() < 0.4) fire(520);
        // Thunder follows soon after — close + heavy. Sometimes a double clap.
        setTimeout(() => {
          if (audio && audio.playThunderSound) audio.playThunderSound();
        }, 120 + Math.random() * 280);
        if (Math.random() < 0.45) {
          setTimeout(() => {
            if (audio && audio.playThunderSound) audio.playThunderSound();
          }, 700 + Math.random() * 600);
        }
        _nextLightningAt = time + 1.2 + Math.random() * 2.6; // next strike in 1.2-3.8s
      }
    } else if (!stormActive) {
      _nextLightningAt = 0;
      if (lightningEl) lightningEl.classList.remove('flash');
    }
  }

  engine.add({
    update: (dt, time) => {
      // ─── CHARGER SPEED PENALTY ───────────────────────────────
      if (weapons.stats.isCharge && (weapons._isCharging || weapons._isFiringHose)) {
        crab.walkSpeed = 10;
        crab.runSpeed = 10;
      } else {
        crab.walkSpeed = 25;
        crab.runSpeed = 45;
      }

      // Storm system — drives sky/fog colours + lightning + thunder while
      // a Cthulhu boss is alive on screen. Cheap when no storm active.
      updateStorm(dt, time);

      // Sync 3D audio listener with the camera for spatial dialogue
      audio.updateListener(engine.camera);



      // Player
      crab.update(dt, time, gameState === 'PLAYING');

      // World (ocean, seagulls, grass, footprint fade)
      world.update(dt, time);

      // Ocean fresnel
      if (world.ocean && world.ocean.material.uniforms.cameraPos) {
        world.ocean.material.uniforms.cameraPos.value.copy(engine.camera.position);
      }

      // If in MENU state, stop executing combat/gameplay logic
      if (gameState !== 'PLAYING') return;

      // Weapon follows crab but aims where camera looks
      if (crab.loaded && crab.model) {
        weapons.update(dt, crab.position, cameraController.yaw);
      }

      // ─── CONTINUOUS FIRING ──────────────────────────────────
      // Desktop fires via local mouseHeld + active pointer lock. Touch fires
      // via input.mouse.leftDown (set by the FIRE button in TouchControls)
      // and skips the pointer-lock requirement (mobile can't lock).
      const isFiring = HAS_TOUCH
        ? (input.mouse.leftDown && crab.loaded && gameState === 'PLAYING')
        : (mouseHeld && document.pointerLockElement && crab.loaded);

      // On touch, replicate the desktop charger start/release the mousedown/up
      // listeners normally do. Edge-detect the press transitions.
      if (HAS_TOUCH && weapons && weapons.stats && weapons.stats.isCharge) {
        if (isFiring && !_wasTouchFiring) {
          weapons.startCharge();
        } else if (!isFiring && _wasTouchFiring && crab.loaded) {
          const releaseResult = weapons.releaseCharge(
            crab.position,
            cameraController.yaw,
            crab.currentAmmo
          );
          if (releaseResult) {
            crab.currentAmmo -= releaseResult.ammoCost;
            for (const p of releaseResult.projectiles) {
              projectiles.spawn(p.position, p.velocity, p.damage, p.tier, p.options);
            }
          }
        }
      }
      _wasTouchFiring = isFiring;

      if (isFiring) {
        const aimYaw = cameraController.yaw;
        const fireResult = weapons.tryFire(
          crab.position,
          aimYaw,
          crab.currentAmmo
        );

        if (fireResult) {
          crab.currentAmmo -= fireResult.ammoCost;
          for (const p of fireResult.projectiles) {
            projectiles.spawn(p.position, p.velocity, p.damage, p.tier, p.options);
          }
        } else if (crab.currentAmmo < weapons.stats.ammoPerShot && !weapons.stats.isCharge) {
          if (dialogue && crab.model) {
            if (!crab._lastLowWaterVoice || Date.now() - crab._lastLowWaterVoice > 5000) {
              crab._lastLowWaterVoice = Date.now();
              dialogue.speak(crab.model, "Need more water... hold on.", 'hero', 3.0);
            }
          }
        }
      }

      // ─── CHARGER HOSE MODE ──────────────────────────────────
      if (crab.loaded && crab.model) {
        const hoseResult = weapons.getHoseProjectiles(dt, cameraController.yaw);
        if (hoseResult && hoseResult.projectiles && hoseResult.projectiles.length > 0) {
          for (const p of hoseResult.projectiles) {
            projectiles.spawn(p.position, p.velocity, p.damage, p.tier, p.options);
          }
        }
      }

      // Projectiles vs enemies
      const hits = projectiles.update(dt, enemyManager.enemies);
      for (const hit of hits) {
        enemyManager.damageEnemy(hit.enemy, hit.damage);
        
        // Floating Damage Text
        if (gameState === 'PLAYING') {
          const pos2D = hit.position.clone();
          pos2D.project(engine.camera);
          const x = (pos2D.x *  .5 + .5) * window.innerWidth;
          const y = (pos2D.y * -.5 + .5) * window.innerHeight;
          
          // Only show if on screen
          if (pos2D.z < 1) {
            const damageEl = document.createElement('div');
            damageEl.textContent = Math.round(hit.damage);
            damageEl.style.position = 'fixed';
            damageEl.style.left = `${x}px`;
            damageEl.style.top = `${y}px`;
            damageEl.style.pointerEvents = 'none';
            damageEl.style.fontWeight = '900';
            damageEl.style.zIndex = '20';
            damageEl.style.transform = 'translate(-50%, -50%)';
            damageEl.style.transition = 'all 0.5s ease-out';
            
            if (hit.isCrit) {
              damageEl.style.fontSize = '28px';
              damageEl.style.color = '#ff3300';
              damageEl.style.textShadow = '0 0 10px #ffaa00, 2px 2px 0px #000';
              damageEl.textContent = `${Math.round(hit.damage)}!`;
            } else {
              damageEl.style.fontSize = '18px';
              damageEl.style.color = '#ffffff';
              damageEl.style.textShadow = '1px 1px 0px #000';
            }
            
            document.body.appendChild(damageEl);
            
            // Animate up and fade out
            setTimeout(() => {
              damageEl.style.top = `${y - 50}px`;
              damageEl.style.opacity = '0';
              setTimeout(() => damageEl.remove(), 500);
            }, 10);
          }
        }
      }

      // Enemy Projectiles vs Crab
      const enemyProjHits = enemyProjectiles.update(dt, world, crab);
      for (const hit of enemyProjHits) {
        crab.takeDamage(hit.damage);
      }

      // Enemies AI
      const combatResult = enemyManager.update(dt, time, crab.position, engine.camera, burrowManager, gameState === 'PLAYING', enemyProjectiles);

      // ─── WAVE BACKGROUND DRUMS ──────────────────────────────
      const MUSIC_ENABLED = true;
      if (MUSIC_ENABLED) {
        if (enemyManager.currentWave !== _lastWaveForDrums) {
          if (enemyManager.currentWave > _lastWaveForDrums && audio.playWaveDrums) {
            audio.playWaveDrums();
          }
          _lastWaveForDrums = enemyManager.currentWave;
        }
        if (combatResult.waveJustCompleted && audio.stopWaveDrums) {
          audio.stopWaveDrums();
        }
      }

      // Apply damage to crab
      if (combatResult.damageToPlayer > 0) {
        crab.takeDamage(combatResult.damageToPlayer);
      }

      dialogue.update(dt);

      // Burrow update & deposit
      burrowManager.update(dt, time, enemyManager);
      if (crab.coins > 0 && crab.position.distanceTo(burrowManager.position) < burrowManager.depositRadius) {
        const used = burrowManager.tryInteract(crab.coins);
        if (used > 0) {
          crab.coins -= used;
          const coinEl = document.getElementById('coin-count');
          if (coinEl) coinEl.textContent = crab.coins;
        }
      }

      // Collect coins & health
      if (combatResult.coinsCollected > 0) {
        crab.addCoins(combatResult.coinsCollected);
      }
      if (combatResult.healthCollected > 0) {
        crab.health = Math.min(crab.maxHealth, crab.health + combatResult.healthCollected);
      }

      // --- Upgrade 3.0: Wave-based Shop UI ---
      if (combatResult.waveJustCompleted && upgradeSystem.onWaveComplete()) {
        gameState = 'UPGRADING';
        if (!HAS_TOUCH) document.exitPointerLock();
        mouseHeld = false;

        upgradeSystem.show(crab, weapons, burrowManager).then(() => {
          // Seamlessly return to gameplay!
          gameState = 'PLAYING';
          if (!HAS_TOUCH) {
            const c = document.getElementById('game-canvas');
            if (c) c.requestPointerLock();
          }
        });
      }

      // Footprints
      if (crab.loaded && crab.model) {
        const pos = crab.position;
        const terrainY = world.getTerrainHeight(pos.x, pos.z);
        const moveInput = input.getMovementInput();
        if (Math.abs(pos.y - terrainY) < 2 && moveInput.magnitude > 0) {
          world.stampFootprint(pos);
        }
      }

      // Audio
      const moveInput = input.getMovementInput();
      audio.update(dt, moveInput.magnitude > 0, input.isSprinting);
    }
  });

  // Resize
  window.addEventListener('resize', () => engine.resize());

  // Game loop
  let lastTime = performance.now();
  function loop(currentTime) {
    requestAnimationFrame(loop);
    const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
    lastTime = currentTime;
    engine.render(dt);

    frameCount++;
    fpsTime += dt;
    if (fpsTime >= 1.0) {
      if (fpsEl) fpsEl.textContent = `${Math.round(frameCount / fpsTime)} FPS`;
      frameCount = 0;
      fpsTime = 0;
    }
  }

  requestAnimationFrame(loop);
  console.log('🦀 Call Of The Abyss: A Crab\'s Last Stand — running');
});
