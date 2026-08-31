import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/sections/CTABand";
import { StoryCard } from "@/components/sections/StoryCard";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { ArrowRight, Quote } from "@/components/ui/Icons";
import { formatDate, getStory, sortedStories, stories, type Block } from "@/content/stories";
import { getProgramme } from "@/content/programmes";
import { site } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "Story not found" };

  return {
    title: story.title,
    description: story.summary,
    alternates: { canonical: `/stories/${story.slug}` },
    openGraph: {
      type: "article",
      title: `${story.title} | ${site.name}`,
      description: story.summary,
      publishedTime: story.date,
    },
  };
}

function BlockContent({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <figure className="my-8 rounded-3xl bg-sand-100 p-7 not-prose">
          <Quote className="text-gold-500" />
          <blockquote className="mt-3 font-display text-xl leading-relaxed text-forest-800">
            “{block.text}”
          </blockquote>
          {block.attribution ? (
            <figcaption className="mt-4 text-sm font-semibold text-ink-500">— {block.attribution}</figcaption>
          ) : null}
        </figure>
      );
    default:
      return <p>{block.text}</p>;
  }
}

export default async function StoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const programme = story.programme ? getProgramme(story.programme) : undefined;
  const more = sortedStories.filter((s) => s.slug !== story.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: story.title,
    description: story.summary,
    datePublished: story.date,
    articleSection: story.category,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/stories/${story.slug}`,
  };

  return (
    <>
      <div className="bg-forest-800 text-sand-50">
        <Container className="py-14 sm:py-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-sand-200/75">
              <li>
                <Link href="/" className="hover:text-sand-50">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/stories" className="hover:text-sand-50">
                  Stories
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-sand-50">
                {story.category}
              </li>
            </ol>
          </nav>

          <div className="mt-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">{story.category}</p>
            <h1 className="mt-4 text-3xl leading-[1.12] sm:text-5xl">{story.title}</h1>
            <p className="mt-5 text-sm text-sand-200/80">
              <time dateTime={story.date}>{formatDate(story.date)}</time>
              {programme ? (
                <>
                  {" · "}
                  <Link href={`/our-work/${programme.slug}`} className="underline hover:text-sand-50">
                    {programme.shortTitle}
                  </Link>
                </>
              ) : null}
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        <Photo
          src={story.image}
          seed={story.imageSeed}
          alt={story.title}
          priority
          sizes="(max-width: 1024px) 100vw, 1100px"
          className="aspect-2/1 w-full shadow-lift"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <article className="prose-tikobane max-w-none">
            <p className="text-xl leading-relaxed text-forest-800">{story.summary}</p>
            {story.body.map((block, i) => (
              <BlockContent key={i} block={block} />
            ))}
            <p className="mt-10 border-t border-forest-900/10 pt-6 text-sm text-ink-500">
              Names, photographs and quotations are published only with the informed consent of the people
              involved.
            </p>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-32">
            {programme ? (
              <div className="rounded-3xl border border-forest-900/8 bg-white p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">Programme</p>
                <h2 className="mt-2 font-display text-lg text-forest-800">
                  {programme.emoji} {programme.shortTitle}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{programme.summary}</p>
                <Button href={`/our-work/${programme.slug}`} variant="secondary" size="sm" className="mt-4">
                  About this programme
                </Button>
              </div>
            ) : null}

            <div className="rounded-3xl bg-forest-800 p-6 text-sand-100">
              <h2 className="font-display text-lg text-sand-50">Make the next story possible</h2>
              <p className="mt-2 text-sm leading-relaxed">
                Community programmes in Dete run on donations, volunteers and partnerships.
              </p>
              <Button href="/get-involved/donate" variant="donate" size="md" className="mt-5 w-full">
                Donate
              </Button>
            </div>
          </aside>
        </div>
      </Container>

      <Section tone="sand">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Keep reading" title="More stories from Dete" />
          <Link href="/stories" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-forest-700 hover:text-gold-600">
            All stories
            <ArrowRight />
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((item) => (
            <li key={item.slug}>
              <StoryCard story={item} />
            </li>
          ))}
        </ul>
      </Section>

      <CTABand />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}
