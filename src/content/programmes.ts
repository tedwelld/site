import { img } from "./credits";
export type Programme = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  intro: string;
  activities: string[];
  approach: string;
  imageSeed: string;
  image?: string;
};
export const programmes: Programme[] = [
  {
    ...{
      slug: "entrepreneurship-for-conservation",
      title: "Entrepreneurship for Conservation",
      shortTitle: "Entrepreneurship for Conservation",
      summary: "Turning rural resources into opportunity.",
      intro:
        "Entrepreneurship for Conservation is Tikobane’s flagship approach. We work with communities to identify local resources and opportunities that can be developed into sustainable enterprises while contributing to conservation.",
      activities: [
        "Rural entrepreneurship",
        "Community-owned enterprises",
        "Livestock enterprises",
        "Market access",
        "Business skills",
        "Collective enterprise",
        "Enterprise mentorship",
      ],
      approach:
        "People are more able to become conservation stewards when they have viable economic opportunities.",
      imageSeed: "entrepreneurship-for-conservation",
    },
    image: img.basketMaker,
  },
  {
    ...{
      slug: "sustainable-agriculture",
      title: "Sustainable Agriculture & Rural Resilience",
      shortTitle: "Sustainable Agriculture & Rural Resilience",
      summary: "Growing resilience from the ground up.",
      intro:
        "Agriculture remains one of the most important economic opportunities for rural households. We support communities to develop productive, climate-resilient and commercially viable agricultural systems using locally available resources and knowledge. We are moving beyond agriculture for survival towards agriculture as an enterprise.",
      activities: [
        "Conservation agriculture",
        "Climate-smart agriculture",
        "Indigenous livestock",
        "Soil and water conservation",
        "Farmer training",
        "Collective production",
        "Aggregation and market access",
      ],
      approach:
        "Produce → Aggregate → Add Value → Access Markets → Generate Income",
      imageSeed: "sustainable-agriculture",
    },
    image: img.agriculture,
  },
  {
    ...{
      slug: "youth-opportunity",
      title: "Youth Opportunity & Mentorship",
      shortTitle: "Youth Opportunity & Mentorship",
      summary: "Creating pathways for the next generation.",
      intro:
        "Young people in rural communities have enormous potential, but often have limited access to mentors, information, skills, networks and economic opportunities. Tikobane creates spaces where young people can learn, grow, connect and discover possibilities beyond the limitations of their circumstances. We want young people to move from simply asking “What can I get?” to asking “What can I create?”",
      activities: [
        "Girls’ and Boys’ Clubs",
        "Youth mentorship",
        "Leadership development",
        "Entrepreneurship",
        "Career guidance",
        "Digital skills",
        "Life skills",
        "Tourism and hospitality exposure",
        "Apprenticeships",
        "Employment pathways",
        "Alumni mentorship",
        "Rural enterprise opportunities",
      ],
      approach: "Discover → Learn → Connect → Start → Grow",
      imageSeed: "youth-opportunity",
    },
    image: img.youthLearning,
  },
  {
    ...{
      slug: "human-wildlife-coexistence",
      title: "Human-Wildlife Coexistence",
      shortTitle: "Human-Wildlife Coexistence",
      summary: "Living alongside wildlife.",
      intro:
        "Tikobane works with communities to develop practical approaches that reduce human-wildlife conflict while strengthening local ownership of conservation.",
      activities: [
        "Human-wildlife conflict mitigation",
        "Community awareness",
        "Livestock protection",
        "Community-led conservation",
        "Wildlife education",
        "Innovative deterrents",
        "Conservation stewardship",
        "Community participation in conservation",
      ],
      approach:
        "People living alongside wildlife are not simply beneficiaries of conservation. They are part of the conservation solution.",
      imageSeed: "human-wildlife-coexistence",
    },
    image: img.coexistence,
  },
  {
    ...{
      slug: "herding-for-conservation",
      title: "Herding for Conservation",
      shortTitle: "Herding for Conservation",
      summary: "A community-based goat enterprise model.",
      intro:
        "Herding for Conservation explores how collective livestock ownership, improved production, aggregation and market access can create stronger rural businesses.",
      activities: [
        "Collective livestock ownership",
        "Improved production",
        "Aggregation",
        "Market access",
      ],
      approach:
        "Exploring opportunities for stronger rural livestock businesses.",
      imageSeed: "herding-for-conservation",
    },
    image: img.goats,
  },
];
export const getProgramme = (slug: string) =>
  programmes.find((p) => p.slug === slug);
