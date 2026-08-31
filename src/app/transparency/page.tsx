import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/content/site";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Transparency & Governance",
  description:
    "Tikobane Trust's registration, governance, annual and financial reporting, safeguarding, child protection, environmental policy and code of conduct.",
  alternates: { canonical: "/transparency" },
};

const documents = [
  { name: "Annual report 2025", status: "Pending upload" },
  { name: "Annual report 2024", status: "Pending upload" },
  { name: "Financial statements 2025", status: "Pending upload" },
  { name: "Financial statements 2024", status: "Pending upload" },
  { name: "Certificate of registration (Reg No. 239/2018)", status: "Available on request" },
  { name: "Trust deed and constitution", status: "Available on request" },
];

export default function TransparencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparency"
        title="Transparency & governance"
        lead="An organisation asking for public trust should make it easy to check. This page brings together our registration, governance, reporting and policies in one place."
        crumbs={[{ label: "Transparency" }]}
        seed="transparency-hero"
        image={img.houseConstruction}
      />

      <Section>
        <div className="rounded-2xl border border-dashed border-gold-500/50 bg-gold-300/15 p-5 text-sm leading-relaxed text-earth-800">
          <strong className="font-semibold">Documents pending upload.</strong> The structure below is ready. Where a
          document is not yet published we say so plainly rather than leaving the section empty — please request
          anything you need in the meantime.
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div className="prose-tikobane max-w-none">
            <h2 id="registration">Registration information</h2>
            <p>
              {site.name} is registered in Zimbabwe under <strong>Reg No. {site.registrationNumber}</strong>, and has
              operated since {site.founded}. Our registered address is {site.contact.addressLines[0]}, Dete,
              Matabeleland North, Zimbabwe.
            </p>

            <h2 id="governance">Governance</h2>
            <p>
              The Trust is governed by an independent board of trustees which is responsible for strategy,
              financial oversight, risk and safeguarding, and which holds the executive team accountable to the
              Trust&apos;s objectives. Programme delivery is led by staff based in Dete.
            </p>
            <ul>
              <li>The board meets regularly and records minutes of its decisions.</li>
              <li>Trustees serve in a voluntary, non-executive capacity.</li>
              <li>Conflicts of interest are declared and recorded.</li>
              <li>
                Our team and governance structure is set out on the{" "}
                <Link href="/about/team">team page</Link>.
              </li>
            </ul>

            <h2 id="financial">Financial reporting</h2>
            <p>
              We publish narrative and financial reporting annually. Restricted funding is reported against the
              purpose for which it was given, and we report on activities that did not achieve what we hoped as
              well as those that did.
            </p>

            <h2 id="safeguarding">Safeguarding & child protection</h2>
            <p>
              A substantial part of our work involves children and young people through Boys &amp; Girls Clubs,
              mentorship and educational support. Safeguarding is a precondition of that work, not an addition to
              it.
            </p>
            <ul>
              <li>All staff and volunteers working with children complete safeguarding induction and refreshers.</li>
              <li>Club sessions follow defined supervision and behaviour procedures.</li>
              <li>Concerns are reported to a named safeguarding lead and handled confidentially.</li>
              <li>Photographs and stories involving children are published only with informed consent.</li>
              <li>Concerns can be raised in confidence at <a href={site.contact.emailHref}>{site.contact.email}</a>.</li>
            </ul>

            <h2 id="environment">Environmental policy</h2>
            <p>
              We work in a landscape where environmental degradation directly reduces household income and
              increases conflict with wildlife. Our commitments include minimising the environmental footprint of
              our own operations, promoting locally appropriate and climate-conscious practice in every programme,
              and supporting community-led environmental stewardship rather than externally imposed instruction.
            </p>

            <h2 id="code-of-conduct">Code of conduct</h2>
            <p>
              All staff, trustees, volunteers and partners are bound by our code of conduct. It covers respect and
              dignity in all community interactions, prohibition of any form of exploitation, abuse or harassment,
              honesty in reporting and in the use of funds, animal welfare standards in all our operations, and
              confidentiality of personal and community information.
            </p>

            <h2 id="complaints">Complaints and feedback</h2>
            <p>
              Anyone — community member, participant, donor, partner or member of the public — can raise a
              complaint. Contact us by <a href={site.contact.emailHref}>email</a>, by{" "}
              <a href={site.contact.phoneHref}>telephone</a> or through our{" "}
              <Link href="/contact">contact form</Link>. We acknowledge complaints promptly and confirm the outcome
              to the person who raised it.
            </p>
          </div>

          <div className="space-y-6 lg:sticky lg:top-32">
            <div className="rounded-3xl border border-forest-900/10 bg-white p-7 shadow-soft">
              <h2 className="font-display text-xl text-forest-800">Documents</h2>
              <ul className="mt-5 divide-y divide-forest-900/10 text-sm">
                {documents.map((doc) => (
                  <li key={doc.name} className="flex items-start justify-between gap-4 py-3">
                    <span className="font-medium text-forest-800">{doc.name}</span>
                    <span className="shrink-0 rounded-full bg-sand-100 px-3 py-1 text-xs font-semibold text-ink-500">
                      {doc.status}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-ink-500">
                To request any document, email{" "}
                <a href={site.contact.emailHref} className="font-semibold text-forest-700 underline">
                  {site.contact.email}
                </a>
                .
              </p>
            </div>

            <div className="rounded-3xl bg-forest-800 p-7 text-sand-100">
              <h2 className="font-display text-xl text-sand-50">Raise a concern</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Safeguarding concerns are urgent and confidential. If someone is in immediate danger, contact
                local authorities first, then tell us.
              </p>
              <a
                href={site.contact.emailHref}
                className="mt-5 inline-flex rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-forest-900 transition hover:bg-gold-400"
              >
                Email in confidence
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Accountability"
          title="How we report on impact"
          lead="Our reporting approach, what we measure and why, is set out alongside our impact figures."
        />
        <div className="mt-8">
          <Link
            href="/impact"
            className="inline-flex rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-sand-50 transition hover:bg-forest-600"
          >
            See our impact and methodology
          </Link>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
