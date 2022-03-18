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
  },
  {
    _id: uuid(),
    categoryName: "computerglasses",
    description:
      "Computer glasses are prescription glasses that are designed to wear when doing computer work. ",
  },
  {
    _id: uuid(),
    categoryName: "sunglasses",
    description:
      "Sunglasses are tinted lenses that protect the eyes from the glare of sunlight",
  },
];
