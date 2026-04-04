import { useState } from "react";

interface CardProps {
  enc: {
    maxLevel: number;
    name: string;
    nameRu: string;
    desc: string;
    descRu: string;
    apply: string[];
  };
  rd: {
    color: string;
    glow: string;
  };
  lang: "ru" | "en";
  T: {
    level: string;
  };
}

export function Card({ enc, rd, lang, T }: CardProps) {
  const [hov, setHov] = useState(false);
  const dots = Array.from({ length: Math.min(enc.maxLevel, 10) });
  const displayName = lang === "ru" ? enc.nameRu : enc.name;
  const displayDesc = lang === "ru" ? enc.descRu : enc.desc;
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: "1px solid",
        borderColor: hov ? rd.color : "#14142a",
        borderRadius: 13,
        padding: "14px 15px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        background: hov
          ? `linear-gradient(145deg,#0e0e1c,${rd.glow})`
          : "#0b0b18",
        boxShadow: hov
          ? `0 0 24px ${rd.glow},0 6px 20px #00000088`
          : "0 2px 8px #00000055",
        transform: hov ? "translateY(-4px) scale(1.015)" : "none",
        transition: "all .2s ease",
        cursor: "default",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: rd.color,
            boxShadow: `0 0 6px ${rd.color}`,
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: 9,
            color: "#2a2a3a",
            fontWeight: 600,
            textAlign: "right",
            maxWidth: "78%",
            lineHeight: 1.3,
          }}
        >
          {enc.apply.join(" · ")}
        </span>
      </div>
      <h3
        style={{
          fontSize: 13.5,
          fontWeight: 700,
          color: hov ? rd.color : "#e0e0e0",
          lineHeight: 1.3,
          transition: "color .2s",
        }}
      >
        {displayName}
      </h3>
      <p
        style={{
          fontSize: 11.5,
          color: "#4a4a5a",
          lineHeight: 1.55,
          flexGrow: 1,
        }}
      >
        {displayDesc}
      </p>
      <div
        style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}
      >
        <span
          style={{
            fontSize: 9,
            color: "#252535",
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}
        >
          {T.level}
        </span>
        <div style={{ display: "flex", gap: 2 }}>
          {dots.map((_, i) => (
            <span
              key={i}
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: rd.color,
                boxShadow: `0 0 4px ${rd.color}`,
                display: "inline-block",
              }}
            />
          ))}
        </div>
        <span
          style={{
            fontSize: 11,
            fontWeight: 800,
            color: rd.color,
            marginLeft: 1,
          }}
        >
          {enc.maxLevel}
        </span>
      </div>
    </div>
  );
}
