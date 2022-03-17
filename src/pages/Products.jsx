import React,{useEffect,useState} from 'react';
import Sidebar from '../components/Sidebar';
import { useFilter } from '../contexts/filterContext';
import axios from 'axios'
import { getFilteredByPrice, getFilteredByRatings, getFliteredByCategory, getSortedProducts } from '../Utils/filterUtils';

export default function Products() {
    const {state,dispatch} = useFilter()
    const{products,category,sortBy,range,rating} = state
    const{all,eyeglasses,computerglasses,sunglasses} = category
    console.log('state from prod',state)

    useEffect(() => {
        (async () => {
            // try {
               await axios.get("/api/products")
               .then((res) => {
                    dispatch({type:'GET_ALL_PRODUCTS',payload:res.data.products})
                console.log('res',res.data);
                })
                .catch((err) => console.log(err));
            
          })();
    }, [])
    

    // utils
    const priceRangeProducts = getFilteredByPrice(products,range)   
    const ratingsProducts = getFilteredByRatings(priceRangeProducts,rating)
    const categoryProducts = getFliteredByCategory(ratingsProducts,all,eyeglasses,computerglasses,sunglasses)
    const filteredProducts = getSortedProducts(categoryProducts,sortBy)
    
  return (
    <div className="main-container">
        <Sidebar/>
        <section>
            <div className="sort-div">
                <input
                type="radio"
                name="radiobtn"
                checked={sortBy === "LOW_TO_HIGH"}
                onClick={() => dispatch({ type: "LOW_TO_HIGH" })}
                />
                <label>low to high</label>
                <input
                type="radio"
                name="radiobtn"
                checked={sortBy === "HIGH_TO_LOW"}
                onClick={() => dispatch({ type: "HIGH_TO_LOW" })}
                />
                <label>high to low</label>
            </div>
            {/* <!---product list----> */}
            <div className='product-list'>
            {
             filteredProducts.length>0 && filteredProducts?.map(product=>(
                <div class="card" key={product._id}>
                    <div class="card-media">
                        <img class="vc-image" 
                        src={product.img} 
                        alt="specs" loading="lazy" />
                        <span class="gray close ">
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
            ))  
            }
            </div>
        </section>
    </div>
  )
}