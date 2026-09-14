import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { img } from "@/content/credits";
import { partnerCategories } from "@/content/people";
export const metadata: Metadata = {
  title: "Change happens through collaboration.",
  description: "Work with us to develop and scale sustainable solutions.",
  alternates: { canonical: "/about/partners" },
};
export default function Page() {
  return (
    <>
      <PageHero
        title="Change happens through collaboration."
        lead="Work with us to develop and scale sustainable solutions."
        seed="about/partners"
        image={img.workshop}
        crumbs={[{ label: "Change happens through collaboration." }]}
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
        <Button href="/get-involved/partner">Partner with us</Button>
      </Section>
      <CTABand />
    </>
  );
}
