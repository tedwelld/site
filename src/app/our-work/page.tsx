import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/sections/CTABand";
import { img } from "@/content/credits";
import { ProgrammeCards } from "@/components/sections/ProgrammeCards";
export const metadata: Metadata = {
  title: "Turning local resources into rural opportunity.",
  description:
    "We create opportunities through entrepreneurship, sustainable agriculture and youth development, connecting stronger livelihoods with community-led conservation.",
  alternates: { canonical: "/our-work" },
};
export default function Page() {
  return (
    <>
      <PageHero
        title="Turning local resources into rural opportunity."
        lead="We create opportunities through entrepreneurship, sustainable agriculture and youth development, connecting stronger livelihoods with community-led conservation."
        seed="our-work"
        image={img.produce}
        crumbs={[{ label: "Turning local resources into rural opportunity." }]}
      />
      <Section>
        <ProgrammeCards />
      </Section>
      <CTABand />
    </>
  );
}
