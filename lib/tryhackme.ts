import { TryHackMeProfile } from "@/types/tryhackme";

const THM_API_BASE = "https://tryhackme.com/api/v2";

// ─────────────────────────────────────────────────────────────────────────────
// Simple in-memory cache to avoid hammering TryHackMe with 429s.
// Lives for the duration of the Next.js server process (warm cache per deploy).
// TTL: 5 minutes.
// ─────────────────────────────────────────────────────────────────────────────

interface CacheEntry {
  data: TryHackMeProfile;
  expiresAt: number; // Unix ms
}

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
const cache = new Map<string, CacheEntry>();

function getCached(username: string): TryHackMeProfile | null {
  const entry = cache.get(username);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    cache.delete(username);
    return null;
  }
  return entry.data;
}

function setCached(username: string, data: TryHackMeProfile): void {
  cache.set(username, { data, expiresAt: Date.now() + CACHE_TTL_MS });
}

// ─────────────────────────────────────────────────────────────────────────────
// Fetch with retry on 429 (honours Retry-After header)
// ─────────────────────────────────────────────────────────────────────────────

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchWithRetry(url: string, maxRetries = 2): Promise<Response> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const res = await fetch(url, {
      // Cache at HTTP level for 5 min, still serve stale while revalidating
      next: { revalidate: 300 },
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Referer: "https://tryhackme.com/",
      },
    });

    if (res.status !== 429) return res;

    // Respect Retry-After header, default to 10 s
    const retryAfter = res.headers.get("retry-after");
    const waitMs = retryAfter ? parseInt(retryAfter, 10) * 1000 : 10_000;

    console.warn(
      `[TryHackMe lib] 429 received (attempt ${attempt + 1}). Waiting ${waitMs}ms…`
    );

    lastError = new Error(`TryHackMe API returned 429: Too Many Requests`);

    if (attempt < maxRetries) await sleep(waitMs);
  }

  throw lastError ?? new Error("TryHackMe API rate-limit exceeded");
}

// ─────────────────────────────────────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────────────────────────────────────

export async function fetchTryHackMeProfile(
  username: string
): Promise<TryHackMeProfile> {
  // Return cached copy if still fresh
  const cached = getCached(username);
  if (cached) {
    console.log(`[TryHackMe lib] Serving cached profile for "${username}"`);
    return cached;
  }

  const url = `${THM_API_BASE}/public-profile?username=${encodeURIComponent(username)}`;
  const res = await fetchWithRetry(url);

  if (!res.ok) {
    throw new Error(
      `TryHackMe API returned ${res.status}: ${res.statusText}`
    );
  }

  const json = await res.json();

  // The TryHackMe API may nest the profile under a `data` key
  const profile: TryHackMeProfile = json?.data ?? json;

  if (!profile || !profile.username) {
    throw new Error("Invalid or empty profile data from TryHackMe API");
  }

  setCached(username, profile);
  return profile;
}
