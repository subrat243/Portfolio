import { NextResponse } from "next/server";
import { fetchTryHackMeProfile } from "@/lib/tryhackme";

const THM_USERNAME = "0xKaizen";

export async function GET() {
  try {
    const profile = await fetchTryHackMeProfile(THM_USERNAME);

    return NextResponse.json(
      { success: true, data: profile },
      {
        status: 200,
        headers: {
          // Tell Vercel/CDN to cache for 5 min, serve stale for up to 10 min
          "Cache-Control":
            "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";

    // Suppress noisy 429 logs – already logged in the lib
    if (!message.includes("429")) {
      console.error("[TryHackMe API Route] Error fetching profile:", message);
    }

    const isRateLimit = message.includes("429");

    return NextResponse.json(
      {
        success: false,
        error: isRateLimit
          ? "TryHackMe is rate-limiting requests. Please try again in a moment."
          : "Failed to fetch TryHackMe profile",
        details: message,
      },
      {
        status: isRateLimit ? 429 : 502,
        headers: isRateLimit
          ? { "Retry-After": "30" }
          : {},
      }
    );
  }
}
