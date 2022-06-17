import { cartReducer } from "./cartReducer"

describe('testing cart reducer',()=>{
    test('should add to cart when a value is added', () => {
        const initialState = {
            cart:[],
            totalPrice:0,
            totalItems:0,
        } 
        let action = {
            type:'ADD_TO_CART',
            payload:{
                _id:'1234',
                brandname: "Vincent Chase",
                description:'Blue Transparent Full Rim Round Eyeglasses',
                categoryName: "eyeglasses",
                price: 799,
                img:'https://cdn.eyemyeye.com/shared/images/products/E20C4254/E20C4254-1-hd.jpg',
                rating:2.8
            }
        }

        const finalState = {
            cart:[
                {
                    _id:'1234',
                    brandname: "Vincent Chase",
                    description:'Blue Transparent Full Rim Round Eyeglasses',
                    categoryName: "eyeglasses",
                    price: 799,
                    img:'https://cdn.eyemyeye.com/shared/images/products/E20C4254/E20C4254-1-hd.jpg',
                    rating:2.8 
                }
            ],
            totalPrice:799,
            totalItems:1,
        }

        const state = cartReducer(initialState,action)
        expect(state).toEqual(finalState)
    })
    // test to remove item from cart
    test('should remove the item from the cart', () => { 
        const initialState = {
            cart:[
                {
                    _id:'1234',
                    brandname: "Vincent Chase",
                    description:'Blue Transparent Full Rim Round Eyeglasses',
                    categoryName: "eyeglasses",
                    price: 799,
                    qty:1,
                    img:'https://cdn.eyemyeye.com/shared/images/products/E20C4254/E20C4254-1-hd.jpg',
                    rating:2.8 
                },
                {
                    _id: '1235',
                    brandname: "Vistazo",
                    description:'Blue Tinted Aviator Sunglasses',
                    categoryName: "sunglasses",
                    price: 1299,
                    qty:1,
                    img:'https://cdn.eyemyeye.com/shared/images/products/S20A2407/S20A2407-1-hd.jpg',
                    rating:4.2
                }
            ],
            totalPrice:2098,
            totalItems:2,
        } 
        let action = {
            type:'REMOVE_FROM_CART',
            payload:{
                _id:'1234',
                brandname: "Vincent Chase",
                description:'Blue Transparent Full Rim Round Eyeglasses',
                categoryName: "eyeglasses",
                price: 799,
                qty:1,
                img:'https://cdn.eyemyeye.com/shared/images/products/E20C4254/E20C4254-1-hd.jpg',
                rating:2.8
            }
        }
        
        const finalState = {
            cart:[
                {
                    _id: '1235',
                    brandname: "Vistazo",
                    description:'Blue Tinted Aviator Sunglasses',
                    categoryName: "sunglasses",
                    price: 1299,
                    qty:1,
                    img:'https://cdn.eyemyeye.com/shared/images/products/S20A2407/S20A2407-1-hd.jpg',
                    rating:4.2
                }
            ],
            totalPrice:1299,
            totalItems:1,
        }
        const state = cartReducer(initialState,action)
        expect(state).toEqual(finalState)
    })
    // TEST for increase qty
    test('should increase the quantity of the product', () => { 
        const initialState = {
            cart:[
                {
                    _id:'1234',
                    brandname: "Vincent Chase",
                    description:'Blue Transparent Full Rim Round Eyeglasses',
                    categoryName: "eyeglasses",
                    price: 799,
                    qty:1,
                    img:'https://cdn.eyemyeye.com/shared/images/products/E20C4254/E20C4254-1-hd.jpg',
                    rating:2.8 
                },
            ],
            totalPrice:799,
            totalItems:1,
        } 
        let action = {
            type:'INCREASE_QTY',
            payload:{
                _id:'1234',
                brandname: "Vincent Chase",
                description:'Blue Transparent Full Rim Round Eyeglasses',
                categoryName: "eyeglasses",
                price: 799,
                qty:1,
                img:'https://cdn.eyemyeye.com/shared/images/products/E20C4254/E20C4254-1-hd.jpg',
                rating:2.8
            }
        }
        const finalState = {
            cart:[
                {
                    _id:'1234',
                    brandname: "Vincent Chase",
                    description:'Blue Transparent Full Rim Round Eyeglasses',
                    categoryName: "eyeglasses",
                    price: 799,
                    qty:2,
                    img:'https://cdn.eyemyeye.com/shared/images/products/E20C4254/E20C4254-1-hd.jpg',
                    rating:2.8
                }
            ],
            totalPrice:1598,
            totalItems:1,
        }
        const state = cartReducer(initialState,action)
        expect(state).toEqual(finalState)
    })
    // test for decrease qty
     test('should decrease the quantity of the product', () => { 
        const initialState = {
            cart:[
                {
                    _id:'1234',
                    brandname: "Vincent Chase",
                    description:'Blue Transparent Full Rim Round Eyeglasses',
                    categoryName: "eyeglasses",
                    price: 799,
                    qty:2,
                    img:'https://cdn.eyemyeye.com/shared/images/products/E20C4254/E20C4254-1-hd.jpg',
                    rating:2.8 
                },
            ],
            totalPrice:1598,
            totalItems:1,
        } 
        let action = {
            type:'DECREASE_QTY',
            payload:{
                _id:'1234',
                brandname: "Vincent Chase",
                description:'Blue Transparent Full Rim Round Eyeglasses',
                categoryName: "eyeglasses",
                price: 799,
                qty:2,
                img:'https://cdn.eyemyeye.com/shared/images/products/E20C4254/E20C4254-1-hd.jpg',
                rating:2.8
            }
        }
        const finalState = {
            cart:[
                {
                    _id:'1234',
                    brandname: "Vincent Chase",
                    description:'Blue Transparent Full Rim Round Eyeglasses',
                    categoryName: "eyeglasses",
                    price: 799,
                    qty:1,
                    img:'https://cdn.eyemyeye.com/shared/images/products/E20C4254/E20C4254-1-hd.jpg',
                    rating:2.8
                }
            ],
            totalPrice:799,
            totalItems:1,
        }
        const state = cartReducer(initialState,action)
        expect(state).toEqual(finalState)
    })
    // test to set orders
    test('should add items to orders when an item is ordered', () => { 
        const initialState = {orders:[]}
        const action = {
            type:'SET_ORDER',
            payload:{
                
                address:{
                addressId: "6ee47919-d690-481c-a3c9-60fe4095b778",
                city: "Pune",
                country: "India",
                name: "Tester",
                phone: "9975127770",
                pincode: "411033",
                state: "Maharashtra",
                street: "Plot no 21, Sr.no 137/5, Narayan Nagar Hinjewadi"},
                finalPrice: 999,
                order_id: "0554a79e-a939-4e65-ae64-0ed3dbc5d26d",
                products:[{
                brandname: "Vistazo",
                categoryName: "eyeglasses",
                description: "Black Full Rim Round Eyeglasses",
                img: "https://cdn.eyemyeye.com/shared/images/products/E20A3743/E20A3743-1-hd.jpg",
                price: 999,
                qty: 1,
                rating: 2.7,
                _id: "9cb137bc-dd82-481f-a113-37c9f4ba8dfb"}],
                razorpayPaymentId: "pay_JiSWT2QMiWbz4W"
                
            }
        }
        const finalState = {
            orders:[{
                address:{
                addressId: "6ee47919-d690-481c-a3c9-60fe4095b778",
                city: "Pune",
                country: "India",
                name: "Tester",
                phone: "9975127770",
                pincode: "411033",
                state: "Maharashtra",
                street: "Plot no 21, Sr.no 137/5, Narayan Nagar Hinjewadi"},
                finalPrice: 999,
                order_id: "0554a79e-a939-4e65-ae64-0ed3dbc5d26d",
                products:[{
                brandname: "Vistazo",
                categoryName: "eyeglasses",
                description: "Black Full Rim Round Eyeglasses",
                img: "https://cdn.eyemyeye.com/shared/images/products/E20A3743/E20A3743-1-hd.jpg",
                price: 999,
                qty: 1,
                rating: 2.7,
                _id: "9cb137bc-dd82-481f-a113-37c9f4ba8dfb"}],
                razorpayPaymentId: "pay_JiSWT2QMiWbz4W"
            }]
        }
        const state = cartReducer(initialState,action)
        expect(state).toEqual(finalState)
    })
    // test for coupon
    test('should apply coupon', () => { 
        const initialState={selectedCoupon:''}
        const action = {
            type:'SELECT_COUPON',
            payload:'TRYNEW'
        }
        const state = cartReducer(initialState,action)
        expect(state).toEqual({selectedCoupon:'TRYNEW'})
    })
})