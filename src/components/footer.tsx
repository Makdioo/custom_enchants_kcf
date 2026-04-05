export function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 10,
        marginTop: 60,
        padding: "0 22px 50px",
      }}
    >
      {/* top divider */}
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          borderTop: "1px solid #10102a",
          paddingTop: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          {/* subtle glow blob */}
          <div
            style={{
              width: 160,
              height: 1,
              background:
                "radial-gradient(ellipse,#ffd54f30 0%,transparent 70%)",
              marginBottom: 4,
            }}
          />

          {/* handle */}
          <p
            style={{
              fontSize: 17,
              fontWeight: 800,
              letterSpacing: ".5px",
              background: "linear-gradient(90deg,#ffd54f99,#ff704399)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            @makdaio
          </p>

          {/* taglines */}
          <p style={{ fontSize: 13, color: "#2a2a3a", letterSpacing: ".3px" }}>
            I like cats and maklube
          </p>
          <p
            style={{
              fontSize: 13,
              color: "#7b3e3e",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            Kyrgyz 🇰🇬
          </p>

          {/* tiny pixel cats, just for fun */}
          <p
            style={{
              fontSize: 18,
              marginTop: 4,
              opacity: 0.35,
              letterSpacing: 6,
            }}
          >
            🐱🐱🐱
          </p>

          <p
            style={{
              fontSize: 10,
              color: "#272746",
              marginTop: 6,
              letterSpacing: 0.3,
            }}
          >
            Advanced Enchantments Reference · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
