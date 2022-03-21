import React from 'react'
import { useWishlist } from '../contexts/WishlistContext'

export default function Wishlist() {
    const {state} = useWishlist()
  return (
    <div className='wishlist-container'>
        {
            state.wishlist?.length > 0 && state.wishlist?.map(wishlistItem=>(
                <div class="card">
                    <div class="card-media">
                        <img class="vc-image" 
                        src={wishlistItem.img} 
                        alt="specs" loading="lazy" />
                        <span class="text-badge">new</span>
                    </div>
                    <div class="card-content">
                        <div class="content-title">
                            <h4>{wishlistItem.brandname}</h4>
                            <span class=" gray">
                                <i class="fas fa-heart "></i>
                            </span>
                        </div>
                        <div class="desc">
                            <p class="desc-title">Eyeglasses</p>
                            <p><strong> {wishlistItem.price} </strong> <span class="strike-text gray">Rs.999
                                </span> <span class="secondary">20% off</span></p>
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