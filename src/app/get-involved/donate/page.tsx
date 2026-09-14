import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { img } from "@/content/credits";
import { DonateWidget } from "@/components/forms/DonateWidget";
import { site } from "@/content/site";
export const metadata: Metadata = {
  title: "You can help create opportunity.",
  description: "Support community-led programmes and rural innovation.",
  alternates: { canonical: "/get-involved/donate" },
};
export default function Page() {
  return (
    <>
      <PageHero
        title="You can help create opportunity."
        lead="Support community-led programmes and rural innovation."
        seed="get-involved/donate"
        image={img.produce}
        crumbs={[{ label: "You can help create opportunity." }]}
      />
      <Section>
        <div className="mx-auto max-w-2xl">
          <DonateWidget />
        </div>
      </Section>
      <Section id="direct-giving">
        <SectionHeading title="Give directly" />
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          Contact Tikobane to arrange your donation and discuss supporting a
          programme.
        </p>
        <Button href={site.contact.emailHref} className="mt-6">
          Email about a donation
        </Button>
      </Section>
      <CTABand />
    </>
  );
}
