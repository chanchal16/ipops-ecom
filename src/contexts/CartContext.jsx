import React,{createContext,useContext,useReducer,useEffect,useState} from 'react'
import { cartReducer } from '../reducers/cartReducer';
import { getOrder } from '../services/orderServices';
import { couponDiscountHandler } from '../Utils/cartUtil';
import { useAuth } from './AuthContext';

const cartContext = createContext();
const initialState = {
  cart:[],
  totalPrice:0,
  totalItems:0,
  orders:[],
  selectedCoupon:''
}
function CartContextProvider({children}) {
  const[isCouponModalOpen,setCouponModalOpen] = useState(false)
  const[cartState,cartDispatch]= useReducer(cartReducer,initialState)
  const {token} = useAuth();
  const priceAfterCouponApplied = couponDiscountHandler(initialState?.selectedCoupon,initialState?.totalPrice)

  useEffect(() => {
    async()=>{
      try{
        const{data:{cart}}=await axios.get("/api/user/cart",
        {headers:{
          authorization: token
        }});
        cartDispatch({type:"GET_CART_ITEMS",payload:cart});
      } 
      catch(err){
        console.log('error while displaying cart items',err)
      }
    }
    // get orders
    getOrder(token,cartDispatch)
  }, [token])

  const providerObj = {cartState,cartDispatch,isCouponModalOpen,setCouponModalOpen,priceAfterCouponApplied}
  return (
    <div>
        <cartContext.Provider value={providerObj}>
            {children}
        </cartContext.Provider>
    </div>
  )
}
const useCart = ()=> useContext(cartContext);
export {CartContextProvider, useCart}