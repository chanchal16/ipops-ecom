import React from 'react';
import {trends,services} from '../Utils/Data';
import { categories } from '../backend/db/categories';
import {Link} from 'react-router-dom'
import { useFilter } from '../contexts/filterContext';

function Home() {
    const {filterDispatch} = useFilter()

  return (
    <div>
        <div className="banner">
                <img src="https://www.novaeyewear.com/skin/frontend/novacombos/default/images/new-banner2.jpg"
                loading="lazy"
                alt="banner" />
                <Link to='/products'>
                    <button className='button shop'>Shop now
                    <span className='arrow'> <i className="fas fa-angle-double-right"></i></span>
                    </button>
                </Link>
        </div>
        {/* categories */}
        <div className='categories-container heading'>
            <span className='line'>
                <p className='h3 title-border'><span>Featured Categories</span></p>
            </span>
            <div className='categories'>
                {
                    categories.map(category=>(
                        <Link to='/products' key={category._id}>
                        <div className='category'  
                        value={category.categoryName} onClick={(e)=>filterDispatch({type:'CATEGORY',payload:category.categoryName})}>
                            <img className='res-image' src={category.img} alt='category' />
                            <p className='text-sm'>{category.categoryName.toUpperCase()}</p>
                        </div>
                        </Link>
                    ))
                }
            </div>
        </div>
        {/* <!---trends section-----> */}
        <div className="trends heading">
            <span className="h3">Wear the trend</span>
            <p className='text-sm gray'>Our hottest collection</p>
            <div className="trends-div">
                {
                    trends.map(trend=>(
                        <div className="child-div" key={trend.id}>
                            <img className="res-image"
                            src={trend.img} 
                            alt="specs" loading="lazy" />
                            <p className="text-sm">{trend.type}</p>
                            <Link to='/products'><button className=" btn">Explore</button></Link>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* services */}
        <div className='services-container'>
            {
                services.map(service=>(
                    <div className='service' key={service.id}>
                        <img src={service.img} alt='service' />
                        <span className='text-sm'>{service.service}</span>
                    </div>
                ))
            }
        </div>
        {/* <!--images----> */}
        <div className="images">
            <div className="images-container">
                <div className="image-div">
                    <img className="res-image"
                    src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg"
                    alt="blu-glasses" loading="lazy" />
                </div>
                <div className="image-div">
                    <img className="res-image"
                    src="https://img.freepik.com/free-psd/summer-fashion-sunglasses-held-hand_23-2148395670.jpg?w=1060"
                    alt="blu-glasses" loading="lazy" />
                </div>
            </div>
        </div>
    </div>
  )
}
export {Home}