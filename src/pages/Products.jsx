import React,{useEffect} from 'react';
import {Sidebar, ProductCard} from '../components/main-component';
import { useFilter } from '../contexts/filterContext';
import axios from 'axios'
import { getFilteredByPrice, getFilteredByRatings, getFliteredByCategory, getSortedProducts } from '../Utils/filterUtils';
import Spinner from '../components/Spinner';

function Products() {
    const {filterState, filterDispatch} = useFilter()
    const{products,category,sortBy,range,rating} = filterState

    useEffect(() => {
        (async () => {
            try {
               await axios.get("/api/products")
               .then((res) => {
                    filterDispatch({type:'GET_ALL_PRODUCTS',payload:res.data.products})
                })
            }catch(err) { console.log(err)};
            
          })();
    }, [])
       
    // utils
    const priceRangeProducts = getFilteredByPrice(products,range)   
    const ratingsProducts = getFilteredByRatings(priceRangeProducts,rating)
    const categoryProducts = getFliteredByCategory(ratingsProducts,category)
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
                onChange={() => filterDispatch({ type: "LOW_TO_HIGH" })}
                />
                <label>low to high</label>
                <input
                type="radio"
                name="radiobtn"
                checked={sortBy === "HIGH_TO_LOW"}
                onChange={() => filterDispatch({ type: "HIGH_TO_LOW" })}
                />
                <label>high to low</label>
            </div>
            {/* <!---product list----> */}
            <div className='product-list'>
            {
            filteredProducts.length>0 ? (
                filteredProducts?.map(product=>(
                    <ProductCard product={product} key={product._id} />
                ))
            ):( 
                <>           
                <Spinner/>
                </>
            )
            }
            </div>
        </section>
    </div>
  )
}
export {Products}