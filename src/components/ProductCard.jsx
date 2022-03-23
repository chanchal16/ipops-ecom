import React,{useState,useEffect} from 'react'
import {useAuth,useWishlist } from '../contexts/MainProvider';
import { addToWishlist,removeFromWishlist } from '../services/wishlistServices';
import { ItemExists } from '../Utils/itemExists';

function ProductCard({product}) { 
    const{token} = useAuth();
    const {wishlistState,wishlistDispatch} = useWishlist()
    const [isWishlisted,setIsWishlisted] = useState(false)

    // check for wishlisted items
    useEffect(() => {
        setIsWishlisted(ItemExists(wishlistState.wishlist,product._id))   
    }, [])
    
    // wishlist handler
    const wishlistHandler = (product)=>{       
        if(!isWishlisted){
            addToWishlist(token,wishlistDispatch,product)
        }else{
            removeFromWishlist(token,wishlistDispatch,product._id)
        }
        setIsWishlisted(!isWishlisted)
    }   
   
  return (
    <div>
        <div class="card" key={product._id}>
            <div class="card-media">
                <img class="vc-image" 
                src={product.img} 
                alt="specs" loading="lazy" />
                <span class="gray close " onClick={()=>wishlistHandler(product)}>
                    {isWishlisted ?<i className="fas fa-heart fa-lg"></i>
                    : <i className="far fa-heart fa-lg"></i>}
                </span>
            </div>
            <div class="card-content">
                <div class="content-title">
                    <h4>{product.brandname}</h4>
                    <div class="badge-rating">
                        <span class="text-xs">{product.rating}</span>
                        <span class="badge-star"><i class="fas fa-star fa-xs"></i></span>
                    </div>  
                </div>
                <div class="desc">
                    <p class="desc-title">{product.categoryName}</p>
                    <p><strong>₹{product.price} </strong> <span class="strike-text gray">Rs.999
                        </span> <span class="secondary">20% off</span></p>
                </div>
                <div class="action-btns">
                    <button class="btn"><i class="fas fa-shopping-cart"></i> Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export {ProductCard}