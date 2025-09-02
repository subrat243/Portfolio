import { NextRequest, NextResponse } from "next/server";

// Sends email using Resend API if RESEND_API_KEY is present
async function sendWithResend({ name, email, subject, message }: { name: string; email: string; subject: string; message: string; }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, error: "RESEND_API_KEY not configured" } as const;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["subratsamantaray43@gmail.com"],
      reply_to: email,
      subject: subject || "New contact message",
      html: `<div>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message?.replace(/\n/g, "<br/>")}</p>
      </div>`,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return { ok: false, error: text || `Resend error ${res.status}` } as const;
  }
  return { ok: true } as const;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const sent = await sendWithResend({ name, email, subject, message });
    if (!sent.ok) {
      console.error("Email send failed:", sent.error);
      return NextResponse.json({ message: "Email service not configured. Please set RESEND_API_KEY." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}


