import React from 'react'
import specs from '../assets/spectacle-lenses.svg';
import {Link} from 'react-router-dom'
import { useAuth,useWishlist,useCart } from '../contexts/MainProvider';

function Navbar() {
    const{wishlistState:{wishlist}} = useWishlist()
    const{cartState} = useCart();
    const{user,token} = useAuth()
  return (
    <div>
        <header className="navbars">
            <Link to=''  className="menu-icon">
                <img src={specs} width="40px" height="40px" alt="logo" />
            </Link>
            <Link to='/products'  className="brand-name h6">
                ipops
            </Link>
            <nav>
                <ul>
                    <li className="list-items">
                        <div className='badge-icon'>
                            <Link to='wishlist' className='icon-links'><i className="fas fa-heart fa-lg"></i></Link>
                           {wishlist.length>0? <div className='badge dotbadge'></div> : null}
                        </div>
                    </li>
                    <li className="list-items">
                        <div className='badge-icon'>
                            <Link to='/cart' className='icon-links'><i className="fas fa-shopping-cart fa-lg"></i></Link>
                            {cartState.cart.length>0 ?
                                <div className='badge numbadge'>
                                    <small>{cartState.totalItems}</small>
                                </div>
                                : null
                            }                       
                        </div>
                    </li>
                    {token? (
                        <li className="list-items acount">
                            <i className="far fa-user-circle fa-2x"></i>
                        </li>
                        ):(
                           <Link to='login'><button class="login">Login</button></Link>
                        )
                    }
                </ul>
            </nav>
        </header>
    </div>
  )
}
export {Navbar}