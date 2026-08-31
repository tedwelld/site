import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ProgrammeCards } from "@/components/sections/ProgrammeCards";
import { WhereWeWork } from "@/components/sections/WhereWeWork";
import { Section, SectionHeading } from "@/components/ui/Section";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Animal welfare, community development, youth programmes, skills training, human-wildlife coexistence and environmental responsibility in Dete, Zimbabwe.",
  alternates: { canonical: "/our-work" },
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Six connected areas of work, one community"
        lead="In a community on the edge of Hwange National Park, livelihoods, animal welfare, youth opportunity and coexistence are the same conversation. Our programmes are designed to reinforce one another."
        crumbs={[{ label: "Our Work" }]}
        seed="our-work-hero"
        image={img.hwangePlains}
      />

      <Section>
        <ProgrammeCards />
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="How programmes connect"
          title="Why we do not run these in isolation"
          lead="A household that loses livestock to a predator has less to invest in a child's schooling. A young person with a trade is less dependent on natural resource extraction. The links are direct."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Animal welfare ↔ livelihoods",
              body: "Healthy livestock is household savings. Welfare work is economic work.",
            },
            {
              title: "Coexistence ↔ animal welfare",
              body: "Protecting livestock from predators reduces both household loss and retaliatory killing.",
            },
            {
              title: "Youth ↔ skills",
              body: "Clubs build confidence and life skills; training converts that into income.",
            },
            {
              title: "Skills ↔ community development",
              body: "Graduates start the enterprises that community groups then support and supply.",
            },
            {
              title: "Environment ↔ everything",
              body: "Water, soil and woodland determine what any of these programmes can achieve.",
            },
            {
              title: "Community ↔ accountability",
              body: "Community structures plan, deliver and review each programme with us.",
            },
          ].map((item) => (
            <li key={item.title} className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-forest-900/8">
              <h3 className="font-display text-base text-forest-800">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <WhereWeWork />
      </Section>

      <CTABand
        title="Support a programme directly"
        body="You can direct your gift to a specific area of work, or sponsor a project end to end."
        primary={{ label: "Donate to a programme", href: "/get-involved/donate" }}
        secondary={{ label: "Sponsor a project", href: "/get-involved/sponsor-a-project" }}
      />
    </>
  );
}
