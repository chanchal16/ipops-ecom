import React from 'react'
import {Link} from 'react-router-dom';
import { useCart } from '../contexts/CartContext'

export function OrderSummary() {
  const {cartState} = useCart()
  const{orders,priceAfterCouponApplied} = cartState

  return (
    <div className='summary-container'>
        <h1 className='h4 center-text'>Your order placed successfully!</h1>
        <div>
          {
            orders?.map(order=>(
              
              <div key={order.order_id} className='order'>
                <div className='order-details'>
                  <h6 className='text-lg bold'>Order ID: {order.order_id}</h6>
                  <h6 className='text-md bold'>Placed on: {order.createdAt.substring(0,10)}</h6>
                  <p className='text-md bold'>Amount Paid: ₹{order.finalPrice}</p>
                  <div className='address'>
                    <p className='text-sm'>Deliver to: {order.address.name}</p>
                    <p className='text-sm'>{order.address.street}</p>
                    <p className='text-sm'>{order.address.city} , {order.address.pincode}</p>
                    <p className='text-sm'>{order.address.state} , {order.address.country}</p>
                  </div>
                </div>
                <div>
                {
                  order.products?.map(product=>(
                      <div className="product-card" key={product._id}>
                          <div className="card-media">
                              <img className="hc-image"
                              src={product.img} 
                              alt="specs" />                
                          </div>
                          <div className="content">
                              <h3 className="card-title">{product.brandname}</h3>
                              <p className="gray card-sub-title">{product.categoryName.toUpperCase()}</p>
                              <p className="gray card-sub-title">₹{product.price}</p> 
                              <p className="gray card-sub-title">qty: {product.qty}</p>                          
                          </div>
                      </div>                   
                  ))
                }
                </div>
              </div>
            ))
          }
        </div>
        <Link to='/products'>
          <button className='button accent-btn'>continue shopping</button>
        </Link>
    </div>
  )
}
