import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0e2419 0%, #1b4332 55%, #573c23 100%)",
          color: "#fdfaf5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#d98324",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
              color: "#0e2419",
            }}
          >
            T
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 34, fontWeight: 700 }}>Tikobane Trust</span>
            <span style={{ fontSize: 19, color: "#f2c572", letterSpacing: 3 }}>DETE · ZIMBABWE</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <span style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.1, maxWidth: 960 }}>
            Empowering Communities. Protecting Animals. Building Coexistence.
          </span>
          <span style={{ fontSize: 26, color: "#e6d3b3", maxWidth: 900 }}>
            Community development, animal welfare and human-wildlife coexistence in Hwange district.
          </span>
        </div>

        <span style={{ fontSize: 20, color: "#aed3ba" }}>tikobanezimbabwe.org · Reg No. {site.registrationNumber}</span>
      </div>
    ),
    size,
  );
}
