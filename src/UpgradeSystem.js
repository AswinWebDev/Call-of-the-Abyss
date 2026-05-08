/**
 * UpgradeSystem.js — Persistent Shop UI
 * Uses coins to purchase upgrades directly.
 */

const WEAPON_ORDER = ['pistol', 'shotgun', 'charger'];

const WEAPON_NAMES = {
  pistol: 'Pistol',
  shotgun: 'Shotgun',
  charger: 'Charger'
};

export class UpgradeSystem {
  constructor() {
    this.isActive = false;
    this._overlay = null;
    this._resolve = null;
    this._wavesCompleted = 0;
  }

  onWaveComplete() {
    this._wavesCompleted++;
    return this._wavesCompleted % 2 === 0;
  }

  reset() {
    this._wavesCompleted = 0;
    this.isActive = false;
    if (this._overlay) {
      try { this._overlay.remove(); } catch (e) {}
      this._overlay = null;
    }
    this._resolve = null;
  }

  show(crab, weapons, burrowManager) {
    this.isActive = true;
    this.crab = crab;
    this.weapons = weapons;
    this.burrowManager = burrowManager;

    this._buildUI();

    return new Promise((resolve) => {
      this._resolve = resolve;
    });
  }

  _buildUI() {
    if (this._overlay) this._overlay.remove();

    const overlay = document.createElement('div');
    overlay.className = 'shop-overlay';
    
    overlay.innerHTML = `
      <div class="shop-panel">
        <div class="shop-header">
          <div class="shop-title">UPGRADE SHOP</div>
          <div class="shop-coins">Coins: <span id="shop-coin-count">${this.crab.coins}</span></div>
        </div>
        <div class="shop-grid" id="shop-cards"></div>
        <button class="shop-done-btn" id="shop-done-btn">DONE</button>
      </div>
    `;

    document.body.appendChild(overlay);
    this._overlay = overlay;
    
    this._renderCards();

    overlay.querySelector('#shop-done-btn').addEventListener('click', () => {
      this._close();
    });
  }

  _renderCards() {
    const container = this._overlay.querySelector('#shop-cards');
    container.innerHTML = '';
    
    const crab = this.crab;
    const cards = [];

    // 1. Weapon Upgrade
    const currentWeapon = crab.weaponType;
    const currentLevel = crab.weaponLevels[currentWeapon] || 1;
    const isWeaponMax = currentLevel >= 10;
    const weaponCost = 20 + (currentLevel - 1) * 15;

    cards.push({
      id: 'weapon_upgrade',
      title: `Upgrade ${WEAPON_NAMES[currentWeapon]}`,
      icon: '⬆️',
      levelText: isWeaponMax ? 'MAX' : `Lv.${currentLevel} → Lv.${currentLevel + 1}`,
      desc: isWeaponMax ? 'Maximum power reached' : '+Damage, +Crit Chance',
      cost: isWeaponMax ? 0 : weaponCost,
      color: '#00ddff',
      canBuy: !isWeaponMax && crab.coins >= weaponCost,
      action: () => {
        crab.coins -= weaponCost;
        crab.weaponLevels[currentWeapon]++;
        this.weapons.setWeapon(currentWeapon, crab.weaponLevels[currentWeapon]);
        this._playBuySound();
      }
    });

    // 2. Switch Weapon
    const currentIndex = WEAPON_ORDER.indexOf(currentWeapon);
    const nextWeapon = WEAPON_ORDER[(currentIndex + 1) % WEAPON_ORDER.length];
    const switchCost = 10;

    cards.push({
      id: 'switch_weapon',
      title: `Switch to ${WEAPON_NAMES[nextWeapon]}`,
      icon: '🔄',
      levelText: `Currently Lv.${crab.weaponLevels[nextWeapon] || 1}`,
      desc: 'Change weapon track completely',
      cost: switchCost,
      color: '#ff6b35',
      canBuy: crab.coins >= switchCost,
      action: () => {
        crab.coins -= switchCost;
        crab.weaponType = nextWeapon;
        this.weapons.setWeapon(nextWeapon, crab.weaponLevels[nextWeapon] || 1);
        this._playBuySound();
      }
    });

    // 3. Max Health
    const healthLevel = crab.utilityLevels.maxHealth || 1;
    const healthMax = healthLevel >= 10;
    const healthCost = 15 + (healthLevel - 1) * 10;

    cards.push({
      id: 'max_health',
      title: 'Thick Shell',
      icon: '❤️',
      levelText: healthMax ? 'MAX' : `Lv.${healthLevel} → Lv.${healthLevel + 1}`,
      desc: '+50 Max HP & Full Heal',
      cost: healthMax ? 0 : healthCost,
      color: '#44ff88',
      canBuy: !healthMax && crab.coins >= healthCost,
      action: () => {
        crab.coins -= healthCost;
        crab.utilityLevels.maxHealth++;
        crab.maxHealth += 50;
        crab.health = crab.maxHealth;
        this._playBuySound();
      }
    });

    // 4. Ammo Capacity
    const ammoLevel = crab.utilityLevels.waterCapacity || 1;
    const ammoMax = ammoLevel >= 10;
    const ammoCost = 15 + (ammoLevel - 1) * 10;

    cards.push({
      id: 'water_cap',
      title: 'Deep Reservoir',
      icon: '💧',
      levelText: ammoMax ? 'MAX' : `Lv.${ammoLevel} → Lv.${ammoLevel + 1}`,
      desc: '+50 Ammo Capacity',
      cost: ammoMax ? 0 : ammoCost,
      color: '#44ddff',
      canBuy: !ammoMax && crab.coins >= ammoCost,
      action: () => {
        crab.coins -= ammoCost;
        crab.utilityLevels.waterCapacity++;
        crab.maxAmmo += 50;
        crab.currentAmmo = crab.maxAmmo;
        this._playBuySound();
      }
    });

    // 5. Burrow Strength
    const burrowLevel = crab.utilityLevels.burrowStrength || 1;
    const burrowMax = burrowLevel >= 10;
    const burrowCost = 20 + (burrowLevel - 1) * 10;

    cards.push({
      id: 'burrow_hp',
      title: 'Fortified Burrow',
      icon: '🏰',
      levelText: burrowMax ? 'MAX' : `Lv.${burrowLevel} → Lv.${burrowLevel + 1}`,
      desc: '+200 Burrow Max HP & Heal',
      cost: burrowMax ? 0 : burrowCost,
      color: '#ffdd44',
      canBuy: !burrowMax && crab.coins >= burrowCost,
      action: () => {
        crab.coins -= burrowCost;
        crab.utilityLevels.burrowStrength++;
        if (this.burrowManager) {
          this.burrowManager.maxHealth += 200;
          this.burrowManager.health += 200;
        }
        this._playBuySound();
      }
    });

    // 6. Minion Capacity
    const minionCapLevel = crab.utilityLevels.minionCapacity || 1;
    const minionCapMax = minionCapLevel >= 5; // Cap at 5 for minions
    const minionCapCost = 30 + (minionCapLevel - 1) * 20;

    cards.push({
      id: 'minion_cap',
      title: 'Crab Army',
      icon: '🦀',
      levelText: minionCapMax ? 'MAX' : `Lv.${minionCapLevel} → Lv.${minionCapLevel + 1}`,
      desc: '+1 Minion Capacity',
      cost: minionCapMax ? 0 : minionCapCost,
      color: '#ff88aa',
      canBuy: !minionCapMax && crab.coins >= minionCapCost,
      action: () => {
        crab.coins -= minionCapCost;
        crab.utilityLevels.minionCapacity++;
        if (this.burrowManager) {
          this.burrowManager.maxMinions = (this.burrowManager.maxMinions || 0) + 1;
        }
        this._playBuySound();
      }
    });

    // 7. Spawn Minion
    let spawnCost = 0;
    let canSpawn = false;
    let spawnLevelText = 'OFFLINE';
    if (this.burrowManager && this.burrowManager.state === 'active') {
      const currentCount = this.burrowManager.eggs.length + this.burrowManager.minions.length;
      if (currentCount >= this.burrowManager.maxMinions) {
        spawnLevelText = 'MAX CAPACITY';
      } else {
        spawnCost = 5 * Math.pow(2, currentCount); // 5, 10, 20...
        spawnLevelText = `${currentCount}/${this.burrowManager.maxMinions} Alive`;
        canSpawn = crab.coins >= spawnCost;
      }
    }
    cards.push({
      id: 'spawn_minion',
      title: 'Hatch Minion',
      icon: '🥚',
      levelText: spawnLevelText,
      desc: 'Spawn a minion crab now',
      cost: canSpawn ? spawnCost : (spawnLevelText === 'MAX CAPACITY' || spawnLevelText === 'OFFLINE' ? 0 : spawnCost),
      color: '#ffaa00',
      canBuy: canSpawn,
      action: () => {
        if (this.burrowManager && this.burrowManager.spawnMinion()) {
          crab.coins -= spawnCost;
          this._playBuySound();
        }
      }
    });

    // 8. Upgrade Minions
    const minionLevel = crab.utilityLevels.minionLevel || 1;
    const minionMax = minionLevel >= 5;
    const minionCost = 40 + (minionLevel - 1) * 30;

    cards.push({
      id: 'upgrade_minion',
      title: 'Minion Power',
      icon: '💪',
      levelText: minionMax ? 'MAX' : `Lv.${minionLevel} → Lv.${minionLevel + 1}`,
      desc: 'Increases minion HP & Damage',
      cost: minionMax ? 0 : minionCost,
      color: '#dd5555',
      canBuy: !minionMax && crab.coins >= minionCost,
      action: () => {
        crab.coins -= minionCost;
        crab.utilityLevels.minionLevel++;
        this._playBuySound();
      }
    });

    // 9. Upgrade Sand Burst
    const burstLevel = crab.utilityLevels.sandBurst || 1;
    const burstMax = burstLevel >= 5;
    const burstCost = 50 + (burstLevel - 1) * 40;

    cards.push({
      id: 'upgrade_burst',
      title: 'Sand Burst',
      icon: '🌪️',
      levelText: burstMax ? 'MAX' : `Lv.${burstLevel} → Lv.${burstLevel + 1}`,
      desc: burstLevel === 1 ? '+Radius' : (burstLevel === 2 ? '-Cooldown' : (burstLevel === 3 ? '+Damage' : 'Max Power')),
      cost: burstMax ? 0 : burstCost,
      color: '#eedd88',
      canBuy: !burstMax && crab.coins >= burstCost,
      action: () => {
        crab.coins -= burstCost;
        crab.utilityLevels.sandBurst++;
        this._playBuySound();
      }
    });

    // 10. Upgrade Jump Power — bigger hops + longer airtime
    const jumpLevel = crab.utilityLevels.jumpPower || 1;
    const jumpMax = jumpLevel >= 5;
    const jumpCost = 25 + (jumpLevel - 1) * 20;

    cards.push({
      id: 'upgrade_jump',
      title: 'Spring Legs',
      icon: '🦘',
      levelText: jumpMax ? 'MAX' : `Lv.${jumpLevel} → Lv.${jumpLevel + 1}`,
      desc: '+Jump height & distance',
      cost: jumpMax ? 0 : jumpCost,
      color: '#88ffaa',
      canBuy: !jumpMax && crab.coins >= jumpCost,
      action: () => {
        crab.coins -= jumpCost;
        crab.utilityLevels.jumpPower++;
        // Each level adds +7 to jumpForce: Lv1=25, Lv2=32, Lv3=39, Lv4=46, Lv5=53
        crab.jumpForce = 25 + (crab.utilityLevels.jumpPower - 1) * 7;
        this._playBuySound();
      }
    });

    // Render HTML
    cards.forEach((c) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'shop-card' + (c.canBuy ? '' : ' disabled');
      cardEl.style.setProperty('--card-color', c.color);
      
      let priceHtml = '';
      if (c.cost === 0) {
         priceHtml = '<div class="shop-cost">MAX LEVEL</div>';
      } else {
         priceHtml = `<div class="shop-cost">🪙 ${c.cost}</div>`;
      }

      cardEl.innerHTML = `
        <div class="shop-icon">${c.icon}</div>
        <div class="shop-card-title">${c.title}</div>
        <div class="shop-level">${c.levelText}</div>
        <div class="shop-desc">${c.desc}</div>
        ${priceHtml}
      `;

      if (c.canBuy) {
        cardEl.addEventListener('click', (e) => {
          c.action();
          this._updateHUD();
          
          // Add green flash animation class
          const targetCard = e.currentTarget;
          targetCard.classList.add('flash-green');
          setTimeout(() => {
            if (targetCard) targetCard.classList.remove('flash-green');
            this._renderCards(); // Re-render to update prices and disabled states
          }, 300); // Wait for animation to finish
        });
      }

      container.appendChild(cardEl);
    });
  }

  _updateHUD() {
    const coinEl = this._overlay.querySelector('#shop-coin-count');
    if (coinEl) coinEl.textContent = this.crab.coins;
    
    // Also update main HUD
    const mainCoinEl = document.getElementById('coin-count');
    if (mainCoinEl) mainCoinEl.textContent = this.crab.coins;
    
    const tierEl = document.getElementById('gun-tier');
    if (tierEl) {
      tierEl.textContent = `${WEAPON_NAMES[this.crab.weaponType]} Lv.${this.crab.weaponLevels[this.crab.weaponType]}`;
    }
  }

  _playBuySound() {
    // Simple UI sound could be added here
  }

  _close() {
    this.isActive = false;
    if (this._overlay) {
      this._overlay.style.animation = 'upgradeOverlayOut 0.3s forwards';
      setTimeout(() => {
        if (this._overlay) { this._overlay.remove(); this._overlay = null; }
      }, 300);
    }
    if (this._resolve) {
      this._resolve();
      this._resolve = null;
    }
  }
}
