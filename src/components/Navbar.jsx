import React from 'react'
import specs from '../assets/spectacle-lenses.svg';
import {Link,useNavigate} from 'react-router-dom'
import { useAuth,useWishlist,useCart } from '../contexts/MainProvider';

function Navbar() {
    const{wishlistState:{wishlist},wishlistDispatch} = useWishlist()
    const{cartState,cartDispatch} = useCart();
    const{user,setUser} = useAuth();
    const navigate = useNavigate()

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("auth");
        cartDispatch({ type: 'CLEAR_CART' });
        wishlistDispatch({type:'CLEAR_WISHLIST'})
        navigate("/");
      };
  return (
        <header className="navbars">
            <Link to=''  className="menu-icon">
                <img src={specs} width="40px" height="40px" alt="logo" />
            </Link>
            <Link to='/' className="brand-name h6">
                ipops
            </Link>
            <nav>
                <ul>
                    <li className="list-items">
                        <Link to='/products' className='icon-links'><i className="fas fa-shopping-bag fa-lg"></i></Link>
                    </li>
                    <li className="list-items">
                        <div className='badge-icon'>
                            <Link to='/wishlist' className='icon-links'><i className="fas fa-heart fa-lg"></i></Link>
                           {wishlist.length>0? <div className='badge numbadge'><small>{wishlist.length}</small></div> : null}
                        </div>
                    </li>
                    <li className="list-items">
                        <div className='badge-icon'>
                            <Link to= '/cart' className='icon-links'><i className="fas fa-shopping-cart fa-lg"></i></Link>
                            {cartState.cart.length>0 ?
                                <div className='badge numbadge'>
                                    <small>{cartState.totalItems}</small>
                                </div>
                                : null
                            }                       
                        </div>
                    </li>
                    {user? (
                        <li className="list-items acount">
                            <button className='button login' onClick={handleLogout}>logout</button>
                        </li>
                        ):(
                           <Link to='login'>
                               <button className="login button">Login</button>
                            </Link>
                        )
                    }
                </ul>
            </nav>
        </header>
  )
}
export {Navbar}