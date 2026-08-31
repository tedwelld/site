import { img } from "./credits";

export type StoryCategory = "News" | "Community Stories" | "Project Updates";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] };

export type Story = {
  slug: string;
  title: string;
  category: StoryCategory;
  date: string; // ISO
  summary: string;
  programme?: string;
  imageSeed: string;
  image?: string;
  featured?: boolean;
  body: Block[];
};

/**
 * NEEDS-CONFIRMATION — these articles are structural drafts based on the
 * redesign blueprint. Replace the body copy with real reporting, quotes and
 * photographs from Tikobane's programmes before publishing.
 */
export const stories: Story[] = [
  {
    slug: "youth-mentorship-changing-lives-in-dete",
    title: "How our youth mentorship programme is changing lives in Dete",
    category: "Community Stories",
    date: "2026-07-18",
    summary:
      "Mentorship does not end when a training course does. Here is how pairing young people with committed mentors changed what happened after the certificate.",
    programme: "skills-and-training",
    imageSeed: "story-mentorship",
    image: img.trainingParticipants,
    featured: true,
    body: [
      {
        type: "p",
        text: "Every training programme in Dete faces the same question at the end of the final session: what happens next? A certificate is a milestone, but it does not open a market, price a product or handle the first difficult customer.",
      },
      {
        type: "p",
        text: "That question is why mentorship sits at the centre of our youth skills work rather than at the edge of it. Each cohort is paired with mentors who commit to staying in contact well beyond the closing ceremony.",
      },
      { type: "h2", text: "What mentorship actually looks like" },
      {
        type: "list",
        items: [
          "Regular check-ins in person or by phone, at times that fit around work and family.",
          "Practical problem-solving: pricing, suppliers, record keeping, difficult conversations.",
          "Introductions to markets, customers and other young people doing similar work.",
          "Honest feedback when something is not working, early enough to change course.",
        ],
      },
      {
        type: "quote",
        text: "Tikobane's mentorship programme gave me confidence to speak up and to plan for my own future.",
        attribution: "Youth club member, Dete",
      },
      { type: "h2", text: "What we are learning" },
      {
        type: "p",
        text: "The clearest pattern is that consistency matters more than intensity. A mentor who is reachable once a month for a year does more than an intensive week that then goes quiet.",
      },
      {
        type: "p",
        text: "We are also learning to match more carefully. Shared trade or sector matters, but so does temperament — and the pairings that last are the ones where the young person feels able to admit a mistake.",
      },
    ],
  },
  {
    slug: "protecting-livestock-from-human-wildlife-conflict",
    title: "Protecting livestock from human-wildlife conflict",
    category: "Project Updates",
    date: "2026-06-02",
    summary:
      "On the boundary of Hwange National Park, a lost animal is a lost year of savings. Strengthening enclosures is one of the most direct interventions we make.",
    programme: "human-wildlife-coexistence",
    imageSeed: "story-livestock",
    image: img.cattleWatering,
    featured: true,
    body: [
      {
        type: "p",
        text: "For a household on the edge of Hwange National Park, livestock is not a hobby. It is savings, school fees, food security and standing in the community. A single predation event can undo years of careful accumulation.",
      },
      {
        type: "p",
        text: "This is the part of conservation that is easy to discuss abstractly and hard to live with. Retaliation against predators is not irrational when the cost of coexistence falls entirely on one family.",
      },
      { type: "h2", text: "Starting with the enclosure" },
      {
        type: "p",
        text: "Strengthening the kraal is unglamorous and effective. Working with households, we assess where an enclosure is failing and support the materials and labour needed to close the gap.",
      },
      {
        type: "list",
        items: [
          "Household-led assessment of where and when losses occur.",
          "Practical reinforcement using locally available materials wherever possible.",
          "Training on night-time management and safe herding practice.",
          "Follow-up visits to record whether losses actually fall.",
        ],
      },
      {
        type: "quote",
        text: "Since we strengthened the kraal, we have not lost livestock in the way we used to.",
        attribution: "Household near Hwange National Park",
      },
      { type: "h2", text: "The wider point" },
      {
        type: "p",
        text: "Reducing loss changes the conversation. When households are not absorbing the full cost of living beside a national park, conservation stops being something done to them and starts being something they can participate in.",
      },
    ],
  },
  {
    slug: "community-animal-health-outreach-programme",
    title: "Community animal health outreach programme",
    category: "Project Updates",
    date: "2026-05-14",
    summary:
      "Veterinary care is often too far away to reach in time. Our outreach days bring treatment, training and follow-up into the community itself.",
    programme: "animal-welfare",
    imageSeed: "story-outreach",
    image: img.animalHealthPoultry,
    body: [
      {
        type: "p",
        text: "Distance is the quiet reason animals go untreated around Dete. When the nearest veterinary service is hours away and transport is expensive, a treatable condition becomes a serious one.",
      },
      {
        type: "p",
        text: "Our outreach days are built around removing that distance. Working with qualified veterinary professionals, we bring treatment to the community and combine it with practical training.",
      },
      { type: "h2", text: "A typical outreach day" },
      {
        type: "list",
        items: [
          "Community notification through local leadership and club networks.",
          "Treatment, vaccination and parasite control at a central point.",
          "Hands-on husbandry and humane handling demonstrations.",
          "Recording of cases for follow-up between visits.",
        ],
      },
      { type: "h2", text: "Why the training matters most" },
      {
        type: "p",
        text: "Treatment resolves today's case. Training changes next season's. The households who attend husbandry sessions consistently present healthier animals — and present them earlier.",
      },
      {
        type: "p",
        text: "That is why we support community animal health volunteers. When knowledge stays locally, care does not depend on our arrival.",
      },
    ],
  },
  {
    slug: "meet-the-young-people-behind-our-community-projects",
    title: "Meet the young people behind our community projects",
    category: "Community Stories",
    date: "2026-04-09",
    summary:
      "Much of Tikobane's delivery is led by young people from Dete itself — facilitating clubs, recording data and running community sessions.",
    imageSeed: "story-young-people",
    image: img.communitySpirit,
    body: [
      {
        type: "p",
        text: "It is tempting to describe young people only as beneficiaries. In Dete, that description would be inaccurate. A significant share of Tikobane's programme delivery is carried by young people from the community.",
      },
      { type: "h2", text: "Where they lead" },
      {
        type: "list",
        items: [
          "Facilitating Boys & Girls Club sessions each week.",
          "Recording attendance, activity and incident data for programme review.",
          "Running environmental clean-up and tree planting campaigns.",
          "Translating and adapting materials so sessions land locally.",
        ],
      },
      {
        type: "p",
        text: "This is deliberate. Programmes designed and delivered by people who live with the problem tend to be more accurate, better attended and more durable.",
      },
      {
        type: "quote",
        text: "The training helped us develop skills that we can use to support our families.",
        attribution: "Community programme participant",
      },
    ],
  },
  {
    slug: "boys-and-girls-clubs-new-term",
    title: "Boys & Girls Clubs open a new term across Dete schools",
    category: "News",
    date: "2026-03-03",
    summary:
      "A new club term brings life skills, leadership and mentorship sessions back to schools in the Dete area, with safeguarding training for all facilitators.",
    programme: "youth-and-children",
    imageSeed: "story-clubs",
    image: img.boysLifeSkills,
    body: [
      {
        type: "p",
        text: "A new club term has opened across schools in the Dete area, with weekly sessions covering life skills, health, confidence and leadership.",
      },
      {
        type: "p",
        text: "Before any session runs, every facilitator completes refresher training on our safeguarding and child protection procedures. Children's safety is a precondition of the programme, not an add-on to it.",
      },
      { type: "h2", text: "What is new this term" },
      {
        type: "list",
        items: [
          "Expanded peer leadership roles for returning club members.",
          "A stronger focus on girls' leadership and school retention.",
          "Closer coordination with school development committees.",
          "Structured sessions where club members address community decision-makers.",
        ],
      },
    ],
  },
  {
    slug: "community-clean-up-and-tree-planting",
    title: "Community clean-up and tree planting campaign",
    category: "News",
    date: "2026-02-11",
    summary:
      "Residents, schools and local leadership joined a combined clean-up and tree planting campaign across Dete township.",
    programme: "social-responsibility",
    imageSeed: "story-cleanup",
    image: img.treePlanting,
    body: [
      {
        type: "p",
        text: "Residents, school groups and local leadership took part in a combined clean-up and tree planting campaign across Dete township.",
      },
      {
        type: "p",
        text: "Campaigns like this work best when they are not framed as instruction from outside. The waste, the shade and the water table all belong to the people doing the planting.",
      },
      { type: "h2", text: "Beyond the single day" },
      {
        type: "p",
        text: "The measure of success is not the photographs from the day. It is whether the trees are watered in three months and whether the next campaign is organised locally without prompting.",
      },
    ],
  },
];

export const storyCategories: StoryCategory[] = ["News", "Community Stories", "Project Updates"];

export const sortedStories = [...stories].sort((a, b) => b.date.localeCompare(a.date));

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
