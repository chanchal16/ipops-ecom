import React from 'react'
import empty from '../assets/empty.svg';
import { useWishlist,useAuth,useCart } from '../contexts/MainProvider'
import { removeFromWishlist,addToCart } from '../services';
import {Link} from 'react-router-dom';
import {ItemExists} from '../Utils/itemExists'

function Wishlist() {
    const{token} = useAuth();
    const {wishlistState:{wishlist},wishlistDispatch} = useWishlist()
    const{cartState,cartDispatch} = useCart();

    const cartHandler =async (item)=>{
        if(!ItemExists(cartState.cart,item._id)){
            item.qty = 1;
            await addToCart(token,cartDispatch,item)
        } 
    }
  return (
    <>
    {wishlist?.length > 0 ? (
    <div className='wishlist-container'>
        {          
            wishlist?.map(wishlistItem=>(
                <div className="card" key={wishlistItem._id}>
                    <div className="card-media">
                        <img className="vc-image" 
                        src={wishlistItem.img} 
                        alt="specs" loading="lazy" />
                        <span className="fav close " onClick={()=> removeFromWishlist(token,wishlistDispatch,wishlistItem)}>
                            <i className="fas fa-heart fa-lg"></i>
                        </span>
                    </div>
                    <div className="card-content">
                        <div className="content-title">
                            <h4>{wishlistItem.brandname}</h4>
                            <div className="badge-rating">
                                <span className="text-xs">{wishlistItem.rating}</span>
                                <span className="badge-star"><i className="fas fa-star fa-xs"></i></span>
                            </div>  
                        </div>
                        <div className="desc">
                            <p className="desc-title">{wishlistItem.categoryName}</p>
                            <p>
                                <strong>₹{wishlistItem.price} </strong> 
                            </p>
                        </div>
                        <div className="action-btns">
                        {ItemExists(cartState.cart,wishlistItem._id) ?
                            <Link to='/cart'>
                                <button className="btn go-to-cart" >
                                    <i className="fas fa-shopping-cart"></i> Go to cart
                                </button>
                            </Link>                  
                            : 
                            <button className="btn" onClick={()=>cartHandler(wishlistItem)}>
                                <i className="fas fa-shopping-cart"></i> Add to cart
                            </button>
                        }
                        </div>
                    </div>
                </div>
            ))  
        }       
    </div>):(
        <div className='empty-cart'>
            <img src={empty} alt='cart' />
            <span className='text-sm gray-text'>Looks like your wishlist is empty</span>
            <Link to='/products'>
                <button className='button btn-primary'>View Products</button>
            </Link>
        </div>
    )}
    </>
  )
}
export{Wishlist}