/**
 * Icon set, rendered with PrimeIcons (the `primeicons` font package).
 *
 * The stylesheet is imported once in the root layout. Each icon keeps a
 * width/height prop so sizes read the same as they would on an SVG; the value
 * is applied as a font size, since PrimeIcons are glyphs rather than shapes.
 */

import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type IconProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
  style?: CSSProperties;
  title?: string;
};

const toPx = (value: number | string | undefined, fallback: number) => {
  if (value === undefined) return `${fallback}px`;
  return typeof value === "number" ? `${value}px` : value;
};

function PrimeIcon({
  name,
  className,
  width,
  height,
  style,
  title,
  fallbackSize = 18,
}: IconProps & { name: string; fallbackSize?: number }) {
  return (
    <i
      aria-hidden="true"
      title={title}
      className={cn("pi", `pi-${name}`, "inline-block leading-none", className)}
      style={{ fontSize: toPx(width ?? height, fallbackSize), ...style }}
    />
  );
}

export const ArrowRight = (props: IconProps) => <PrimeIcon name="arrow-right" fallbackSize={16} {...props} />;
export const ChevronDown = (props: IconProps) => <PrimeIcon name="chevron-down" fallbackSize={13} {...props} />;
export const Close = (props: IconProps) => <PrimeIcon name="times" fallbackSize={20} {...props} />;
export const Menu = (props: IconProps) => <PrimeIcon name="bars" fallbackSize={20} {...props} />;
export const Pin = (props: IconProps) => <PrimeIcon name="map-marker" fallbackSize={18} {...props} />;
export const Phone = (props: IconProps) => <PrimeIcon name="phone" fallbackSize={18} {...props} />;
export const Mail = (props: IconProps) => <PrimeIcon name="envelope" fallbackSize={18} {...props} />;
export const Check = (props: IconProps) => <PrimeIcon name="check" fallbackSize={16} {...props} />;
export const Heart = (props: IconProps) => <PrimeIcon name="heart-fill" fallbackSize={16} {...props} />;
export const Quote = (props: IconProps) => <PrimeIcon name="comment" fallbackSize={26} {...props} />;
export const Home = (props: IconProps) => <PrimeIcon name="home" fallbackSize={20} {...props} />;
export const Sitemap = (props: IconProps) => <PrimeIcon name="sitemap" fallbackSize={20} {...props} />;
export const Images = (props: IconProps) => <PrimeIcon name="images" fallbackSize={20} {...props} />;
export const Book = (props: IconProps) => <PrimeIcon name="book" fallbackSize={20} {...props} />;
export const Users = (props: IconProps) => <PrimeIcon name="users" fallbackSize={20} {...props} />;
export const ChartBar = (props: IconProps) => <PrimeIcon name="chart-bar" fallbackSize={20} {...props} />;

/** PrimeIcons ships brand glyphs, so social links use the same icon system. */
export function SocialIconGlyph({ name, ...props }: IconProps & { name: string }) {
  return <PrimeIcon name={name} fallbackSize={16} {...props} />;
}
