/**
 * firebase.js — Leaderboard backend (Firestore).
 *
 * Uses lazy-imported modular SDK to keep the initial load fast.
 * The first call (submitScore or fetchTopScores) triggers the import.
 *
 * Public web keys are not secrets — actual access control lives in
 * Firestore security rules (see Hackathon notes).
 */

const firebaseConfig = {
  apiKey: "AIzaSyD9K17MBIXNlZDeebTmrUwXIzvb6rYCZc4",
  authDomain: "shell-shock-bada5.firebaseapp.com",
  projectId: "shell-shock-bada5",
  storageBucket: "shell-shock-bada5.firebasestorage.app",
  messagingSenderId: "907315274648",
  appId: "1:907315274648:web:5a7d17f3ba4c6b99c201ed",
  measurementId: "G-QXLRWC9CLT"
};

let _dbPromise = null;
let _firestore = null;

async function getDb() {
  if (_firestore) return _firestore;
  if (!_dbPromise) {
    _dbPromise = (async () => {
      const [{ initializeApp }, fs] = await Promise.all([
        import('firebase/app'),
        import('firebase/firestore')
      ]);
      const app = initializeApp(firebaseConfig);
      _firestore = fs.getFirestore(app);
      // Stash the namespace so callers can reuse query helpers without re-importing
      _firestore._fs = fs;
      return _firestore;
    })();
  }
  return _dbPromise;
}

/**
 * Submit a finished run to the leaderboard.
 * Returns the new doc id, or null on failure.
 */
export async function submitScore({ name, wave, kills, coins }) {
  try {
    const db = await getDb();
    const { collection, addDoc, serverTimestamp } = db._fs;
    const ref = await addDoc(collection(db, 'leaderboard'), {
      name: String(name || 'Anonymous').slice(0, 20),
      wave: Math.max(0, Math.floor(wave || 0)),
      kills: Math.max(0, Math.floor(kills || 0)),
      coins: Math.max(0, Math.floor(coins || 0)),
      createdAt: serverTimestamp()
    });
    return ref.id;
  } catch (e) {
    console.warn('[leaderboard] submitScore failed:', e);
    return null;
  }
}

/**
 * Find the player's best run (by name) and their global rank.
 * Rank is approximated using `wave > best.wave` count + 1 — accurate
 * for the primary sort key without needing a composite index.
 * Returns null if the player has no submissions yet.
 */
export async function fetchPlayerRank(name) {
  if (!name) return null;
  try {
    const db = await getDb();
    const { collection, query, where, getDocs, getCountFromServer } = db._fs;
    const snap = await getDocs(query(collection(db, 'leaderboard'), where('name', '==', name)));
    if (snap.empty) return null;

    let best = null;
    snap.forEach(doc => {
      const data = { id: doc.id, ...doc.data() };
      if (
        !best ||
        data.wave > best.wave ||
        (data.wave === best.wave && data.kills > best.kills) ||
        (data.wave === best.wave && data.kills === best.kills && data.coins > best.coins)
      ) best = data;
    });

    const betterCount = await getCountFromServer(
      query(collection(db, 'leaderboard'), where('wave', '>', best.wave))
    );
    return { entry: best, rank: betterCount.data().count + 1 };
  } catch (e) {
    console.warn('[leaderboard] fetchPlayerRank failed:', e);
    return null;
  }
}

/**
 * Fetch the top N scores ordered by wave reached (desc).
 * Returns [] on failure so callers can render an empty state.
 */
export async function fetchTopScores(n = 10) {
  try {
    const db = await getDb();
    const { collection, query, orderBy, limit, getDocs } = db._fs;
    const q = query(
      collection(db, 'leaderboard'),
      orderBy('wave', 'desc'),
      limit(n)
    );
    const snap = await getDocs(q);
    const out = [];
    snap.forEach(doc => out.push({ id: doc.id, ...doc.data() }));
    // Tiebreaker on the client (cheap, avoids needing a composite index)
    out.sort((a, b) => (b.wave - a.wave) || (b.kills - a.kills) || (b.coins - a.coins));
    return out;
  } catch (e) {
    console.warn('[leaderboard] fetchTopScores failed:', e);
    return [];
  }
}
