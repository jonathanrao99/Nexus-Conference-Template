import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ForumX Summit 2027";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0f172a 0%, #2563eb 55%, #1d4ed8 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          padding: 48,
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: "-0.04em" }}>FORUMX</div>
        <div style={{ fontSize: 42, fontWeight: 700, marginTop: 16, opacity: 0.95 }}>
          SUMMIT 2027
        </div>
        <div style={{ fontSize: 28, marginTop: 32, opacity: 0.9 }}>
          June 12–14 · San Francisco, CA
        </div>
      </div>
    ),
    { ...size },
  );
}
