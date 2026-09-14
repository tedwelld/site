import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Be part of the movement.",
  description: "There are many ways to support community-led conservation.",
  alternates: { canonical: "/get-involved" },
};
export default function Page() {
  return (
    <>
      <PageHero
        title="Be part of the movement."
        lead="There are many ways to support community-led conservation."
        seed="get-involved"
        image={img.youthGroup}
        crumbs={[{ label: "Be part of the movement." }]}
      />
      <Section>
        <SectionHeading title="You can help create opportunity" />
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          People should not have to choose between making a living and
          protecting nature. Your support can help communities develop
          sustainable livelihoods, create enterprises, equip young people with
          skills and develop practical solutions for living alongside wildlife.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl bg-sand-100 p-7">
            <h3 className="text-2xl text-forest-800">Donate</h3>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Help us create opportunities in rural communities.
            </p>
            <Button className="mt-6" href="/get-involved/donate">
              Donate
            </Button>
          </article>
          <article className="rounded-2xl bg-sand-100 p-7">
            <h3 className="text-2xl text-forest-800">Partner</h3>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Bring your organisation, expertise or resources.
            </p>
            <Button className="mt-6" href="/get-involved/partner">
              Partner
            </Button>
          </article>
          <article className="rounded-2xl bg-sand-100 p-7">
            <h3 className="text-2xl text-forest-800">Visit</h3>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Experience Hwange through the eyes of local communities.
            </p>
            <Button className="mt-6" href="/visit">
              Visit
            </Button>
          </article>
          <article className="rounded-2xl bg-sand-100 p-7">
            <h3 className="text-2xl text-forest-800">Mentor</h3>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Share your skills and experience with young people.
            </p>
            <Button className="mt-6" href="/get-involved/volunteer#mentor">
              Mentor
            </Button>
          </article>
          <article className="rounded-2xl bg-sand-100 p-7">
            <h3 className="text-2xl text-forest-800">Support an Enterprise</h3>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Help rural producers and entrepreneurs build sustainable
              businesses.
            </p>
            <Button className="mt-6" href="/get-involved/sponsor-a-project">
              Support an Enterprise
            </Button>
          </article>
          <article className="rounded-2xl bg-sand-100 p-7">
            <h3 className="text-2xl text-forest-800">Tell Our Story</h3>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Share Tikobane’s work with your network.
            </p>
            <Button className="mt-6" href="/stories">
              Tell Our Story
            </Button>
          </article>
        </div>
      </Section>
      <CTABand />
    </>
  );
}
