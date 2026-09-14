import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { notFound } from "next/navigation";
import { programmes, getProgramme } from "@/content/programmes";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProgramme((await params).slug);
  return p
    ? {
        title: p.title,
        description: p.summary,
        alternates: { canonical: "/our-work/" + p.slug },
      }
    : { title: "Programme not found" };
}
export default async function Page({ params }: Props) {
  const p = getProgramme((await params).slug);
  if (!p) notFound();
  return (
    <>
      <PageHero
        title={p.title}
        lead={p.summary}
        seed={p.imageSeed}
        image={p.image}
        crumbs={[{ label: "Our Work", href: "/our-work" }, { label: p.title }]}
      />
      <Section>
        <p className="max-w-3xl text-xl leading-relaxed text-ink-700">
          {p.intro}
        </p>
        <h2 className="mt-12 text-3xl text-forest-800">Our focus</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {p.activities.map((a) => (
            <li key={a} className="rounded-2xl bg-sand-100 p-5">
              {a}
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-3xl bg-forest-800 p-8 text-xl text-sand-50">
          {p.approach}
        </div>
        <Button className="mt-8" href="/get-involved/sponsor-a-project">
          Support this initiative
        </Button>
      </Section>
      <CTABand />
    </>
  );
}
