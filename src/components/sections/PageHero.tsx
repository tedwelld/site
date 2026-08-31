import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/Section";
import { Photo } from "@/components/ui/Photo";

export type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs = [],
  seed,
  image,
  actions,
}: {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  crumbs?: Crumb[];
  seed: string;
  image?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="relative isolate overflow-hidden bg-forest-800 text-sand-50">
      {/* Photo sets its own `relative`, so the positioning lives on this wrapper. */}
      <div aria-hidden="true" className="absolute inset-0">
        <Photo
          src={image}
          seed={seed}
          alt=""
          rounded={false}
          priority
          sizes="100vw"
          className="h-full w-full"
        />
      </div>
      {/* Flat scrim guarantees a contrast floor; the gradient darkens the text column further. */}
      <div aria-hidden="true" className="absolute inset-0 bg-forest-900/60" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest-900/80 via-forest-900/50 to-transparent"
      />

      <Container className="relative py-16 sm:py-20">
        {crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-sand-200/75">
              <li>
                <Link href="/" className="hover:text-sand-50">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb, i) => (
                <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-sand-50">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-sand-50">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="mt-6 max-w-3xl">
          {eyebrow ? <Eyebrow dark>{eyebrow}</Eyebrow> : null}
          <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">{title}</h1>
          {lead ? <p className="mt-6 text-lg leading-relaxed text-sand-200/90">{lead}</p> : null}
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </Container>
    </div>
  );
}
