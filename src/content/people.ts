/**
 * NEEDS-CONFIRMATION — team names, roles and biographies are placeholders.
 * Replace with real staff details and photographs, with written consent, before
 * publishing. Add a photo to /public/images and set `image` to its path.
 */

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageSeed: string;
  image?: string;
};

export const leadership: TeamMember[] = [
  {
    name: "Name to be confirmed",
    role: "Executive Director",
    bio: "Leads Tikobane Trust's strategy, partnerships and organisational governance, with responsibility for programme quality across all six areas of work.",
    imageSeed: "team-director",
  },
  {
    name: "Name to be confirmed",
    role: "Programme Coordinator",
    bio: "Coordinates day-to-day delivery of community development, youth and training programmes, and works directly with community structures in Dete.",
    imageSeed: "team-programme",
  },
  {
    name: "Name to be confirmed",
    role: "Community Outreach Officer",
    bio: "First point of contact for households and community leadership, coordinating outreach days, welfare case reports and community meetings.",
    imageSeed: "team-outreach",
  },
];

export const team: TeamMember[] = [
  {
    name: "Name to be confirmed",
    role: "Animal Welfare Officer",
    bio: "Plans and delivers veterinary outreach, husbandry training and welfare case follow-up alongside qualified veterinary partners.",
    imageSeed: "team-animal",
  },
  {
    name: "Name to be confirmed",
    role: "Youth & Clubs Facilitator",
    bio: "Runs Boys & Girls Club sessions, mentorship pairing and life skills workshops, and holds day-to-day safeguarding responsibility.",
    imageSeed: "team-youth",
  },
  {
    name: "Name to be confirmed",
    role: "Monitoring & Reporting Officer",
    bio: "Collects and reviews programme data with community structures and prepares Tikobane's public reporting.",
    imageSeed: "team-monitoring",
  },
  {
    name: "Name to be confirmed",
    role: "Finance & Administration",
    bio: "Manages financial controls, donor reporting and administration for the Trust.",
    imageSeed: "team-finance",
  },
];

export const trustees: TeamMember[] = [
  {
    name: "Name to be confirmed",
    role: "Board of Trustees — Chairperson",
    bio: "Provides governance oversight and holds the executive accountable to the Trust's objectives and policies.",
    imageSeed: "team-chair",
  },
  {
    name: "Name to be confirmed",
    role: "Board of Trustees — Member",
    bio: "Supports governance, risk and safeguarding oversight for the Trust.",
    imageSeed: "team-trustee",
  },
];

export type Partner = {
  name: string;
  category: string;
  blurb: string;
};

/**
 * NEEDS-CONFIRMATION — only list organisations where Tikobane has a confirmed
 * partnership, and only with their permission. Categories are shown until real
 * partners and logos are supplied.
 */
export const partnerCategories: Partner[] = [
  {
    name: "Conservation organisations",
    category: "Conservation",
    blurb: "Organisations working on wildlife protection and coexistence around Hwange National Park.",
  },
  {
    name: "Veterinary & animal welfare bodies",
    category: "Animal welfare",
    blurb: "Veterinary professionals and welfare organisations supporting our community outreach.",
  },
  {
    name: "NGOs & development partners",
    category: "Development",
    blurb: "Development organisations working on livelihoods, youth and community resilience.",
  },
  {
    name: "Government institutions",
    category: "Government",
    blurb: "District and national institutions we coordinate with on programme delivery.",
  },
  {
    name: "Local businesses",
    category: "Private sector",
    blurb: "Businesses providing funding, materials, training or employment pathways.",
  },
  {
    name: "Community organisations",
    category: "Community",
    blurb: "Schools, committees, churches and community groups who deliver alongside us.",
  },
];

export type Testimonial = {
  quote: string;
  attribution: string;
  context: string;
};

/**
 * NEEDS-CONFIRMATION — replace with real quotes, collected with informed
 * consent to publish names and photographs.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "The training helped us develop skills that we can use to support our families.",
    attribution: "Community programme participant",
    context: "Skills & Training",
  },
  {
    quote:
      "Tikobane's mentorship programme gave me confidence to speak up and to plan for my own future.",
    attribution: "Youth club member",
    context: "Youth & Children's Programmes",
  },
  {
    quote:
      "Since we strengthened the kraal, we have not lost livestock in the way we used to.",
    attribution: "Household near Hwange National Park",
    context: "Human-Wildlife Coexistence",
  },
];
