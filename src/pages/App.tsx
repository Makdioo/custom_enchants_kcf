import React from "react";
import { useState, useMemo } from "react";
import { UI_TEXT } from "../common/ui-text";
import { CATEGORIES } from "../common/categories";
import { ENCHANTMENTS } from "../common/enchantments";
import { RARITIES, RARITY_ORDER, S } from "../common/parities_raryty-order_s";
import { LangToggle } from "../components/lang-toggle";
import { CatBtn } from "../components/category-btn";
import { RarBtn } from "../components/rar-btn";
import { Card } from "../components/card";
import { Footer } from "../components/footer";
import Book from "../assets/icons/book.gif";
import Close from "../assets/icons/close.svg";

interface BgState {
  icon: React.ReactNode;
  accent: string;
  key: number;
}

// inject global keyframes once
if (!document.getElementById("ae-kf")) {
  const st = document.createElement("style");
  st.id = "ae-kf";
  st.textContent = `
    @keyframes bgPop   { 0%{opacity:0;transform:scale(.55) rotate(-12deg)} 65%{opacity:.07;transform:scale(1.07) rotate(2deg)} 100%{opacity:.052;transform:scale(1) rotate(0)} }
    @keyframes bgFloat { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
    @keyframes fadeUp  { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:none} }
    *{box-sizing:border-box;margin:0;padding:0}
    ::-webkit-scrollbar{width:5px}
    ::-webkit-scrollbar-track{background:#09090f}
    ::-webkit-scrollbar-thumb{background:#1e1e2e;border-radius:3px}
  `;
  document.head.appendChild(st);
}

export default function App({}) {
  type Rarity = (typeof RARITY_ORDER)[number];
  type Enchantment = (typeof ENCHANTMENTS)[number] & { rarity: Rarity };

  const [cat, setCat] = useState("all");
  const [rar, setRar] = useState<"all" | Rarity>("all");
  const [q, setQ] = useState("");
  const [lang, setLang] = useState<"en" | "ru">("ru");
  const [bg, setBg] = useState<BgState>({
    icon: <img src={Book} alt="Book" />,
    accent: "#ffffff",
    key: 0,
  });
  const T = UI_TEXT[lang];

  const handleCat = (key: string) => {
    const info = CATEGORIES.find((c) => c.key === key);
    if (!info) return;
    setCat(key);
    setBg((prev) => ({
      icon: info.icon,
      accent: info.accent,
      key: prev.key + 1,
    }));
  };

  const filtered = useMemo<Enchantment[]>(
    () =>
      ENCHANTMENTS.filter((e) => {
        const catOk = cat === "all" || e.apply.includes(cat);
        const rarOk = rar === "all" || e.rarity === rar;
        const name = lang === "ru" ? e.nameRu : e.name;
        const desc = lang === "ru" ? e.descRu : e.desc;
        const qOk =
          !q ||
          name.toLowerCase().includes(q.toLowerCase()) ||
          desc.toLowerCase().includes(q.toLowerCase());
        return catOk && rarOk && qOk;
      }) as Enchantment[],
    [cat, rar, q, lang],
  );

  const grouped = useMemo(() => {
    const m = {} as Record<Rarity, Enchantment[]>;
    RARITY_ORDER.forEach((r) => {
      m[r] = [];
    });
    filtered.forEach((e) => {
      m[e.rarity].push(e);
    });
    return m;
  }, [filtered]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#08080f",
        color: "#ddd",
        fontFamily: "'Segoe UI',system-ui,sans-serif",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* ── BIG BG IMAGE ── */}
      <div
        key={bg.key}
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <span
          style={{
            fontSize: "min(52vw,430px)",
            width: "1em",
            height: "1em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            userSelect: "none",
            lineHeight: 1,
            opacity: 0.052,
            filter: `drop-shadow(0 0 140px ${bg.accent})`,
            animation:
              "bgPop .55s cubic-bezier(.34,1.56,.64,1) forwards, bgFloat 7s ease-in-out .55s infinite",
          }}
        >
          {typeof bg.icon === "string" ? (
            bg.icon
          ) : (
            <div style={{ width: "1em", height: "1em", display: "flex" }}>
              {React.isValidElement(bg.icon) &&
                React.cloneElement(bg.icon as React.ReactElement<any>, {
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  },
                })}
            </div>
          )}
        </span>
      </div>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: `radial-gradient(ellipse 65% 55% at 50% 50%,${bg.accent}09 0%,transparent 70%)`,
          pointerEvents: "none",
          zIndex: 0,
          transition: "background .7s",
        }}
      />

      {/* ── HEADER ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(18px)",
          background: "#08080fdd",
          borderBottom: "1px solid #16162a",
          padding: "13px 22px",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div>
              <h1
                style={{
                  fontSize: 19,
                  fontWeight: 900,
                  letterSpacing: ".4px",
                  background: "linear-gradient(90deg,#ffd54f,#ff7043)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {T.title}
              </h1>
              <p style={{ fontSize: 11, color: "#383848", marginTop: 1 }}>
                {T.subtitle} · {ENCHANTMENTS.length} {T.enchantments}
              </p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Search */}
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: 12,
                  color: "#383848",
                }}
              >
                🔍
              </span>
              <input
                style={{
                  background: "#101020",
                  border: "1px solid #1e1e2e",
                  borderRadius: 10,
                  padding: "8px 28px 8px 28px",
                  color: "#ddd",
                  fontSize: 13,
                  outline: "none",
                  width: 240,
                }}
                placeholder={T.searchPlaceholder}
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />

              <button
                onClick={() => setQ("")}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "#888",
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                <img src={Close} alt="close" />
              </button>
            </div>

            {/* Lang toggle */}
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </header>

      {/* ── FILTERS ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1400,
          margin: "0 auto",
          padding: "16px 22px 0",
        }}
      >
        <p style={S.filterLabel}>{T.category}</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(88px,1fr))",
            gap: 5,
            marginBottom: 14,
          }}
        >
          {CATEGORIES.map((c) => (
            <CatBtn
              key={c.key}
              info={c}
              active={cat === c.key}
              lang={lang}
              onClick={() => handleCat(c.key)}
            />
          ))}
        </div>

        <p style={S.filterLabel}>{T.rarity}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          <RarBtn
            label={T.all}
            color="#555"
            active={rar === "all"}
            onClick={() => setRar("all")}
          />
          {RARITY_ORDER.map((r) => {
            const key = r as keyof typeof RARITIES;
            return (
              <RarBtn
                key={r}
                label={r}
                color={RARITIES[key].color}
                active={rar === r}
                onClick={() => setRar(r)}
              />
            );
          })}
        </div>

        <p style={{ fontSize: 12, color: "#2a2a3a", marginTop: 10 }}>
          {T.showing}{" "}
          <span style={{ color: "#ffd54f", fontWeight: 700 }}>
            {filtered.length}
          </span>{" "}
          {T.of} {ENCHANTMENTS.length}
        </p>
      </div>

      {/* ── CARDS ── */}
      <main
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1400,
          margin: "0 auto",
          padding: "18px 22px 0",
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        {RARITY_ORDER.map((rarity) => {
          const rKey = rarity as keyof typeof RARITIES;
          const list = grouped[rKey];
          if (!list?.length) return null;
          const rd = RARITIES[rKey];
          return (
            <section
              key={rarity}
              style={{ animation: "fadeUp .25s ease both" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 11,
                }}
              >
                <span
                  style={{
                    border: "1px solid",
                    borderColor: rd.color,
                    color: rd.color,
                    borderRadius: 20,
                    padding: "2px 13px",
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: 0.5,
                    boxShadow: `0 0 14px ${rd.glow}`,
                    whiteSpace: "nowrap",
                  }}
                >
                  {rarity}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: `linear-gradient(90deg,${rd.color}55,transparent)`,
                  }}
                />
                <span
                  style={{ color: rd.color, fontSize: 11, fontWeight: 700 }}
                >
                  {list.length}
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill,minmax(205px,1fr))",
                  gap: 9,
                }}
              >
                {list.map((e) => (
                  <Card key={e.name} enc={e} rd={rd} lang={lang} T={T} />
                ))}
              </div>
            </section>
          );
        })}
        {!filtered.length && (
          <div
            style={{
              textAlign: "center",
              padding: "80px 0",
              color: "#2a2a3a",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 46 }}>🔮</span>
            <span style={{ fontSize: 16 }}>{T.notFound}</span>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
