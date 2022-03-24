import {AuthContextProvider} from './AuthContext';
import {WishlistContextProvider} from './WishlistContext';
import {FilterProvider} from './filterContext'
import { CartContextProvider } from './CartContext';

function MainContextProvider({children}) {
  return (
    <div>
        <AuthContextProvider>
            <FilterProvider>
                <WishlistContextProvider>
                  <CartContextProvider>
                    {children}
                  </CartContextProvider>
                </WishlistContextProvider>
            </FilterProvider>
        </AuthContextProvider>
    </div>
  )
}
export{useAuth} from './AuthContext';
export{useWishlist} from './WishlistContext';
export {useFilter} from './filterContext';
export {useCart} from './CartContext'
export {MainContextProvider}