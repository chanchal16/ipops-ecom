import React,{useEffect,useState} from 'react';
import {Sidebar, ProductCard,Spinner} from '../components';
import { useFilter } from '../contexts/filterContext';
import axios from 'axios'
import { getFilteredByPrice, getFilteredByRatings, getFliteredByCategory, getSortedProducts } from '../Utils/filterUtils';

function Products() {
    const {filterState, filterDispatch} = useFilter()
    const{products,category,sortBy,range,rating} = filterState
    const[loading,setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
               await axios.get("/api/products")
               .then((res) => {
                    filterDispatch({type:'GET_ALL_PRODUCTS',payload:res.data.products})
                })
                setLoading(false)
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
            <h5 className='gray-text text-lg total-prod'>Products({filteredProducts.length})</h5>
            {/* <!---product list----> */}
            <div className='product-list'>
                {
                    loading ? (
                        <Spinner/>
                    ):filteredProducts.length>0 ?(
                        filteredProducts?.map(product=>(
                            <ProductCard product={product} key={product._id} />
                        ))
                    ):(
                        <div className='nodata'>
                        <span className='h5 gray-text text-center'>No products available</span>
                        </div>
                    )
                }
            </div>
        </section>
    </div>
  )
}
export {Products}