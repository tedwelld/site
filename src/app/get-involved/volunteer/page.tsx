import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTABand } from "@/components/sections/CTABand";
import { img } from "@/content/credits";
import { ContactForm } from "@/components/forms/ContactForm";
export const metadata: Metadata = {
  title: "Share your skills and experience.",
  description:
    "Be part of community-led conservation as a volunteer or mentor.",
  alternates: { canonical: "/get-involved/volunteer" },
};
export default function Page() {
  return (
    <>
      <PageHero
        title="Share your skills and experience."
        lead="Be part of community-led conservation as a volunteer or mentor."
        seed="get-involved/volunteer"
        image={img.youthLearning}
        crumbs={[{ label: "Share your skills and experience." }]}
      />
      <Section id="mentor">
        <SectionHeading title="Youth opportunity and mentorship" />
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          Help young people learn, grow and connect through mentorship,
          leadership development, career guidance, digital skills and rural
          enterprise opportunities.
        </p>
      </Section>
      <Section>
        <ContactForm defaultReason="Volunteer or mentor" />
      </Section>
      <CTABand />
    </>
  );
}
