# Call Of The Abyss: A Crab's Last Stand - Project Overview

Welcome to the **Call Of The Abyss** codebase (formerly *Shell Shock*). This document outlines the entire file structure, architectural design, and a full review of the game's current mechanics and optimization strategies.

---

## 📁 File Structure

### 1. Game Logic (`/src/`)
This folder contains the modular ES6 classes that power the game engine.

* **`main.js`**: The entry point. Handles the global Game State (`MENU` vs `PLAYING`), the UI event listeners, pointer lock security, and the main animation loop.
* **`Engine.js`**: The core Three.js setup (Scene, WebGLRenderer, Lighting, and resizing).
* **`World.js`**: Replaced the old `Beach.js` for better performance. Manages the procedural beach geometry, sand/water shaders, and environment colliders (trees, rocks).
* **`InputManager.js`**: Centralized keyboard (WASD) and mouse delta tracking.
* **`Camera.js`**: Third-person orbital camera that strictly follows the Crab. Now includes clamped pitch constraints to maintain optimal horizontal viewing angles.
* **`Crab.js`**: The player controller. Handles GLB animation mixing, health/ammo state, terrain slope physics, the **Sand Burst** ability (including the procedural ripple shader), and the core update loops.
* **`Weapons.js` & `Projectile.js`**: Handles shooting mechanics, projectile pooling (for high performance), and the dynamic three-track weapon system (Pistol, Shotgun, Charger).
* **`EnemyProjectiles.js`**: Manages the object pool for enemy projectiles, such as the Octopus's poison blobs and the sludge puddles they create.
* **`Enemies.js`**: The massive wave manager and enemy AI handler. Manages spawning logic, pathfinding, boss logic, the global dialogue queue, knockback physics, and all enemy mechanics.
* **`Burrow.js`**: The base defense target. Handles burrow health, repair mechanics, and spawning friendly Minions to fight alongside the Crab.
* **`UpgradeSystem.js`**: Centralized logic for the "Weapons and Upgrades 2.0" wave-based upgrade modal and stats scaling.
* **`AudioManager.js`**: The Web Audio API manager. Preloads `.mp3` files in the background, handles procedural wave synthesis (for the Sand Burst storm and Charger gun), and ensures zero-latency playback.
* **`DialogueManager.js`**: Handles the floating 2D speech bubbles and 3D positional audio. Calculates precise `.mp3` durations to prevent voice overlap.

### 2. Assets & Resources (`/public/`)
*Vite automatically serves everything in the `public/` directory at the root URL.*
* **`/models/`**: Contains all 3D `.glb` files (Crab, Turtles, Boss, Octopus, Trees, Rocks).
* **`/sounds/`**: Combat sound effects (guns, hits, ocean, wind).
* **`/models/dialogues/`**: The `.mp3` voice-acting files for the characters.

### 3. UI & Configuration
* **`index.html`**: The main HTML file containing the Glassmorphic UI, Main Menu, Health/Ammo HUD, Cooldown rings, and Canvas container.
* **`style.css`**: All CSS styling, including animations and responsive layouts.
* **`vite.config.js`**: Configuration for the Vite bundler.
* **`package.json`**: NPM dependencies (Three.js).

### 4. Competition & External Code
* **`Hackathon_Guidelines.md`**: Contains the rules, requirements, and themes for the Vibe Jam 2026 competition.
* **`ThreeJS start + exit portals for Vibeverse`**: External portal code for the competition. **(Not yet implemented)**.
We will integrate this later to allow players to travel between our game and the wider Vibeverse.

---

## 🎮 Full Game Review

### 🦀 The Player (Crab)
* **Movement:** Uses custom terrain-following math (no physics engine overhead). The crab can walk up slight inclines, but steep cliffs apply an exponential "gravity" pushback to keep the player inside the map bounds.
* **Combat (Weapons 2.0):** Uses water as ammo. To reload, the player must walk backward into the ocean water.
  * *Pistol:* High fire-rate, low damage rapid fire.
  * *Shotgun:* Consumes more water to blast a wide spread of projectiles.
  * *Charger:* A high-risk, high-reward weapon requiring the player to hold the mouse to charge, releasing a devastating, continuous hose of penetrating water.
* **Sand Burst Ability:** A secondary "panic button" ability triggered by right-clicking. It generates a massively powerful procedural audio storm (kick drum, brown noise rush, bandpass howling wind) and activates a custom WebGL Ripple Shader that physically distorts the ground in an expanding wave. It knocks enemies back significantly and applies a temporary stagger/slow debuff.
* **Economy & Progression:** Enemies drop Shells (Coins) and Water Drops (Health) on death. Coins are deposited at the Burrow to repair it and spawn AI Minion Crabs. Upon completing a wave, the game pauses and presents a multi-choice Upgrade Modal to improve weapons or crab stats.

### 🐢 The Invaders (Turtles)
* **Spawning:** The standard frontline infantry. Spawn dynamically from the ocean based on wave timers. They scale in Health and Speed as the waves progress.
* **AI:** They use distance checks to decide whether to swarm the player or attack the Burrow.

### 🐙 The Artillery (Octopus)
* **Mechanics:** Introduced in Wave 2. The Octopus is a massive, relentless artillery unit. It never stops moving and continuously pursues the player at high speed.
* **Attacks:** Throws poison blobs every 5 seconds. When the blobs land, they create a thick, opaque purple sludge area that deals tick damage and persists for 15 seconds.
* **Death Sequence:** Features a bespoke 4-second cinematic death animation where it spins, dynamically fades out its opacity, and delivers its final voice line.

### 🧟 The Boss Battle & Elites
* **Elite System:** Enemies have a chance to spawn as "Elites" (indicated by size and color overlays) which possess higher health, speed, and drop more valuable loot.
* **The Boss:** Spawns starting in Wave 3. Possesses massive health and extreme damage.
* **Dash Mechanic:** Every 7 seconds, the Boss enters a 3-second frenzy where its movement and animation speed are multiplied by 3x to close the gap on the player.

### 🔊 Intelligent Dialogue System & Audio Polish
* **Pre-decoded Audio:** The `AudioManager` creates a "suspended" AudioContext the second the page opens. While the player is looking at the Main Menu, it quietly downloads and fully decodes all `.mp3` files into raw memory buffers. 
* **Procedural Synthesis:** Instead of loading generic audio files for abilities, complex actions like the *Sand Burst* and *Charger Gun* use the Web Audio API to dynamically generate oscillators, noise buffers, and biquad filter sweeps for incredibly physical, responsive sound feedback.
* **Global Priority Queue:** To prevent overlapping chaotic noise, enemies and the hero use a smart dialogue manager. The system dynamically reads the exact length of each audio file and locks out other entities from speaking until the line is fully delivered.
* **Contextual Triggers:** Characters naturally react to gameplay events (e.g., the Crab complaining about low ammo, the Octopus taunting during throws, and the Burrow reporting destruction/repair status).
