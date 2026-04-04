import Axe from "../assets/icons/axe.png";
import Boots from "../assets/icons/boots.png";
import Bow from "../assets/icons/bow.webp";
import Chestplate from "../assets/icons/chestplate.png";
import Crossbow from "../assets/icons/crossbow.png";
import Elytria from "../assets/icons/elytria.webp";
import FishingRod from "../assets/icons/fishing-rod.png";
import Helmet from "../assets/icons/helmet.png";
import Hoe from "../assets/icons/hoe.webp";
import Leggends from "../assets/icons/leggends.png";
import Sword from "../assets/icons/sword.png";
import Trident from "../assets/icons/trident.png";
import Tool from "../assets/icons/pickaxe.webp";
import Book from "../assets/icons/book.gif";

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
    icon: <img src={Sword} alt="Sword" style={{ width: 20, height: 20 }} />,
    en: "Sword",
    ru: "Меч",
    accent: "#ef5350",
  },
  {
    key: "axe",
    icon: <img src={Axe} alt="Axe" style={{ width: 20, height: 20 }} />,
    en: "Axe",
    ru: "Топор",
    accent: "#a1887f",
  },
  {
    key: "bow",
    icon: <img src={Bow} alt="Bow" style={{ width: 20, height: 20 }} />,
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
    icon: <img src={Trident} alt="Trident" style={{ width: 20, height: 20 }} />,
    en: "Trident",
    ru: "Трезубец",
    accent: "#26c6da",
  },
  { key: "armor", icon: "🛡️", en: "Armor", ru: "Броня", accent: "#5c6bc0" },
  {
    key: "helmet",
    icon: <img src={Helmet} alt="Helmet" style={{ width: 20, height: 20 }} />,
    en: "Helmet",
    ru: "Шлем",
    accent: "#ffa726",
  },
  {
    key: "chestplate",
    icon: (
      <img
        src={Chestplate}
        alt="Chestplate"
        style={{ width: 20, height: 20 }}
      />
    ),
    en: "Chestplate",
    ru: "Нагрудник",
    accent: "#ef6c00",
  },
  {
    key: "leggings",
    icon: (
      <img src={Leggends} alt="Leggends" style={{ width: 20, height: 20 }} />
    ),
    en: "Leggings",
    ru: "Поножи",
    accent: "#ab47bc",
  },
  {
    key: "boots",
    icon: <img src={Boots} alt="Boots" style={{ width: 20, height: 20 }} />,
    en: "Boots",
    ru: "Ботинки",
    accent: "#8d6e63",
  },
  {
    key: "tool",
    icon: <img src={Tool} alt="Tool" style={{ width: 20, height: 20 }} />,
    en: "Tools",
    ru: "Инструменты",
    accent: "#78909c",
  },
  {
    key: "hoe",
    icon: <img src={Hoe} alt="Hoe" style={{ width: 20, height: 20 }} />,
    en: "Hoe",
    ru: "Мотыга",
    accent: "#9ccc65",
  },
  {
    key: "fishing",
    icon: (
      <img
        src={FishingRod}
        alt="FishingRod"
        style={{ width: 20, height: 20 }}
      />
    ),
    en: "Fishing Rod",
    ru: "Рыбалка",
    accent: "#00acc1",
  },
  {
    key: "elytra",
    icon: <img src={Elytria} alt="Elytria" style={{ width: 20, height: 20 }} />,
    en: "Elytra",
    ru: "Элитра",
    accent: "#ec407a",
  },
];
