import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/sections/CTABand";
import { img } from "@/content/credits";
import { StoriesList } from "@/components/sections/StoriesList";
export const metadata: Metadata = {
  title: "Stories from the field.",
  description:
    "Community life, youth opportunity, rural enterprise and conservation around Hwange.",
  alternates: { canonical: "/stories" },
};
export default function Page() {
  return (
    <>
      <PageHero
        title="Stories from the field."
        lead="Community life, youth opportunity, rural enterprise and conservation around Hwange."
        seed="stories"
        image={img.visitorDiscussion}
        crumbs={[{ label: "Stories from the field." }]}
      />
      <Section>
        <StoriesList />
      </Section>
      <CTABand />
    </>
  );
}
