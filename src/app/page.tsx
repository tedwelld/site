import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/Section";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Check, Heart } from "@/components/ui/Icons";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { ProgrammeCards } from "@/components/sections/ProgrammeCards";
import { StoryCard } from "@/components/sections/StoryCard";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhereWeWork } from "@/components/sections/WhereWeWork";
import { CTABand } from "@/components/sections/CTABand";
import { site } from "@/content/site";
import { img } from "@/content/credits";
import { sortedStories, formatDate } from "@/content/stories";
import { partnerCategories } from "@/content/people";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const involvement = [
  { title: "Donate", body: "Support community and animal welfare programmes.", href: "/get-involved/donate" },
  { title: "Volunteer", body: "Give your skills, time and expertise.", href: "/get-involved/volunteer" },
  { title: "Partner With Us", body: "For NGOs, businesses and institutions.", href: "/get-involved/partner" },
  { title: "Sponsor a Project", body: "Fund a specific programme end to end.", href: "/get-involved/sponsor-a-project" },
  { title: "Become a Mentor", body: "Share your knowledge with young people.", href: "/get-involved/volunteer#mentor" },
];

export default function HomePage() {
  const featured = sortedStories.find((s) => s.featured) ?? sortedStories[0];
  const latest = sortedStories.filter((s) => s.slug !== featured.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-forest-900 text-sand-50">
        {/* Photo sets its own `relative`, so the positioning lives on this wrapper. */}
        <div aria-hidden="true" className="absolute inset-0">
          <Photo
            src={img.heroLand}
            seed="hero-dete-community"
            alt=""
            rounded={false}
            priority
            sizes="100vw"
            className="h-full w-full"
          />
        </div>
        {/* Flat scrim guarantees a contrast floor; the gradient darkens the text column further. */}
        <div aria-hidden="true" className="absolute inset-0 bg-forest-900/55" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-forest-900/85 via-forest-900/55 to-transparent"
        />

        <Container className="relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <Eyebrow dark>{site.where.label}</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.05] sm:text-6xl">
              Empowering Communities.
              <span className="block text-gold-300">Protecting Animals.</span>
              Building Coexistence.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-sand-200/90 sm:text-xl">
              {site.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/our-work" size="lg" variant="donate">
                Our work
                <ArrowRight />
              </Button>
              <Button href="/get-involved" size="lg" variant="onDark">
                Support us
                <Heart />
              </Button>
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.16em] text-sand-200/60">
              A registered Zimbabwean trust · Reg No. {site.registrationNumber} · Established {site.founded}
            </p>
          </div>
        </Container>
      </section>

      {/* Our Impact */}
      <section className="bg-forest-800 py-16 text-sand-50 sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              dark
              eyebrow="Our impact"
              title="Measured by what continues after we leave"
              lead="We report on reach, but we judge ourselves on durability — the savings group still meeting, the household still treating its animals early, the graduate still trading."
            />
            <Link
              href="/impact"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold-300 hover:text-gold-400"
            >
              See how we measure impact
              <ArrowRight />
            </Link>
          </div>
          <div className="mt-12">
            <ImpactStats dark />
          </div>
          <p className="mt-6 text-xs text-sand-200/55">
            Figures are indicative placeholders pending verification by Tikobane Trust.
          </p>
        </Container>
      </section>

      {/* What We Do */}
      <Section id="what-we-do">
        <SectionHeading
          eyebrow="What we do"
          title="Six connected areas of work"
          lead="Livelihoods, animal welfare, young people and coexistence are not separate problems in Dete. Our programmes are designed to reinforce one another."
        />
        <div className="mt-12">
          <ProgrammeCards />
        </div>
      </Section>

      {/* Featured story */}
      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Photo
              src={featured.image}
              seed={featured.imageSeed}
              alt={featured.title}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-4/3 w-full shadow-lift"
            />
          </Reveal>
          <div>
            <Eyebrow>Featured community story</Eyebrow>
            <h2 className="mt-4 text-3xl text-forest-800 sm:text-4xl">{featured.title}</h2>
            <p className="mt-3 text-sm text-ink-500">
              <time dateTime={featured.date}>{formatDate(featured.date)}</time> · {featured.category}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">{featured.summary}</p>
            <Button href={`/stories/${featured.slug}`} size="lg" className="mt-8">
              Read the story
              <ArrowRight />
            </Button>
          </div>
        </div>
      </Section>

      {/* Where We Work */}
      <Section>
        <WhereWeWork />
      </Section>

      {/* Get Involved */}
      <Section tone="sand" id="get-involved">
        <SectionHeading
          eyebrow="Get involved"
          title="Ways to get involved"
          lead="There is more than one way to be useful. Choose the one that fits what you have to give."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {involvement.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60} className="h-full">
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-forest-900/8 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="grid size-10 place-items-center rounded-full bg-forest-50 text-forest-700 transition group-hover:bg-gold-500 group-hover:text-forest-900">
                  <Check />
                </span>
                <span className="mt-4 font-display text-lg text-forest-800">{item.title}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{item.body}</span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 group-hover:text-gold-600">
                  Find out how
                  <ArrowRight className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Testimonials */}
      <Section tone="forest">
        <SectionHeading
          dark
          align="center"
          eyebrow="In their words"
          title="What participants tell us"
          lead="Quotes are published only with the consent of the people who gave them."
        />
        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>

      {/* Latest stories */}
      <Section>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Stories & news" title="Latest from Dete" />
          <Link
            href="/stories"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-forest-700 hover:text-gold-600"
          >
            All stories
            <ArrowRight />
          </Link>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((story, i) => (
            <Reveal as="li" key={story.slug} delay={i * 60} className="h-full">
              <StoryCard story={story} />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Partners */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Our partners"
          title="We believe sustainable change happens through collaboration"
          lead="Tikobane works with conservation organisations, veterinary professionals, NGOs, government institutions, businesses and community groups."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partnerCategories.map((p) => (
            <li
              key={p.name}
              className="rounded-2xl border border-dashed border-forest-700/25 bg-white/60 p-5 text-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">{p.category}</p>
              <p className="mt-2 font-semibold text-forest-800">{p.name}</p>
              <p className="mt-2 leading-relaxed text-ink-500">{p.blurb}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-ink-500">
          Partner names and logos are published only where a partnership is confirmed and permission has been
          given.{" "}
          <Link href="/about/partners" className="font-semibold text-forest-700 underline">
            More about our partnerships
          </Link>
        </p>
      </Section>

      <CTABand />
    </>
  );
}
