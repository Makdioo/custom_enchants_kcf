import Axe from "../assets/images/axe.png";
import Boots from "../assets/images/Boots.png";
import Bow from "../assets/images/bow.webp";
import Chestplate from "../assets/images/chestplate.png";
import Crossbow from "../assets/images/crossbow.png";
import Elytria from "../assets/images/elytria.webp";
import FishingRod from "../assets/images/fishing-rod.png";
import Helmet from "../assets/images/helmet.png";
import Hoe from "../assets/images/hoe.webp";
import Leggends from "../assets/images/leggends.png";
import Sword from "../assets/images/sword.png";
import Trident from "../assets/images/trident.png";
import Tool from "../assets/images/pickaxe.webp";
import Book from "../assets/images/book.gif";

export const CATEGORIES = [
  {
    key: "all",
    icon: <img src={Book} alt="Crossbow" style={{ width: 20, height: 20 }} />,
    en: "All",
    ru: "Все",
    accent: "#ffffff",
  },
  {
    key: "sword",
    icon: <img src={Sword} alt="Crossbow" style={{ width: 20, height: 20 }} />,
    en: "Sword",
    ru: "Меч",
    accent: "#ef5350",
  },
  {
    key: "axe",
    icon: <img src={Axe} alt="Crossbow" style={{ width: 20, height: 20 }} />,
    en: "Axe",
    ru: "Топор",
    accent: "#a1887f",
  },
  {
    key: "bow",
    icon: <img src={Bow} alt="Crossbow" style={{ width: 20, height: 20 }} />,
    en: "Bow",
    ru: "Лук",
    accent: "#66bb6a",
  },
  {
    key: "crossbow",
    icon: (
      <img src={Crossbow} alt="Crossbow" style={{ width: 20, height: 20 }} />
    ),
    en: "Crossbow",
    ru: "Арбалет",
    accent: "#42a5f5",
  },
  {
    key: "trident",
    icon: (
      <img src={Trident} alt="Crossbow" style={{ width: 20, height: 20 }} />
    ),
    en: "Trident",
    ru: "Трезубец",
    accent: "#26c6da",
  },
  { key: "armor", icon: "🛡️", en: "Armor", ru: "Броня", accent: "#5c6bc0" },
  { key: "helmet", icon: "⛑️", en: "Helmet", ru: "Шлем", accent: "#ffa726" },
  {
    key: "chestplate",
    icon: (
      <img src={Chestplate} alt="Crossbow" style={{ width: 20, height: 20 }} />
    ),
    en: "Chestplate",
    ru: "Нагрудник",
    accent: "#ef6c00",
  },
  {
    key: "leggings",
    icon: (
      <img src={Leggends} alt="Crossbow" style={{ width: 20, height: 20 }} />
    ),
    en: "Leggings",
    ru: "Поножи",
    accent: "#ab47bc",
  },
  { key: "boots", icon: "👢", en: "Boots", ru: "Ботинки", accent: "#8d6e63" },
  {
    key: "tool",
    icon: <img src={Tool} alt="Crossbow" style={{ width: 20, height: 20 }} />,
    en: "Tools",
    ru: "Инструменты",
    accent: "#78909c",
  },
  { key: "hoe", icon: "🌾", en: "Hoe", ru: "Мотыга", accent: "#9ccc65" },
  {
    key: "fishing",
    icon: (
      <img src={FishingRod} alt="Crossbow" style={{ width: 20, height: 20 }} />
    ),
    en: "Fishing Rod",
    ru: "Рыбалка",
    accent: "#00acc1",
  },
  { key: "elytra", icon: "🪂", en: "Elytra", ru: "Элитра", accent: "#ec407a" },
];
