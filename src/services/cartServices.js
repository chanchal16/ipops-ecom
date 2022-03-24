import axios from "axios";

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
        }catch(err) { console.log(err)};
    }          
}

 // remove from cart
 // @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - product to be removed from cart
const removeFromCart = async(token,cartDispatch,productId)=>{
    try{
        const{data:{cart}}= await axios.delete("/api/user/cart/:productId",
        {headers:{
            authorization: token
        }}
        );
        cartDispatch({type:'REMOVE_FROM_CART',payload:productId})
    }
    catch(err){console.log('error occured while removing item',err)}
}
export {addToCart,removeFromCart}