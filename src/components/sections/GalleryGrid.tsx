"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Photo } from "@/components/ui/Photo";
import { Close } from "@/components/ui/Icons";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/content/gallery";
import { cn } from "@/lib/utils";

type Filter = "All" | GalleryCategory;

const shapeClass: Record<string, string> = {
  square: "row-span-1 aspect-square",
  tall: "row-span-2 aspect-2/3",
  wide: "sm:col-span-2 aspect-3/2 sm:aspect-2/1",
};

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const items = useMemo(
    () => (filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter],
  );

  const close = useCallback(() => {
    setOpenIndex(null);
    lastFocused.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((cur) => {
        if (cur === null) return cur;
        return (cur + delta + items.length) % items.length;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  const active = openIndex === null ? null : items[openIndex];

  return (
    <div>
      <div role="group" aria-label="Filter gallery by category" className="flex flex-wrap gap-2">
        {(["All", ...galleryCategories] as Filter[]).map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={filter === cat}
            onClick={() => {
              setFilter(cat);
              setOpenIndex(null);
            }}
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
        Showing {items.length} {items.length === 1 ? "image" : "images"}
        {filter !== "All" ? ` in ${filter}` : ""}.
      </p>

      <ul className="mt-6 grid auto-rows-[minmax(0,auto)] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <li key={item.id} className={cn(item.shape === "wide" && "sm:col-span-2")}>
            <button
              type="button"
              onClick={(e) => {
                lastFocused.current = e.currentTarget;
                setOpenIndex(index);
              }}
              className="group block w-full overflow-hidden rounded-2xl text-left ring-1 ring-forest-900/8 transition hover:ring-forest-500"
            >
              <Photo
                src={item.image}
                seed={item.imageSeed}
                alt={item.caption}
                rounded={false}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className={cn("w-full transition duration-500 group-hover:scale-[1.03]", shapeClass[item.shape])}
              />
              <span className="block bg-white px-3 py-3">
                <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-gold-600">
                  {item.category}
                </span>
                <span className="mt-1 block text-xs leading-snug text-ink-700">{item.caption}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={close}
            className="absolute inset-0 bg-forest-900/92 backdrop-blur-sm"
          />
          <div className="relative z-10 w-full max-w-4xl">
            <div className="flex items-center justify-between gap-4 pb-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-300">{active.category}</p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="grid size-10 place-items-center rounded-full text-sand-100 ring-1 ring-sand-50/30 transition hover:bg-sand-50/10"
              >
                <Close />
                <span className="sr-only">Close</span>
              </button>
            </div>

            <Photo
              src={active.image}
              seed={active.imageSeed}
              alt={active.caption}
              sizes="100vw"
              className="aspect-3/2 w-full"
            />

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-sand-100">{active.caption}</p>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-sand-100 ring-1 ring-sand-50/30 transition hover:bg-sand-50/10"
                >
                  Previous
                </button>
                <span className="text-xs text-sand-200/70">
                  {openIndex! + 1} / {items.length}
                </span>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-sand-100 ring-1 ring-sand-50/30 transition hover:bg-sand-50/10"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
