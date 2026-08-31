import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { partnerCategories } from "@/content/people";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Partners & Sponsors",
  description:
    "Tikobane Trust works with conservation organisations, veterinary professionals, NGOs, government institutions, businesses and community groups in Matabeleland North, Zimbabwe.",
  alternates: { canonical: "/about/partners" },
};

const principles = [
  {
    title: "Community first",
    body: "Partnerships must add value for the communities we serve, not just visibility for the organisations involved.",
  },
  {
    title: "Clear expectations",
    body: "We agree scope, roles, reporting and duration in writing before work begins.",
  },
  {
    title: "Local capacity",
    body: "Wherever possible, partnerships should leave stronger local skills behind them.",
  },
  {
    title: "Honest reporting",
    body: "We report what happened, including what did not work. We do not overstate results.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners & sponsors"
        title="We believe sustainable change happens through collaboration"
        lead="No single organisation can address livelihoods, animal welfare, youth opportunity and human-wildlife coexistence alone. Partnership is how this work becomes durable."
        crumbs={[{ label: "About", href: "/about" }, { label: "Partners" }]}
        seed="partners-hero"
        image={img.farmersHarvest}
      />

      <Section>
        <div className="rounded-2xl border border-dashed border-gold-500/50 bg-gold-300/15 p-5 text-sm leading-relaxed text-earth-800">
          <strong className="font-semibold">Partner listings pending.</strong> We publish partner names and logos
          only where a partnership is confirmed and the organisation has given permission. The categories below
          describe the types of organisations we work with.
        </div>

        <div className="mt-12">
          <SectionHeading eyebrow="Who we work with" title="The organisations behind our programmes" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnerCategories.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 50} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-forest-900/8 bg-white p-6 shadow-soft">
                  <div
                    aria-hidden="true"
                    className="grid h-20 place-items-center rounded-xl border border-dashed border-forest-700/25 bg-sand-100 text-xs font-semibold uppercase tracking-[0.14em] text-forest-700/60"
                  >
                    Logo
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
                    {p.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg text-forest-800">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{p.blurb}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="How we partner"
          title="Four principles we hold to"
          lead="These apply equally to funders, conservation organisations, businesses and community groups."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 60} className="h-full">
              <div className="h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-forest-900/8">
                <h3 className="font-display text-lg text-forest-800">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CTABand
        title="Interested in partnering with Tikobane?"
        body="We work with NGOs, conservation organisations, businesses, government institutions and community groups. Tell us what you have in mind."
        primary={{ label: "Partner with us", href: "/get-involved/partner" }}
        secondary={{ label: "Contact the team", href: "/contact" }}
      />
    </>
  );
}
