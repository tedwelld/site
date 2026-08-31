import { NextResponse } from "next/server";

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

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL ?? process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: "newsletter", email, receivedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (error) {
      console.error("[newsletter] delivery failed", error, { email });
      return NextResponse.json(
        { ok: false, message: "We could not sign you up just now. Please try again shortly." },
        { status: 502 },
      );
    }
  } else {
    console.info("[newsletter] signup received (no NEWSLETTER_WEBHOOK_URL configured)", { email });
  }

  return NextResponse.json({ ok: true, message: "You are on the list. Thank you for following our work." });
}
