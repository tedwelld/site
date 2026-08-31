import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { programmes } from "@/content/programmes";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Sponsor a Project",
  description:
    "Fund a specific Tikobane Trust project end to end — a club term, a training cohort, a veterinary outreach day or livestock enclosures in Dete, Zimbabwe.",
  alternates: { canonical: "/get-involved/sponsor-a-project" },
};

const opportunities = [
  {
    title: "A Boys & Girls Club term",
    programme: "youth-and-children",
    body: "Facilitation, materials, safeguarding training and activities for one club across a full school term.",
  },
  {
    title: "A skills training cohort",
    programme: "skills-and-training",
    body: "Tuition, materials, mentorship and post-training follow-up for a full group of young people.",
  },
  {
    title: "A veterinary outreach day",
    programme: "animal-welfare",
    body: "Medicines, consumables, veterinary professional time and transport to reach an outlying ward.",
  },
  {
    title: "Predator-proof enclosures",
    programme: "human-wildlife-coexistence",
    body: "Materials and labour to strengthen livestock enclosures for households losing animals to predators.",
  },
  {
    title: "A community garden",
    programme: "community-development",
    body: "Water access, inputs, fencing, training and follow-up coaching for a household or women's group.",
  },
  {
    title: "An environmental campaign",
    programme: "social-responsibility",
    body: "Clean-up and tree planting activities with schools and community groups, including materials.",
  },
] as const;

const included = [
  "A written scope with the community need, activities and intended outcome.",
  "An itemised budget in USD before you commit.",
  "Named reporting on what your funding delivered, including anything that did not go to plan.",
  "Photographs and stories where participants have consented to publication.",
  "An invitation to visit the project in Dete if you are able to travel.",
];

export default function SponsorPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsor a project"
        title="Fund one thing, completely"
        lead="Sponsoring a defined project means your funding has a beginning, an end and a report. For many donors that is far more satisfying than a general contribution."
        crumbs={[{ label: "Get Involved", href: "/get-involved" }, { label: "Sponsor a Project" }]}
        seed="sponsor-hero"
        image={img.classroomTraining}
      />

      <Section>
        <SectionHeading
          eyebrow="Sponsorship opportunities"
          title="Projects ready for funding"
          lead="Costings are prepared per project and confirmed with you before anything is committed. Contact us for the current budget for any of these."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((item, i) => {
            const programme = programmes.find((p) => p.slug === item.programme);
            return (
              <Reveal as="li" key={item.title} delay={i * 55} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-forest-900/8 bg-white p-6 shadow-soft">
                  {programme ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-600">
                      {programme.emoji} {programme.shortTitle}
                    </p>
                  ) : null}
                  <h3 className="mt-2 font-display text-lg text-forest-800">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{item.body}</p>
                  {programme ? (
                    <Link
                      href={`/our-work/${programme.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-gold-600"
                    >
                      About this programme
                      <ArrowRight />
                    </Link>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      <Section tone="forest">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              dark
              eyebrow="What sponsorship includes"
              title="You will know exactly what happened"
              lead="Project sponsorship comes with obligations on our side. These are the ones we commit to."
            />
            <Button href="/get-involved/donate" variant="donate" size="lg" className="mt-8">
              Or make a general donation
            </Button>
          </div>
          <ul className="space-y-4">
            {included.map((item) => (
              <li key={item} className="flex gap-4 rounded-2xl bg-sand-50/8 p-5 ring-1 ring-sand-50/15">
                <Check className="mt-0.5 shrink-0 text-gold-400" />
                <span className="text-sm leading-relaxed text-sand-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Enquire"
              title="Request a project brief and costing"
              lead="Tell us which project interests you and roughly what scale of funding you have in mind. We will send a scope and itemised budget."
            />
          </div>
          <ContactForm defaultReason="Donate or fundraise" />
        </div>
      </Section>

      <CTABand
        title="Not sure which project fits?"
        body="Tell us the outcome you care about and we will suggest the projects where your funding would go furthest."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "See all our work", href: "/our-work" }}
      />
    </>
  );
}
