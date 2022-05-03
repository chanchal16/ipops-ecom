import axios from 'axios';
import React,{useEffect,createContext,useContext,useReducer} from 'react'
import { wishlistReducer } from '../reducers/wishlistReducer';
import { useAuth } from './AuthContext';

const wishlistContext = createContext()

 function WishlistContextProvider({children}) {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {wishlist:[]});
  const {token} = useAuth();

  useEffect(() => {
    async()=>{
      try{
        const{data:{wishlist}}=await axios.get("/api/user/wishlist",
        {headers:{
          authorization: token
        }});
        wishlistDispatch({type:"GET_WISHLISTED_PRODUCTS",payload:wishlist});
      } 
      catch(err){
        console.log('error while displaying wishlisted products',err)
      }
    }
  }, [token])
     
  const providerItem = {wishlistState,wishlistDispatch}
  return (
    <div>
        <wishlistContext.Provider value={providerItem}>
            {children}
        </wishlistContext.Provider>
    </div>
  )
}
const useWishlist =()=> useContext(wishlistContext)
export{WishlistContextProvider,useWishlist}