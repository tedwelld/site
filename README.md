# Tikobane Trust — Website

A rebuild of [tikobanezimbabwe.org](https://tikobanezimbabwe.org) as an impact-focused NGO
website, following the *Tikobane Trust Website Redesign & Modernisation Blueprint*.

Built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4.

---

## Getting started

```bash
npm install
cp .env.example .env.local   # optional, see Configuration
npm run dev                  # http://localhost:3000
```

Other commands:

```bash
npm run build   # production build (also type-checks)
npm run start   # serve the production build
npm run lint    # ESLint
```

---

## What is here

| Route | Purpose |
| --- | --- |
| `/` | Homepage: hero, impact counters, six programme cards, featured story, map, get involved, testimonials, latest stories, partners |
| `/about` | Who we are, mission, vision, approach, values, story timeline |
| `/about/team` | Leadership, programme team, board of trustees |
| `/about/partners` | Partner categories and partnership principles |
| `/our-work` | Programme index and how the programmes interconnect |
| `/our-work/[slug]` | Six programme pages: problem, what we do, communities, activities, results, support |
| `/impact` | Impact statistics, what and how we measure, annual reports |
| `/stories` | Filterable news, community stories and project updates |
| `/stories/[slug]` | Article pages with structured content and `NewsArticle` schema |
| `/gallery` | Filterable masonry gallery with an accessible lightbox |
| `/get-involved` | Donate, volunteer, partner, sponsor, mentor |
| `/get-involved/donate` | Donation widget, where money goes, direct giving options, FAQ |
| `/get-involved/volunteer` | Volunteer roles and the mentor programme (`#mentor`) |
| `/get-involved/partner` | Partnership types and process |
| `/get-involved/sponsor-a-project` | Sponsorable projects and what sponsorship includes |
| `/contact` | Contact cards, map, working contact form, concern reporting |
| `/transparency` | Registration, governance, financial reporting, safeguarding, environmental policy, code of conduct, complaints |
| `/image-credits` | Photo attribution: author, licence and source for every image not taken by the Trust |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | Generated automatically |

API routes: `POST /api/contact`, `POST /api/newsletter`, `POST /api/donate`.

---

## Editing content

All copy and data lives in `src/content/` — no need to touch components.

| File | Contains |
| --- | --- |
| `site.ts` | Organisation profile, address, phone, email, socials, navigation menus |
| `programmes.ts` | The six programme pages |
| `impact.ts` | Impact statistics, timeline milestones, values |
| `people.ts` | Team, trustees, partner categories, testimonials |
| `stories.ts` | Articles (add a new object to publish a story) |
| `gallery.ts` | Gallery items and categories |
| `credits.ts` | Image paths (`img.*`) and photo attribution for `/image-credits` |

### Before going live — content marked `NEEDS-CONFIRMATION`

Per the blueprint, placeholder content must not be published. Search the codebase for
`NEEDS-CONFIRMATION` and resolve each one:

1. **Impact figures** (`impact.ts`) — the 15+/500+/1,000+/25+/50+ numbers come from the
   blueprint as examples. Replace with verified figures from Tikobane.
2. **Timeline milestones** (`impact.ts`) — replace with the Trust's actual milestones.
3. **Team** (`people.ts`) — real names, roles, biographies and photographs, with written consent.
4. **Partners** (`people.ts`) — list only confirmed partners who have given permission.
5. **Testimonials** (`people.ts`) — real quotes with informed consent to publish.
6. **Stories** (`stories.ts`) — the six articles are structural drafts; replace with real reporting.
7. **Photography** (`credits.ts`) — the 32 shipped images are licensed stand-ins, not
   Tikobane's own. See [Photography](#photography) below.
8. **WhatsApp number** (`site.ts`) — confirm the official business number.

Pages that show placeholder content display a visible notice to that effect. Remove the notice
blocks once the real content is in.

### Photography

The blueprint is emphatic that real photography matters more than any other single
improvement, so the site currently ships **32 freely-licensed documentary photographs**
(`public/images/`) rather than empty slots or abstract placeholder art.

**These are not Tikobane's photographs.** They are CC0, public domain, CC BY and CC BY-SA
images from Wikimedia Commons showing comparable community, agricultural, education and
animal health work in Zimbabwe and the surrounding region. They stand in until the Trust's
own photography is available.

Three rules follow from that, and they matter legally and ethically:

1. **No caption may imply these images show Tikobane's work.** Captions describe what is
   actually in the frame. The gallery and `/image-credits` say so explicitly.
2. **Attribution must stay published.** CC BY and CC BY-SA require author, licence and
   source. That is what `/image-credits` is for — it is generated from
   `src/content/credits.ts`, so do not delete entries for images still in use.
3. **Replace them with real photography when you can**, published with the informed consent
   of everyone identifiable.

To swap in a real photograph:

1. Save it in `public/images/` (WebP or AVIF preferred, correctly sized).
2. Point the relevant content entry at it, e.g. `image: "/images/animal-welfare-outreach.webp"`.
   Image paths are collected as named constants in `src/content/credits.ts` (`img.*`).
3. Remove the replaced image's entry from `credits` in the same file, and delete the old file.

Any slot without an `image` falls back to a generated earth-tone landscape motif keyed off
`imageSeed`, so a missing photograph never leaves a page looking broken.

`Photo` renders `next/image` when a `src` is present, giving lazy loading, responsive
`srcset` and modern formats. Note that `Photo`'s wrapper is `position: relative` so the
image can fill it — to use a Photo as a background, wrap it in an absolutely-positioned
element and size the Photo with `h-full w-full` (see `PageHero`).

---

## Configuration

Everything in `.env.example` is optional — the site runs fully without it.

- **`NEXT_PUBLIC_SITE_URL`** — canonical URL for metadata, sitemap and robots.
- **`CONTACT_WEBHOOK_URL`** — where contact submissions are forwarded. Unset, submissions are
  validated and logged server-side, and the user still sees a proper confirmation.
- **`NEWSLETTER_WEBHOOK_URL`** — optional separate endpoint for signups.
- **`DONATION_CHECKOUT_URL`** — the payment provider's checkout endpoint. The donate form
  appends `amount`, `frequency` and `designation` and redirects. Unset, the donate button
  scrolls the donor to the direct giving options (mobile money, bank transfer, in person,
  in-kind) instead, so the page stays useful.

The blueprint recommends supporting local Zimbabwean payment methods rather than depending on
international cards alone — choose the provider accordingly.

---

## Design system

Defined once in `src/app/globals.css` as Tailwind v4 theme tokens.

- **Deep green** (`forest-*`) — conservation and nature
- **Earth brown** (`earth-*`) — soil and community
- **Warm sand** (`sand-*`) — African landscape
- **Off-white** (`--color-page`) — clean backgrounds
- **Gold/orange** (`gold-*`) — warmth, energy, calls to action

Typography: Fraunces for headings (warm, editorial), Plus Jakarta Sans for body, both loaded
via `next/font` with `display: swap`. Serious development organisation, not safari tourism.

### Icons

Icons come from **PrimeIcons** (the `primeicons` font package — the icon set shipped with
PrimeNG, usable outside Angular since it is plain CSS and a webfont). The stylesheet is
imported once in `src/app/layout.tsx`.

`src/components/ui/Icons.tsx` wraps the font in named components (`Phone`, `Mail`, `Check`,
`Heart`, …) that each render `<i class="pi pi-…">`. They accept `width`/`height`, which is
applied as a font size, so call sites read the same as they would with SVG icons. Social
links use `SocialIconGlyph`, which maps to PrimeIcons' brand glyphs.

To add an icon, confirm the glyph exists in `node_modules/primeicons/primeicons.css` and add
a one-line export.

### Navigation

- **Desktop (≥1024px):** the header holds the full menu with hover/focus dropdowns.
- **Mobile (<1024px):** the header collapses to a hamburger that opens a full-screen
  accordion menu, and a fixed **bottom navigation bar** gives one-tap access to Home, Our
  Work, Donate, Impact and Contact.

The bottom bar (`src/components/layout/MobileBottomNav.tsx`) highlights the active section
from `usePathname`, raises Donate as the primary action, and respects the iOS safe-area
inset. The root layout renders a matching spacer so it never covers the end of the footer.

---

## Accessibility

- Skip-to-content link, landmark elements and a logical heading hierarchy
- Full keyboard support: nav dropdowns, mobile menu, gallery lightbox (Escape, arrow keys)
- Visible focus states on every interactive element
- `aria-expanded`, `aria-pressed`, `aria-current` and `aria-live` where behaviour needs announcing
- Forms have real labels, inline error messages and announced status changes
- Generated placeholder art exposes `role="img"` with a descriptive label
- All motion respects `prefers-reduced-motion`; content is visible without JavaScript

## SEO

Metadata templates per page, canonical URLs, Open Graph and Twitter cards, a generated OG
image, `sitemap.xml`, `robots.txt`, and Schema.org structured data (`NGO` on every page,
`NewsArticle` on stories).

Still to do on the hosting side: connect Google Search Console and analytics.

---

## Deploying

The site builds to a mostly static output (30 prerendered routes plus three API routes) and
runs anywhere Next.js runs — Vercel, Netlify, Cloudflare or a Node host.

Set the environment variables above in your host's dashboard, then:

```bash
npm run build && npm run start
```

## Not yet implemented

- **isiNdebele translation** (blueprint §22) — the content layer is centralised and ready to
  be keyed by locale, but the blueprint is explicit that translations must be reviewed by a
  fluent speaker rather than machine-generated, so no scaffolding is included yet.
- **Payment gateway** — awaiting Tikobane's choice of provider.
- **Annual report and policy PDFs** — the `/transparency` and `/impact` pages have slots ready.
