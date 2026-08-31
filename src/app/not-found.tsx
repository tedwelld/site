import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { programmes } from "@/content/programmes";

export const metadata = {
  title: "Page not found",
};

const links = [
  { label: "About Tikobane", href: "/about" as const },
  { label: "Our Impact", href: "/impact" as const },
  { label: "Stories & News", href: "/stories" as const },
  { label: "Gallery", href: "/gallery" as const },
  { label: "Get Involved", href: "/get-involved" as const },
  { label: "Contact", href: "/contact" as const },
];

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">Error 404</p>
      <h1 className="mt-4 text-4xl text-forest-800 sm:text-5xl">We could not find that page</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
        The page may have moved when we rebuilt this site. Everything is still here — try one of the links below,
        or get in touch and we will point you to it.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <Button href="/" size="lg">
          Back to home
        </Button>
        <Button href="/contact" variant="secondary" size="lg">
          Contact us
        </Button>
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-lg text-forest-800">Main pages</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-forest-700 underline hover:text-gold-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg text-forest-800">Our work</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {programmes.map((p) => (
              <li key={p.slug}>
                <Link href={`/our-work/${p.slug}`} className="text-forest-700 underline hover:text-gold-600">
                  {p.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
