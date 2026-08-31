import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { DonateWidget } from "@/components/forms/DonateWidget";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Check } from "@/components/ui/Icons";
import { site } from "@/content/site";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Tikobane Trust's community development, animal welfare, youth and human-wildlife coexistence programmes in Dete, Zimbabwe.",
  alternates: { canonical: "/get-involved/donate" },
};

const allocation = [
  {
    label: "Programme delivery",
    share: "Majority of every gift",
    body: "Training, veterinary outreach, club sessions, materials, enclosures and community project costs.",
  },
  {
    label: "Local staff and facilitators",
    share: "Essential and deliberate",
    body: "Programmes are delivered by people from the community. Paying them properly is part of the impact, not an overhead to minimise into nothing.",
  },
  {
    label: "Transport and logistics",
    share: "Unavoidable in rural Hwange",
    body: "Reaching outlying wards costs fuel and time. We report this honestly rather than hiding it.",
  },
  {
    label: "Governance and administration",
    share: "Kept as low as responsibly possible",
    body: "Financial controls, reporting and compliance that make us accountable to you and to our communities.",
  },
];

const directOptions = [
  {
    title: "Mobile money",
    body: "Local mobile money transfer (for example EcoCash) is the most practical option for donors inside Zimbabwe.",
    action: "Contact us for current mobile money details",
  },
  {
    title: "Bank transfer",
    body: "Suitable for larger gifts, institutional donors and grant disbursements, in USD or ZWG.",
    action: "Request our banking details",
  },
  {
    title: "In person",
    body: "Visit us at 253 Soweto Township, Dete. Please contact us first so someone is there to receive you.",
    action: "Arrange a visit",
  },
  {
    title: "In-kind donations",
    body: "Veterinary supplies, learning materials, tools, sports equipment and enclosure materials are all useful.",
    action: "Ask what is needed right now",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Support Tikobane"
        lead="Your gift funds animal welfare outreach, youth clubs, skills training, community projects and safer coexistence with wildlife in and around Dete."
        crumbs={[{ label: "Get Involved", href: "/get-involved" }, { label: "Donate" }]}
        seed="donate-hero"
        image={img.womanMaize}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <DonateWidget />
          </div>

          <div>
            <SectionHeading
              eyebrow="Where your donation goes"
              title="Exactly what your money does"
              lead="We would rather explain our costs plainly than claim that one hundred per cent of every gift reaches the field. Both would be untrue for any real organisation."
            />
            <ul className="mt-8 space-y-4">
              {allocation.map((item, i) => (
                <Reveal as="li" key={item.label} delay={i * 60}>
                  <div className="rounded-2xl border border-forest-900/8 bg-white p-6 shadow-soft">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg text-forest-800">{item.label}</h3>
                      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-600">
                        {item.share}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink-500">
              Precise percentage allocations are published in our annual reporting. See{" "}
              <Link href="/transparency" className="font-semibold text-forest-700 underline">
                transparency and governance
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section tone="sand" id="direct-giving">
        <SectionHeading
          eyebrow="Direct giving"
          title="Other ways to give"
          lead="We deliberately support local payment methods rather than depending only on international cards. Contact us and we will send the current details for whichever option suits you."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {directOptions.map((option, i) => (
            <Reveal as="li" key={option.title} delay={i * 60} className="h-full">
              <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-soft ring-1 ring-forest-900/8">
                <span className="grid size-10 place-items-center rounded-full bg-forest-50 text-forest-700">
                  <Check />
                </span>
                <h3 className="mt-4 font-display text-lg text-forest-800">{option.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{option.body}</p>
                <a
                  href={site.contact.whatsappHref}
                  className="mt-4 text-sm font-semibold text-forest-700 underline"
                >
                  {option.action}
                </a>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border border-dashed border-forest-700/30 bg-white/70 p-6 text-sm leading-relaxed text-ink-700">
          <strong className="font-semibold text-forest-800">A note on online checkout.</strong> Card checkout is
          connected via the payment provider Tikobane chooses, including local Zimbabwean options. Until that is
          configured, the donate button above will bring you to these direct giving options — nothing is lost, and
          your gift still reaches us. Reach us on{" "}
          <a href={site.contact.whatsappHref} className="font-semibold text-forest-700 underline">
            WhatsApp
          </a>{" "}
          or at{" "}
          <a href={site.contact.emailHref} className="font-semibold text-forest-700 underline">
            {site.contact.email}
          </a>
          .
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Questions" title="Before you give" />
        <dl className="mt-10 divide-y divide-forest-900/10 border-y border-forest-900/10">
          {[
            {
              q: "Is Tikobane Trust a registered organisation?",
              a: `Yes. Tikobane Trust is registered in Zimbabwe under Reg No. ${site.registrationNumber} and is governed by an independent board of trustees.`,
            },
            {
              q: "Can I choose which programme my gift supports?",
              a: "Yes — select a programme in the form above. Unrestricted gifts are genuinely more useful, because they let us respond where need is greatest.",
            },
            {
              q: "Will I receive a receipt?",
              a: "Yes. Contact us with your transfer reference and we will issue a receipt and acknowledgement.",
            },
            {
              q: "Is my gift tax deductible?",
              a: "This depends on your country of residence. We can supply our registration documents to support a claim, but we cannot give tax advice.",
            },
            {
              q: "Can I give monthly?",
              a: "Yes, and it helps most. Predictable income means we can commit to a club term or training cohort with confidence.",
            },
          ].map((item) => (
            <div key={item.q} className="py-6">
              <dt className="font-display text-lg text-forest-800">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-500">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
