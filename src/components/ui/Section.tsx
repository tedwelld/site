import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

type Tone = "page" | "sand" | "forest" | "earth" | "white";

const tones: Record<Tone, string> = {
  page: "bg-page text-ink-900",
  white: "bg-white text-ink-900",
  sand: "bg-sand-100 text-ink-900",
  forest: "bg-forest-800 text-sand-50",
  earth: "bg-earth-800 text-sand-50",
};

export function Section({
  id,
  tone = "page",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-16 sm:py-24", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]",
        dark ? "text-gold-300" : "text-gold-600",
      )}
    >
      <span aria-hidden="true" className={cn("h-px w-8", dark ? "bg-gold-300/60" : "bg-gold-500/60")} />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  dark,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div className={cn(align === "center" && "flex justify-center")}>
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2 className={cn("mt-4 text-3xl sm:text-4xl", dark ? "text-sand-50" : "text-forest-800")}>{title}</h2>
      {lead ? (
        <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-sand-200/85" : "text-ink-500")}>{lead}</p>
      ) : null}
    </div>
  );
}
