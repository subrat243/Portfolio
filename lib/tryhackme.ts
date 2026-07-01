import { TryHackMeProfile } from "@/types/tryhackme";

const THM_API_BASE = "https://tryhackme.com/api/v2";

/**
 * Fetches TryHackMe profile data for a given username.
 * Should be called server-side only to avoid CORS restrictions.
 */
export async function fetchTryHackMeProfile(
  username: string
): Promise<TryHackMeProfile> {
  const url = `${THM_API_BASE}/public-profile?username=${encodeURIComponent(username)}`;

  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
      "User-Agent": "Mozilla/5.0 (compatible; Portfolio/1.0)",
    },
  });

  if (!res.ok) {
    throw new Error(
      `TryHackMe API returned ${res.status}: ${res.statusText}`
    );
  }

  const json = await res.json();

  // The TryHackMe API may nest the profile under a `data` key
  const profile = json?.data ?? json;

  if (!profile || !profile.username) {
    throw new Error("Invalid or empty profile data from TryHackMe API");
  }

  return profile as TryHackMeProfile;
}
