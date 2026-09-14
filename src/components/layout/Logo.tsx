import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${site.name} — home`}
    >
      <Image
        src={site.logo}
        alt="Tikobane Trust logo"
        width={64}
        height={64}
        priority
        className="size-16 shrink-0 rounded-md bg-white object-contain"
      />
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
