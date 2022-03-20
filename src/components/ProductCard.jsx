import React from 'react'

function ProductCard({product}) {
  return (
    <div>
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
    </div>
  )
}
export {ProductCard}