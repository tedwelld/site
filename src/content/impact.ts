/**
 * IMPORTANT — figures below are illustrative placeholders taken from the
 * redesign blueprint. Replace every value with verified numbers supplied by
 * Tikobane Trust before publishing. Do not publish unverified statistics.
 */

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  note: string;
};

export const headlineStats: Stat[] = [
  { label: "Communities reached", value: 15, suffix: "+", note: "Wards and villages in and around Dete." },
  { label: "Young people supported", value: 500, suffix: "+", note: "Through clubs, mentorship and training." },
  { label: "Animal welfare cases", value: 1000, suffix: "+", note: "Treated or supported through outreach." },
  { label: "Community projects", value: 25, suffix: "+", note: "Community-led initiatives delivered." },
  { label: "Volunteers & partners", value: 50, suffix: "+", note: "People and organisations working with us." },
];

export const impactAreas = [
  {
    title: "Livelihoods that outlast the project cycle",
    body: "We measure success by what continues after our formal involvement ends — savings groups still meeting, gardens still producing, enterprises still trading.",
  },
  {
    title: "Animals treated and households retained",
    body: "Outreach reach matters, but so does whether households seek treatment earlier the following season. We track both.",
  },
  {
    title: "Young people in structured programmes",
    body: "Attendance, retention and progression through clubs, training and mentorship, disaggregated by gender.",
  },
  {
    title: "Reduced human-wildlife conflict losses",
    body: "Recorded incidents and reported losses in households where protective measures were introduced.",
  },
];

export const howWeMeasure = [
  "Community members define what success looks like at the start of each project.",
  "Baseline information is recorded before activities begin.",
  "Attendance, activity and incident data is captured by community structures.",
  "Findings — including what did not work — are reviewed with participants.",
  "Results are published in our annual reporting.",
];

export type Milestone = { year: string; title: string; body: string };

// NEEDS-CONFIRMATION: replace with Tikobane's actual milestones.
export const timeline: Milestone[] = [
  {
    year: "2018",
    title: "Tikobane Trust established",
    body: "Registered in Zimbabwe as Reg No. 239/2018, founded to serve communities in and around Dete.",
  },
  {
    year: "2019",
    title: "First community programmes",
    body: "Animal health outreach and community development activities begin with local households.",
  },
  {
    year: "2021",
    title: "Youth programmes expanded",
    body: "Boys & Girls Clubs and youth skills training grow to reach more schools and wards.",
  },
  {
    year: "2024",
    title: "New partnerships",
    body: "Collaboration deepens with conservation, veterinary and development organisations.",
  },
  {
    year: "2026",
    title: "Scaling coexistence work",
    body: "Human-wildlife coexistence becomes a dedicated programme strand alongside Hwange communities.",
  },
];

export type Value = { title: string; body: string };

export const values: Value[] = [
  { title: "Community", body: "Communities set the priorities. We work alongside them, not ahead of them." },
  { title: "Compassion", body: "Dignity for people and welfare for animals guide how we act, not just what we deliver." },
  { title: "Sustainability", body: "We build for what remains after the funding cycle closes." },
  { title: "Education", body: "Knowledge shared locally outlasts any single intervention." },
  { title: "Collaboration", body: "Lasting change happens through partnership, never in isolation." },
  { title: "Coexistence", body: "People and wildlife share this landscape. Both must be able to thrive." },
];
