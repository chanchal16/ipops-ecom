import React,{useState,createContext,useContext,useReducer} from 'react'
import { wishlistReducer } from '../reducers/wishlistReducer';

const wishlistContext = createContext()

 function WishlistContextProvider({children}) {
  const [state, dispatch] = useReducer(wishlistReducer, {wishlist:[]});
  console.log("state", state);
    // const [wishlist,setWishlist] = useState([])
    

    /*const addToWishlist = (product)=>{
        const found = wishlist?.find((ele) => ele.id === product.id);
        setIsWishlisted(found)
        if(found){
            return  wishlist.splice(found,1);
              // setWishlist([...wishlist])                      
        }else{
           return setWishlist([...wishlist,product])
        }       
    }*/
    
  return (
    <div>
        <wishlistContext.Provider value={{state,dispatch}}>
            {children}
        </wishlistContext.Provider>
    </div>
  )
}
const useWishlist =()=> useContext(wishlistContext)
export{WishlistContextProvider,useWishlist}