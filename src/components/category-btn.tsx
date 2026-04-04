import { useState } from "react";

interface CatBtnProps {
  info: {
    ru: string; 
    en: string; 
    accent: string;
    icon: React.ReactNode;
  };
  active: boolean; 
  lang: "ru" | "en";
  onClick: () => void;
}

export function CatBtn({ info, active, lang, onClick }: CatBtnProps) {
  const [hov, setHov] = useState(false);
  const label = lang === "ru" ? info.ru : info.en;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        padding: "7px 4px",
        border: "1px solid",
        borderColor: active
          ? "#your-accent-color"
          : hov
            ? "#252535"
            : "#13131f",

        borderRadius: 10,
        cursor: "pointer",
        background: active ? `${info.accent}18` : hov ? "#0f0f1c" : "#0b0b16",
        color: active ? "#fff" : hov ? "#999" : "#444",
        boxShadow: active ? `0 0 16px ${info.accent}44` : "none",
        transform: active ? "scale(1.06)" : hov ? "scale(1.02)" : "scale(1)",
        transition: "all .17s ease",
      }}
    >
      <span style={{ fontSize: 14 }}>{info.icon}</span>
      <span
        style={{
          fontSize: 9.5,
          fontWeight: 700,
          letterSpacing: 0.2,
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        {label}
      </span>
    </button>
  );
}
