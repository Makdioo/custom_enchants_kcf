export const RARITIES = {
  Simple: { color: "#9e9e9e", glow: "#9e9e9e20" },
  Unique: { color: "#66bb6a", glow: "#66bb6a20" },
  Elite: { color: "#4fc3f7", glow: "#4fc3f720" },
  Ultimate: { color: "#ffd54f", glow: "#ffd54f20" },
  Legendary: { color: "#ff7043", glow: "#ff704320" },
  Fabled: { color: "#ce93d8", glow: "#ce93d820" },
} as const;

export const RARITY_ORDER = [
  "Simple",
  "Unique",
  "Elite",
  "Ultimate",
  "Legendary",
  "Fabled",
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
