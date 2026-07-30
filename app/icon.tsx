import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 34,
          background: "#F0F4E3",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#A72A24",
          border: "4px solid #11191B",
          borderRadius: 8,
          fontWeight: 900,
          fontFamily: "serif",
          letterSpacing: "-2px",
          boxShadow: "inset 0 0 4px #976D67",
        }}
      >
        <span style={{ lineHeight: 0.9 }}>AR</span>
        <span
          style={{
            fontSize: 7,
            color: "#11191B",
            letterSpacing: "1px",
            marginTop: 2,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          EST 2005
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
