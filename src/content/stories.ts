export type StoryCategory =
  | "Community Stories"
  | "Youth Stories"
  | "Enterprise Stories"
  | "Conservation Stories"
  | "Life Around Hwange"
  | "Visitor Experiences"
  | "Tikobane Updates";

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

// Publish real reporting when supplied; the source document contains no finished stories.
export const stories: Story[] = [];

export const storyCategories: StoryCategory[] = [
  "Community Stories",
  "Youth Stories",
  "Enterprise Stories",
  "Conservation Stories",
  "Life Around Hwange",
  "Visitor Experiences",
  "Tikobane Updates",
];

export const sortedStories = [...stories].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
