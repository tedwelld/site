import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { ArrowRight } from "@/components/ui/Icons";
import { formatDate, type Story } from "@/content/stories";
import { cn } from "@/lib/utils";

export function StoryCard({ story, className }: { story: Story; className?: string }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-forest-900/8 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift",
        className,
      )}
    >
      <Photo
        src={story.image}
        seed={story.imageSeed}
        alt={story.title}
        rounded={false}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="h-44"
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
          {story.category}
          <span aria-hidden="true" className="text-ink-500/50">
            •
          </span>
          <time dateTime={story.date} className="font-normal normal-case tracking-normal text-ink-500">
            {formatDate(story.date)}
          </time>
        </p>
        <h3 className="mt-3 font-display text-lg leading-snug text-forest-800">{story.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{story.summary}</p>
        <Link
          href={`/stories/${story.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 transition group-hover:text-gold-600"
        >
          Read more
          <ArrowRight className="transition group-hover:translate-x-1" />
          <span className="sr-only">: {story.title}</span>
        </Link>
      </div>
    </article>
  );
}
