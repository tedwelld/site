import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Check } from "@/components/ui/Icons";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Volunteer & Mentor",
  description:
    "Volunteer your skills with Tikobane Trust in Dete, Zimbabwe, or become a mentor to young people in our skills and youth programmes.",
  alternates: { canonical: "/get-involved/volunteer" },
};

const roles = [
  {
    title: "Veterinary & animal health",
    body: "Veterinarians, veterinary nurses and paraprofessionals to support outreach days and husbandry training.",
    mode: "In person, Dete",
  },
  {
    title: "Trainers & facilitators",
    body: "Vocational, enterprise, financial literacy and life skills facilitators for youth and community cohorts.",
    mode: "In person or remote",
  },
  {
    title: "Youth club support",
    body: "Facilitators and helpers for Boys & Girls Club sessions. Safeguarding checks and training required.",
    mode: "In person, Dete",
  },
  {
    title: "Monitoring & reporting",
    body: "Help us design proportionate data collection and turn it into honest, readable reporting.",
    mode: "Remote friendly",
  },
  {
    title: "Communications & photography",
    body: "Storytelling, photography, video and social media support — with ethical consent practice.",
    mode: "In person or remote",
  },
  {
    title: "Trades & technical skills",
    body: "Construction, water, solar and agricultural expertise for community projects and enclosures.",
    mode: "In person, Dete",
  },
];

const expectations = [
  "We will be honest about whether we can host you usefully at a given time.",
  "All volunteers working with children complete our safeguarding induction.",
  "Volunteers work alongside local staff, never in place of paid local roles.",
  "We ask for a realistic commitment rather than a large but short-lived one.",
  "Volunteers cover their own travel, visas and accommodation unless agreed otherwise.",
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title="Give your skills, time and expertise"
        lead="We are a small team with more work than capacity. Skilled volunteers extend what we can reach — as long as the role is real and the commitment is honest."
        crumbs={[{ label: "Get Involved", href: "/get-involved" }, { label: "Volunteer" }]}
        seed="volunteer-hero"
        image={img.handwashingTraining}
      />

      <Section>
        <SectionHeading eyebrow="Where we need help" title="Roles we are usually looking for" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, i) => (
            <Reveal as="li" key={role.title} delay={i * 55} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-forest-900/8 bg-white p-6 shadow-soft">
                <h3 className="font-display text-lg text-forest-800">{role.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{role.body}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-gold-600">{role.mode}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="forest" id="mentor">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              dark
              eyebrow="Become a mentor"
              title="Share your professional knowledge"
              lead="Mentorship is the single highest-leverage thing most people can offer us, and it works remotely. Consistency matters far more than intensity."
            />
          </div>
          <ul className="space-y-4">
            {[
              "Commit to regular contact with a young person or community group — monthly is enough.",
              "Work through real problems: pricing, suppliers, records, difficult conversations.",
              "Open doors where you can: introductions, markets, work experience.",
              "Give honest feedback early, before a mistake becomes expensive.",
              "Complete our safeguarding induction before working with under-18s.",
            ].map((item) => (
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
            <SectionHeading eyebrow="What to expect" title="How we work with volunteers" />
            <ul className="mt-8 space-y-3">
              {expectations.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl bg-white p-4 text-sm leading-relaxed text-ink-700 shadow-soft ring-1 ring-forest-900/8">
                  <Check className="mt-0.5 shrink-0 text-gold-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ContactForm defaultReason="Volunteer" />
          </div>
        </div>
      </Section>

      <CTABand
        title="Cannot volunteer right now?"
        body="A donation funds the local staff and materials that make volunteering possible in the first place."
      />
    </>
  );
}
