import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f4f6f8",
          color: "#263479",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 80,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#9a6b05", fontSize: 32, fontWeight: 700 }}>Runda Finance</div>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1, marginTop: 24 }}>
            Clear, regulated loans for workers and businesses in Uganda
          </div>
        </div>
      </div>
    ),
    size,
  );
}
