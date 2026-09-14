import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { img } from "@/content/credits";
import { impactCategories } from "@/content/impact";
export const metadata: Metadata = {
  title: "From opportunity to impact.",
  description:
    "Stronger livelihoods and greater community ownership can contribute to peaceful coexistence and conservation.",
  alternates: { canonical: "/impact" },
};
export default function Page() {
  return (
    <>
      <PageHero
        title="From opportunity to impact."
        lead="Stronger livelihoods and greater community ownership can contribute to peaceful coexistence and conservation."
        seed="impact"
        image={img.coexistence}
        crumbs={[{ label: "From opportunity to impact." }]}
      />
      <Section>
        <SectionHeading title="Our impact areas" />
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {impactCategories.map((category) => (
            <li
              key={category}
              className="rounded-2xl bg-sand-100 p-7 text-lg font-semibold text-forest-800"
            >
              {category}
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <SectionHeading title="Stories from the community" />
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          Explore the people, enterprises and conservation efforts at the heart
          of Tikobane’s work.
        </p>
        <Button href="/stories" className="mt-6">
          Community stories
        </Button>
      </Section>
      <CTABand />
    </>
  );
}
