import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/Icons";
import { site } from "@/content/site";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Donate, volunteer, partner with us, sponsor a project or become a mentor — ways to support Tikobane Trust's work in Dete, Zimbabwe.",
  alternates: { canonical: "/get-involved" },
};

const ways = [
  {
    title: "Donate",
    href: "/get-involved/donate" as const,
    body: "Help support community and animal welfare programmes. Regular monthly gifts are the most useful support we receive, because they let us plan.",
    detail: "One-off or monthly · Direct to a programme if you wish",
  },
  {
    title: "Volunteer",
    href: "/get-involved/volunteer" as const,
    body: "Give your skills, time and expertise — in Dete or remotely. We particularly need veterinary, training, monitoring and communications support.",
    detail: "In person or remote · Short or long term",
  },
  {
    title: "Partner With Us",
    href: "/get-involved/partner" as const,
    body: "For NGOs, businesses, conservation organisations, government institutions and other bodies looking to work alongside a locally rooted team.",
    detail: "Programme, funding or technical partnerships",
  },
  {
    title: "Sponsor a Project",
    href: "/get-involved/sponsor-a-project" as const,
    body: "Fund a specific programme end to end — a club term, a training cohort, an outreach day or a set of livestock enclosures.",
    detail: "Named reporting on what your funding delivered",
  },
  {
    title: "Become a Mentor",
    href: "/get-involved/volunteer#mentor" as const,
    body: "Share your professional knowledge with young people and community groups. Consistency matters far more than intensity here.",
    detail: "Remote-friendly · Ongoing commitment",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="There is more than one way to be useful"
        lead="Tikobane is a small, locally staffed organisation. Money, expertise, time and partnership all move the work forward — choose whichever you actually have."
        crumbs={[{ label: "Get Involved" }]}
        seed="get-involved-hero"
        image={img.schoolGarden}
      />

      <Section>
        <SectionHeading eyebrow="Ways to get involved" title="Five ways to support the work" />
        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {ways.map((way, i) => (
            <Reveal as="li" key={way.title} delay={i * 60} className="h-full">
              <Link
                href={way.href}
                className="group flex h-full flex-col rounded-3xl border border-forest-900/8 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <h3 className="font-display text-2xl text-forest-800">{way.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{way.body}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-gold-600">{way.detail}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 group-hover:text-gold-600">
                  Find out more
                  <ArrowRight className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Not sure where to start?"
              title="Talk to us first"
              lead="If you are unsure how you could help, a short conversation usually resolves it faster than a form. We are happy to say when something is not a good fit."
            />
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-forest-900/8">
            <h3 className="font-display text-xl text-forest-800">Reach the team directly</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={site.contact.whatsappHref} className="font-semibold text-forest-700 underline">
                  WhatsApp {site.contact.whatsapp}
                </a>
              </li>
              <li>
                <a href={site.contact.phoneHref} className="font-semibold text-forest-700 underline">
                  Call {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={site.contact.emailHref} className="font-semibold break-all text-forest-700 underline">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <Link href="/contact" className="font-semibold text-forest-700 underline">
                  Use our contact form
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
