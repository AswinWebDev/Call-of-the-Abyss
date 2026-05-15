/**
 * wavedash.js — Leaderboard backend (Wavedash SDK).
 *
 * Uses static import of @wvdsh/sdk-js which Wavedash bundles correctly.
 * On local dev (no wavedash dev / no Wavedash runtime), init() throws and
 * we catch it so the game still runs normally with empty leaderboards.
 *
 * Score encoding: wave * 10_000 + kills
 *   → natural DESC sort = highest wave first, kills as tiebreaker.
 */

// ── SDK state ─────────────────────────────────────────────────────
let _ready = false;   // true only after init() succeeded
let Wavedash = null;

// ── Leaderboard bootstrap ─────────────────────────────────────────
const LEADERBOARD_NAME = 'high-scores';
let _lbIdPromise = null;

function getLeaderboardId() {
  if (!_ready) return Promise.resolve(null);
  if (!_lbIdPromise) {
    _lbIdPromise = (async () => {
      try {
        const res = await Wavedash.getOrCreateLeaderboard(
          LEADERBOARD_NAME,
          Wavedash.LeaderboardSortOrder.DESC,
          Wavedash.LeaderboardDisplayType.NUMERIC
        );
        if (res.success) return res.data.id;
        console.warn('[wavedash] getOrCreateLeaderboard failed:', res.message);
        return null;
      } catch (e) {
        console.warn('[wavedash] getOrCreateLeaderboard error:', e);
        return null;
      }
    })();
  }
  return _lbIdPromise;
}

// ── Score helpers ─────────────────────────────────────────────────
function encodeScore(wave, kills) {
  return Math.max(0, Math.floor(wave || 0)) * 10_000
       + Math.max(0, Math.floor(kills || 0));
}

function decodeScore(score) {
  const s = Math.max(0, Math.floor(score || 0));
  return { wave: Math.floor(s / 10_000), kills: s % 10_000 };
}

// ── Public API ────────────────────────────────────────────────────

/**
 * Initialise the Wavedash SDK. Call this as early as possible — it
 * dismisses the Wavedash loading screen. Returns { username } on
 * Wavedash, null on plain localhost.
 */
export async function initWavedash() {
  try {
    const mod = await import('@wvdsh/sdk-js');
    Wavedash = mod.default || mod;
    Wavedash.init({ debug: true });
    _ready = true;
    const username = Wavedash.getUsername ? Wavedash.getUsername() : null;
    return username ? { username } : null;
  } catch (e) {
    // Not running inside Wavedash (plain `npm run dev`) — silent degrade
    _ready = false;
    return null;
  }
}

/**
 * Submit a run score. Returns globalRank on success, null on failure.
 */
export async function submitScore({ wave, kills }) {
  try {
    const lbId = await getLeaderboardId();
    if (!lbId) return null;
    const score = encodeScore(wave, kills);
    const res = await Wavedash.uploadLeaderboardScore(lbId, score, true);
    if (res.success) return res.data.globalRank;
    console.warn('[wavedash] uploadLeaderboardScore failed:', res.message);
    return null;
  } catch (e) {
    console.warn('[wavedash] submitScore error:', e);
    return null;
  }
}

/**
 * Fetch top N scores. Returns [] on failure / local dev.
 */
export async function fetchTopScores(n = 10) {
  try {
    const lbId = await getLeaderboardId();
    if (!lbId) return [];
    const res = await Wavedash.listLeaderboardEntries(lbId, 0, n, false);
    if (!res.success) return [];
    return res.data.map(entry => {
      const { wave, kills } = decodeScore(entry.score);
      return { name: entry.username || 'Anonymous', wave, kills, coins: 0, globalRank: entry.globalRank };
    });
  } catch (e) {
    console.warn('[wavedash] fetchTopScores error:', e);
    return [];
  }
}

/**
 * Fetch the current player's rank. Returns { entry, rank } or null.
 */
export async function fetchPlayerRank() {
  try {
    const lbId = await getLeaderboardId();
    if (!lbId) return null;
    const res = await Wavedash.getMyLeaderboardEntries(lbId);
    if (!res.success || !res.data || res.data.length === 0) return null;
    const best = res.data[0];
    const { wave, kills } = decodeScore(best.score);
    return {
      entry: { name: best.username || 'You', wave, kills, coins: 0 },
      rank: best.globalRank
    };
  } catch (e) {
    console.warn('[wavedash] fetchPlayerRank error:', e);
    return null;
  }
}
