import {AuthContextProvider} from './AuthContext';
import {WishlistContextProvider} from './WishlistContext';
import {FilterProvider} from './filterContext'

function MainContextProvider({children}) {
  return (
    <div>
        <AuthContextProvider>
            <FilterProvider>
                <WishlistContextProvider>
                    {children}
                </WishlistContextProvider>
            </FilterProvider>
        </AuthContextProvider>
    </div>
  )
}
export{useAuth} from './AuthContext';
export{useWishlist} from './WishlistContext';
export {useFilter} from './filterContext'
export {MainContextProvider}