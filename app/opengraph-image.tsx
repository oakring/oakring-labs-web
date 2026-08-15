import { readFile } from "fs/promises";
import { join } from "path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Uses the real public/logo.svg bytes — not a redrawn mark. */
export default async function OpenGraphImage() {
  const logoSvg = await readFile(join(process.cwd(), "public/logo.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logoSvg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 36,
          padding: 80,
          backgroundColor: "#fbf7f0",
          color: "#1c1917",
          fontFamily: "Georgia, serif",
        }}
      >
        <img src={logoSrc} width={88} height={88} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 26,
              fontFamily: "system-ui, sans-serif",
              color: "#44403c",
            }}
          >
            Practical AI products. Built to last.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
