import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Section, SectionHeading } from "@/components/ui/Section";
import { credits } from "@/content/credits";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Photo Credits",
  description:
    "Attribution for the freely-licensed photography currently used on the Tikobane Trust website, including author, licence and source for each image.",
  alternates: { canonical: "/image-credits" },
};

export default function ImageCreditsPage() {
  return (
    <>
      <PageHero
        eyebrow="Photo credits"
        title="Photography and attribution"
        lead="We credit every photograph we did not take ourselves, with its author, licence and source."
        crumbs={[{ label: "Photo Credits" }]}
        seed="credits-hero"
        image={img.hwangePlains}
      />

      <Section>
        <div className="max-w-3xl">
          <div className="rounded-2xl border border-dashed border-gold-500/50 bg-gold-300/15 p-6 text-sm leading-relaxed text-earth-800">
            <p>
              <strong className="font-semibold">These photographs do not show Tikobane&apos;s work.</strong> They are
              freely-licensed documentary photographs of comparable community, agricultural, education and animal
              health work in Zimbabwe and the surrounding region, used while the Trust&apos;s own photography is
              being prepared.
            </p>
            <p className="mt-3">
              None of the people shown are connected to Tikobane Trust, and no caption on this site claims
              otherwise. Each image will be replaced with Tikobane&apos;s own photography, published with the
              informed consent of everyone identifiable in it.
            </p>
          </div>

          <div className="prose-tikobane mt-10">
            <h2>Licence terms</h2>
            <p>
              Images are used under Creative Commons licences or are in the public domain. CC BY and CC BY-SA
              licences require attribution and a licence notice, which this page provides. CC BY-SA additionally
              requires that adaptations be shared under the same licence; the images here are used unmodified
              apart from resizing.
            </p>
            <p>
              Where an image is credited to a government agency as a public domain work, no permission is
              required, but we credit the photographer where they are named.
            </p>
            <p>
              If you are a rights holder and believe an image is credited incorrectly, please{" "}
              <Link href="/contact">contact us</Link> and we will correct or remove it promptly.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow={`${credits.length} photographs`}
          title="Full attribution list"
          lead="Each entry links to the original file on Wikimedia Commons, where the full licence and version history can be reviewed."
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {credits.map((credit) => (
            <li
              key={credit.file}
              className="overflow-hidden rounded-2xl border border-forest-900/8 bg-white shadow-soft"
            >
              <Photo
                src={credit.file}
                seed={credit.file}
                alt={credit.subject}
                rounded={false}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-40 w-full"
              />
              <div className="p-5 text-sm">
                <p className="font-medium leading-snug text-forest-800">{credit.subject}</p>
                <dl className="mt-3 space-y-1.5 text-xs text-ink-500">
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-semibold text-ink-700">Author:</dt>
                    <dd>{credit.author}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-semibold text-ink-700">Licence:</dt>
                    <dd>
                      {credit.licenceUrl ? (
                        <a
                          href={credit.licenceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-forest-700 underline"
                        >
                          {credit.licence}
                        </a>
                      ) : (
                        credit.licence
                      )}
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-semibold text-ink-700">Source:</dt>
                    <dd>
                      <a
                        href={credit.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-forest-700 underline"
                      >
                        Wikimedia Commons
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
