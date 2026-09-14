import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { img } from "@/content/credits";
import { ProgrammeCards } from "@/components/sections/ProgrammeCards";
import { WhereWeWork } from "@/components/sections/WhereWeWork";
import { site } from "@/content/site";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function HomePage() {
  return (
    <>
      <PageHero
        title="Creating opportunity where opportunity does not exist."
        lead="We work with rural communities living alongside wildlife to build resilient livelihoods, develop local enterprises and create a future where both people and wildlife can thrive."
        seed="home"
        image={img.youthGroup}
        actions={
          <>
            <Button href="/get-involved" variant="donate" size="lg">
              Support Our Work
            </Button>
            <Button href="/get-involved/partner" variant="onDark" size="lg">
              Partner With Us
            </Button>
            <Button href="/visit" variant="onDark" size="lg">
              Visit Hwange With Us
            </Button>
          </>
        }
      />
      <Section>
        <SectionHeading title="When communities thrive, wildlife thrives." />
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          We believe communities living alongside wildlife should not simply be
          expected to protect nature. They should have a meaningful stake in it
          and benefit from the opportunities created by the landscapes they help
          protect.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          {site.description}
        </p>
      </Section>
      <Section>
        <SectionHeading title="From aid to opportunity. From participation to ownership." />
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          Communities have resources, knowledge and potential. We create
          opportunities through entrepreneurship, sustainable agriculture and
          youth development.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          Local Resources → Enterprise → Income → Resilience → Conservation →
          Coexistence
        </p>
        <Button href="/about#approach" className="mt-6">
          Our approach
        </Button>
      </Section>
      <Section tone="sand">
        <SectionHeading
          eyebrow="Our work"
          title="Creating Opportunity. Strengthening Communities. Conserving Landscapes."
        />
        <div className="mt-10">
          <ProgrammeCards />
        </div>
      </Section>
      <Section>
        <WhereWeWork />
        <Button href="/visit" className="mt-8">
          Plan a Community Experience
        </Button>
      </Section>
      <Section>
        <SectionHeading title="Be part of the movement." />
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
