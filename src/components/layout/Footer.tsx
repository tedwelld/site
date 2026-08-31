import Link from "next/link";
import { Logo } from "./Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Mail, Phone, Pin, SocialIconGlyph } from "@/components/ui/Icons";
import { footerPolicyLinks, navigation, site } from "@/content/site";
import { programmes } from "@/content/programmes";

const exploreLinks = [
  { label: "About Tikobane", href: "/about" },
  { label: "Our Team", href: "/about/team" },
  { label: "Our Impact", href: "/impact" },
  { label: "Stories & News", href: "/stories" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Photo Credits", href: "/image-credits" },
];

export function Footer() {
  const involved = navigation.find((n) => n.label === "Get Involved")?.children ?? [];

  return (
    <footer className="bg-forest-900 text-sand-200/80">
      <div className="border-b border-sand-50/10">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-2xl text-sand-50">Follow our work</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed">
              Occasional updates from Dete — programme news, community stories and ways to help. No more than
              one email a month, and we never share your address.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-sand-50/8 px-3.5 py-2 text-xs font-semibold text-sand-100 ring-1 ring-sand-50/15 transition hover:bg-sand-50/16"
                >
                  <SocialIconGlyph name={s.icon} width={15} height={15} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-4">
        <div>
          <Logo dark />
          <p className="mt-5 text-sm leading-relaxed">{site.description}</p>
          <p className="mt-5 text-xs uppercase tracking-[0.14em] text-sand-200/55">
            Registered in Zimbabwe · Reg No. {site.registrationNumber}
          </p>
        </div>

        <nav aria-label="Our work" className="text-sm">
          <h3 className="font-display text-base text-sand-50">Our Work</h3>
          <ul className="mt-4 space-y-2.5">
            {programmes.map((p) => (
              <li key={p.slug}>
                <Link href={`/our-work/${p.slug}`} className="transition hover:text-sand-50">
                  {p.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Explore and get involved" className="text-sm">
          <h3 className="font-display text-base text-sand-50">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {exploreLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-sand-50">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 font-display text-base text-sand-50">Get Involved</h3>
          <ul className="mt-4 space-y-2.5">
            {involved.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-sand-50">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <h3 className="font-display text-base text-sand-50">Contact</h3>
          <address className="mt-4 space-y-3 not-italic">
            <p className="flex gap-3">
              <Pin className="mt-0.5 shrink-0 text-gold-400" width={18} height={18} />
              <span>{site.contact.addressLines.join(", ")}</span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 shrink-0 text-gold-400" width={18} height={18} />
              <a href={site.contact.phoneHref} className="transition hover:text-sand-50">
                {site.contact.phone}
              </a>
            </p>
            <p className="flex gap-3">
              <Mail className="mt-0.5 shrink-0 text-gold-400" width={18} height={18} />
              <a href={site.contact.emailHref} className="break-all transition hover:text-sand-50">
                {site.contact.email}
              </a>
            </p>
          </address>
          <h3 className="mt-8 font-display text-base text-sand-50">Policies</h3>
          <ul className="mt-4 space-y-2.5">
            {footerPolicyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-sand-50">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-sand-50/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/transparency" className="transition hover:text-sand-50">
              Transparency
            </Link>
            <Link href="/contact" className="transition hover:text-sand-50">
              Contact
            </Link>
            <Link
              href="/get-involved/donate"
              className="font-semibold text-gold-300 transition hover:text-gold-400"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
