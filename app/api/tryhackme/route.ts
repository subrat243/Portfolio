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
          // Cache for 5 minutes on CDN, revalidate in background
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";

    console.error("[TryHackMe API Route] Error fetching profile:", message);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch TryHackMe profile",
        details: message,
      },
      { status: 502 }
    );
  }
}
