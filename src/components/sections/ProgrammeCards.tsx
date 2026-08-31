import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";
import { programmes } from "@/content/programmes";

export function ProgrammeCards({ limit }: { limit?: number }) {
  const items = limit ? programmes.slice(0, limit) : programmes;

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((programme, i) => (
        <Reveal as="li" key={programme.slug} delay={i * 60} className="h-full">
          <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-forest-900/8 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
            <Photo
              src={programme.image}
              seed={programme.imageSeed}
              alt={programme.title}
              rounded={false}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-44"
            />
            <div className="flex flex-1 flex-col p-6">
              <p aria-hidden="true" className="text-2xl">
                {programme.emoji}
              </p>
              <h3 className="mt-3 font-display text-xl text-forest-800">{programme.shortTitle}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{programme.summary}</p>
              <Link
                href={`/our-work/${programme.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 transition group-hover:text-gold-600"
              >
                Learn more
                <ArrowRight className="transition group-hover:translate-x-1" />
                <span className="sr-only">about {programme.title}</span>
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
