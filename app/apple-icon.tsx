import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0a09",
          borderRadius: "36px",
          border: "4px solid #d4af37",
        }}
      >
        <div
          style={{
            width: 130,
            height: 130,
            borderRadius: "50%",
            border: "3px solid #d4af37",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(180deg, rgba(212,175,55,0.15) 0%, rgba(0,0,0,0.8) 100%)",
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 800,
              fontFamily: "serif",
              color: "#d4af37",
              letterSpacing: "-2px",
            }}
          >
            VB
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
