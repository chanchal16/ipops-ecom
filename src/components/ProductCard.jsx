import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from "react-router-dom";
import {useAuth,useWishlist,useCart } from '../contexts/MainProvider';
import { addToWishlist,removeFromWishlist,addToCart } from '../services';
import { ItemExists } from '../Utils/itemExists';

function ProductCard({product}) { 
    const{token,user} = useAuth();
    const {cartState,cartDispatch} = useCart()
    const {wishlistState,wishlistDispatch} = useWishlist()
    const [isWishlisted,setIsWishlisted] = useState(false)
    const navigate = useNavigate();

    // check for wishlisted items
    useEffect(() => {
        setIsWishlisted(ItemExists(wishlistState.wishlist,product._id))   
    }, [])
    
    // wishlist handler
    const wishlistHandler = (product)=>{       
        if(!isWishlisted){
            if(user){
            addToWishlist(token,wishlistDispatch,product)
            }else{
                navigate('/login')
            }
        }else{
            removeFromWishlist(token,wishlistDispatch,product._id)
        }
        setIsWishlisted(!isWishlisted)
    }
    
    // cart handler
    const cartHandler=async(item)=>{ 
        if(user){ 
            if(!ItemExists(cartState.cart,item._id)){
                item.qty = 1;
                await addToCart(token,cartDispatch,item)
            } 
        }else{
            navigate('/login')
        }  
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
                    <p><strong>₹{product.price}</strong></p>
                </div>
                <div class="action-btns">
                {ItemExists(cartState.cart,product.id) ?
                    <Link to='/cart'>
                        <button class="btn go-to-cart" >
                            <i class="fas fa-shopping-cart"></i> Go to cart
                        </button>
                    </Link>                  
                    : 
                    <button class="btn" onClick={()=>cartHandler(product)}>
                        <i class="fas fa-shopping-cart"></i> Add to cart
                    </button>
                }
                </div>
            </div>
        </div>
    </div>
  )
}
export {ProductCard}