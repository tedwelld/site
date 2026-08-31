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
    "Photographs of Tikobane Trust's community projects, animal welfare outreach, youth programmes, training, conservation work and events in Dete, Zimbabwe.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The work, in pictures"
        lead="Community projects, animal welfare, youth programmes, training, conservation and events — the themes that make up our work."
        crumbs={[{ label: "Gallery" }]}
        seed="gallery-hero"
        image={img.hwangeLandscape}
      />

      <Section>
        <div className="rounded-2xl border border-dashed border-gold-500/50 bg-gold-300/15 p-5 text-sm leading-relaxed text-earth-800">
          <strong className="font-semibold">About these photographs.</strong> These are freely-licensed
          documentary photographs of comparable community work in Zimbabwe and the region, standing in until
          Tikobane&apos;s own photography is available. They do not depict Tikobane&apos;s programmes.{" "}
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
        body="Every image here represents work that continues because people fund it, volunteer for it or partner on it."
      />
    </>
  );
}
