import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Mail, Phone, Pin, SocialIconGlyph } from "@/components/ui/Icons";
import { site } from "@/content/site";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Tikobane Trust — 253 Soweto Township, Dete, Zimbabwe. Call, WhatsApp, email or send us a message.",
  alternates: { canonical: "/contact" },
};

const { latitude: lat, longitude: lon } = site.where;
const bbox = [lon - 0.06, lat - 0.05, lon + 0.06, lat + 0.05].map((n) => n.toFixed(4)).join("%2C");
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lead="Whether you want to support our work, report an animal welfare concern, discuss a partnership or simply ask a question, we would like to hear from you."
        crumbs={[{ label: "Contact" }]}
        seed="contact-hero"
        image={img.borehole}
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <a
            href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=14/${lat}/${lon}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-forest-900/8 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="grid size-11 place-items-center rounded-full bg-forest-50 text-forest-700 transition group-hover:bg-gold-500 group-hover:text-forest-900">
              <Pin />
            </span>
            <h2 className="mt-4 font-display text-xl text-forest-800">Visit us</h2>
            <address className="mt-3 space-y-0.5 text-sm not-italic leading-relaxed text-ink-500">
              {site.contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-3 text-xs text-ink-500">
              Please contact us before visiting so someone is available to receive you.
            </p>
          </a>

          <div className="rounded-3xl border border-forest-900/8 bg-white p-7 shadow-soft">
            <span className="grid size-11 place-items-center rounded-full bg-forest-50 text-forest-700">
              <Phone />
            </span>
            <h2 className="mt-4 font-display text-xl text-forest-800">Call or WhatsApp</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              Office hours, Monday to Friday. WhatsApp is usually the fastest way to reach us.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a href={site.contact.phoneHref} className="block font-semibold text-forest-700 underline">
                {site.contact.phone}
              </a>
              <a
                href={site.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest-700 px-4 py-2 font-semibold text-sand-50 transition hover:bg-forest-600"
              >
                <SocialIconGlyph name="whatsapp" />
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-forest-900/8 bg-white p-7 shadow-soft">
            <span className="grid size-11 place-items-center rounded-full bg-forest-50 text-forest-700">
              <Mail />
            </span>
            <h2 className="mt-4 font-display text-xl text-forest-800">Email</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              We aim to reply to all email within two working days.
            </p>
            <a
              href={site.contact.emailHref}
              className="mt-4 block break-all text-sm font-semibold text-forest-700 underline"
            >
              {site.contact.email}
            </a>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${s.label}`}
                  className="grid size-9 place-items-center rounded-full bg-sand-100 text-forest-700 transition hover:bg-forest-700 hover:text-sand-50"
                >
                  <SocialIconGlyph name={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <ContactForm />

          <div className="space-y-8">
            <div className="overflow-hidden rounded-3xl border border-forest-900/10 shadow-soft">
              <div className="aspect-square w-full sm:aspect-4/3">
                <iframe
                  src={mapSrc}
                  title="Map showing Tikobane Trust's location in Dete, Zimbabwe"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>

            <div className="rounded-3xl bg-sand-100 p-7">
              <h2 className="font-display text-xl text-forest-800">Reporting a concern</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                If you need to report an animal welfare concern, choose that reason in the form and give us the
                location and as much detail as you can.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                Safeguarding concerns involving a child or vulnerable adult are treated as urgent and handled
                confidentially under our safeguarding policy. If someone is in immediate danger, please contact
                local authorities first, then tell us.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Section tone="forest">
        <SectionHeading
          dark
          align="center"
          eyebrow="Registered in Zimbabwe"
          title={`${site.name} · Reg No. ${site.registrationNumber}`}
          lead="Established 2018. Governed by an independent board of trustees, working in Dete, Hwange district, Matabeleland North."
        />
      </Section>
    </>
  );
}
