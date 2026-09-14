import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTABand } from "@/components/sections/CTABand";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Creating opportunity where opportunity is limited.",
  description:
    "Tikobane Trust is a grassroots Zimbabwean organisation working with rural communities around Hwange National Park and other wildlife landscapes.",
  alternates: { canonical: "/about" },
};
export default function Page() {
  return (
    <>
      <PageHero
        title="Creating opportunity where opportunity is limited."
        lead="Tikobane Trust is a grassroots Zimbabwean organisation working with rural communities around Hwange National Park and other wildlife landscapes."
        seed="about"
        image={img.communityMeeting}
        crumbs={[
          { label: "Creating opportunity where opportunity is limited." },
        ]}
      />
      <Section>
        <SectionHeading title="About Tikobane" />
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          Rural communities possess land, livestock, natural resources,
          indigenous knowledge, skills and enormous human potential. Our role is
          to work alongside communities to transform these assets into
          sustainable livelihoods, enterprises and conservation solutions.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          We believe conservation is strongest when local people are empowered,
          organised and able to benefit from the landscapes they call home.
        </p>
      </Section>
      <Section>
        <SectionHeading title="Our vision" />
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          Thriving rural communities living peacefully alongside wildlife in
          healthy and productive landscapes.
        </p>
      </Section>
      <Section>
        <SectionHeading title="Our mission" />
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          To create opportunities for rural communities through
          entrepreneurship, sustainable livelihoods, youth development and
          community-led conservation, enabling people and wildlife to thrive
          together.
        </p>
      </Section>
      <Section id="approach">
        <SectionHeading title="From Aid to Opportunity" />
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          We believe communities have resources, knowledge and potential that
          can become the foundation for sustainable businesses and resilient
          livelihoods.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl bg-sand-100 p-7">
            <h3 className="text-xl text-forest-800">People</h3>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              We start with people, their knowledge, aspirations and abilities.
            </p>
          </article>
          <article className="rounded-2xl bg-sand-100 p-7">
            <h3 className="text-xl text-forest-800">Opportunity</h3>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              We identify resources and opportunities that can create income and
              improve livelihoods.
            </p>
          </article>
          <article className="rounded-2xl bg-sand-100 p-7">
            <h3 className="text-xl text-forest-800">Enterprise</h3>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              We help communities turn ideas and resources into practical,
              sustainable enterprises.
            </p>
          </article>
          <article className="rounded-2xl bg-sand-100 p-7">
            <h3 className="text-xl text-forest-800">Conservation</h3>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              When communities become more resilient and have a meaningful stake
              in their landscapes, conservation becomes stronger.
            </p>
          </article>
        </div>
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          Local Resources → Enterprise → Income → Resilience → Conservation →
          Coexistence
        </p>
      </Section>
      <CTABand />
    </>
  );
}
