/**
 * The Tikobane logo mark as a standalone SVG, for use in generated images
 * (Apple touch icon, Open Graph) where a React component tree is rasterised
 * and CSS custom properties are not available.
 *
 * The browser favicon is the static `src/app/icon.svg`; keep the two in step.
 */

const FOREST = "#1b4332";
const GOLD = "#e8a94a";
const SAND = "#f0e3cd";

/** Rounded-square badge containing the mark, sized to fill its box. */
export function logoMarkSvg({ background = FOREST, radius = 7 }: { background?: string; radius?: number } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="${radius}" fill="${background}"/>
  <g transform="translate(3.2 3.2) scale(0.8)">
    <path d="M6 22c3.4-1.6 5.6-4.6 6.6-9 1 4.4 3.2 7.4 6.6 9" fill="none" stroke="${GOLD}" stroke-width="2.6" stroke-linecap="round"/>
    <circle cx="22.5" cy="10.5" r="3.4" fill="${SAND}"/>
    <path d="M4 26h24" fill="none" stroke="${SAND}" stroke-width="2.6" stroke-linecap="round" opacity="0.6"/>
  </g>
</svg>`;
}

/** Data URI form, which is what Satori accepts as an `<img>` source. */
export function logoMarkDataUri(options?: { background?: string; radius?: number }) {
  return `data:image/svg+xml;base64,${Buffer.from(logoMarkSvg(options)).toString("base64")}`;
}
