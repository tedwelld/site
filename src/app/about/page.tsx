import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/Icons";
import { timeline, values } from "@/content/impact";
import { site } from "@/content/site";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "About Tikobane Trust",
  description:
    "Who we are, our mission and vision, our community-led approach, our values and our story since 2018 — Tikobane Trust, Dete, Zimbabwe.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Zimbabwean trust rooted in the community it serves"
        lead="Tikobane Trust was established in 2018 to work alongside communities in and around Dete — not to deliver solutions to them, but to build them together."
        crumbs={[{ label: "About" }]}
        seed="about-hero"
        image={img.communitySpirit}
        actions={
          <>
            <Button href="/about/team" variant="donate" size="lg">
              Meet our team
              <ArrowRight />
            </Button>
            <Button href="/our-work" variant="onDark" size="lg">
              Our work
            </Button>
          </>
        }
      />

      <Section id="who-we-are">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Who we are" title="Community-led, locally staffed, accountable" />
            <div className="prose-tikobane mt-7">
              <p>
                Tikobane Trust is a registered Zimbabwean organisation (Reg No. {site.registrationNumber}) based at
                253 Soweto Township in Dete, Hwange district. We work with households, schools, community
                committees and traditional leadership across the Dete area and the wards bordering Hwange
                National Park.
              </p>
              <p>
                Our work spans animal health and welfare, sustainable community development, youth and
                children&apos;s programmes, skills training, human-wildlife coexistence and environmental
                responsibility. These are not six separate projects — in a community living beside a national
                park, they are one interconnected reality.
              </p>
              <p>
                Our team is drawn from the communities we serve. That matters practically: it means programmes
                are designed by people who understand the constraints, and it means accountability is immediate
                and personal.
              </p>
            </div>
          </div>

          <Reveal className="space-y-6">
            <Photo
              src={img.womanWell}
              seed="about-community"
              alt="A woman pumping water at a community well"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-4/5 w-full shadow-lift"
            />
            <dl className="rounded-2xl bg-sand-100 p-6 text-sm">
              <div className="flex justify-between gap-4 border-b border-forest-900/10 pb-3">
                <dt className="text-ink-500">Established</dt>
                <dd className="font-semibold text-forest-800">{site.founded}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-forest-900/10 py-3">
                <dt className="text-ink-500">Registration</dt>
                <dd className="font-semibold text-forest-800">Reg No. {site.registrationNumber}</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-ink-500">Based in</dt>
                <dd className="text-right font-semibold text-forest-800">Dete, Matabeleland North</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section tone="forest" id="mission">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-sand-50/8 p-8 ring-1 ring-sand-50/15">
              <h2 className="font-display text-2xl text-gold-300">Our mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-sand-100">
                To improve livelihoods, promote animal welfare and empower young people in and around Dete, and
                to create sustainable, community-owned solutions for living alongside wildlife.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-3xl bg-sand-50/8 p-8 ring-1 ring-sand-50/15">
              <h2 className="font-display text-2xl text-gold-300">Our vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-sand-100">
                Resilient communities in Matabeleland North where households prosper, animals are cared for,
                young people have real opportunity, and people and wildlife coexist safely.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="approach">
        <SectionHeading
          eyebrow="Our approach"
          title="Community-led development, not delivery to communities"
          lead="The difference is not rhetorical. It changes who sets the priority, who holds the budget conversation and who is still there in year three."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "01", title: "Listen first", body: "Communities identify the priority and define what success would look like." },
            { step: "02", title: "Plan together", body: "Activities, roles and responsibilities are agreed with community structures." },
            { step: "03", title: "Build capacity", body: "Training and mentorship stay local so knowledge does not leave with us." },
            { step: "04", title: "Review honestly", body: "Results — including failures — are reviewed with participants and published." },
          ].map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 70}>
              <div className="h-full rounded-2xl border border-forest-900/8 bg-white p-6 shadow-soft">
                <span className="font-display text-3xl text-gold-500">{item.step}</span>
                <h3 className="mt-3 font-display text-lg text-forest-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="sand" id="values">
        <SectionHeading eyebrow="Our values" title="Six commitments that guide our decisions" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <Reveal as="li" key={value.title} delay={i * 50} className="h-full">
              <div className="h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-forest-900/8">
                <h3 className="font-display text-lg text-forest-800">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section id="our-story">
        <SectionHeading
          eyebrow="Our story"
          title="How Tikobane has grown since 2018"
          lead="Milestones below are indicative and are being confirmed with the Trust's records."
        />
        <ol className="mt-12 relative border-l-2 border-forest-200 pl-8">
          {timeline.map((milestone, i) => (
            <Reveal as="li" key={milestone.year} delay={i * 70} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[2.6rem] mt-1 grid size-8 place-items-center rounded-full bg-forest-700 text-[0.62rem] font-bold text-sand-50"
              >
                {milestone.year.slice(2)}
              </span>
              <p className="font-display text-2xl text-gold-600">{milestone.year}</p>
              <h3 className="mt-1 font-display text-lg text-forest-800">{milestone.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-500">{milestone.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="sand">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { title: "Our team", body: "The people delivering the work, and our governance structure.", href: "/about/team" as const },
            { title: "Our partners", body: "Who we collaborate with, and how partnership works.", href: "/about/partners" as const },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-forest-900/8 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <h3 className="font-display text-2xl text-forest-800">{card.title}</h3>
              <p className="mt-2 text-sm text-ink-500">{card.body}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 group-hover:text-gold-600">
                Continue
                <ArrowRight className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
