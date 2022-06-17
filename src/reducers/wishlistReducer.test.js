import { wishlistReducer } from "./wishlistReducer"

describe('testing wishlist reducer',()=>{
    test('should add product to wishlist', () => { 
        const initialState = {wishlist:[]} 
        const action = {
            type:'ADD_TO_WISHLIST',
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
            wishlist:[
                {
                    _id:'1234',
                    brandname: "Vincent Chase",
                    description:'Blue Transparent Full Rim Round Eyeglasses',
                    categoryName: "eyeglasses",
                    price: 799,
                    img:'https://cdn.eyemyeye.com/shared/images/products/E20C4254/E20C4254-1-hd.jpg',
                    rating:2.8
                }
            ]
        }
        const wishlistState = wishlistReducer(initialState,action)
        expect(wishlistState).toEqual(finalState)
    })
    // test to remove item from wishlist
    test('should remove product from wishlist', () => { 
        const initialState = {
            wishlist:[
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
            ]
        }
        let action = {
            type:'REMOVE_FROM_WISHLIST',
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
            wishlist:[
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
            ]
        }
        const wishlistState = wishlistReducer(initialState,action)
        expect(wishlistState).toEqual(finalState)
    })
})