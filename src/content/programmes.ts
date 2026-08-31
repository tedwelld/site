import { img } from "./credits";

export type Programme = {
  slug: string;
  title: string;
  shortTitle: string;
  emoji: string;
  summary: string;
  intro: string;
  tone: "forest" | "earth" | "gold";
  problem: string[];
  whatWeDo: string[];
  communities: string[];
  activities: string[];
  results: string[];
  support: string[];
  imageSeed: string;
  /** Drop a real photograph in /public/images and reference it here. */
  image?: string;
};

export const programmes: Programme[] = [
  {
    slug: "animal-welfare",
    title: "Animal Health & Welfare",
    shortTitle: "Animal Welfare",
    emoji: "🐾",
    tone: "forest",
    summary: "Animal health, husbandry education, veterinary outreach and community engagement.",
    intro:
      "Livestock is savings, food security and status for rural households around Dete. When animals are healthy, families are more resilient — so animal welfare and human wellbeing are the same conversation for us.",
    problem: [
      "Veterinary services are distant, costly and difficult to reach from rural wards around Dete.",
      "Preventable disease, parasites and untreated injuries cause avoidable suffering and household losses.",
      "Many households have had little access to practical husbandry or welfare training.",
      "Working and companion animals are often invisible in mainstream development programming.",
    ],
    whatWeDo: [
      "Run community animal health outreach days in partnership with qualified veterinary professionals.",
      "Train households in husbandry, nutrition, housing, parasite control and humane handling.",
      "Support community animal health workers so that knowledge stays in the community.",
      "Respond to welfare cases reported by community members and follow up on treatment.",
    ],
    communities: [
      "Dete township and Soweto Township",
      "Surrounding villages and farming households in Hwange district",
      "Ward-level livestock and grazing committees",
    ],
    activities: [
      "Mobile treatment and vaccination clinics",
      "Dipping, deworming and parasite management support",
      "Wound care, first aid and humane handling demonstrations",
      "Household visits and welfare case follow-up",
      "Schools-based kindness-to-animals sessions",
    ],
    results: [
      "Households report earlier treatment of sick and injured animals.",
      "Community animal health volunteers are active between outreach visits.",
      "Animal welfare is now discussed alongside livelihoods in community meetings.",
    ],
    support: [
      "Fund a mobile outreach clinic day, including medicines and transport.",
      "Donate veterinary consumables, treatment kits or handling equipment.",
      "Volunteer as a veterinarian, veterinary nurse or animal welfare trainer.",
    ],
    imageSeed: "animal-welfare",
    image: img.animalTreatment,
  },
  {
    slug: "community-development",
    title: "Sustainable Community Development",
    shortTitle: "Community Development",
    emoji: "🌱",
    tone: "earth",
    summary: "Sustainable livelihoods, entrepreneurship and community-led development.",
    intro:
      "We do not arrive with finished plans. Communities identify the priority, and Tikobane works alongside them with training, seed support and follow-through until the initiative can stand on its own.",
    problem: [
      "Limited formal employment means households depend on small, weather-exposed income streams.",
      "Access to inputs, markets and start-up capital is uneven, especially for women and young people.",
      "Short-term interventions often end before a livelihood becomes self-sustaining.",
    ],
    whatWeDo: [
      "Facilitate community-led planning so priorities and ownership come from residents.",
      "Deliver practical training in enterprise, budgeting, record keeping and group savings.",
      "Support climate-conscious agriculture, nutrition gardens and small-scale production.",
      "Mentor community groups over time rather than exiting after a single workshop.",
    ],
    communities: [
      "Household and women's savings groups in and around Dete",
      "Community gardens and smallholder farming clusters",
      "Village development committees",
    ],
    activities: [
      "Enterprise and financial literacy training",
      "Nutrition and market garden establishment",
      "Group savings and internal lending support",
      "Water, inputs and equipment support where feasible",
      "Ongoing coaching and progress reviews",
    ],
    results: [
      "Community groups continue operating after formal training ends.",
      "Households diversify income beyond a single seasonal source.",
      "Local committees lead planning and reporting on their own projects.",
    ],
    support: [
      "Sponsor a livelihoods training cohort.",
      "Fund start-up inputs for a community garden or small enterprise.",
      "Share business, agricultural or cooperative expertise as a mentor.",
    ],
    imageSeed: "community-development",
    image: img.communityGardens,
  },
  {
    slug: "youth-and-children",
    title: "Youth & Children's Development",
    shortTitle: "Youth & Children",
    emoji: "👧🏾",
    tone: "gold",
    summary: "Boys & Girls Clubs, mentorship, life skills and educational support.",
    intro:
      "Our Boys & Girls Clubs give children a consistent, safe space to learn, ask questions and be heard — with trained facilitators and safeguarding practice at the centre of everything.",
    problem: [
      "Young people have few structured, safe spaces outside school hours.",
      "Life-skills, health and rights information does not always reach children reliably.",
      "Educational costs and distance keep some children out of consistent learning.",
      "Girls in particular face additional barriers to staying in school and in leadership.",
    ],
    whatWeDo: [
      "Run Boys & Girls Clubs with trained facilitators and clear safeguarding procedures.",
      "Deliver life skills, health, confidence, leadership and rights-awareness sessions.",
      "Provide mentorship and educational support to children who need it most.",
      "Create platforms where children speak directly to community decision-makers.",
    ],
    communities: [
      "Primary and secondary schools in the Dete area",
      "Club groups meeting in community venues",
      "Parents, guardians and school development committees",
    ],
    activities: [
      "Weekly club sessions and holiday programmes",
      "Life skills, health and child rights workshops",
      "Reading, homework and educational support",
      "Sport, creative and team-building activities",
      "Mentorship pairing and peer leadership training",
    ],
    results: [
      "Club members show measurable growth in confidence and participation.",
      "Girls take visible leadership roles within clubs and school structures.",
      "Parents and schools actively refer children into the programme.",
    ],
    support: [
      "Sponsor a Boys & Girls Club for a full term.",
      "Fund learning materials, sports equipment or club resources.",
      "Become a mentor and commit regular time to a young person.",
    ],
    imageSeed: "youth-children",
    image: img.boysEngagement,
  },
  {
    slug: "skills-and-training",
    title: "Youth Skills & Training",
    shortTitle: "Skills & Training",
    emoji: "🎓",
    tone: "forest",
    summary: "Skills development, mentorship and opportunities for young people.",
    intro:
      "Young people in Dete are not short of ambition — they are short of access. We focus on skills that convert into real income, and we stay involved after the certificate.",
    problem: [
      "Youth unemployment is high and formal opportunities are concentrated far from Dete.",
      "Vocational training is expensive and often geographically out of reach.",
      "Training without mentorship, tools or market links rarely leads to income.",
    ],
    whatWeDo: [
      "Deliver practical, market-relevant vocational and enterprise training.",
      "Pair every cohort with mentors who stay engaged beyond the course.",
      "Support graduates with tools, start-up guidance and market connections.",
      "Track graduate outcomes and adapt the curriculum to what actually works.",
    ],
    communities: [
      "Out-of-school and unemployed young people in Dete and surrounding wards",
      "School leavers seeking a practical pathway",
      "Young entrepreneurs already trading informally",
    ],
    activities: [
      "Vocational and technical skills courses",
      "Digital and computer literacy sessions",
      "Entrepreneurship and business planning training",
      "CV, interview and workplace readiness coaching",
      "Post-training mentorship and follow-up",
    ],
    results: [
      "Graduates start or grow income-generating activities.",
      "Mentor relationships continue after the training period ends.",
      "Curriculum is revised each cycle based on graduate outcomes.",
    ],
    support: [
      "Fund a training place for one young person.",
      "Donate tools, equipment or a start-up kit for a graduate.",
      "Offer mentorship, work experience or apprenticeship placements.",
    ],
    imageSeed: "skills-training",
    image: img.buildingSkills,
  },
  {
    slug: "human-wildlife-coexistence",
    title: "Human-Wildlife Coexistence",
    shortTitle: "Coexistence",
    emoji: "🐘",
    tone: "forest",
    summary: "Helping communities living alongside wildlife develop safer, sustainable solutions.",
    intro:
      "Dete sits on the edge of Hwange National Park. Conservation here cannot be discussed without the households who lose crops, livestock and sometimes far more. We work on solutions that protect both.",
    problem: [
      "Crop raiding and livestock predation cause real, immediate household losses.",
      "Encounters with wildlife carry genuine risk to human safety.",
      "Retaliatory killing is a rational response when losses go unaddressed.",
      "Conservation messaging that ignores household cost does not change behaviour.",
    ],
    whatWeDo: [
      "Introduce practical, low-cost deterrents and protective infrastructure with households.",
      "Train communities in safe response, early warning and incident reporting.",
      "Support predator-proof livestock enclosures and secure grazing practice.",
      "Bring community experience into conservation conversations with authorities and partners.",
    ],
    communities: [
      "Households on the Hwange National Park boundary",
      "Livestock owners and crop farmers in affected wards",
      "Community wildlife committees and local authorities",
    ],
    activities: [
      "Predator-proof kraal and enclosure support",
      "Crop protection and deterrent demonstrations",
      "Community safety and early warning training",
      "Conflict incident recording and follow-up",
      "Coexistence education in schools and clubs",
    ],
    results: [
      "Households report reduced livestock losses where enclosures were strengthened.",
      "Incidents are reported through community structures rather than handled alone.",
      "Communities engage as participants in conservation, not bystanders.",
    ],
    support: [
      "Fund a predator-proof enclosure for a household.",
      "Support crop protection materials for a farming cluster.",
      "Partner with us on coexistence research, monitoring or funding.",
    ],
    imageSeed: "coexistence",
    image: img.elephantsWaterhole,
  },
  {
    slug: "social-responsibility",
    title: "Environmental & Social Responsibility",
    shortTitle: "Social Responsibility",
    emoji: "🤝",
    tone: "earth",
    summary: "Building stronger communities and encouraging environmental responsibility.",
    intro:
      "Strong communities and a healthy environment reinforce each other. This strand holds the work that binds our programmes together — stewardship, cohesion and shared responsibility.",
    problem: [
      "Waste management, deforestation and water pressure affect daily life and long-term health.",
      "Environmental responsibility is often framed as external instruction rather than local ownership.",
      "Vulnerable households can fall outside the reach of formal support systems.",
    ],
    whatWeDo: [
      "Run community clean-up, tree planting and environmental stewardship initiatives.",
      "Support vulnerable households through community-identified assistance.",
      "Facilitate dialogue between communities, leadership and institutions.",
      "Embed environmental awareness across all our other programmes.",
    ],
    communities: [
      "Dete township and surrounding villages",
      "Schools, churches and community groups",
      "Traditional leadership and local authorities",
    ],
    activities: [
      "Clean-up campaigns and waste management awareness",
      "Tree planting and woodlot establishment",
      "Community dialogue and cohesion meetings",
      "Support to vulnerable households",
      "Environmental education sessions",
    ],
    results: [
      "Community-led environmental activities recur without external prompting.",
      "Local leadership actively co-hosts community dialogue.",
      "Environmental practice is visible across all Tikobane programmes.",
    ],
    support: [
      "Sponsor a community clean-up or tree planting campaign.",
      "Fund environmental education materials for schools.",
      "Volunteer to facilitate community dialogue or environmental sessions.",
    ],
    imageSeed: "social-responsibility",
    image: img.schoolCleanUp,
  },
];

export const getProgramme = (slug: string) => programmes.find((p) => p.slug === slug);
