import React from 'react'
import specs from '../assets/spectacle-lenses.svg';
import {Link} from 'react-router-dom'
import { useWishlist } from '../contexts/WishlistContext';

function Navbar() {
    const{wishlistState:{wishlist}} = useWishlist()
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
                            <Link to='wishlist'><i className="fas fa-heart fa-lg"></i></Link>
                           {wishlist.length>0? <div className='badge dotbadge'></div> : null}
                        </div>
                    </li>
                    <li className="list-items">
                        <div className='badge-icon'>
                            <Link to=''><i className="fas fa-shopping-cart fa-lg"></i></Link>
                            <div className='badge numbadge'>
                            <small>1</small>
                            </div>
                        </div>
                    </li>
                    <li className="list-items">
                        <i className="far fa-user-circle fa-2x"></i>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
export {Navbar}