import { addressReducer } from "./addressReducer"

describe('testing address reducer',()=>{
    test('should add address', () => { 
        const initialState = {
            addressList:[],
        }
        const action = {
            type:'UPDATE_ADDRESS',
            payload:{
                addressId:'12345',
                name: 'Tester',
                phone: '9975127770',
                street:'Plot no 21, Sr.no 137/5, Narayan Nagar Hinjewadi',
                city:'Pune',
                state:'Maharashtra',
                country:'India',
                pincode:'411033'
            }
        }
        const finalState = {
            addressList:[
                {
                    addressId:'12345',
                    city:'Pune',
                    country:'India',
                    name: 'Tester',
                    phone: '9975127770',
                    pincode:'411033',
                    state:'Maharashtra',
                    street:'Plot no 21, Sr.no 137/5, Narayan Nagar Hinjewadi',
                }
            ],
        }
        const addressState = addressReducer(initialState,action)
        expect(addressState).toEqual(finalState)
    })
    // should edit the address
    test('should update the address', () => { 
        const initialState = {
            addressList:[
                {
                    addressId:'12345',
                    city:'Pune',
                    country:'India',
                    name: 'Tester',
                    phone: '9975127770',
                    pincode:'411033',
                    state:'Maharashtra',
                    street:'Plot no 21, Sr.no 137/5, Narayan Nagar Hinjewadi',
                }
            ],
        }
        const action = {
            type:'UPDATE_ADDRESS',
            payload:{
                addressId:'12345',
                name: 'Tester user',
                phone: '9975127770',
                street:'Plot no 21, Sr.no 137/5, Narayan Nagar Hinjewadi',
                city:'Pune',
                state:'Maharashtra',
                country:'India',
                pincode:'411033'
            }
        }
        const finalState = {
            addressList:[
                {
                    addressId:'12345',
                    city:'Pune',
                    country:'India',
                    name: 'Tester user',
                    phone: '9975127770',
                    pincode:'411033',
                    state:'Maharashtra',
                    street:'Plot no 21, Sr.no 137/5, Narayan Nagar Hinjewadi',
                }
            ],

        }
        const addressState = addressReducer(initialState,action)
        expect(addressState).toEqual(finalState)
    })
    // test to remove address
    test('should remove the address', () => { 
        const initialState = {
            addressList:[
                {
                    addressId:'12345',
                    city:'Pune',
                    country:'India',
                    name: 'Tester',
                    phone: '9975127770',
                    pincode:'411033',
                    state:'Maharashtra',
                    street:'Plot no 21, Sr.no 137/5, Narayan Nagar Hinjewadi',
                }
            ],
        }
        const action = {
            type:'REMOVE_ADDRESS',
            payload:{
                addressId:'12345',
            }
        }
        const finalState = {
            addressList:[],
        }
        const addressState = addressReducer(initialState,action)
        expect(addressState).toEqual(finalState)
    })
    // test for select address
    test('should select the address from the list', () => { 
        const initialState = {
            addressList:[
                {
                    addressId:'12345',
                    city:'Pune',
                    country:'India',
                    name: 'Tester',
                    phone: '9975127770',
                    pincode:'411033',
                    state:'Maharashtra',
                    street:'Plot no 21, Sr.no 137/5, Narayan Nagar Hinjewadi',
                },
                {
                    addressId:'12346',
                    city:'Aurangabad',
                    country:'India',
                    name: 'Chanchal',
                    phone: '7612899077',
                    pincode:'431001',
                    state:'Maharashtra',
                    street:'N-11,c-4,Pawanagar,Aurangabad',
                }
            ],
            selectedAddress:''
        }
        const action = {
            type:'UPDATE_SELECTED_ADDRESS',
            payload:'12345',
        }
        const finalState = {
            addressList:[
                {
                    addressId:'12345',
                    city:'Pune',
                    country:'India',
                    name: 'Tester',
                    phone: '9975127770',
                    pincode:'411033',
                    state:'Maharashtra',
                    street:'Plot no 21, Sr.no 137/5, Narayan Nagar Hinjewadi',
                },
                {
                    addressId:'12346',
                    city:'Aurangabad',
                    country:'India',
                    name: 'Chanchal',
                    phone: '7612899077',
                    pincode:'431001',
                    state:'Maharashtra',
                    street:'N-11,c-4,Pawanagar,Aurangabad',
                }
            ],
            selectedAddress:'12345'
        }
        const addressState = addressReducer(initialState,action)
        expect(addressState).toEqual(finalState)
    })
})