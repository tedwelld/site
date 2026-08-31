import { Quote } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/content/people";

export function Testimonials() {
  return (
    <ul className="grid gap-6 lg:grid-cols-3">
      {testimonials.map((t, i) => (
        <Reveal as="li" key={t.quote} delay={i * 80} className="h-full">
          <figure className="flex h-full flex-col rounded-3xl bg-sand-50/8 p-7 ring-1 ring-sand-50/15">
            <Quote className="text-gold-400" />
            <blockquote className="mt-4 flex-1 font-display text-lg leading-relaxed text-sand-50">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 border-t border-sand-50/15 pt-4 text-sm">
              <span className="block font-semibold text-sand-50">{t.attribution}</span>
              <span className="mt-0.5 block text-xs uppercase tracking-[0.12em] text-gold-300">{t.context}</span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </ul>
  );
}
