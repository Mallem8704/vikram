import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0a09",
          borderRadius: "50%",
          border: "2px solid #d4af37",
          boxShadow: "0 0 8px rgba(212, 175, 55, 0.4)",
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 800,
            fontFamily: "serif",
            color: "#d4af37",
            letterSpacing: "-0.5px",
          }}
        >
          VB
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
