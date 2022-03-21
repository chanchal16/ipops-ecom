const addToWishlist = (product,isWishlisted)=>{   
    if(isWishlisted){
        dispatch({type:'REMOVE_FROM_WISHLIST', payload:product})
    }else{
        dispatch({type:'ADD_TO_WISHLIST',payload:product})
    }
    setIsWishlisted(!isWishlisted)
}
export {addToWishlist}