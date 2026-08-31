import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { StoriesList } from "@/components/sections/StoriesList";
import { Section } from "@/components/ui/Section";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Stories & News",
  description:
    "News, community stories and project updates from Tikobane Trust's work in Dete, Hwange district, Zimbabwe.",
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories & news"
        title="Stories from the community"
        lead="News, community stories and project updates from Dete — written with the people involved, not about them."
        crumbs={[{ label: "Stories" }]}
        seed="stories-hero"
        image={img.smallEnterprise}
      />

      <Section>
        <StoriesList />
      </Section>

      <CTABand
        title="Follow the work as it happens"
        body="Our stories are the best record of what your support makes possible. Subscribe in the footer, or follow us on social media."
        primary={{ label: "Donate", href: "/get-involved/donate" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
