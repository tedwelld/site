"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { ChevronDown, Close, Mail, Menu, Phone, Pin, SocialIconGlyph } from "@/components/ui/Icons";
import { navigation, site, type NavItem } from "@/content/site";
import { cn } from "@/lib/utils";

const isActive = (pathname: string, item: NavItem) => {
  const base = item.href.split("#")[0];
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
};

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [renderedPath, setRenderedPath] = useState(pathname);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Close any open menu as soon as navigation changes the route.
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-forest-800 text-sand-200/80 lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-8 py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Pin width={14} height={14} className="text-gold-400" />
              {site.where.label}
            </span>
            <a href={site.contact.phoneHref} className="flex items-center gap-2 hover:text-sand-50">
              <Phone width={14} height={14} className="text-gold-400" />
              {site.contact.phone}
            </a>
            <a href={site.contact.emailHref} className="flex items-center gap-2 hover:text-sand-50">
              <Mail width={14} height={14} className="text-gold-400" />
              {site.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-1">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} on ${s.label}`}
                className="grid size-7 place-items-center rounded-full text-sand-200/75 transition hover:bg-sand-50/10 hover:text-sand-50"
              >
                <SocialIconGlyph name={s.icon} width={15} height={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition duration-300",
          scrolled
            ? "border-forest-900/10 bg-page/95 shadow-soft backdrop-blur-md"
            : "border-transparent bg-page",
        )}
      >
        <div ref={navRef} className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Logo />

          <nav aria-label="Main navigation" className="hidden items-center gap-0.5 xl:flex">
            {navigation.map((item) => {
              const active = isActive(pathname, item);
              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-sm font-medium transition",
                      active ? "bg-forest-50 text-forest-800" : "text-ink-700 hover:bg-forest-50 hover:text-forest-800",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              const open = openMenu === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu((cur) => (cur === item.label ? null : cur))}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(open ? null : item.label)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition",
                      active || open
                        ? "bg-forest-50 text-forest-800"
                        : "text-ink-700 hover:bg-forest-50 hover:text-forest-800",
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("transition", open && "rotate-180")} />
                  </button>

                  {open ? (
                    <div className="absolute left-0 top-full w-80 pt-2">
                      <ul className="overflow-hidden rounded-2xl border border-forest-900/8 bg-white p-2 shadow-lift">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block rounded-xl px-3 py-2.5 transition hover:bg-sand-100"
                            >
                              <span className="block text-sm font-semibold text-forest-800">{child.label}</span>
                              {child.description ? (
                                <span className="mt-0.5 block text-xs leading-relaxed text-ink-500">
                                  {child.description}
                                </span>
                              ) : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/get-involved/donate" variant="donate" size="md" className="hidden sm:inline-flex">
              Donate
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="grid size-11 place-items-center rounded-xl text-forest-800 ring-1 ring-forest-900/10 transition hover:bg-forest-50 xl:hidden"
            >
              <Menu />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div id="mobile-nav" className="fixed inset-0 z-50 xl:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-forest-900/60 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-page shadow-lift">
            <div className="flex items-center justify-between border-b border-forest-900/10 px-5 py-3">
              <Logo />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="grid size-11 place-items-center rounded-xl text-forest-800 ring-1 ring-forest-900/10"
              >
                <Close />
                <span className="sr-only">Close menu</span>
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-4 py-4">
              <ul className="space-y-1">
                {navigation.map((item) => {
                  if (!item.children) {
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className={cn(
                            "block rounded-xl px-4 py-3 text-base font-medium",
                            isActive(pathname, item) ? "bg-forest-50 text-forest-800" : "text-ink-700",
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }
                  const open = mobileSection === item.label;
                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setMobileSection(open ? null : item.label)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-ink-700"
                      >
                        {item.label}
                        <ChevronDown className={cn("transition", open && "rotate-180")} />
                      </button>
                      {open ? (
                        <ul className="mb-2 ml-4 space-y-0.5 border-l border-forest-900/10 pl-3">
                          <li>
                            <Link href={item.href} className="block rounded-lg px-3 py-2 text-sm font-semibold text-forest-700">
                              {item.label} overview
                            </Link>
                          </li>
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link href={child.href} className="block rounded-lg px-3 py-2 text-sm text-ink-700">
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="space-y-3 border-t border-forest-900/10 px-5 py-4">
              <Button href="/get-involved/donate" variant="donate" size="lg" className="w-full">
                Donate
              </Button>
              <div className="flex flex-col gap-1 text-sm text-ink-500">
                <a href={site.contact.phoneHref} className="flex items-center gap-2">
                  <Phone width={16} height={16} className="text-gold-600" />
                  {site.contact.phone}
                </a>
                <a href={site.contact.emailHref} className="flex items-center gap-2">
                  <Mail width={16} height={16} className="text-gold-600" />
                  {site.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
