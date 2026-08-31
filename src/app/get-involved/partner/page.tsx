import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Partnership opportunities with Tikobane Trust for NGOs, businesses, conservation organisations, government institutions and community organisations in Zimbabwe.",
  alternates: { canonical: "/get-involved/partner" },
};

const partnerTypes = [
  {
    title: "Conservation organisations",
    body: "We offer credible, long-standing relationships with communities on the Hwange National Park boundary — the households whose cooperation conservation depends on.",
  },
  {
    title: "NGOs & development partners",
    body: "A locally staffed delivery partner with existing community structures, safeguarding practice and monitoring in place across six programme areas.",
  },
  {
    title: "Veterinary & animal welfare bodies",
    body: "Established community outreach routes, trained community animal health volunteers and household-level trust in the Dete area.",
  },
  {
    title: "Businesses & corporate partners",
    body: "Meaningful social investment with named reporting, plus employment and apprenticeship pathways for programme graduates.",
  },
  {
    title: "Government institutions",
    body: "Coordination at ward and district level, community mobilisation capacity and reliable local reporting.",
  },
  {
    title: "Community organisations",
    body: "Joint delivery with schools, committees, churches and community groups already active in the area.",
  },
];

const process = [
  { step: "01", title: "Introduction", body: "Tell us who you are and what you have in mind. A short conversation saves everyone time." },
  { step: "02", title: "Scoping", body: "We assess fit honestly — including whether the community need genuinely exists." },
  { step: "03", title: "Agreement", body: "Scope, roles, budget, reporting and duration agreed in writing before work begins." },
  { step: "04", title: "Delivery & reporting", body: "Joint delivery with community structures, and reporting on what actually happened." },
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner with us"
        title="For organisations who want work that holds"
        lead="Tikobane brings something that is hard to buy and easy to lose: standing trust with households in and around Dete, and a team drawn from those same communities."
        crumbs={[{ label: "Get Involved", href: "/get-involved" }, { label: "Partner With Us" }]}
        seed="partner-hero"
        image={img.marketTraders}
      />

      <Section>
        <SectionHeading eyebrow="Who we partner with" title="What we bring to each kind of partner" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partnerTypes.map((type, i) => (
            <Reveal as="li" key={type.title} delay={i * 55} className="h-full">
              <div className="h-full rounded-2xl border border-forest-900/8 bg-white p-6 shadow-soft">
                <h3 className="font-display text-lg text-forest-800">{type.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{type.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="How it works"
          title="From first conversation to delivery"
          lead="We will tell you if a partnership is not a good fit. That is more useful to both of us than a project that quietly underperforms."
        />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 60}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-forest-900/8">
                <span className="font-display text-3xl text-gold-500">{item.step}</span>
                <h3 className="mt-3 font-display text-lg text-forest-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Start a conversation"
              title="Tell us what you have in mind"
              lead="Include the kind of partnership, the area of work and any timeline you are working to. We aim to respond within two working days."
            />
          </div>
          <ContactForm defaultReason="Partnership" />
        </div>
      </Section>

      <CTABand
        title="Prefer to start with funding a project?"
        body="Sponsoring a defined project is often the simplest first step in a longer partnership."
        primary={{ label: "Sponsor a project", href: "/get-involved/sponsor-a-project" }}
        secondary={{ label: "About our partnerships", href: "/about/partners" }}
      />
    </>
  );
}
