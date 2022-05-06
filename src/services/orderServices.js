import axios from "axios";

// get orders
// @params - token stored in localstorage
// @params - dispatch method from reducer
const getOrder = async (token,cartDispatch)=>{
    try{
        const {data} = await axios.get("/api/user/orders",
        {
            headers:{authorization:token}
        })
        cartDispatch({type:'SET_ORDER',payload:data.orders})
    }catch(err){
        console.error(err)
    }
}

// add new orders
// @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - product to be ordered
const addOrder = async(token,cartsDispatch,order)=>{
    try{
        const {data} = await axios.post('/api/user/orders',{order},
        {headers:{
            authorization: token
        }},);
        cartsDispatch({type:'SET_ORDER',payload:data.orders})
        cartsDispatch({type:'CLEAR_CART'})
    }
    catch(err){console.error(err)}
}
export {getOrder,addOrder}