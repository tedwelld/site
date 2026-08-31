import { img } from "./credits";

export const galleryCategories = [
  "Community Projects",
  "Animal Welfare",
  "Youth Programmes",
  "Training & Workshops",
  "Wildlife & Conservation",
  "Events",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  caption: string;
  /** "tall" and "wide" items create the masonry rhythm. */
  shape: "square" | "tall" | "wide";
  imageSeed: string;
  /** Add real photography to /public/images and set this path. */
  image?: string;
};

/**
 * Captions describe what each photograph actually shows.
 *
 * These are licensed documentary photographs of comparable community work in
 * Zimbabwe and the region (see `credits.ts`), standing in until Tikobane's own
 * photography is available. Captions must not imply they depict Tikobane's
 * programmes. When replacing an image, update the caption to the real subject
 * and obtain consent from anyone identifiable in the photograph.
 */
export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "Community Projects", caption: "Community vegetable gardens in the Hwange area", shape: "wide", imageSeed: "gal-garden", image: img.communityGardens },
  { id: "g2", category: "Animal Welfare", caption: "Community animal health workers treating a working donkey", shape: "tall", imageSeed: "gal-vet", image: img.animalTreatment },
  { id: "g3", category: "Youth Programmes", caption: "A community engagement session with boys at Matopo, Zimbabwe", shape: "square", imageSeed: "gal-club", image: img.boysEngagement },
  { id: "g4", category: "Training & Workshops", caption: "A community training session using flip charts and models", shape: "square", imageSeed: "gal-workshop", image: img.trainingFlipchart },
  { id: "g5", category: "Wildlife & Conservation", caption: "Elephants at Nyamandhlovu Pan, Hwange National Park", shape: "wide", imageSeed: "gal-elephant", image: img.elephantsWaterhole },
  { id: "g6", category: "Events", caption: "A community worker meeting members of a school community", shape: "square", imageSeed: "gal-event", image: img.communitySpirit },
  { id: "g7", category: "Animal Welfare", caption: "A community animal health worker vaccinating poultry", shape: "square", imageSeed: "gal-handling", image: img.animalHealthPoultry },
  { id: "g8", category: "Community Projects", caption: "Building houses with locally grown poles in a Zimbabwean village", shape: "tall", imageSeed: "gal-build", image: img.houseConstruction },
  { id: "g9", category: "Youth Programmes", caption: "A life skills session with young people at Matopo, Zimbabwe", shape: "wide", imageSeed: "gal-leadership", image: img.boysLifeSkills },
  { id: "g10", category: "Training & Workshops", caption: "Girls learning practical brick construction under supervision", shape: "square", imageSeed: "gal-vocational", image: img.buildingSkills },
  { id: "g11", category: "Wildlife & Conservation", caption: "A herd of elephants in Hwange National Park", shape: "square", imageSeed: "gal-herd", image: img.elephantHerd },
  { id: "g12", category: "Events", caption: "School children taking part in a clean-up of their school yard", shape: "tall", imageSeed: "gal-cleanup", image: img.schoolCleanUp },
  { id: "g13", category: "Community Projects", caption: "A woman in the maize crop growing around her home", shape: "square", imageSeed: "gal-harvest", image: img.womanMaize },
  { id: "g14", category: "Animal Welfare", caption: "A herder watering cattle", shape: "wide", imageSeed: "gal-cattle", image: img.cattleWatering },
  { id: "g15", category: "Youth Programmes", caption: "Pupils raising their hands to answer a question in class", shape: "square", imageSeed: "gal-reading", image: img.classroomHands },
  { id: "g16", category: "Community Projects", caption: "Irrigating a community garden in the Hwange area", shape: "square", imageSeed: "gal-irrigation", image: img.gardenIrrigation },
  { id: "g17", category: "Training & Workshops", caption: "Residents being taught to build low-cost handwashing devices", shape: "square", imageSeed: "gal-handwashing", image: img.handwashingTraining },
  { id: "g18", category: "Community Projects", caption: "A woman pumping water at a community well", shape: "tall", imageSeed: "gal-well", image: img.womanWell },
  { id: "g19", category: "Wildlife & Conservation", caption: "Woodland and grassland in Hwange National Park", shape: "wide", imageSeed: "gal-landscape", image: img.hwangePlains },
  { id: "g20", category: "Events", caption: "Traders at a market in Zimbabwe", shape: "square", imageSeed: "gal-market", image: img.marketTraders },
];
