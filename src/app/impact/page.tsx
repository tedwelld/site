import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { StoryCard } from "@/components/sections/StoryCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/Icons";
import { howWeMeasure, impactAreas } from "@/content/impact";
import { sortedStories } from "@/content/stories";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "How Tikobane Trust measures impact across animal welfare, community development, youth programmes and human-wildlife coexistence in Dete, Zimbabwe.",
  alternates: { canonical: "/impact" },
};

export default function ImpactPage() {
  const successStories = sortedStories.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Our impact"
        title="What has actually changed, and how we know"
        lead="Reach is easy to report. We are more interested in whether a change held — whether the group still meets, the animal was treated earlier, the graduate is still trading."
        crumbs={[{ label: "Our Impact" }]}
        seed="impact-hero"
        image={img.householdHarvest}
      />

      <Section tone="forest">
        <SectionHeading dark eyebrow="Impact statistics" title="Our reach so far" />
        <div className="mt-12">
          <ImpactStats dark showNotes />
        </div>
        <p className="mt-8 rounded-2xl border border-dashed border-gold-400/45 bg-gold-300/10 p-5 text-sm leading-relaxed text-sand-100">
          <strong className="font-semibold text-gold-300">Figures pending verification.</strong> The numbers above
          are illustrative placeholders from the redesign brief. Verified figures supplied by Tikobane Trust will
          replace them before publication — we do not publish statistics we cannot substantiate.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What we measure"
          title="Four things we track closely"
          lead="Each of these is defined with community structures at the start of a project, not chosen afterwards to flatter the result."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {impactAreas.map((area, i) => (
            <Reveal as="li" key={area.title} delay={i * 60} className="h-full">
              <div className="h-full rounded-2xl border border-forest-900/8 bg-white p-6 shadow-soft">
                <h3 className="font-display text-lg text-forest-800">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{area.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="How we measure"
              title="A simple, honest process"
              lead="We are a small organisation. Our monitoring is proportionate, community-owned and designed to be usable rather than impressive."
            />
            <ol className="mt-8 space-y-4">
              {howWeMeasure.map((step, i) => (
                <li key={step} className="flex gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-forest-900/8">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-forest-700 text-sm font-bold text-sand-50">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-forest-900/10 bg-white p-8 shadow-soft">
            <h2 className="font-display text-2xl text-forest-800">Annual reports</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              Our narrative and financial reporting is published alongside our governance documents. Where a
              report is not yet available, we say so rather than leaving a gap.
            </p>
            <ul className="mt-6 divide-y divide-forest-900/10 text-sm">
              {["2025 annual report", "2024 annual report", "2023 annual report"].map((report) => (
                <li key={report} className="flex items-center justify-between gap-4 py-3">
                  <span className="font-medium text-forest-800">{report}</span>
                  <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-semibold text-ink-500">
                    Pending upload
                  </span>
                </li>
              ))}
            </ul>
            <Button href="/transparency" variant="secondary" size="md" className="mt-7">
              Transparency & governance
              <ArrowRight />
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Success stories" title="Impact, told by the people involved" />
          <Link href="/stories" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-forest-700 hover:text-gold-600">
            All stories
            <ArrowRight />
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {successStories.map((story) => (
            <li key={story.slug}>
              <StoryCard story={story} />
            </li>
          ))}
        </ul>
      </Section>

      <CTABand
        title="Help us extend this work"
        body="Every programme above depends on funding, volunteers and partnerships. A regular monthly gift is the most useful kind of support we receive."
      />
    </>
  );
}
