import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTABand } from "@/components/sections/CTABand";
import { img } from "@/content/credits";
import { ProgrammeCards } from "@/components/sections/ProgrammeCards";
import { ContactForm } from "@/components/forms/ContactForm";
export const metadata: Metadata = {
  title: "Support an initiative.",
  description:
    "Help rural producers and entrepreneurs build sustainable businesses.",
  alternates: { canonical: "/get-involved/sponsor-a-project" },
};
export default function Page() {
  return (
    <>
      <PageHero
        title="Support an initiative."
        lead="Help rural producers and entrepreneurs build sustainable businesses."
        seed="get-involved/sponsor-a-project"
        image={img.basketMaker}
        crumbs={[{ label: "Support an initiative." }]}
      />
      <Section>
        <SectionHeading title="Create opportunity" />
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          Support specific programmes such as youth mentorship, rural enterprise
          or conservation initiatives.
        </p>
        <div className="mt-8">
          <ProgrammeCards />
        </div>
      </Section>
      <Section>
        <ContactForm defaultReason="Sponsor an initiative" />
      </Section>
      <CTABand />
    </>
  );
}
