import {AuthContextProvider} from './AuthContext';
import {WishlistContextProvider} from './WishlistContext';
import {FilterProvider} from './filterContext'
import { CartContextProvider } from './CartContext';
import {AddressContextProvider} from './AddressContext'

function MainContextProvider({children}) {
  return (
    <div>
        <AuthContextProvider>
            <FilterProvider>
                <WishlistContextProvider>
                  <CartContextProvider>
                    <AddressContextProvider>
                    {children}
                    </AddressContextProvider>
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
export {useCart} from './CartContext';
export {useAddress} from './AddressContext';
export {MainContextProvider}