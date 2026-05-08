/**
 * wavedash.js — Leaderboard backend (Wavedash SDK).
 *
 * Drop-in replacement for firebase.js. Exports the same three public
 * functions (submitScore, fetchTopScores, fetchPlayerRank) so the rest
 * of the codebase barely changes.
 *
 * Score encoding: wave * 10_000 + kills
 *   → natural DESC sort = highest wave first, kills as tiebreaker.
 *   → coins stored as metadata (display only, not ranked).
 *
 * The SDK is loaded lazily via dynamic import so local dev (plain
 * `npm run dev` without `wavedash dev`) doesn't crash at startup.
 */

// ── SDK singleton ──────────────────────────────────────────────────
let _sdk = null;        // set by initWavedash() if the platform is present
let _isWavedash = false;

// ── Leaderboard bootstrap ──────────────────────────────────────────
const LEADERBOARD_NAME = 'high-scores';
let _lbIdPromise = null;

/**
 * Resolve (or create) the leaderboard and cache its ID.
 * Every public function awaits this before doing anything.
 */
function getLeaderboardId() {
  if (!_sdk) return Promise.resolve(null);
  if (!_lbIdPromise) {
    _lbIdPromise = (async () => {
      try {
        const res = await _sdk.getOrCreateLeaderboard(
          LEADERBOARD_NAME,
          _sdk.LeaderboardSortOrder.DESC,
          _sdk.LeaderboardDisplayType.NUMERIC
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

// ── Helpers ────────────────────────────────────────────────────────
/** Encode wave + kills into a single sortable integer. */
function encodeScore(wave, kills) {
  return Math.max(0, Math.floor(wave || 0)) * 10_000
       + Math.max(0, Math.floor(kills || 0));
}

/** Decode back into { wave, kills }. */
function decodeScore(score) {
  const s = Math.max(0, Math.floor(score || 0));
  return { wave: Math.floor(s / 10_000), kills: s % 10_000 };
}

// ── Public API (mirrors firebase.js signatures) ────────────────────

/**
 * Submit a finished run to the leaderboard.
 * Returns the global rank on success, or null on failure.
 */
export async function submitScore({ wave, kills, coins }) {
  try {
    const lbId = await getLeaderboardId();
    if (!lbId) return null;

    const score = encodeScore(wave, kills);
    const res = await _sdk.uploadLeaderboardScore(lbId, score, true);
    if (res.success) {
      return res.data.globalRank;
    }
    console.warn('[wavedash] uploadLeaderboardScore failed:', res.message);
    return null;
  } catch (e) {
    console.warn('[wavedash] submitScore error:', e);
    return null;
  }
}

/**
 * Fetch the top N scores.
 * Returns an array of { name, wave, kills, coins, globalRank } —
 * same shape the leaderboard renderer expects.
 */
export async function fetchTopScores(n = 10) {
  try {
    const lbId = await getLeaderboardId();
    if (!lbId) return [];

    const res = await _sdk.listLeaderboardEntries(lbId, 0, n, false);
    if (!res.success) return [];

    return res.data.map(entry => {
      const { wave, kills } = decodeScore(entry.score);
      return {
        name: entry.username || 'Anonymous',
        wave,
        kills,
        coins: 0,          // coins aren't in the composite score — display-only
        globalRank: entry.globalRank,
        userId: entry.userId
      };
    });
  } catch (e) {
    console.warn('[wavedash] fetchTopScores error:', e);
    return [];
  }
}

/**
 * Fetch the current player's best entry and rank.
 * Returns { entry: { name, wave, kills, coins }, rank } or null.
 */
export async function fetchPlayerRank() {
  try {
    const lbId = await getLeaderboardId();
    if (!lbId) return null;

    const res = await _sdk.getMyLeaderboardEntries(lbId);
    if (!res.success || !res.data || res.data.length === 0) return null;

    const best = res.data[0]; // highest score entry
    const { wave, kills } = decodeScore(best.score);
    return {
      entry: {
        name: best.username || (_sdk.getUsername ? _sdk.getUsername() : 'You'),
        wave,
        kills,
        coins: 0
      },
      rank: best.globalRank
    };
  } catch (e) {
    console.warn('[wavedash] fetchPlayerRank error:', e);
    return null;
  }
}

/**
 * Initialise the Wavedash SDK.  Called once from main.js.
 * Returns { username } if a Wavedash user is available, or null for
 * local dev / non-Wavedash environments.
 *
 * The SDK package (@wvdsh/sdk-js) throws at import time when the
 * Wavedash host hasn't injected the runtime, so we load it via
 * dynamic import() inside a try/catch.
 */
export function initWavedash() {
  try {
    // The Wavedash host injects a global `Wavedash` object before our
    // code runs.  If it's missing, we're in local dev → bail out.
    if (typeof window === 'undefined' || !window.Wavedash) {
      console.info('[wavedash] Not running on Wavedash (local dev mode)');
      return null;
    }

    _sdk = window.Wavedash;
    _isWavedash = true;
    _sdk.init({ debug: true });

    const user = _sdk.getUser ? _sdk.getUser() : null;
    if (user) {
      const username = (_sdk.getUsername ? _sdk.getUsername() : null) || user.username || null;
      return { username };
    }
    return null;
  } catch (e) {
    console.info('[wavedash] SDK init failed (local dev mode):', e.message);
    _sdk = null;
    _isWavedash = false;
    return null;
  }
}
