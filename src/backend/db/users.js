import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    name: "Tester",
    email: "testing@test.com",
    password: "test123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address:[
      {
        addressId:uuid(),
        name: 'Tester',
        phone: '9975127770',
        street:'Plot no 21, Sr.no 137/5, Narayan Nagar Hinjewadi',
        city:'Pune',
        state:'Maharashtra',
        country:'India',
        pincode:'411033'
      }
    ]
  },
];
