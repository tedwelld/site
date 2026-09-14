import { galleryItems } from "./gallery";
/** Supplied collection; no third-party authorship or Creative Commons licence is asserted. */
export const credits = galleryItems.map((photo) => ({
  file: photo.image,
  subject: photo.caption,
}));
export const img = {
  communityMeeting: "/images/tikobane/community-meeting.jpg",
  youthGroup: "/images/tikobane/youth-group.jpg",
  youthLearning: "/images/tikobane/outdoor-learning.jpg",
  coexistence: "/images/tikobane/youth-coexistence.jpg",
  elephants: "/images/tikobane/elephants-grassland.jpg",
  landscape: "/images/tikobane/grassland-tree.jpg",
  safari: "/images/tikobane/safari-landscape.jpg",
  visitorDiscussion: "/images/tikobane/visitor-discussion.jpg",
  basketMaker: "/images/tikobane/basket-maker-visit.jpg",
  agriculture: "/images/tikobane/crop-rows.jpg",
  goats: "/images/tikobane/goat-enterprise.jpg",
  produce: "/images/tikobane/produce-display.jpg",
  sunflowers: "/images/tikobane/sunflower-field.jpg",
  workshop: "/images/tikobane/group-workshop.jpg",
} as const;
