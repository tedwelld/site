import Image from "next/image";
import { cn, seedHash } from "@/lib/utils";

type PhotoProps = {
  /** Path under /public once real photography is available. */
  src?: string;
  alt: string;
  seed: string;
  /**
   * Sizing classes. Cannot change the wrapper's position: it is `relative` so
   * that `next/image` can fill it. To place a Photo as a background, wrap it in
   * an absolutely-positioned element and size the Photo with `h-full w-full`.
   */
  className?: string;
  sizes?: string;
  priority?: boolean;
  rounded?: boolean;
};

const palettes = [
  ["#1b4332", "#2f7350", "#7fb693"],
  ["#573c23", "#8a6238", "#c09c76"],
  ["#935314", "#d98324", "#f2c572"],
  ["#143528", "#4f8f68", "#e6d3b3"],
  ["#402c1a", "#a67c50", "#f0e3cd"],
];

/**
 * Renders a real photograph when one is supplied, and an earthy generated
 * landscape motif otherwise. This keeps every page complete and accessible
 * before the Trust's own photography is added.
 */
export function Photo({ src, alt, seed, className, sizes = "100vw", priority, rounded = true }: PhotoProps) {
  const wrapper = cn("relative overflow-hidden bg-forest-800", rounded && "rounded-2xl", className);

  if (src) {
    return (
      <div className={wrapper}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }

  const h = seedHash(seed);
  const [dark, mid, light] = palettes[h % palettes.length];
  const hillA = 58 + (h % 9);
  const hillB = 72 + ((h >> 3) % 10);
  const sun = 26 + ((h >> 5) % 40);
  const id = `ph-${h.toString(36)}`;

  return (
    <div className={wrapper} role="img" aria-label={alt}>
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 70"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={dark} />
            <stop offset="100%" stopColor={mid} />
          </linearGradient>
          <linearGradient id={`${id}-land`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={mid} />
            <stop offset="100%" stopColor={light} />
          </linearGradient>
        </defs>
        <rect width="100" height="70" fill={`url(#${id}-sky)`} />
        <circle cx={sun} cy="20" r="7.5" fill={light} opacity="0.32" />
        <path d={`M0 ${hillA} Q 25 ${hillA - 12} 50 ${hillA - 2} T 100 ${hillA - 8} V70 H0 Z`} fill={dark} opacity="0.5" />
        <path d={`M0 ${hillB} Q 30 ${hillB - 10} 62 ${hillB - 1} T 100 ${hillB - 6} V70 H0 Z`} fill={`url(#${id}-land)`} opacity="0.9" />
        <g opacity="0.35" fill={dark}>
          <rect x={12 + (h % 60)} y={hillB - 9} width="0.9" height="9" rx="0.4" />
          <ellipse cx={12.45 + (h % 60)} cy={hillB - 10} rx="4.2" ry="1.9" />
        </g>
      </svg>
      <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-900/45 to-transparent" />
    </div>
  );
}
