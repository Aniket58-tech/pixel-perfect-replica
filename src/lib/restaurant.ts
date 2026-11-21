import hero from "@/assets/saffron-hero.asset.json";
import interior from "@/assets/saffron-interior.asset.json";
import paneer from "@/assets/saffron-paneer.asset.json";
import chicken from "@/assets/saffron-chicken.asset.json";
import biryani from "@/assets/saffron-biryani.asset.json";
import dessert from "@/assets/saffron-dessert.asset.json";
import naan from "@/assets/saffron-naan.asset.json";
import lassi from "@/assets/saffron-lassi.asset.json";

export const images = {
  hero: hero.url,
  interior: interior.url,
  paneer: paneer.url,
  chicken: chicken.url,
  biryani: biryani.url,
  dessert: dessert.url,
  naan: naan.url,
  lassi: lassi.url,
};
export const categories = [
  "All",
  "Starters",
  "Main Course",
  "Breads & Rice",
  "Desserts",
  "Beverages",
] as const;
export type Category = (typeof categories)[number];
export type Dish = {
  name: string;
  description: string;
  price: number;
  category: Exclude<Category, "All">;
  image: string;
  vegetarian: boolean;
  signature?: boolean;
};
export const dishes: Dish[] = [
  {
    name: "Tandoori Paneer Tikka",
    description:
      "Chargrilled cottage cheese, our house spice marinade, mint chutney & pickled onions.",
    price: 425,
    category: "Starters",
    image: images.paneer,
    vegetarian: true,
    signature: true,
  },
  {
    name: "Signature Butter Chicken",
    description:
      "Tandoor-roasted chicken in a slow-simmered tomato gravy, finished with cultured cream.",
    price: 625,
    category: "Main Course",
    image: images.chicken,
    vegetarian: false,
    signature: true,
  },
  {
    name: "Saffron Dum Biryani",
    description:
      "Fragrant basmati rice, tender chicken & saffron, sealed and slow-cooked to perfection.",
    price: 575,
    category: "Breads & Rice",
    image: images.biryani,
    vegetarian: false,
    signature: true,
  },
  {
    name: "Garlic & Coriander Naan",
    description:
      "Hand-stretched bread from our clay tandoor, brushed with garlic butter and coriander.",
    price: 125,
    category: "Breads & Rice",
    image: images.naan,
    vegetarian: true,
  },
  {
    name: "Saffron Gulab Jamun",
    description: "Warm milk dumplings in saffron and rose syrup, with pistachio and edible gold.",
    price: 275,
    category: "Desserts",
    image: images.dessert,
    vegetarian: true,
  },
  {
    name: "Alphonso Mango Lassi",
    description:
      "Silky Alphonso mango, cultured yoghurt and a delicate finish of saffron and pistachio.",
    price: 225,
    category: "Beverages",
    image: images.lassi,
    vegetarian: true,
  },
];
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | The Saffron Table` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | The Saffron Table` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
