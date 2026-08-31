import { NextResponse } from "next/server";
import { programmes } from "@/content/programmes";

type Payload = {
  amount?: number;
  frequency?: "once" | "monthly";
  designation?: string;
  email?: string;
};

const validDesignations = new Set<string>(["general", ...programmes.map((p) => p.slug)]);

/**
 * Creates a donation intent.
 *
 * Set DONATION_CHECKOUT_URL to the checkout endpoint of the payment provider
 * Tikobane actually uses (including local Zimbabwean options such as mobile
 * money aggregators, not card-only international gateways). Amount, frequency
 * and designation are appended as query parameters.
 *
 * Without that variable the endpoint returns `mode: "offline"`, and the donate
 * page shows the direct giving instructions instead. The page stays functional
 * either way.
 */
export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const amount = Number(body.amount);
  const frequency = body.frequency === "monthly" ? "monthly" : "once";
  const designation = body.designation && validDesignations.has(body.designation) ? body.designation : "general";

  if (!Number.isFinite(amount) || amount < 1) {
    return NextResponse.json({ ok: false, message: "Please enter an amount of $1 or more." }, { status: 422 });
  }
  if (amount > 100000) {
    return NextResponse.json(
      { ok: false, message: "For gifts of this size please contact us directly so we can help." },
      { status: 422 },
    );
  }

  const checkoutBase = process.env.DONATION_CHECKOUT_URL;
  if (!checkoutBase) {
    return NextResponse.json({
      ok: true,
      mode: "offline" as const,
      amount,
      frequency,
      designation,
      message: "Online checkout is not yet connected. Please use one of the direct giving options below.",
    });
  }

  const url = new URL(checkoutBase);
  url.searchParams.set("amount", amount.toFixed(2));
  url.searchParams.set("frequency", frequency);
  url.searchParams.set("designation", designation);
  if (body.email) url.searchParams.set("email", body.email);

  return NextResponse.json({
    ok: true,
    mode: "checkout" as const,
    amount,
    frequency,
    designation,
    redirectUrl: url.toString(),
  });
}
