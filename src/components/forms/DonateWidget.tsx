"use client";

import { useState } from "react";
import { ActionButton } from "@/components/ui/Button";
import { Heart } from "@/components/ui/Icons";
import { programmes } from "@/content/programmes";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const presets = [10, 25, 50, 100];

const impactHints: Record<number, string> = {
  10: "Contributes to learning materials for a Boys & Girls Club session.",
  25: "Helps cover veterinary consumables for a community outreach day.",
  50: "Supports a young person's place on a skills training course.",
  100: "Contributes towards a predator-proof livestock enclosure.",
};

export function DonateWidget() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [selected, setSelected] = useState<number | "custom">(25);
  const [custom, setCustom] = useState("");
  const [designation, setDesignation] = useState("general");
  const [status, setStatus] = useState<"idle" | "sending" | "offline" | "error">("idle");
  const [message, setMessage] = useState("");

  const amount = selected === "custom" ? Number(custom) : selected;
  const amountValid = Number.isFinite(amount) && amount >= 1;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, frequency, designation }),
      });
      const data = (await res.json()) as {
        ok: boolean;
        mode?: "offline" | "checkout";
        redirectUrl?: string;
        message?: string;
      };

      if (data.ok && data.mode === "checkout" && data.redirectUrl) {
        window.location.href = data.redirectUrl;
        return;
      }
      if (data.ok && data.mode === "offline") {
        setStatus("offline");
        setMessage(data.message ?? "");
        document.getElementById("direct-giving")?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      setStatus("error");
      setMessage(data.message ?? "Something went wrong.");
    } catch {
      setStatus("error");
      setMessage("We could not start your donation. Please use a direct giving option below.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-forest-900/10 bg-white p-6 shadow-lift sm:p-8"
      aria-labelledby="donate-heading"
    >
      <h2 id="donate-heading" className="font-display text-2xl text-forest-800">
        Support Tikobane
      </h2>
      <p className="mt-2 text-sm text-ink-500">Amounts shown in US dollars (USD).</p>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-forest-800">How often?</legend>
        <div className="mt-3 grid grid-cols-2 gap-2 rounded-full bg-sand-100 p-1.5">
          {(["once", "monthly"] as const).map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={frequency === f}
              onClick={() => setFrequency(f)}
              className={cn(
                "rounded-full px-4 py-2.5 text-sm font-semibold transition",
                frequency === f ? "bg-forest-700 text-sand-50 shadow-soft" : "text-forest-800 hover:bg-sand-200",
              )}
            >
              {f === "once" ? "One-off gift" : "Monthly"}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-7">
        <legend className="text-sm font-semibold text-forest-800">Choose an amount</legend>
        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {presets.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={selected === value}
              onClick={() => setSelected(value)}
              className={cn(
                "rounded-xl border px-4 py-3.5 text-base font-semibold transition",
                selected === value
                  ? "border-forest-700 bg-forest-700 text-sand-50"
                  : "border-forest-900/12 bg-white text-forest-800 hover:border-forest-500",
              )}
            >
              ${value}
            </button>
          ))}
        </div>

        <div className="mt-3">
          <label htmlFor="custom-amount" className="text-sm font-semibold text-forest-800">
            Or another amount
          </label>
          <div className="mt-2 flex items-center gap-2 rounded-xl border border-forest-900/12 bg-white px-4 focus-within:border-forest-500">
            <span className="text-base font-semibold text-ink-500">$</span>
            <input
              id="custom-amount"
              type="number"
              min={1}
              step={1}
              inputMode="numeric"
              value={custom}
              placeholder="Custom amount"
              onChange={(e) => {
                setCustom(e.target.value);
                setSelected("custom");
              }}
              onFocus={() => setSelected("custom")}
              className="w-full bg-transparent py-3 text-base text-ink-900 outline-none placeholder:text-ink-500/55"
            />
          </div>
        </div>

        {selected !== "custom" && impactHints[selected] ? (
          <p className="mt-3 rounded-xl bg-sand-100 px-4 py-3 text-xs leading-relaxed text-ink-700">
            {impactHints[selected]}{" "}
            <span className="text-ink-500">Illustrative — confirmed costings are published in our annual reporting.</span>
          </p>
        ) : null}
      </fieldset>

      <div className="mt-7">
        <label htmlFor="designation" className="text-sm font-semibold text-forest-800">
          Direct my gift to
        </label>
        <select
          id="designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          className="mt-2 w-full rounded-xl border border-forest-900/12 bg-white px-4 py-3 text-sm text-ink-900 focus:border-forest-500"
        >
          <option value="general">Where it is needed most</option>
          {programmes.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.shortTitle}
            </option>
          ))}
        </select>
      </div>

      <ActionButton type="submit" variant="donate" size="lg" className="mt-7 w-full" disabled={!amountValid || status === "sending"}>
        <Heart />
        {status === "sending"
          ? "Preparing…"
          : `Donate ${amountValid ? `$${amount}` : ""}${frequency === "monthly" ? " a month" : ""}`.trim()}
      </ActionButton>

      {!amountValid ? (
        <p className="mt-3 text-xs text-gold-700">Please enter an amount of $1 or more.</p>
      ) : null}

      {status === "offline" || status === "error" ? (
        <p role="alert" className="mt-4 rounded-xl bg-gold-300/25 px-4 py-3 text-sm text-earth-800">
          {message}
        </p>
      ) : null}

      <p className="mt-5 text-xs leading-relaxed text-ink-500">
        Prefer to give directly? Use the mobile money, bank or in-person options below, or contact us on{" "}
        <a href={site.contact.whatsappHref} className="font-semibold text-forest-700 underline">
          WhatsApp
        </a>
        .
      </p>
    </form>
  );
}
