"use client";

import { useState } from "react";
import { ActionButton } from "@/components/ui/Button";
import { Check } from "@/components/ui/Icons";
import { site } from "@/content/site";

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

const fieldClass =
  "w-full rounded-xl border border-forest-900/12 bg-white px-4 py-3 text-sm text-ink-900 shadow-xs transition placeholder:text-ink-500/55 focus:border-forest-500";

type Errors = Record<string, string>;

export function ContactForm({ defaultReason }: { defaultReason?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrors({});
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          reason: data.get("reason"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
        }),
      });
      const payload = (await res.json()) as { ok: boolean; message: string; errors?: Errors };
      if (payload.ok) {
        setStatus("done");
        setMessage(payload.message);
        form.reset();
      } else {
        setStatus("error");
        setErrors(payload.errors ?? {});
        setMessage(payload.message);
      }
    } catch {
      setStatus("error");
      setMessage("We could not send your message. Please email or WhatsApp us directly.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-forest-700/15 bg-forest-50 p-8">
        <span className="grid size-12 place-items-center rounded-full bg-forest-700 text-sand-50">
          <Check width={24} height={24} />
        </span>
        <h3 className="mt-5 font-display text-2xl text-forest-800">Message sent</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-700">{message}</p>
        <p className="mt-4 text-sm text-ink-500">
          Need a faster response?{" "}
          <a href={site.contact.whatsappHref} className="font-semibold text-forest-700 underline">
            Message us on WhatsApp
          </a>
          .
        </p>
        <ActionButton variant="secondary" size="md" className="mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </ActionButton>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-forest-900/10 bg-white p-6 shadow-soft sm:p-8">
      <h3 className="font-display text-2xl text-forest-800">Send us a message</h3>
      <p className="mt-2 text-sm text-ink-500">
        Fields marked with <span aria-hidden="true">*</span> are required.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" required className={fieldClass} />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} />
        </Field>
        <Field id="phone" label="Phone or WhatsApp" hint="Optional" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </Field>
        <Field id="reason" label="Reason for contacting" error={errors.reason}>
          <select id="reason" name="reason" defaultValue={defaultReason ?? reasons[0]} className={fieldClass}>
            {reasons.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field id="message" label="Message" required error={errors.message}>
            <textarea id="message" name="message" rows={6} required className={fieldClass} />
          </Field>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="consent" className="flex items-start gap-3 text-sm text-ink-700">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="mt-0.5 size-4 rounded border-forest-900/25 text-forest-700"
          />
          <span>
            I agree that Tikobane Trust may use these details to respond to my message.{" "}
            <span aria-hidden="true">*</span>
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-1.5 text-xs font-medium text-gold-700">{errors.consent}</p>
        ) : null}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <ActionButton type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </ActionButton>
        <p role={status === "error" ? "alert" : "status"} className="text-sm text-gold-700">
          {status === "error" ? message : null}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between gap-2 text-sm font-semibold text-forest-800">
        <span>
          {label}
          {required ? <span aria-hidden="true"> *</span> : null}
        </span>
        {hint ? <span className="text-xs font-normal text-ink-500">{hint}</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-1.5 text-xs font-medium text-gold-700">{error}</p> : null}
    </div>
  );
}
