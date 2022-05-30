const decreaseQtyHandler = (cartDispatch,product)=>{
    if(product.qty <= 1){
        cartDispatch({type:'REMOVE_FROM_CART',payload:product})
    }else{
        cartDispatch({type:'DECREASE_QTY',payload:product})
    }
}

const couponDiscountHandler = (coupon,totalPrice)=>{
    if(coupon){
      return  coupon === 'TRYNEW' ? totalPrice - 500 : totalPrice - totalPrice * 0.5
    }
    return totalPrice
}
export {decreaseQtyHandler,couponDiscountHandler}