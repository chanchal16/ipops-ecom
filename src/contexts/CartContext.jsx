import React,{createContext,useContext,useReducer,useEffect} from 'react'
import { cartReducer } from '../reducers/cartReducer';
import { useAuth } from './AuthContext';

const cartContext = createContext();

function CartContextProvider({children}) {
  const[cartState,cartDispatch]= useReducer(cartReducer,{cart:[],totalPrice:0,totalItems:0})
  const {token} = useAuth();

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
  }, [token])

  return (
    <div>
        <cartContext.Provider value={{cartState,cartDispatch}}>
            {children}
        </cartContext.Provider>
    </div>
  )
}
const useCart = ()=> useContext(cartContext);
export {CartContextProvider, useCart}