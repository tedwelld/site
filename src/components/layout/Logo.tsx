import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${site.name} — home`}
    >
      <span
        className={cn(
          "grid size-11 shrink-0 place-items-center rounded-xl transition",
          dark ? "bg-sand-50/10 ring-1 ring-sand-50/25" : "bg-forest-700",
        )}
      >
        <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
          <path
            d="M6 22c3.4-1.6 5.6-4.6 6.6-9 1 4.4 3.2 7.4 6.6 9"
            fill="none"
            stroke="var(--color-gold-400)"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          <circle cx="22.5" cy="10.5" r="3.2" fill="var(--color-sand-200)" />
          <path
            d="M4 26h24"
            fill="none"
            stroke="var(--color-sand-200)"
            strokeWidth="2.1"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-lg font-semibold tracking-tight",
            dark ? "text-sand-50" : "text-forest-800",
          )}
        >
          Tikobane
        </span>
        <span
          className={cn(
            "block text-[0.66rem] font-semibold uppercase tracking-[0.2em]",
            dark ? "text-gold-300" : "text-gold-600",
          )}
        >
          Trust
        </span>
      </span>
    </Link>
  );
}
