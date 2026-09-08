import { NextResponse } from "next/server";
import { isEmailConfigured, sendEmail } from "@/lib/email";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  reason?: string;
  message?: string;
  consent?: boolean;
};

const reasons = [
  "General enquiry",
  "Donate or fundraise",
  "Volunteer",
  "Partnership",
  "Media & press",
  "Report an animal welfare concern",
  "Safeguarding concern",
  "Other",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const reason = body.reason?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!emailPattern.test(email)) errors.email = "Please enter a valid email address.";
  if (reason && !reasons.includes(reason)) errors.reason = "Please choose a reason from the list.";
  if (message.length < 10) errors.message = "Please give us a little more detail (at least 10 characters).";
  if (!body.consent) errors.consent = "Please confirm we may reply to you.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors, message: "Please check the highlighted fields." }, { status: 422 });
  }

  const submission = { name, email, phone, reason: reason || "General enquiry", message, receivedAt: new Date().toISOString() };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  try {
    if (isEmailConfigured()) {
      await sendEmail({ subject: `Tikobane website: ${submission.reason}`, replyTo: email, text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nReason: ${submission.reason}\nReceived: ${submission.receivedAt}\n\n${message}` });
    } else if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: "contact", ...submission }),
        signal: AbortSignal.timeout(15000),
      });
      if (!res.ok) throw new Error("Webhook delivery failed");
    } else {
      throw new Error("No delivery method configured.");
    }
  } catch {
    console.error("[contact] delivery failed");
    return NextResponse.json(
      { ok: false, message: "We could not send your message just now. Please email or WhatsApp us directly and we will respond." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you — your message has reached us. We usually reply within two working days.",
  });
}
