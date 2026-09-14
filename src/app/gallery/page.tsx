import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { Section } from "@/components/ui/Section";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs from the Tikobane collection: community life, youth, farming, rural enterprise, livestock and wildlife.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="People and wildlife sharing one landscape"
        lead="Rural livelihoods, livestock, young people, enterprise and conservation — the themes at the heart of our work."
        crumbs={[{ label: "Gallery" }]}
        seed="gallery-hero"
        image={img.youthGroup}
      />

      <Section>
        <div className="rounded-2xl border border-dashed border-gold-500/50 bg-gold-300/15 p-5 text-sm leading-relaxed text-earth-800">
          <strong className="font-semibold">About these photographs.</strong>{" "}
          Explore the Tikobane photo collection, from community gatherings and
          youth activities to farming, craft and life alongside wildlife.{" "}
          <Link href="/image-credits" className="font-semibold underline">
            Full photo credits
          </Link>
          .
        </div>
        <div className="mt-10">
          <GalleryGrid />
        </div>
      </Section>

      <CTABand
        title="Seen something you want to support?"
        body="Support rural opportunity and community-led conservation with Tikobane."
      />
    </>
  );
}
