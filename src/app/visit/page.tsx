import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTABand } from "@/components/sections/CTABand";
import { img } from "@/content/credits";
import { ContactForm } from "@/components/forms/ContactForm";
export const metadata: Metadata = {
  title: "Come for the wildlife. Connect with the people.",
  description:
    "Experience Hwange through the eyes of the communities who call it home.",
  alternates: { canonical: "/visit" },
};
export default function Page() {
  return (
    <>
      <PageHero
        title="Come for the wildlife. Connect with the people."
        lead="Experience Hwange through the eyes of the communities who call it home."
        seed="visit"
        image={img.safari}
        crumbs={[{ label: "Come for the wildlife. Connect with the people." }]}
      />
      <Section>
        <SectionHeading title="A landscape shared by people and wildlife" />
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          Hwange is more than a destination for wildlife tourism. It is a living
          landscape where people, livestock, wildlife and nature exist side by
          side.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          Behind every protected landscape are communities who live with
          wildlife every day. Their voices, livelihoods and participation
          matter.
        </p>
      </Section>
      <Section>
        <SectionHeading title="Plan a community experience" />
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          Get in touch to discuss visiting Hwange while supporting local
          communities.
        </p>
        <div className="mt-8">
          <ContactForm defaultReason="Visit Hwange" />
        </div>
      </Section>
      <CTABand />
    </>
  );
}
