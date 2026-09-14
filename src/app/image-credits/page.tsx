import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { img } from "@/content/credits";
export const metadata: Metadata = {
  title: "Photography",
  description: "About the Tikobane website photo collection.",
  alternates: { canonical: "/image-credits" },
};
export default function Page() {
  return (
    <>
      <PageHero
        title="The Tikobane photo collection"
        lead="People, livelihoods and the landscapes they share."
        image={img.visitorDiscussion}
        seed="photography"
        crumbs={[{ label: "Photography" }]}
      />
      <Section>
        <SectionHeading
          title="Photography supplied for Tikobane"
          lead="The photographs on this website were supplied for the Tikobane collection. Captions describe the scenes shown."
        />
        <p className="mt-6 text-ink-700">
          For photography enquiries or a correction to a caption, please contact
          us.
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/gallery">Explore the gallery</Button>
          <Button href="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </Section>
    </>
  );
}
