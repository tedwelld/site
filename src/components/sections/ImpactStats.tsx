import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { headlineStats } from "@/content/impact";
import { cn } from "@/lib/utils";

export function ImpactStats({ dark = true, showNotes = false }: { dark?: boolean; showNotes?: boolean }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {headlineStats.map((stat, i) => (
        <Reveal as="li" key={stat.label} delay={i * 70}>
          <div
            className={cn(
              "flex h-full flex-col rounded-2xl p-5 ring-1",
              dark ? "bg-sand-50/8 ring-sand-50/15" : "bg-white ring-forest-900/10 shadow-soft",
            )}
          >
            <p className={cn("font-display text-4xl font-semibold", dark ? "text-gold-300" : "text-gold-600")}>
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className={cn("mt-2 text-sm font-semibold", dark ? "text-sand-50" : "text-forest-800")}>{stat.label}</p>
            {showNotes ? (
              <p className={cn("mt-2 text-xs leading-relaxed", dark ? "text-sand-200/70" : "text-ink-500")}>
                {stat.note}
              </p>
            ) : null}
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
