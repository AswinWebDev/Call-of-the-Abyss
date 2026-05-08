# Shell Shock: Game Balance & Stats Reference

This document outlines all precise statistics, scaling mechanics, and entity details currently implemented in the game. It serves as a reference for rebalancing.

## 🦀 The Crab (Player)
| Stat | Base Value | Upgrade Scaling |
|---|---|---|
| **Max Health** | 100 | +100 ("Thick Shell" utility upgrade) |
| **Walk Speed** | 25 | - |
| **Sprint Speed** | 45 | - |
| **Max Ammo** | 100 | +100 ("Deep Reservoir" utility upgrade) |
| **Coin Multiplier**| 1.0x | x1.5 ("Treasure Hunter" utility upgrade) |

### Sand Burst Ability (Right Click)
* **Cooldown**: 7.0 seconds
* **Damage**: 25
* **Radius**: 15.0 units
* **Knockback Force**: 25.0
* **Stagger Duration**: 1.5 seconds

---

## 🔫 Weapons System
Weapons can be leveled up during the Upgrade screen (Wave 2.0 system).

### 1. Water Pistol (Track 1)
* **Description**: Rapid fire, single projectile.
* **Base Damage**: 10
* **Fire Rate**: 3.0 shots/sec
* **Ammo Cost**: 2 per shot
* **Projectile Speed**: 120
* **Spread**: 0
* **Projectiles/Shot**: 1
* **Level-Up Scaling**: Damage +5, Fire Rate +2.0

### 2. Shotgun (Track 2)
* **Description**: Spread fire, multiple projectiles.
* **Base Damage**: 8 (per projectile)
* **Fire Rate**: 1.8 shots/sec
* **Ammo Cost**: 6 per shot
* **Projectile Speed**: 100
* **Spread**: 0.15
* **Projectiles/Shot**: 3
* **Level-Up Scaling**: Damage +2, Projectiles +3

### 3. Charger (Track 3)
* **Description**: 3-second charge, massive continuous hose damage.
* **Base Damage**: 80 (scales down per tick: `damage * chargeRatio * 0.2` fired 15x/sec)
* **Charge Time**: 3.0 seconds
* **Hose Duration**: 5.0 seconds
* **Ammo Cost**: 50 per charge
* **Projectile Speed**: 200
* **Spread**: 0.01
* **Level-Up Scaling**: Damage +5, Ammo Cost +25, Hose Duration +0.5s

---

## 🏰 Burrow & Minions
The player can deposit shells (coins) at the Burrow to spawn AI Minions or repair the Burrow.

### The Burrow
* **Max Health**: 400 (scales +200 per "Fortified Burrow" utility upgrade)
* **Repair Cost**: 15 shells
* **Rebuild Duration**: 15.0 seconds
* **Egg Hatch Time**: 5.0 seconds
* **Minion Cost Scaling**: 5 shells (1st), 10 shells (2nd), 20 shells (3rd). Formula: `5 * (2 ^ currentMinionCount)`
* **Max Minions Capacity**: 3

### Minion Crabs
*Note: Minion stats are tied to Burrow Level (currently fixed at Level 1 in code).*
* **Health**: 400 * Level (= 400)
* **Speed**: 14.0 + (Level * 2) (= 16.0)
* **Attack Damage**: 15 + (Level * 5) (= 20)
* **Attack Cooldown**: 0.5 seconds

---

## 🐢 Enemies & Invaders

### Global Enemy Modifiers (Wave 2.0 Scaling)
* **Level 1** (Waves 1-4): Base stats.
* **Level 2** (Waves 5-7): Health x2.
* **Level 3** (Waves 8+): Health x1.5 (total x3), Speed x1.2, Attack Cooldown x0.85.
* **Elites** (Wave 7+, 25% chance): Health x2, Attack Damage x2. Glows Gold.

### 1. Turtle (Infantry)
* **Spawn Limit**: 8 max alive
* **Base Health**: `40 + (Wave * 10)`
* **Speed**: `12 + (Wave * 0.75)`
* **Attack Damage**: `8 + (Wave * 2)`
* **Attack Range**: 5.0
* **Attack Cooldown**: 1.5 seconds
* **Variants** (Starts Wave 5):
  * **Charger**: Can dash. Tint = Orange/Red.
  * **Tank**: HP x3, Speed x0.9. Tint = Dark Blue.
  * **Swarm**: HP x0.7, Speed x2.0. Tint = Neon Green.

### 2. Octopus (Artillery)
*Spawns starting Wave 2. Replaces some turtles.*
* **Spawn Limit**: 3 max alive (Scales `1 + floor((Wave - 2) / 2)`)
* **Base Health**: `120 + (Wave * 40)` (Double Turtle HP)
* **Speed**: `10 + (Wave * 0.5)`
* **Attack Damage** (Direct Hit): `16 + (Wave * 4)`
* **Tick Damage** (Poison Pool): `2.4 + (Wave * 0.6)`
* **Attack Range**: 40.0
* **Attack Cooldown**: 5.0 seconds (Throws poison sludge)
* **Variants** (Starts Wave 5):
  * **Spreader**: Extra Projectiles +2, Cooldown +1.0s. Tint = Purple.
  * **Hunter**: Speed x1.5, Cooldown -1.0s. Tint = Pink/Red.
  * **Corruptor**: Pool Duration +5s. Tint = Dark Green.

### 3. The Boss (Necromorph Zombie)
*Spawns starting Wave 3. Dashing mechanic engages every 7 seconds.*
* **Spawn Limit**: 2 max alive
* **Base Health**: `400 + (Wave * 50)`
* **Speed**: `10 + (Wave * 0.5)`
* **Attack Damage**: `20 + (Wave * 5)`
* **Attack Range**: 8.0
* **Attack Cooldown**: 1.5 seconds

### 4. Mega Boss (Giant Variant)
*Replaces normal boss on specific waves (Wave 6, 8, 10...).*
* **Base Health**: `600 + (Wave * 100)`
* **Speed**: `8 + (Wave * 0.2)`
* **Attack Damage**: `40 + (Wave * 5)`
* **Attack Range**: 12.0
* **Attack Cooldown**: 2.5 seconds

* **Boss Variants** (Starts Wave 5):
  * **Enraged**: Dash Cooldown -2s. Tint = Red.
  * **Summoner**: Spawns Adds. Tint = Purple.
  * **Corrupter**: Slam creates poison pool. Tint = Dark Green.
