import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "eyeglasses",
    description:
      "Eyeglasses are used to correct any vision problems,",
    img:'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14044-c3-eyeglasses_vincent-chase-vc-e14044-c3-eyeglasses_G_0878.jpg'
  },
  {
    _id: uuid(),
    categoryName: "computerglasses",
    description:
      "Computer glasses are prescription glasses that are designed to wear when doing computer work. ",
    img:'https://static1.lenskart.com/media/desktop/img/Sep21/ceg.jpg'
  },
  {
    _id: uuid(),
    categoryName: "sunglasses",
    description:
      "Sunglasses are tinted lenses that protect the eyes from the glare of sunlight",
    img:'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/Gold-Green-Full-Rim-Aviator-Shape--Vincent-Chase-VINTAGE-VC-5158/P-C20-Polarized-Sunglasses_vincent-chase-vc-5158-p-c20-sunglasses_sunglasses_sunglasses_1_1_1_4_3_1_118_02_2022.jpg'
  },
];
