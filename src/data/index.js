import {
  qualityImg,
  flavorImg,
  sugarImg,
  sustainImg,
  strawberryImg,
  matchaImg,
  okinawaImg,
  thaiImg,
  caramelImg,
  chocoImg,
  avocadoImg,
  mangoImg,
  bubbleImg,
  allseasonImg,
  kiwiImg,
  appleImg,
} from "../utils";

export const heroFlavors = [
  {
    id: 0,
    name: "Strawberry Milk Tea",
    tagline: "Berry Sweet Perfection",
    description: "Fresh strawberries blended with smooth milk tea create a fruity paradise in every sip. A delightfully sweet and refreshing classic.",
    img: strawberryImg,
    bgColor: "#ffb5c5",
    accentColor: "#ff6b8a"
  },
  {
    id: 1,
    name: "Matcha Milk Tea",
    tagline: "Fresh & Energizing",
    description: "Premium Japanese matcha meets creamy milk for a refreshing and antioxidant-rich treat. Pure zen in a cup.",
    img: matchaImg,
    bgColor: "#a8d5a3",
    accentColor: "#6b9b6a"
  },
  {
    id: 2,
    name: "Okinawa Milk Tea",
    tagline: "Rich Brown Sugar Bliss",
    description: "Experience the authentic taste of Okinawa with rich brown sugar and roasted flavors. A traditional Japanese favorite.",
    img: okinawaImg,
    bgColor: "#cfbad3",
    accentColor: "#c194ca"
  },
  {
    id: 3,
    name: "Thai Milk Tea",
    tagline: "Bold & Aromatic",
    description: "The iconic orange-hued Thai tea with condensed milk creates a perfectly balanced sweet and creamy indulgence.",
    img: thaiImg,
    bgColor: "#f4a460",
    accentColor: "#d17a3a"
  },
  {
    id: 4,
    name: "Caramel Milk Tea",
    tagline: "Sweet & Smooth",
    description: "Rich caramel syrup swirled into premium milk tea for a luxuriously smooth and sweet experience.",
    img: caramelImg,
    bgColor: "#d4a574",
    accentColor: "#b8884f"
  }
];

export const navLists = [
  {
    id: 0,
    name: "About Us",
    link: "#about",
  },
  {
    id: 1,
    name: "Products",
    link: "#products",
  },
  {
    id: 2,
    name: "Store",
    link: "#store",
  },
  {
    id: 3,
    name: "Contact",
    link: "#contact",
  },
];

export const specialty = [
  {
    id: 0,
    title: "Quality",
    desc: "We use only the highest quality ingredients to ensure every cup is a delicious experience.",
    img: qualityImg,
  },
  {
    id: 1,
    title: "Flavors",
    desc: "Our menu features a variety of innovative and classic flavors that cater to all taste preferences.",
    img: flavorImg,
  },
  {
    id: 2,
    title: "Customizable",
    desc: "Personalize your drink with a wide range of toppings and sweetness levels to suit your taste.",
    img: sugarImg,
  },
  {
    id: 3,
    title: "Sustainable",
    desc: "We are committed to sustainability, using eco-friendly packaging and sourcing ingredients.",
    img: sustainImg,
  },
];

export const products = [
  {
    id: 0,
    name: "Berry Bliss",
    desc: "A delightful fusion of sweet strawberries and creamy milk tea for a refreshing treat.",
    img: strawberryImg,
    price: 119,
  },
  {
    id: 1,
    name: "Choco Loco",
    desc: "Indulge in the ultimate chocolate experience with rich, velvety milk tea that satisfies every craving.",
    img: chocoImg,
    price: 129,
  },
  {
    id: 2,
    name: "Avocado Dream",
    desc: "Smooth and creamy avocado milk tea topped with your favorite add-ons for a personalized delight.",
    img: avocadoImg,
    price: 139,
  },
  {
    id: 3,
    name: "Mango Tango",
    desc: "Dive into the tropical flavors of ripe mangoes blended perfectly with our signature milk tea.",
    img: mangoImg,
    price: 119,
  },
  {
    id: 4,
    name: "Bubble Bliss",
    desc: "Classic milk tea enhanced with chewy tapioca pearls for a fun and satisfying drink experience.",
    img: bubbleImg,
    price: 99,
  },
  {
    id: 5,
    name: "All Season Delight",
    desc: "A harmonious blend of seasonal fruits and creamy milk tea to enjoy all year round.",
    img: allseasonImg,
    price: 139,
  },
  {
    id: 6,
    name: "Kiwi Kraze",
    desc: "Zesty kiwi paired with creamy milk tea creates a refreshingly unique taste sensation.",
    img: kiwiImg,
    price: 129,
  },
  {
    id: 7,
    name: "Apple Zest",
    desc: "Crisp apple flavors mixed with our smooth milk tea make for a perfectly refreshing drink.",
    img: appleImg,
    price: 99,
  },
];

export const stores = [
  {
    id: 1,
    address: "123 Tea Street",
    desc: "We use only the highest quality ingredients to ensure every cup is a delicious experience.",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.122494793205!2d120.2827189!3d14.8360652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396711d837c47b1%3A0xf4081295a53bcdf6!2sSM%20City%20Olongapo%20Central!5e0!3m2!1sen!2sus!4v1614156227487!5m2!1sen!2sus",  },
  {
    id: 2,
    address: "456 Milk Street",
    desc: "Our menu features a variety of innovative and classic flavors that cater to all taste preferences.",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.0502356485684!2d120.2768318!3d14.8250525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339671172dcd9d8b%3A0xc7d33271aa41651f!2sAyala%20Malls%20Harbor%20Point!5e0!3m2!1sen!2sus!4v1614156227487!5m2!1sen!2sus",  },
  {
    id: 3,
    address: "789 Milk Tea Street",
    desc: "Personalize your drink with a wide range of toppings and sweetness levels to suit your taste.",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.0842136972636!2d120.2799226!3d14.8270213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967124b18f22bd%3A0x403c65951060241b!2sSM%20City%20Olongapo%20Downtown!5e0!3m2!1sen!2sus!4v1614156227487!5m2!1sen!2sus",
  },
];
