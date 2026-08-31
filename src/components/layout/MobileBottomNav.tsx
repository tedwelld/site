"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType } from "react";
import { ChartBar, Heart, Home, Mail, Sitemap, type IconProps } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

type Item = {
  label: string;
  href: string;
  icon: ComponentType<IconProps>;
  accent?: boolean;
};

const items: Item[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Our Work", href: "/our-work", icon: Sitemap },
  { label: "Donate", href: "/get-involved/donate", icon: Heart, accent: true },
  { label: "Impact", href: "/impact", icon: ChartBar },
  { label: "Contact", href: "/contact", icon: Mail },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-forest-900/10 bg-page/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto grid max-w-lg grid-cols-5">
        {items.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;

          if (item.accent) {
            return (
              <li key={item.href} className="flex justify-center">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="-mt-4 flex w-full flex-col items-center gap-1 px-1 pb-2"
                >
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-full text-forest-900 shadow-lift transition",
                      active ? "bg-gold-400" : "bg-gold-500",
                    )}
                  >
                    <Icon width={19} />
                  </span>
                  <span className="text-[0.62rem] font-bold uppercase tracking-wide text-gold-700">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          }

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex h-full flex-col items-center gap-1 px-1 py-2.5 transition",
                  active ? "text-forest-700" : "text-ink-500",
                )}
              >
                <Icon width={19} className={active ? "text-forest-700" : "text-ink-500"} />
                <span className="text-[0.62rem] font-semibold tracking-wide">{item.label}</span>
                <span
                  aria-hidden="true"
                  className={cn("h-0.5 w-5 rounded-full transition", active ? "bg-gold-500" : "bg-transparent")}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
