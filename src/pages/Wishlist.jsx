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
    <div className='wishlist-container'>
        {
            wishlist?.length > 0 ?
            ( wishlist?.map(wishlistItem=>(
                <div class="card" key={wishlistItem._id}>
                    <div class="card-media">
                        <img class="vc-image" 
                        src={wishlistItem.img} 
                        alt="specs" loading="lazy" />
                        <span class="fav close " onClick={()=> removeFromWishlist(token,wishlistDispatch,wishlistItem)}>
                            <i className="fas fa-heart fa-lg"></i>
                        </span>
                    </div>
                    <div class="card-content">
                        <div class="content-title">
                            <h4>{wishlistItem.brandname}</h4>
                            <div class="badge-rating">
                                <span class="text-xs">{wishlistItem.rating}</span>
                                <span class="badge-star"><i class="fas fa-star fa-xs"></i></span>
                            </div>  
                        </div>
                        <div class="desc">
                            <p class="desc-title">{wishlistItem.categoryName}</p>
                            <p>
                                <strong>₹{wishlistItem.price} </strong> 
                            </p>
                        </div>
                        <div class="action-btns">
                        {ItemExists(cartState.cart,wishlistItem.id) ?
                            <Link to='/cart'>
                                <button class="btn go-to-cart" >
                                    <i class="fas fa-shopping-cart"></i> Go to cart
                                </button>
                            </Link>                  
                            : 
                            <button class="btn" onClick={()=>cartHandler(wishlistItem)}>
                                <i class="fas fa-shopping-cart"></i> Add to cart
                            </button>
                        }
                        </div>
                    </div>
                </div>
            ))
            ):(
                <div className='empty-cart'>
                    <img src={empty} alt='cart' />
                    <span className='text-sm gray-text'>Looks like your wishlist is empty</span>
                    <Link to='/products'>
                        <button className='button btn-primary'>View Products</button>
                    </Link>
                </div>
            )
        }
        
    </div>
  )
}
export{Wishlist}