import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    brandname: "Vincent Chase",
    description:'Blue Transparent Full Rim Round Eyeglasses',
    categoryName: "eye-glasses",
    price: "799",
    img:'https://cdn.eyemyeye.com/shared/images/products/E20C4254/E20C4254-1-hd.jpg',
    rating:2.8
  },
  {
    _id: uuid(),
    brandname: "Vistazo",
    description:'Black Full Rim Round Eyeglasses',
    categoryName: "eye-glasses",
    price: "999",
    img:'https://cdn.eyemyeye.com/shared/images/products/E20A3743/E20A3743-1-hd.jpg',
    rating:2.7
  },
  {
    _id: uuid(),
    brandname: "Vistazo",
    description:'Blue Tinted Aviator Sunglasses',
    categoryName: "sun-glasses",
    price: "1299",
    img:'https://cdn.eyemyeye.com/shared/images/products/S20A2407/S20A2407-1-hd.jpg',
    rating:4.2
  },
  {
    _id:uuid(),
    brandname:'Nerdlane',
    description:'Gunmetal Full Rim Aviator Computer glasses',
    categoryName:'computer-glasses',
    price:'899',
    img:'https://cdn.eyemyeye.com/shared/images/products/E20A4096/E20A4096-1-hd.jpg',
    rating:4.0
  },
    {
    _id:uuid(),
    brandname:'Vincent Chase',
    description:'Smoke Tinted Cateye Sunglasses',
    categoryName:'sun-glasses',
    price:1450,
    img:'https://cdn.eyemyeye.com/shared/images/products/S66A1714/S66A1714-1-hd.jpg',
    rating:3.8
  },
  {
    _id:uuid(),
    brandname:'Nerdlane',
    description:'Black metal Full Rim Aviator Computer glasses',
    categoryName:'computer-glasses',
    price:2600,
    img:'https://cdn.eyemyeye.com/shared/images/products/E12A3261/E12A3261-1-hd.jpg',
    rating:4.3
  },
  {
    _id:uuid(),
    brandname:'Vistazo',
    description:'Glossy Multicolor Full Rim Cat Eye Eyeglasses',
    categoryName:'eye-glasses',
    price:1200,
    img:'https://cdn.eyemyeye.com/shared/images/products/E18A3477/E18A3477-1-hd.jpg',
    rating:3.9
  },
  {
    _id:uuid(),
    brandname:'Vincent Chase',
    description:'Silver Full Frame Round Computer Glasses ',
    categoryName:'computer-glasses',
    price:1499,
    img:'https://cdn.eyemyeye.com/shared/images/products/E10B3446/E10B3446-1-hd.jpg',
    rating:4.1
  },
  {
    _id:uuid(),
    brandname:'Vincent Chase',
    description:'Multicolor Mirror Clubmaster Sunglasses',
    categoryName:'sun-glasses',
    price:1800,
    img:'https://cdn.eyemyeye.com/shared/images/products/S66B2142/S66B2142-1-hd.jpg',
    rating:4.2
  }
];
