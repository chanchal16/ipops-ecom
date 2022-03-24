import React from 'react';
import { useAuth,useCart } from '../contexts/MainProvider'
import { removeFromCart } from '../services/cartServices';
import {decreaseQtyHandler} from '../Utils/cartUtil'

function Cart() {
    const{token} = useAuth();
    const{cartState,cartDispatch} = useCart()
  
    
  return (
    <div className='cart-section'>
        <div className="cart-container">
            <div className="cart-items">
                <div className="items-div">
                    <div className="cart-info">
                        <h6 className="h6">My Cart({cartState.totalItems})</h6>
                        <span className="text-md">Deliver to:
                            <input type="text" value="Aurangabad 431001" className="address" onChange={()=>{}} />
                        </span>
                    </div>
                    <div className='card-container'>
                    {cartState.cart?.length>0 && cartState.cart?.map(item=>(
                        <div className="horizontal-card">
                            <div className="card-media">
                                <img className="hc-image"
                                src={item.img} 
                                alt="specs" />                
                            </div>
                            <div className="content">
                                <h3 className="card-title">{item.name}</h3>
                                <p className="gray card-sub-title">Eyeglasses</p>
                                <p className="gray card-sub-title"><strong>₹{item.price}</strong></p>
                                <div className="btns">
                                    <a className="link-secondary btn-link">add to wishlist</a>
                                    <a className="link-secondary" onClick={()=>removeFromCart(token,cartDispatch,item)}>Remove</a>
                                </div>
                                <div className="count-div">
                                    <button className="quantity-btns" onClick={()=>decreaseQtyHandler(cartDispatch,item)}>-</button>
                                    <div className='quantity'>{item.qty} </div>
                                    <button className="quantity-btns" onClick={()=>cartDispatch({type:'INCREASE_QTY',payload:item})}>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="cart-items-footer">
                        <p className='text-sm bold'>Total:₹{cartState.totalPrice}</p>
                    </div>
                </div>
            </div>
            {/* price details */}
            <div className="total-price">
                <div className="price-details">
                    <h6 className="h6">Order Summary</h6>
                    <hr/>
                    <div className="outer-div">
                        {cartState.cart?.length>0 && cartState?.cart?.map(item=>{
                            return(
                                <div className="details">
                                    <h1 className="text-md">{item.brandname}</h1>
                                    <small className='text-sm'>x{item.qty}</small>
                                    <p className="text-md">₹{item.price}</p>
                                </div>
                        )})}                                          
                    </div>
                    <div className="outer-div">
                        <div className="cart-total">
                            <h1 className="text-md bold">Total amount </h1>
                            <p className=" text-md bold">₹{cartState.totalPrice}</p>
                        </div>
                    </div>
                    <div className="details-footer">
                        <button className="btn order">checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export {Cart}