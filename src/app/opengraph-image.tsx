import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Career Focus Inc. — Discover, Develop, Succeed"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
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
          background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #1e40af 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Career Focus Inc.
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.85)",
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            Discover, Develop, Succeed.
          </div>
          <div
            style={{
              display: "flex",
              gap: 40,
              alignItems: "center",
            }}
          >
            {[
              { value: "13+", label: "Years" },
              { value: "11", label: "Programs" },
              { value: "3", label: "Locations" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 48,
                    fontWeight: 800,
                    color: "#93c5fd",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "rgba(255, 255, 255, 0.7)",
                    textTransform: "uppercase",
                    letterSpacing: 2,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 18,
              color: "rgba(255, 255, 255, 0.6)",
              textAlign: "center",
            }}
          >
            501(c)(3) Nonprofit — Central Florida
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
