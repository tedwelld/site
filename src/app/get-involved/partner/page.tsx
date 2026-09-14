import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTABand } from "@/components/sections/CTABand";
import { img } from "@/content/credits";
import { partnerCategories } from "@/content/people";
import { ContactForm } from "@/components/forms/ContactForm";
export const metadata: Metadata = {
  title: "Let’s work together.",
  description:
    "Bring your organisation, expertise or resources to community-led conservation.",
  alternates: { canonical: "/get-involved/partner" },
};
export default function Page() {
  return (
    <>
      <PageHero
        title="Let’s work together."
        lead="Bring your organisation, expertise or resources to community-led conservation."
        seed="get-involved/partner"
        image={img.workshop}
        crumbs={[{ label: "Let’s work together." }]}
      />
      <Section>
        <SectionHeading title="Let’s work together" />
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          Tikobane works with communities, conservation organisations,
          businesses, tourism operators, donors, government institutions and
          other partners to develop practical solutions.
        </p>
        <h3 className="mt-8 text-2xl text-forest-800">We welcome</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {partnerCategories.map((p) => (
            <li key={p} className="rounded-2xl bg-sand-100 p-5">
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          Have an idea, resource or opportunity that could help rural
          communities thrive alongside wildlife?
        </p>
      </Section>
      <Section>
        <ContactForm defaultReason="Partnership" />
      </Section>
      <CTABand />
    </>
  );
}
