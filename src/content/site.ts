/**
 * Central organisation profile.
 *
 * Values marked NEEDS-CONFIRMATION are placeholders drawn from the redesign
 * blueprint and must be verified with Tikobane Trust before going live.
 */

export const site = {
  name: "Tikobane Trust",
  shortName: "Tikobane",
  tagline: "Empowering Communities. Protecting Animals. Building Coexistence.",
  description:
    "Tikobane Trust works with communities in and around Dete, Zimbabwe, to improve livelihoods, promote animal welfare, empower young people and create sustainable solutions for human-wildlife coexistence.",
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
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tikobanezimbabwe.org").replace(/\/+$/, ""),
  locale: "en_ZW",
  contact: {
    addressLines: ["253 Soweto Township", "Dete", "Matabeleland North", "Zimbabwe"],
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
    { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
    { label: "WhatsApp", href: "https://wa.me/263783297571", icon: "whatsapp" },
  ],
} as const;

export type SocialIcon = (typeof site.socials)[number]["icon"];

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about", description: "Our mission, vision, approach and values." },
      { label: "Our Story", href: "/about#our-story", description: "Milestones since 2018." },
      { label: "Our Team", href: "/about/team", description: "The people behind the work." },
      { label: "Partners", href: "/about/partners", description: "Who we collaborate with." },
    ],
  },
  {
    label: "Our Work",
    href: "/our-work",
    children: [
      { label: "Animal Welfare", href: "/our-work/animal-welfare" },
      { label: "Community Development", href: "/our-work/community-development" },
      { label: "Youth & Children's Programmes", href: "/our-work/youth-and-children" },
      { label: "Skills & Training", href: "/our-work/skills-and-training" },
      { label: "Human-Wildlife Coexistence", href: "/our-work/human-wildlife-coexistence" },
      { label: "Social Responsibility", href: "/our-work/social-responsibility" },
    ],
  },
  { label: "Our Impact", href: "/impact" },
  { label: "Stories", href: "/stories" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Donate", href: "/get-involved/donate" },
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Partner With Us", href: "/get-involved/partner" },
      { label: "Sponsor a Project", href: "/get-involved/sponsor-a-project" },
      { label: "Become a Mentor", href: "/get-involved/volunteer#mentor" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerPolicyLinks: NavItem[] = [
  { label: "Transparency & Governance", href: "/transparency" },
  { label: "Safeguarding & Child Protection", href: "/transparency#safeguarding" },
  { label: "Environmental Policy", href: "/transparency#environment" },
  { label: "Code of Conduct", href: "/transparency#code-of-conduct" },
];
