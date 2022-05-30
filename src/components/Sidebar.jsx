import React from 'react'
import { useFilter } from '../contexts/filterContext'

function Sidebar() {
    const {filterState, filterDispatch} = useFilter()
    const{category,sortBy,price} = filterState
    
  return (
    <div>
         <aside>
            <div className="sidebar">
                <span className="h6 sidebar-heading">Filters</span>
                <a className='button link' onClick={(e)=>filterDispatch({type:'CLEAR'})}>CLEAR</a>
                <div className="filters">
                    <p className="text-md">Price</p>
                    <div className="slider-container">
                        <datalist id="tickmarks">
                        <option value="700" label="500"></option>
                        <option value="2000" label="1k"></option>
                        <option value="3000" label="2k"></option>
                        <option value="4000" label="3k"></option>
                        </datalist>
                        <input
                        type="range"
                        name=""
                        className="--slider accent"
                        step="500"
                        min="700"
                        max="3000"
                        value={price}
                        onChange={(e) =>
                            filterDispatch({ type: "PRICE", payload: e.target.value })
                        }
                        
                        />
                    </div>
                </div>
                {/* sort */}
                <div className='filters'>
                    <p className="text-md">Sort BY</p>
                    <div className="sort-div">
                        <label className="text-sm accent"><input
                            type="radio"
                            name="radiobtn"
                            checked={sortBy === "LOW_TO_HIGH"}
                            onChange={() => filterDispatch({ type: "LOW_TO_HIGH" })}
                            />
                        low to high</label>
                        <label className="text-sm accent"> <input
                            type="radio"
                            name="radiobtn"
                            checked={sortBy === "HIGH_TO_LOW"}
                            onChange={() => filterDispatch({ type: "HIGH_TO_LOW" })}
                            />
                        high to low</label>
                    </div>
                </div>
                {/* ---categories-- */}
                <div className="filters">
                    <p className="text-md">Category</p>
                    <div className='category-div'>
                        <label className="text-sm accent">
                            <input type="checkbox" name="eyeglasses" checked={category.includes('eyeglasses')} 
                            value='eyeglasses' onChange={(e)=>filterDispatch({type:'CATEGORY',payload:e.target.value})}/>
                            Eye-glasses </label> 
                        <label className="text-sm accent">
                            <input type="checkbox" name="computerglasses" checked={category.includes('computerglasses')} 
                            value='computerglasses' onChange={(e)=>filterDispatch({type:'CATEGORY',payload:e.target.value})} />
                            Computer-glasses </label>
                        <label className="text-sm accent">
                            <input type="checkbox" name="sunglasses" checked={category.includes('sunglasses')} 
                            value='sunglasses' onChange={(e)=>filterDispatch({type:'CATEGORY',payload:e.target.value})} />
                            Sunglasses </label>
                    </div>
                </div>
                {/* <!---ratings----> */}
                <div className="filters">
                    <p className="text-md">Ratings</p>
                    <div className='rating-div'>
                        <label className="text-sm accent" htmlFor="radio">
                            <input type="radio" name="rating" value='4' onChange={(e)=>filterDispatch({type:'RATINGSS', payload:e.target.value})} />
                            4<i className="fas fa-star fa-xs"></i> & above 
                        </label> 
                        <label className="text-sm accent" htmlFor="radio">
                            <input type="radio" name="rating" value='3' onChange={(e)=>filterDispatch({type:'RATINGSS',payload:e.target.value})}/>
                            3<i className="fas fa-star fa-xs"></i> & above
                        </label> 
                        <label className="text-sm accent" htmlFor="radio">
                            <input type="radio" name="rating" value='2' onChange={(e)=>filterDispatch({type:'RATINGSS',payload:e.target.value})}/> 
                            2<i className="fas fa-star fa-xs"></i> & above 
                        </label>
                    </div>
                </div>
            </div>
        </aside>
    </div>
  )
}
export {Sidebar}