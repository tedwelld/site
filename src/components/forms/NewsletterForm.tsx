"use client";

import { useState } from "react";
import { ActionButton } from "@/components/ui/Button";
import { Check } from "@/components/ui/Icons";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok: boolean; message: string };
      if (data.ok) {
        setStatus("done");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <div className="flex items-start gap-3 rounded-2xl bg-sand-50/10 p-6 ring-1 ring-sand-50/20">
        <Check className="mt-0.5 shrink-0 text-gold-300" />
        <p className="text-sm text-sand-100">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-sand-50/8 p-6 ring-1 ring-sand-50/15">
      <label htmlFor="newsletter-email" className="block text-sm font-semibold text-sand-50">
        Email address
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-describedby="newsletter-status"
          className="w-full rounded-full bg-forest-900/40 px-5 py-3 text-sm text-sand-50 ring-1 ring-sand-50/25 placeholder:text-sand-200/45 focus:ring-gold-400"
        />
        <ActionButton type="submit" variant="donate" size="md" disabled={status === "sending"} className="shrink-0">
          {status === "sending" ? "Signing up…" : "Subscribe"}
        </ActionButton>
      </div>
      <p
        id="newsletter-status"
        role={status === "error" ? "alert" : "status"}
        className="mt-3 min-h-5 text-xs text-gold-300"
      >
        {message}
      </p>
    </form>
  );
}
