import axios from "axios";
import { toast } from "react-toastify";
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
            toast.success("Added to wishlist");
            }
        }catch(err) { 
            console.log('cannot add item',err)
            toast.error('Cannot add item to wishlist')
        };
    }          
}

 // remove from wishlist
 // @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - product to be removed from wishlist
 const removeFromWishlist = async(token,wishlistDispatch,product)=>{
    try{
        const{data:{wishlist}}= await axios.delete(`/api/user/wishlist/${product._id}`,
        {headers:{
            authorization: token
        }}
        );
        wishlistDispatch({type:'REMOVE_FROM_WISHLIST',payload:product});
        toast.success('Item removed from wishlist')
    }
    catch(err){
        toast.error('Cannot remove item')
        console.log('error occured while removing item',err)
    }
}
export {addToWishlist,removeFromWishlist}