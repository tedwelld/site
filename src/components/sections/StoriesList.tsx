"use client";

import { useMemo, useState } from "react";
import { StoryCard } from "./StoryCard";
import { sortedStories, storyCategories, type StoryCategory } from "@/content/stories";
import { cn } from "@/lib/utils";

type Filter = "All" | StoryCategory;

export function StoriesList() {
  const [filter, setFilter] = useState<Filter>("All");

  const items = useMemo(
    () => (filter === "All" ? sortedStories : sortedStories.filter((s) => s.category === filter)),
    [filter],
  );

  return (
    <div>
      <div role="group" aria-label="Filter stories by category" className="flex flex-wrap gap-2">
        {(["All", ...storyCategories] as Filter[]).map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={filter === cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              filter === cat
                ? "bg-forest-700 text-sand-50 shadow-soft"
                : "bg-white text-forest-800 ring-1 ring-forest-900/12 hover:bg-sand-100",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="mt-4 text-sm text-ink-500">
        {items.length} {items.length === 1 ? "story" : "stories"}
        {filter !== "All" ? ` in ${filter}` : ""}.
      </p>

      {items.length === 0 ? (
        <p className="mt-10 rounded-2xl bg-sand-100 p-8 text-center text-sm text-ink-500">
          No stories in this category yet. Please check back soon.
        </p>
      ) : (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((story) => (
            <li key={story.slug}>
              <StoryCard story={story} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
