interface LangToggleProps {
  lang: "ru" | "en";
  setLang: (lang: "ru" | "en") => void;
}

export function LangToggle({ lang, setLang }: LangToggleProps) {
  return (
    <div
      style={{
        display: "flex",
        background: "#101020",
        border: "1px solid #1e1e2e",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      {(["ru", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            padding: "7px 13px",
            fontSize: 12,
            fontWeight: 700,
            cursor: "pointer",
            border: "none",
            background: lang === l ? "#1e1e2e" : "transparent",
            color: lang === l ? "#ffd54f" : "#444",
            letterSpacing: 0.5,
            transition: "all .15s",
          }}
        >
          {l === "ru" ? "🇷🇺 RU" : "🇬🇧 EN"}
        </button>
      ))}
    </div>
  );
}
