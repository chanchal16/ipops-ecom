import axios from "axios";
import { toast } from "react-toastify";

// add to cart
// @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - product to be added in cart
const addToCart = async (token,cartDispatch,product)=>{   
    if(token){
        try {
        const{data:{cart}}= await axios.post("/api/user/cart",{ product},
        {headers:{
            authorization: token
        }},)
        cartDispatch({type:'ADD_TO_CART',payload:product})
        toast.success('Item added to cart')
        }catch(err) { 
            console.log(err)
            toast.error("Can't add item to cart" )
        };
    }          
}

 // remove from cart
 // @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - product to be removed from cart
const removeFromCart = async(token,cartDispatch,productId)=>{
    try{
        const{data:{cart}}= await axios.delete(`/api/user/cart/${productId}`,
        {headers:{
            authorization: token
        }}
        );
        cartDispatch({type:'REMOVE_FROM_CART',payload:productId})
        toast.success('Item removed from cart')
    }
    catch(err){
        console.log('error occured while removing item',err);
        toast.error("Can't remove item from cart")
    }
}
export {addToCart,removeFromCart}