import React from 'react'
import { useWishlist,useAuth } from '../contexts/MainProvider'
import { removeFromWishlist } from '../services/wishlistServices'

function Wishlist() {
    const{token} = useAuth();
    const {wishlistState:{wishlist},wishlistDispatch} = useWishlist()
  return (
    <div className='wishlist-container'>
        {
            wishlist?.length > 0 && wishlist?.map(wishlistItem=>(
                <div class="card" key={wishlistItem._id}>
                    <div class="card-media">
                        <img class="vc-image" 
                        src={wishlistItem.img} 
                        alt="specs" loading="lazy" />
                        <span class="gray close " onClick={()=> removeFromWishlist(token,wishlistDispatch,wishlistItem._id)}>
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
                            <button class="btn"><i class="fas fa-shopping-cart"></i> Add to cart</button>
                        </div>
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}
export{Wishlist}