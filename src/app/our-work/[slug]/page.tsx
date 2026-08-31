import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { StoryCard } from "@/components/sections/StoryCard";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { getProgramme, programmes } from "@/content/programmes";
import { sortedStories } from "@/content/stories";
import { site } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const programme = getProgramme(slug);
  if (!programme) return { title: "Programme not found" };

  return {
    title: programme.title,
    description: `${programme.summary} Tikobane Trust, Dete, Zimbabwe.`,
    alternates: { canonical: `/our-work/${programme.slug}` },
    openGraph: {
      title: `${programme.title} | ${site.name}`,
      description: programme.summary,
      type: "article",
    },
  };
}

const listSections = [
  { key: "problem", title: "The problem", lead: "What communities are dealing with." },
  { key: "whatWeDo", title: "What Tikobane is doing", lead: "Our response, in practice." },
  { key: "activities", title: "Activities", lead: "The concrete work on the ground." },
  { key: "results", title: "Results", lead: "What has changed so far." },
] as const;

export default async function ProgrammePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const programme = getProgramme(slug);
  if (!programme) notFound();

  const related = sortedStories.filter((s) => s.programme === programme.slug).slice(0, 3);
  const others = programmes.filter((p) => p.slug !== programme.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={programme.title}
        lead={programme.summary}
        crumbs={[{ label: "Our Work", href: "/our-work" }, { label: programme.shortTitle }]}
        seed={programme.imageSeed}
        image={programme.image}
        actions={
          <>
            <Button href="/get-involved/donate" variant="donate" size="lg">
              Support this work
            </Button>
            <Button href="/contact" variant="onDark" size="lg">
              Ask us about it
            </Button>
          </>
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <p aria-hidden="true" className="text-4xl">
              {programme.emoji}
            </p>
            <p className="mt-5 font-display text-2xl leading-relaxed text-forest-800">{programme.intro}</p>

            {listSections.map((section) => (
              <div key={section.key} className="mt-14">
                <SectionHeading eyebrow={section.lead} title={section.title} />
                <ul className="prose-tikobane mt-6">
                  {programme[section.key].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Reveal className="space-y-6 lg:sticky lg:top-32">
            <Photo
              src={programme.image}
              seed={`${programme.imageSeed}-detail`}
              alt={`${programme.title} in the Dete area`}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-4/5 w-full shadow-lift"
            />

            <div className="rounded-3xl border border-forest-900/8 bg-white p-6 shadow-soft">
              <h2 className="font-display text-lg text-forest-800">Communities involved</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-500">
                {programme.communities.map((c) => (
                  <li key={c} className="flex gap-3">
                    <Check className="mt-0.5 shrink-0 text-gold-500" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-forest-800 p-6 text-sand-100">
              <h2 className="font-display text-lg text-sand-50">How you can support this</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {programme.support.map((s) => (
                  <li key={s} className="flex gap-3">
                    <Check className="mt-0.5 shrink-0 text-gold-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <Button href="/get-involved/donate" variant="donate" size="md" className="mt-6 w-full">
                Donate to this programme
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section tone="sand">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Stories" title={`${programme.shortTitle} in practice`} />
            <Link href="/stories" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-forest-700 hover:text-gold-600">
              All stories
              <ArrowRight />
            </Link>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((story) => (
              <li key={story.slug}>
                <StoryCard story={story} />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section>
        <SectionHeading eyebrow="Explore" title="Other areas of our work" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {others.map((other) => (
            <li key={other.slug}>
              <Link
                href={`/our-work/${other.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-forest-900/8 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span aria-hidden="true" className="text-2xl">
                  {other.emoji}
                </span>
                <span className="mt-3 font-display text-lg text-forest-800">{other.shortTitle}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{other.summary}</span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 group-hover:text-gold-600">
                  Learn more
                  <ArrowRight className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CTABand />
    </>
  );
}
