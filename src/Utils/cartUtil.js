const decreaseQtyHandler = (cartDispatch,product)=>{
    if(product.qty <= 1){
        cartDispatch({type:'REMOVE_FROM_CART',payload:product})
    }else{
        cartDispatch({type:'DECREASE_QTY',payload:product})
    }
}
export {decreaseQtyHandler}