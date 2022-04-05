import React from 'react';
import {trends,services} from '../Utils/Data';
import { categories } from '../backend/db/categories';

function Home() {
  return (
    <div>
        <div className="banner">
                <img src="https://www.novaeyewear.com/skin/frontend/novacombos/default/images/new-banner2.jpg"
                loading="lazy"
                alt="banner" />
        </div>
        {/* categories */}
        <div className='categories-container heading'>
            <span className='line'>
                <p className='h3 title-border'><span>Featured Categories</span></p>
            </span>
            <div className='categories'>
                {
                    categories.map(category=>(
                        <div className='category' key={category._id}>
                            <img className='res-image' src={category.img} alt='category' />
                            <p className='text-sm'>{category.categoryName}</p>
                        </div>
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
                            <button className=" btn">Explore</button>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* services */}
        <div className='services-container'>
            {
                services.map(service=>(
                    <div className='service'>
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