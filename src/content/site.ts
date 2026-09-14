/** Organisation profile; editorial content aligned with tikobane.docx. */

export const site = {
  name: "Tikobane Trust",
  shortName: "Tikobane",
  tagline:
    "Creating Opportunity. Strengthening Communities. Conserving Landscapes.",
  description:
    "Tikobane Trust is a Zimbabwean community-led organisation working with rural communities living alongside wildlife to create sustainable opportunities, strengthen livelihoods and build peaceful coexistence between people and wildlife.",
  registrationNumber: "239/2018",
  founded: 2018,
  /**
   * Canonical origin, used for metadata, canonical tags, sitemap and robots.
   *
   * This MUST match the host the site is actually served from, including the
   * `www.` prefix — hosting redirects the bare domain to `www.` with a 308, so
   * a non-www value here produces a sitemap full of URLs that redirect, which
   * Google Search Console rejects. No trailing slash.
   */
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tikobanezimbabwe.org"
  ).replace(/\/+$/, ""),
  locale: "en_ZW",
  contact: {
    addressLines: [
      "253 Soweto Township",
      "Dete",
      "Matabeleland North",
      "Zimbabwe",
    ],
    phone: "+263 783 297 571",
    phoneHref: "tel:+263783297571",
    // NEEDS-CONFIRMATION: confirm the official WhatsApp business number.
    whatsapp: "+263 783 297 571",
    whatsappHref: "https://wa.me/263783297571",
    email: "info@tikobanezimbabwe.org",
    emailHref: "mailto:info@tikobanezimbabwe.org",
  },
  where: {
    label: "Dete • Hwange • Matabeleland North • Zimbabwe",
    latitude: -18.6167,
    longitude: 26.8667,
  },
  socials: [
    { label: "WhatsApp", href: "https://wa.me/263783297571", icon: "whatsapp" },
  ],
} as const;

export type SocialIcon =
  "facebook" | "instagram" | "linkedin" | "youtube" | "whatsapp";

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "Who We Are",
        href: "/about",
      },
      {
        label: "Our Approach",
        href: "/about#approach",
      },
      {
        label: "Partnerships",
        href: "/about/partners",
      },
    ],
  },
  {
    label: "Our Work",
    href: "/our-work",
    children: [
      {
        label: "Entrepreneurship for Conservation",
        href: "/our-work/entrepreneurship-for-conservation",
      },
      {
        label: "Sustainable Agriculture & Rural Resilience",
        href: "/our-work/sustainable-agriculture",
      },
      {
        label: "Youth Opportunity & Mentorship",
        href: "/our-work/youth-opportunity",
      },
      {
        label: "Human-Wildlife Coexistence",
        href: "/our-work/human-wildlife-coexistence",
      },
      {
        label: "Herding for Conservation",
        href: "/our-work/herding-for-conservation",
      },
    ],
  },
  {
    label: "Our Impact",
    href: "/impact",
  },
  {
    label: "Stories",
    href: "/stories",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      {
        label: "Donate",
        href: "/get-involved/donate",
      },
      {
        label: "Partner With Us",
        href: "/get-involved/partner",
      },
      {
        label: "Visit Hwange",
        href: "/visit",
      },
      {
        label: "Volunteer & Mentor",
        href: "/get-involved/volunteer",
      },
      {
        label: "Sponsor an Initiative",
        href: "/get-involved/sponsor-a-project",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
export const footerPolicyLinks: NavItem[] = [];
