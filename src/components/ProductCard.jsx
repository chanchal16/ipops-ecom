import React,{useEffect} from 'react'
import { useWishlist } from '../contexts/WishlistContext';
import axios from 'axios'

function ProductCard({product}) {
    const {state,dispatch} = useWishlist()
    const addToWishlist = (item)=>{
        dispatch({type:'ADD_TO_WISHLIST',payload:item})
    }

    useEffect(() => {
        (async (product) => {
            try {
               await axios.post("/api/user/wishlist",{product})
               .then((res) => {
                    dispatch({type:'ADD_TO_WISHLIST'})
                    // addToWishlist(product)
                console.log('res',res);
                })
            }catch(err) { console.log(err)};
            
        })();
    
      return () => {
        
      }
    }, [])
  return (
    <div>
        <div class="card" key={product._id}>
                    <div class="card-media">
                        <img class="vc-image" 
                        src={product.img} 
                        alt="specs" loading="lazy" />
                        <span class="gray close " onClick={()=>addToWishlist(product)}>
                            <i class="far fa-heart fa-lg"></i>
                        </span>
                        {/* <span class="text-badge">new</span> */}
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