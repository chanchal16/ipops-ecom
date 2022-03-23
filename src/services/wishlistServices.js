import axios from "axios";

// add to wishlist
// @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - product to be wishlisted
const addToWishlist = async (token,wishlistDispatch,product)=>{   
    if(token){
        try {
        const{data:{wishlist},status}= await axios.post("/api/user/wishlist",{ product},
        {headers:{
            authorization: token
        }},)
        if(status === 201) {
            wishlistDispatch({type:'ADD_TO_WISHLIST',payload:product})
            console.log('res from prodcard',wishlist);
            }
        }catch(err) { console.log(err)};
    }          
}

 // remove from wishlist
 // @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - product to be removed from wishlist
 const removeFromWishlist = async(token,wishlistDispatch,productId)=>{
    try{
        const{data:{wishlist}}= await axios.delete("/api/user/wishlist/:productId",
        {headers:{
            authorization: token
        }}
        );
        wishlistDispatch({type:'REMOVE_FROM_WISHLIST',payload:productId})
        console.log('delete wishlist from server',wishlist)
    }
    catch(err){console.log('error occured while removing item',err)}
}
export {addToWishlist,removeFromWishlist}