const cartReducer = (state,action)=>{
    switch(action.type){
        case 'GET_CART_ITEMS':
            return {...state,cart:action.payload};
        case 'ADD_TO_CART':
            return {
                ...state,
                 cart:state.cart.concat(action.payload),
                 totalItems: state.totalItems + 1,
                 totalPrice:state.totalPrice + parseInt( action.payload.price,10)
                };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                 cart:state.cart?.filter(item=>item.id !== action.payload.id),
                 totalItems: state.totalItems - 1,
                 totalPrice:state.totalPrice - parseInt(action.payload.price,10)
                }
        case 'INCREASE_QTY':
            return {
                ...state,
                cart:state.cart.map((item)=>{
                    return item.id === action.payload.id ? { ...item, qty: item.qty + 1 }  : item
                }),               
                totalPrice:state.totalPrice + parseInt(action.payload.price,10)
            }
        case 'DECREASE_QTY':
            return {
                ...state,
                cart:state.cart.map((item)=>{
                    return item.id === action.payload.id ? { ...item, qty: item.qty - 1 }  : item
                }),
                totalPrice:state.totalPrice - parseInt(action.payload.price,10)
            }
    }
}
export{cartReducer}