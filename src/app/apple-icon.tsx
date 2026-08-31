import { ImageResponse } from "next/og";
import { logoMarkDataUri } from "@/lib/logo-mark";
import { site } from "@/content/site";

/** iOS home-screen icons must be PNG, so this one is rasterised at build time. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const alt = site.name;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoMarkDataUri({ radius: 0 })} width={180} height={180} alt="" />
      </div>
    ),
    size,
  );
}
