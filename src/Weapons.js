/**
 * Weapons.js — Water gun system with 3 weapon tracks + per-level upgrades
 * Tracks: Pistol (rapid), Shotgun (spread), Charger (3s charge, massive damage)
 * Procedural Three.js meshes, no GLBs needed.
 */
import * as THREE from 'three';

const WEAPON_TRACKS = {
  pistol: {
    name: 'Pistol',
    baseFireRate: 3,
    baseDamage: 10,
    baseAmmoPerShot: 2,
    projectileSpeed: 120,
    spread: 0,
    baseProjectilesPerShot: 1,
    color: 0x00ccff,
    barrelLength: 1.2,
    barrelRadius: 0.12,
    tankSize: 0.3,
    isDual: false,
    isCharge: false,
    maxLevel: 10,
    baseCritChance: 0.1,
    baseCritDamage: 2.0,
    // Per-level scaling
    levelUpDamage: 5,
    levelUpFireRate: 2.0,
    levelUpProjectiles: 0,
    levelUpCritChance: 0.02
  },
  shotgun: {
    name: 'Shotgun',
    baseFireRate: 1.8,
    baseDamage: 8,
    baseAmmoPerShot: 6,
    projectileSpeed: 100,
    spread: 0.15,
    baseProjectilesPerShot: 3,
    color: 0x0088ff,
    barrelLength: 1.5,
    barrelRadius: 0.18,
    tankSize: 0.45,
    isDual: false,
    isCharge: false,
    maxLevel: 10,
    baseCritChance: 0.05,
    baseCritDamage: 1.5,
    levelUpDamage: 2,
    levelUpFireRate: 0,
    levelUpProjectiles: 3,
    levelUpCritChance: 0.01
  },
  charger: {
    name: 'Charger',
    baseFireRate: 0.33,  // ~3 seconds between shots (charge time)
    baseDamage: 80,
    baseAmmoPerShot: 50,
    projectileSpeed: 200,
    spread: 0.01,
    baseProjectilesPerShot: 1,
    color: 0x00ff88,
    barrelLength: 3.0,
    barrelRadius: 0.40,
    tankSize: 0.9,
    isDual: false,
    isCharge: true,
    chargeTime: 3.0,   // 3 seconds to fully charge
    hoseDuration: 1.0, // 1 second to dump the full payload
    maxLevel: 10,
    baseCritChance: 0.15,
    baseCritDamage: 2.5,
    levelUpDamage: 5,
    levelUpFireRate: 0,
    levelUpProjectiles: 0,
    levelUpAmmoPerShot: 25,
    levelUpHoseDuration: 0.5,
    levelUpCritChance: 0.02
  }
};

export { WEAPON_TRACKS };

export class WeaponSystem {
  constructor(scene, audioManager) {
    this.scene = scene;
    this.audio = audioManager;

    // Current weapon state
    this.currentType = 'pistol';
    this.currentLevel = 1;
    
    this.gunMeshes = [];
    this.muzzlePoints = [];
    this._muzzleFlashes = [];

    this._fireCooldown = 0;
    this._muzzleFlashTimer = 0;

    // Charge system
    this._isCharging = false;
    this._chargeTimer = 0;
    this._chargeIndicator = null;

    this._buildGuns(this.getEffectiveStats());
    this._createChargeIndicator();
  }

  /**
   * Compute effective stats from current weapon type + level
   */
  getEffectiveStats(type, level) {
    type = type || this.currentType;
    level = level || this.currentLevel;
    const base = WEAPON_TRACKS[type];
    if (!base) return WEAPON_TRACKS.pistol;
    const lvl = level - 1; // level 1 = base stats
    return {
      name: base.name + (level > 1 ? ` Lv.${level}` : ''),
      fireRate: base.baseFireRate + base.levelUpFireRate * lvl,
      damage: base.baseDamage + base.levelUpDamage * lvl,
      ammoPerShot: base.baseAmmoPerShot + (base.levelUpAmmoPerShot || 0) * lvl,
      projectileSpeed: base.projectileSpeed,
      spread: base.spread,
      projectilesPerShot: base.baseProjectilesPerShot + base.levelUpProjectiles * lvl,
      color: base.color,
      barrelLength: base.barrelLength,
      barrelRadius: base.barrelRadius,
      tankSize: base.tankSize,
      isDual: base.isDual,
      isCharge: base.isCharge || false,
      chargeTime: base.chargeTime || 0,
      hoseDuration: (base.hoseDuration || 0) + (base.levelUpHoseDuration || 0) * lvl,
      critChance: (base.baseCritChance || 0) + (base.levelUpCritChance || 0) * lvl,
      critDamage: base.baseCritDamage || 1.5
    };
  }

  get stats() { return this.getEffectiveStats(); }

  /**
   * Switch to a specific weapon type and level
   */
  setWeapon(weaponType, weaponLevel) {
    this.currentType = weaponType;
    this.currentLevel = weaponLevel;
    this._isCharging = false;
    this._chargeTimer = 0;
    this._buildGuns(this.getEffectiveStats());
    console.log(`🔫 Weapon: ${weaponType} Lv.${weaponLevel}`);
  }

  _buildGunModel(s) {
    const group = new THREE.Group();

    if (this.currentType === 'shotgun') {
      // SHOTGUN: 3 horizontal barrels, rugged stock
      for (let i = -1; i <= 1; i++) {
        const barrelGeo = new THREE.CylinderGeometry(s.barrelRadius, s.barrelRadius * 0.8, s.barrelLength, 8);
        barrelGeo.rotateX(Math.PI / 2);
        const barrelMat = new THREE.MeshStandardMaterial({ color: s.color, roughness: 0.3, metalness: 0.6 });
        const barrel = new THREE.Mesh(barrelGeo, barrelMat);
        barrel.position.set(i * s.barrelRadius * 2.2, 0, s.barrelLength / 2);
        barrel.castShadow = true;
        group.add(barrel);
      }
      
      const stockGeo = new THREE.BoxGeometry(0.8, 0.4, 0.6);
      const stockMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.9 });
      const stock = new THREE.Mesh(stockGeo, stockMat);
      stock.position.set(0, -0.1, -0.2);
      group.add(stock);

      const tankGeo = new THREE.BoxGeometry(s.tankSize * 2, s.tankSize * 1.5, s.tankSize * 1.5);
      const tankMat = new THREE.MeshStandardMaterial({ color: 0x44aaff, roughness: 0.1, metalness: 0.2, transparent: true, opacity: 0.6 });
      const tank = new THREE.Mesh(tankGeo, tankMat);
      tank.position.set(0, s.tankSize * 0.5, 0.2);
      group.add(tank);

    } else if (this.currentType === 'charger') {
      // CHARGER: Massive barrel, coils, huge tank
      const barrelGeo = new THREE.CylinderGeometry(s.barrelRadius, s.barrelRadius, s.barrelLength, 12);
      barrelGeo.rotateX(Math.PI / 2);
      const barrelMat = new THREE.MeshStandardMaterial({ color: s.color, roughness: 0.2, metalness: 0.8 });
      const barrel = new THREE.Mesh(barrelGeo, barrelMat);
      barrel.position.z = s.barrelLength / 2;
      barrel.castShadow = true;
      group.add(barrel);

      const coilGeo = new THREE.TorusGeometry(s.barrelRadius * 1.5, s.barrelRadius * 0.3, 8, 16);
      coilGeo.rotateX(Math.PI / 2);
      const coilMat = new THREE.MeshStandardMaterial({ color: 0x00ff88, emissive: 0x00ff88, emissiveIntensity: 0.8, roughness: 0.1, metalness: 0.9 });
      for (let i = 1; i <= 3; i++) {
        const coil = new THREE.Mesh(coilGeo, coilMat);
        coil.position.z = (s.barrelLength / 4) * i;
        group.add(coil);
      }

      const tankGeo = new THREE.SphereGeometry(s.tankSize, 16, 12);
      const tankMat = new THREE.MeshStandardMaterial({ color: 0x00ff88, roughness: 0.1, metalness: 0.3, transparent: true, opacity: 0.8 });
      const tank = new THREE.Mesh(tankGeo, tankMat);
      tank.position.set(0, s.tankSize * 0.8, -0.5);
      group.add(tank);

    } else {
      // PISTOL: Classic single barrel
      const barrelGeo = new THREE.CylinderGeometry(s.barrelRadius, s.barrelRadius * 0.8, s.barrelLength, 8);
      barrelGeo.rotateX(Math.PI / 2);
      const barrelMat = new THREE.MeshStandardMaterial({ color: s.color, roughness: 0.3, metalness: 0.6 });
      const barrel = new THREE.Mesh(barrelGeo, barrelMat);
      barrel.position.z = s.barrelLength / 2;
      barrel.castShadow = true;
      group.add(barrel);

      const tankGeo = new THREE.SphereGeometry(s.tankSize, 8, 6);
      const tankMat = new THREE.MeshStandardMaterial({ color: 0x44aaff, roughness: 0.1, metalness: 0.2, transparent: true, opacity: 0.6 });
      const tank = new THREE.Mesh(tankGeo, tankMat);
      tank.position.set(0, s.tankSize * 0.6, -0.1);
      group.add(tank);
    }

    // Handle (common)
    const handleGeo = new THREE.CylinderGeometry(0.08, 0.1, 0.6, 6);
    const handleMat = new THREE.MeshStandardMaterial({ color: 0x885533, roughness: 0.8 });
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.position.set(0, -0.35, -0.2);
    handle.rotation.x = 0.2;
    group.add(handle);

    // Scale for crab size
    group.scale.setScalar(this.currentType === 'charger' ? 1.8 : 1.5);
    return group;
  }

  _createMuzzleFlashModel() {
    const geo = new THREE.SphereGeometry(0.4, 6, 6);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x88ddff,
      transparent: true,
      opacity: 0
    });
    const mesh = new THREE.Mesh(geo, mat);
    this.scene.add(mesh);
    return mesh;
  }

  _createChargeIndicator() {
    // 2D HUD charge bar — created in the DOM
    let bar = document.getElementById('charge-bar-container');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'charge-bar-container';
      bar.style.cssText = 'position:fixed; bottom:120px; left:50%; transform:translateX(-50%); width:200px; height:8px; background:rgba(0,0,0,0.5); border-radius:4px; z-index:12; pointer-events:none; display:none; border:1px solid rgba(0,255,136,0.3);';
      const fill = document.createElement('div');
      fill.id = 'charge-bar-fill';
      fill.style.cssText = 'height:100%; width:0%; background:linear-gradient(90deg, #00ff88, #ffdd00); border-radius:4px; transition:none;';
      bar.appendChild(fill);
      document.body.appendChild(bar);
    }
    this._chargeBarContainer = bar;
    this._chargeBarFill = bar.querySelector('#charge-bar-fill');
  }

  _buildGuns(s) {
    for (const mesh of this.gunMeshes) {
      this.scene.remove(mesh);
    }
    for (const flash of this._muzzleFlashes) {
      this.scene.remove(flash);
    }
    
    this.gunMeshes = [];
    this.muzzlePoints = [];
    this._muzzleFlashes = [];

    // Right gun
    const rightGun = this._buildGunModel(s);
    this.scene.add(rightGun);
    this.gunMeshes.push(rightGun);
    this.muzzlePoints.push(new THREE.Vector3());
    this._muzzleFlashes.push(this._createMuzzleFlashModel());

    if (s.isDual) {
      // Left gun
      const leftGun = this._buildGunModel(s);
      this.scene.add(leftGun);
      this.gunMeshes.push(leftGun);
      this.muzzlePoints.push(new THREE.Vector3());
      this._muzzleFlashes.push(this._createMuzzleFlashModel());
    }
  }

  /**
   * Start charging (for charger weapon). Called when mouse is held down.
   */
  startCharge() {
    if (!this.stats.isCharge) return;
    if (this._isCharging) return;
    this._isCharging = true;
    this._chargeTimer = 0;
    
    if (this.audio) {
      this.audio.playChargeSound(this.stats.chargeTime);
    }
  }

  /**
   * Release charge and fire. Returns projectile data or null.
   */
  releaseCharge(crabPosition, cameraYaw, currentAmmo) {
    if (!this._isCharging) return null;
    this._isCharging = false;

    // Hide charge bar
    if (this._chargeBarContainer) this._chargeBarContainer.style.display = 'none';

    const s = this.stats;
    const chargeRatio = Math.min(1, this._chargeTimer / s.chargeTime);
    this._chargeTimer = 0;

    // Must charge at least 20% to fire
    if (chargeRatio < 0.2 || currentAmmo < s.ammoPerShot) {
      if (this.audio && this.audio._currentChargeOsc) {
         try { this.audio._currentChargeOsc.stop(); this.audio._currentChargeLfo.stop(); } catch(e){}
         this.audio._currentChargeOsc = null;
      }
      return null;
    }

    // Muzzle flash — bigger with charge
    this._muzzleFlashTimer = 0.1;
    for (const flash of this._muzzleFlashes) {
      flash.material.opacity = 0.9;
    }

    // Play discharging sound (water blast)
    if (this.audio && this.audio.initialized) {
      this.audio.playDischargeSound(s.hoseDuration);
    }

    // Enter hose mode instead of firing instantly
    this._isFiringHose = true;
    this._hoseTimer = s.hoseDuration;
    this._hoseChargeRatio = chargeRatio;
    this._hoseCooldown = 0;

    return {
      projectiles: [],
      ammoCost: s.ammoPerShot
    };
  }

  /**
   * Generates continuous penetrating projectiles during Charger's hose mode.
   * Called every frame from main loop.
   */
  getHoseProjectiles(dt, cameraYaw) {
    if (!this._isFiringHose) return null;
    
    const s = this.stats;
    this._hoseTimer -= dt;
    if (this._hoseTimer <= 0) {
      this._isFiringHose = false;
      return null;
    }

    this._hoseCooldown -= dt;
    if (this._hoseCooldown > 0) return null;

    // Fire ~15 times per second
    this._hoseCooldown = 1.0 / 15.0;

    // Camera forward direction
    const fwd = new THREE.Vector3(
      Math.sin(cameraYaw),
      0,
      -Math.cos(cameraYaw)
    );

    const projectiles = [];
    // Per-tick damage. Old hose was 5s with 0.2× scaling; the new 1s window
    // keeps the same total damage by upping the multiplier 5×.
    const scaledDamage = s.damage * this._hoseChargeRatio * 1.0;
    const scaledSpeed = s.projectileSpeed;

    for (let m = 0; m < this.muzzlePoints.length; m++) {
      const muzzlePos = this.muzzlePoints[m];
      const dir = fwd.clone();
      dir.y = 0.03;
      dir.normalize();

      const isCrit = Math.random() < s.critChance;
      const finalDamage = isCrit ? scaledDamage * s.critDamage : scaledDamage;

      projectiles.push({
        position: muzzlePos.clone().add(dir.clone().multiplyScalar(0.5)),
        velocity: dir.multiplyScalar(scaledSpeed),
        damage: finalDamage,
        tier: 2, // Charger uses tier 2 visuals (green)
        options: { penetrating: true, isChargerHose: true, hitScale: 6.0, isCrit }
      });
    }

    return { projectiles };
  }

  /**
   * Attempt to fire — returns projectile data array or null
   * For non-charge weapons only.
   */
  tryFire(crabPosition, cameraYaw, currentAmmo) {
    const s = this.stats;

    // If this is a charge weapon, don't use instant fire
    if (s.isCharge) return null;

    if (this._fireCooldown > 0) return null;
    if (currentAmmo < s.ammoPerShot) return null;

    this._fireCooldown = 1.0 / s.fireRate;

    // Muzzle flash
    this._muzzleFlashTimer = 0.06;
    for (const flash of this._muzzleFlashes) {
      flash.material.opacity = 0.9;
    }

    // Play shooting sound
    if (this.audio && this.audio.initialized) {
      this.audio.playShootSound(this.currentType === 'shotgun' ? 1 : 0);
      this.audio.playShellDropSound();
    }

    // Camera forward direction
    const fwd = new THREE.Vector3(
      Math.sin(cameraYaw),
      0,
      -Math.cos(cameraYaw)
    );

    const projectiles = [];

    for (let m = 0; m < this.muzzlePoints.length; m++) {
      const muzzlePos = this.muzzlePoints[m];
      
      for (let i = 0; i < s.projectilesPerShot; i++) {
        const dir = fwd.clone();

        // Apply spread
        if (s.spread > 0) {
          const angle = (Math.random() - 0.5) * s.spread * 2;
          const cos = Math.cos(angle);
          const sin = Math.sin(angle);
          const nx = dir.x * cos - dir.z * sin;
          const nz = dir.x * sin + dir.z * cos;
          dir.x = nx;
          dir.z = nz;
        }

        // Slight upward arc
        dir.y = 0.05;
        dir.normalize();

        const isCrit = Math.random() < s.critChance;
        const finalDamage = isCrit ? s.damage * s.critDamage : s.damage;

        projectiles.push({
          position: muzzlePos.clone().add(dir.clone().multiplyScalar(0.2)),
          velocity: dir.multiplyScalar(s.projectileSpeed),
          damage: finalDamage,
          tier: this.currentType === 'shotgun' ? 1 : 0,
          options: { isShotgun: this.currentType === 'shotgun', isCrit }
        });
      }
    }

    return {
      projectiles,
      ammoCost: s.ammoPerShot
    };
  }

  /**
   * Update gun position to follow crab, aiming where camera looks
   */
  update(dt, crabPosition, cameraYaw) {
    this._fireCooldown = Math.max(0, this._fireCooldown - dt);
    this._muzzleFlashTimer -= dt;

    // Charge update
    if (this._isCharging) {
      const s = this.stats;
      this._chargeTimer = Math.min(s.chargeTime, this._chargeTimer + dt);
      const ratio = this._chargeTimer / s.chargeTime;

      // Show charge bar
      if (this._chargeBarContainer) {
        this._chargeBarContainer.style.display = 'block';
        this._chargeBarFill.style.width = `${ratio * 100}%`;
        // Color shifts from green to gold when fully charged
        if (ratio >= 1.0) {
          this._chargeBarFill.style.background = 'linear-gradient(90deg, #ffdd00, #ff6b35)';
        } else {
          this._chargeBarFill.style.background = 'linear-gradient(90deg, #00ff88, #ffdd00)';
        }
      }

      // Gun visual feedback: glow intensifies while charging
      for (const gun of this.gunMeshes) {
        gun.traverse((child) => {
          if (child.isMesh && child.material && child.material.emissive) {
            child.material.emissiveIntensity = 0.15 + ratio * 0.8;
          }
        });
      }
    }

    const sinY = Math.sin(cameraYaw);
    const cosY = Math.cos(cameraYaw);

    const fwdX = sinY;
    const fwdZ = -cosY;
    const rightX = cosY;
    const rightZ = sinY;

    const offsetFwd = 1.0;
    const offsetUp = 1.2;
    const offsetsRight = [1.5, -1.5]; // Right gun, Left gun

    const s = this.stats;

    for (let i = 0; i < this.gunMeshes.length; i++) {
      const gun = this.gunMeshes[i];
      const offR = offsetsRight[i];

      gun.position.set(
        crabPosition.x + rightX * offR + fwdX * offsetFwd,
        crabPosition.y + offsetUp,
        crabPosition.z + rightZ * offR + fwdZ * offsetFwd
      );
      gun.rotation.y = Math.atan2(fwdX, fwdZ);

      this.muzzlePoints[i].set(
        gun.position.x + fwdX * s.barrelLength * 1.5,
        gun.position.y,
        gun.position.z + fwdZ * s.barrelLength * 1.5
      );

      const flash = this._muzzleFlashes[i];
      if (this._muzzleFlashTimer > 0) {
        flash.position.copy(this.muzzlePoints[i]);
        flash.material.opacity = this._muzzleFlashTimer / 0.06;
        flash.scale.setScalar(1 + (1 - this._muzzleFlashTimer / 0.06) * 2);
      } else {
        flash.material.opacity = 0;
      }
    }
  }
}
