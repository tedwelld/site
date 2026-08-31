/**
 * Attribution for the licensed photography currently used across the site.
 *
 * These are freely-licensed documentary photographs from Wikimedia Commons,
 * used as a stand-in until Tikobane Trust supplies its own photography. They
 * show comparable community work in Zimbabwe and the region — they do NOT
 * depict Tikobane's programmes, and captions must never imply otherwise.
 *
 * CC BY and CC BY-SA licences require the author, licence and source to be
 * credited, which is what the /image-credits page publishes.
 *
 * When a photograph is replaced with one of Tikobane's own, remove its entry
 * here as well.
 */

export type Credit = {
  file: string;
  subject: string;
  author: string;
  licence: string;
  licenceUrl: string;
  sourceUrl: string;
};

export const credits: Credit[] = [
  {
    file: "/images/working-the-land-buhera.jpg",
    subject: "People working the land in a village in Buhera District, Zimbabwe",
    author: "Tapiwa Zvakavapano",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:People_working_on_the_land_in_a_village_in_Buhera_District,_Manicaland,_Zimbabwe.jpg",
  },
  {
    file: "/images/hwange-landscape.jpg",
    subject: "Open woodland and grassland in Hwange National Park, Zimbabwe",
    author: "Fabio Achilli",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hwange_National_Park,_Zimbabwe_(48595113747).jpg",
  },
  {
    file: "/images/hwange-plains.jpg",
    subject: "The plains of Hwange National Park, adjacent to Dete",
    author: "Fabio Achilli",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hwange_National_Park,_Zimbabwe_(48594990022).jpg",
  },
  {
    file: "/images/hwange-elephants-waterhole.jpg",
    subject: "Elephants at Nyamandhlovu Pan, Hwange National Park",
    author: "Babakathy",
    licence: "CC0",
    licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nyamandhlovu-eles.jpg",
  },
  {
    file: "/images/hwange-elephant-herd.jpg",
    subject: "A herd of elephants in Hwange National Park, Zimbabwe",
    author: "Jürgen Kehrberger",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Herd_of_elephants_in_the_Hwange_national_park._Zimbabwe._-_panoramio.jpg",
  },
  {
    file: "/images/hwange-community-gardens.jpg",
    subject: "Community vegetable gardens in the Hwange area",
    author: "COSV",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hwange-_2008-_gardens.jpg",
  },
  {
    file: "/images/hwange-garden-irrigation.jpg",
    subject: "Irrigating a community garden in the Hwange area",
    author: "COSV",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hwange-_2008-_garden_irrigation.jpg",
  },
  {
    file: "/images/borehole-water-point.jpg",
    subject: "A community borehole water point in rural Zimbabwe",
    author: "Babakathy",
    licence: "Public domain",
    licenceUrl: "",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Borehole_near_Hwali.jpg",
  },
  {
    file: "/images/matopo-boys-community-engagement.jpg",
    subject: "Boys taking part in a community engagement session at Matopo, Zimbabwe",
    author: "MILIDZANI",
    licence: "CC0",
    licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Boys_pep_talk.jpg",
  },
  {
    file: "/images/matopo-boys-life-skills.jpg",
    subject: "A life skills session with boys at Matopo, Zimbabwe",
    author: "MILIDZANI",
    licence: "CC0",
    licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Boys_at_the_pep_talk.jpg",
  },
  {
    file: "/images/education-is-key.jpg",
    subject: "A learner in Zimbabwe, from a series on the importance of education",
    author: "Tawanda Chenana",
    licence: "CC0",
    licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Education_is_key_with_Tawanda_Chenana.jpg",
  },
  {
    file: "/images/teaching-children-zimbabwe.jpg",
    subject: "A teacher working with children in Zimbabwe",
    author: "Chen Yet Sen",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Man_with_glasses_in_teaches_children.jpg",
  },
  {
    file: "/images/school-training-lecture.jpg",
    subject: "A community training session using flip charts and models at a Zimbabwean school",
    author: "SuSanA Secretariat",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:School_Training_(5570209327).jpg",
  },
  {
    file: "/images/classroom-training-session.jpg",
    subject: "Classroom-based community training in Zimbabwe",
    author: "SuSanA Secretariat",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:School_training_(5570798960).jpg",
  },
  {
    file: "/images/practical-building-skills.jpg",
    subject: "Girls learning practical brick construction under supervision, Chisungu School, Zimbabwe",
    author: "SuSanA Secretariat",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Building_of_a_brick_toilet_structure_in_Chisungu_school_(5567849160).jpg",
  },
  {
    file: "/images/students-preparing-tree-planting.jpg",
    subject: "School students augering a hole for tree planting in Zimbabwe",
    author: "SuSanA Secretariat",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Drilling_of_a_hole_by_students_(5566955789).jpg",
  },
  {
    file: "/images/school-garden-practical.jpg",
    subject: "Practical work in a school garden in Zimbabwe",
    author: "SuSanA Secretariat",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:First_day_practical_at_the_school_garden_(5570209457).jpg",
  },
  {
    file: "/images/community-training-handwashing.jpg",
    subject: "Local residents being taught to build low-cost handwashing devices, Zimbabwe",
    author: "SuSanA Secretariat",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Teaching_of_local_residents_to_make_handwasher_(5567442795).jpg",
  },
  {
    file: "/images/building-community-spirit.jpg",
    subject: "A community worker meeting members of a school community in Zimbabwe",
    author: "SuSanA Secretariat",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Building_up_community_spirit_(5568027672).jpg",
  },
  {
    file: "/images/woman-maize-crop.jpg",
    subject: "A woman in her maize crop at her home in Epworth, Zimbabwe",
    author: "Kate Holt / AusAID",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Africa_Food_Security_17_(10665125034).jpg",
  },
  {
    file: "/images/household-harvest.jpg",
    subject: "A programme participant holding up her family's harvest, Zimbabwe",
    author: "Kate Holt / AusAID",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Africa_Food_Security_3_(10665030266).jpg",
  },
  {
    file: "/images/farmers-loading-harvest.jpg",
    subject: "Farmers loading their harvested crop, Zimbabwe",
    author: "USAID in Africa",
    licence: "Public domain",
    licenceUrl: "",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Banana_farmers,_Zimbabwe_(39695820082).jpg",
  },
  {
    file: "/images/village-house-construction.jpg",
    subject: "Building traditional houses with locally grown poles in Zimbabwe",
    author: "Forestry and Forest Products, CSIRO",
    licence: "CC BY 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by/3.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_630_Eucalypts_Used_in_African_House_Construction.jpg",
  },
  {
    file: "/images/shepherd-watering-cattle.jpg",
    subject: "A herder watering cattle in southern Africa",
    author: "Aart Rietveld (ASC Leiden, Rietveld Collection)",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:ASC_Leiden_-_Rietveld_Collection_-_East_Africa_1975_-_05_-_014_-_A_shepherd_waters_cattle_in_a_lake_-_Zambia_or_Zimbabwe.jpg",
  },
  {
    file: "/images/community-animal-health-treatment.jpg",
    subject: "Community animal health workers giving an oral vaccination to a working donkey",
    author: "US Army Africa",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Oral_vaccination_of_donkey.jpg",
  },
  {
    file: "/images/animal-health-worker-poultry.jpg",
    subject: "A community animal health worker vaccinating poultry",
    author: "Senior Airman Kaitlyn Johnson, US Air Force",
    licence: "Public domain",
    licenceUrl: "",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Uganda,_US_come_together_for_animal_education_110906-F-WA639-002.jpg",
  },
  {
    file: "/images/woman-water-well.jpg",
    subject: "A woman pumping water at a community well",
    author: "Cecil Dzwowa",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Woman_pumping_water_at_a_well.jpg",
  },
  {
    file: "/images/school-clean-up.jpg",
    subject: "School children taking part in a clean-up of their school yard",
    author: "Cecil Dzwowa",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:School_children_helping_clean_school_yard.jpg",
  },
  {
    file: "/images/training-session-participants.jpg",
    subject: "Participants in a training session in Harare, Zimbabwe",
    author: "ChabbieCee",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Participants_in_session.jpg",
  },
  {
    file: "/images/market-traders.jpg",
    subject: "Traders at a market in Zimbabwe",
    author: "Suesen",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Harare,_Zimbabwe._06.JPG",
  },
  {
    file: "/images/small-enterprise-work.jpg",
    subject: "A woman at work in a small enterprise, Zimbabwe",
    author: "mimachakata",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Precious_Kusvabadika_cracking_nuts.jpg",
  },
  {
    file: "/images/classroom-hands-raised.jpg",
    subject: "Pupils raising their hands to answer a question in class",
    author: "Aart Rietveld (ASC Leiden, Rietveld Collection)",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:ASC_Leiden_-_Rietveld_Collection_-_East_Africa_1975_-_05_-_028_-_A_school_with_a_black_female_teacher,_boys_raise_their_hands_to_answer_a_question_-_Zambia_or_Zimbabwe.jpg",
  },
];

/** Image paths, for use as named constants in content files. */
export const img = {
  heroLand: "/images/working-the-land-buhera.jpg",
  hwangeLandscape: "/images/hwange-landscape.jpg",
  hwangePlains: "/images/hwange-plains.jpg",
  elephantsWaterhole: "/images/hwange-elephants-waterhole.jpg",
  elephantHerd: "/images/hwange-elephant-herd.jpg",
  communityGardens: "/images/hwange-community-gardens.jpg",
  gardenIrrigation: "/images/hwange-garden-irrigation.jpg",
  borehole: "/images/borehole-water-point.jpg",
  boysEngagement: "/images/matopo-boys-community-engagement.jpg",
  boysLifeSkills: "/images/matopo-boys-life-skills.jpg",
  educationKey: "/images/education-is-key.jpg",
  teachingChildren: "/images/teaching-children-zimbabwe.jpg",
  trainingFlipchart: "/images/school-training-lecture.jpg",
  classroomTraining: "/images/classroom-training-session.jpg",
  buildingSkills: "/images/practical-building-skills.jpg",
  treePlanting: "/images/students-preparing-tree-planting.jpg",
  schoolGarden: "/images/school-garden-practical.jpg",
  handwashingTraining: "/images/community-training-handwashing.jpg",
  communitySpirit: "/images/building-community-spirit.jpg",
  womanMaize: "/images/woman-maize-crop.jpg",
  householdHarvest: "/images/household-harvest.jpg",
  farmersHarvest: "/images/farmers-loading-harvest.jpg",
  houseConstruction: "/images/village-house-construction.jpg",
  cattleWatering: "/images/shepherd-watering-cattle.jpg",
  animalTreatment: "/images/community-animal-health-treatment.jpg",
  animalHealthPoultry: "/images/animal-health-worker-poultry.jpg",
  womanWell: "/images/woman-water-well.jpg",
  schoolCleanUp: "/images/school-clean-up.jpg",
  trainingParticipants: "/images/training-session-participants.jpg",
  marketTraders: "/images/market-traders.jpg",
  smallEnterprise: "/images/small-enterprise-work.jpg",
  classroomHands: "/images/classroom-hands-raised.jpg",
} as const;
