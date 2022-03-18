import React from 'react'
import { useFilter } from '../contexts/filterContext'

export default function Sidebar() {
    const {state,dispatch} = useFilter()
    const{category} = state
    const{all,eyeglasses,computerglasses,sunglasses} = category
    
  return (
    <div>
         <aside>
            <div className="sidebar">
                <span className="h6 sidebar-heading">Filters</span>
                <button className='btn btn-primary' onClick={(e)=>dispatch({type:'CLEAR'})}>clear</button>
                <div className="filters">
                    <p className="text-md">Price</p>
                    <div class="slider-container">
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
                        value={state.price}
                        onChange={(e) =>
                            dispatch({ type: "PRICE", payload: e.target.value })
                        }
                        
                        />
                    </div>
                </div>
                {/* ---categories-- */}
                <div className="filters">
                    <p className="text-md">Category</p>
                    <div className='category-div'>
                    {/* <label className="text-sm accent" for="checkbox">
                        <input type="checkbox" name="all" value='All'  onClick={(e)=>dispatch({type:'All', payload:e.target.checked})}/> All </label>  */}
                    <label className="text-sm accent">
                        <input type="checkbox" name="eyeglasses" checked={eyeglasses} value='eyeglasses' onClick={(e)=>dispatch({type:'EYEGLASSES'})}/>
                         Eye-glasses </label> 
                    <label className="text-sm accent">
                        <input type="checkbox" name="computerglasses" checked={computerglasses} value='computerglasses' onClick={(e)=>dispatch({type:'COMPUTERGLASSES'})} />
                         Computer-glasses </label>
                    <label className="text-sm accent">
                        <input type="checkbox" name="sunglasses" checked={sunglasses} value='sunglasses' onClick={(e)=>dispatch({type:'SUNGLASSES'})} />
                         Sunglasses </label>
                    </div>
                </div>
                {/* <!---ratings----> */}
                <div className="filters">
                    <p className="text-md">Ratings</p>
                    <div className='rating-div'>
                        <label className="text-sm accent" htmlFor="radio">
                            <input type="radio" name="rating" value='4' onChange={(e)=>dispatch({type:'RATINGSS', payload:e.target.value})} />
                            4<i className="fas fa-star fa-xs"></i> & above 
                        </label> 
                        <label className="text-sm accent" htmlFor="radio">
                            <input type="radio" name="rating" value='3' onChange={(e)=>dispatch({type:'RATINGSS',payload:e.target.value})}/>
                            3<i className="fas fa-star fa-xs"></i> & above
                        </label> 
                        <label className="text-sm accent" htmlFor="radio">
                            <input type="radio" name="rating" value='2' onChange={(e)=>dispatch({type:'RATINGSS',payload:e.target.value})}/> 
                            2<i className="fas fa-star fa-xs"></i> & above 
                        </label>
                    </div>
                </div>
            </div>
        </aside>
    </div>
  )
}
