export const RARITIES = {
  Simple: { color: "#9e9e9e", glow: "#9e9e9e20" },
  Elite: { color: "#4fc3f7", glow: "#4fc3f720" },
  Legendary: { color: "#66bb6a", glow: "#66bb6a20" },
  Ultimate: { color: "#ff7043", glow: "#ff704320" },
  Fabled: { color: "#ce93d8", glow: "#ce93d820" },
  Unique: { color: "#ffd54f", glow: "#ffd54f20" },
} as const;

export const RARITY_ORDER = [
  "Simple",
  "Elite",
  "Legendary",
  "Ultimate",
  "Fabled",
  "Unique",
];

export const S = {
  filterLabel: {
    fontSize: 9,
    fontWeight: 800,
    letterSpacing: 2,
    color: "#252535",
    textTransform: "uppercase",
    marginBottom: 7,
  },
};
