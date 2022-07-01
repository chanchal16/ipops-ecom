import React from 'react'
import { Link,useNavigate} from "react-router-dom";
import {useAuth,useWishlist,useCart } from '../contexts/MainProvider';
import { addToWishlist,removeFromWishlist,addToCart } from '../services';
import { ItemExists } from '../Utils/itemExists';

function ProductCard({product}) { 
    const{token,user} = useAuth();
    const navigate = useNavigate();
    const {cartState,cartDispatch} = useCart()
    const {wishlistState,wishlistDispatch} = useWishlist()
    
    // wishlist handler
    const wishlistHandler = async(product)=>{         
        if(user){ 
            if(!ItemExists(wishlistState.wishlist,product._id)){
                addToWishlist(token,wishlistDispatch,product)
            } else{
                removeFromWishlist(token,wishlistDispatch,product)
            }
        }else{
            navigate('/login')
        }      
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
        <div className="card" key={product._id}>
            <div className="card-media">
                <img className="vc-image" 
                src={product.img} 
                alt="specs" loading="lazy" />
                <span className="fav close " onClick={()=>wishlistHandler(product)}>
                    {ItemExists(wishlistState.wishlist,product._id) ?<i className="fas fa-heart fa-lg"></i>
                    : <i className="far fa-heart fa-lg"></i>}
                </span>
            </div>
            <div className="card-content">
                <div className="content-title">
                    <h4>{product.brandname}</h4>
                    <div className="badge-rating">
                        <span className="text-xs">{product.rating}</span>
                        <span className="badge-star"><i className="fas fa-star fa-xs"></i></span>
                    </div>  
                </div>
                <div className="desc">
                    <p className="desc-title">{product.categoryName}</p>
                    <p><strong>₹{product.price}</strong></p>
                </div>
                <div className="action-btns">
                {ItemExists(cartState.cart,product._id) ?
                    <Link to='/cart'>
                        <button className="btn go-to-cart" >
                            <i className="fas fa-shopping-cart"></i> Go to cart
                        </button>
                    </Link>                  
                    : 
                    <button className="btn" onClick={()=>cartHandler(product)}>
                        <i className="fas fa-shopping-cart"></i> Add to cart
                    </button>
                }
                </div>
            </div>
        </div>
    </div>
  )
}
export {ProductCard}