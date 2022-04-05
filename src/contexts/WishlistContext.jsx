import axios from 'axios';
import React,{useState,useEffect,createContext,useContext,useReducer} from 'react'
import { wishlistReducer } from '../reducers/wishlistReducer';
import { useAuth } from './AuthContext';

const wishlistContext = createContext()

 function WishlistContextProvider({children}) {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {wishlist:[]});
  const {token} = useAuth();
  const [isWishlisted,setIsWishlisted] = useState(false)

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
     
  const providerItem = {wishlistState,wishlistDispatch,isWishlisted,setIsWishlisted}
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