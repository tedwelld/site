import { NextResponse } from "next/server";
import { isEmailConfigured, sendEmail } from "@/lib/email";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: string };
    email = body.email?.trim() ?? "";
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, message: "Please enter a valid email address." }, { status: 422 });
  }

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL || process.env.CONTACT_WEBHOOK_URL;
  try {
    if (isEmailConfigured()) {
      await sendEmail({ subject: "Tikobane website: newsletter signup", replyTo: email, text: `Newsletter signup: ${email}\nReceived: ${new Date().toISOString()}` });
    } else if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: "newsletter", email, receivedAt: new Date().toISOString() }),
        signal: AbortSignal.timeout(15000),
      });
      if (!res.ok) throw new Error("Webhook delivery failed");
    } else {
      throw new Error("No delivery method configured.");
    }
  } catch {
    console.error("[newsletter] delivery failed");
    return NextResponse.json(
      { ok: false, message: "We could not sign you up just now. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, message: "You are on the list. Thank you for following our work." });
}
