const addressReducer = (state,{type,payload})=>{
    switch(type){
        case 'GET_ADDRESSLIST':
            return {...state,addressList:payload}
        case 'ADD_ADDRESS':
            return {...state,addressList:[...state.addressList,payload]};
        case 'REMOVE_ADDRESS':
            return {...state,addressList:state.addressList?.filter(item=>item.addressId !== payload.addressId)};
        case 'UPDATE_ADDRESS':           
            const exists =state.addressList.filter(address=>(address.addressId === payload.addressId))
            return {
                ...state,
                addressList: exists.length? state.addressList.map((address) => address.addressId === payload.addressId ? payload : address) : [...state.addressList,payload]
            }   
        case 'UPDATE_SELECTED_ADDRESS':
            return {...state,selectedAddress:payload}
    }
}
export {addressReducer}