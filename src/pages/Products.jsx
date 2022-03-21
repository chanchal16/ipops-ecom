import React,{useEffect} from 'react';
import {Sidebar, ProductCard} from '../components/components';
import { useFilter } from '../contexts/filterContext';
import axios from 'axios'
import { getFilteredByPrice, getFilteredByRatings, getFliteredByCategory, getSortedProducts } from '../Utils/filterUtils';

function Products() {
    const {state,dispatch} = useFilter()
    const{products,category,sortBy,range,rating} = state
    const{all,eyeglasses,computerglasses,sunglasses} = category
    console.log('state from prod',state)

    useEffect(() => {
        (async () => {
            try {
               await axios.get("/api/products")
               .then((res) => {
                    dispatch({type:'GET_ALL_PRODUCTS',payload:res.data.products})
                console.log('res',res.data);
                })
            }catch(err) { console.log(err)};
            
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
                <ProductCard product={product} key={product._id} />
            ))  
            }
            </div>
        </section>
    </div>
  )
}
export {Products}