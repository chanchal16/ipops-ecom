import React from 'react';
import { useAuth,useCart,useWishlist,useAddress} from '../contexts/MainProvider'
import { removeFromCart,addToWishlist } from '../services';
import {decreaseQtyHandler,couponDiscountHandler} from '../Utils/cartUtil';
import emptycart from '../assets/empty-cart.svg';
import {Link} from 'react-router-dom';
import { Checkout } from './Checkout';
import { Coupon } from '../components';

function Cart() {
    const{token} = useAuth();
    const{cartState,cartDispatch,setCouponModalOpen} = useCart();
    const {totalPrice,selectedCoupon} = cartState
    const {wishlistDispatch,wishlistState} = useWishlist();
    const {addressState,setIsModalOpen} = useAddress();
    const{addressList,selectedAddress} = addressState;

    // current address
    const currentAddress = addressList.find(address=>address.addressId === selectedAddress)

    // price after cuopon applied
    const priceAfterCouponApplied =  couponDiscountHandler(selectedCoupon,totalPrice)
    
    // move product to wishlist
    const moveToWishlist = (item)=>{
        addToWishlist(token,wishlistDispatch,item)
        removeFromCart(token,cartDispatch,item)
        cartDispatch({type:'RESET_COUPON'})       
    }
    // remove product from cart
    const removeProduct = (item)=>{
        removeFromCart(token,cartDispatch,item)
        cartDispatch({type:'RESET_COUPON'})
    }
    
  return (
    <div className='cart-section'>
        {cartState.cart?.length>0 ? (
        <div className="cart-container">
            <div className="cart-items">
                <div className="items-div">
                    <div className="cart-info">
                        <h6 className="h6">My Cart({cartState.totalItems})</h6>
                        <div className='address-box'>
                            {currentAddress?.name ?
                                (
                                    <>
                                    <span className="text-md">Deliver to: {currentAddress?.name}</span>
                                    <p>{currentAddress?.city} ,{currentAddress?.state}</p> </>
                                ):(
                                    <p>No address selected</p>
                                )
                            }                      
                        </div>
                        <Link to='/address'>
                            <button className='btn new-btn'>change address</button>
                        </Link>
                    </div>
                    <div className='card-container'>
                    { cartState.cart?.map(item=>(
                        <div className="horizontal-card" key={item._id}>
                            <div className="card-media">
                                <img className="hc-image"
                                src={item.img} 
                                alt="specs" />                
                            </div>
                            <div className="content">
                                <h3 className="card-title">{item.brandname}</h3>
                                <p className="gray card-sub-title">{item.categoryName.toUpperCase()}</p>
                                <p className="gray card-sub-title"><strong>₹{item.price}</strong></p>
                                <div className="btns"> 
                                {wishlistState.wishlist.find(prod=>prod._id === item._id)?(
                                    <a className=" btn-link">Wishlisted</a>
                                ):(
                                    <a className=" btn-link"  onClick={()=>moveToWishlist(item)}>
                                        move to wishlist
                                    </a>
                                )}                           
                                       
                                    <a className="link-secondary" onClick={()=>removeProduct(item)}>Remove</a>
                                </div>
                                <div className="count-div">
                                    <button className="quantity-btns" onClick={()=>decreaseQtyHandler(cartDispatch,item)}>
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <div className='quantity'>{item.qty} </div>
                                    <button className="quantity-btns" onClick={()=>cartDispatch({type:'INCREASE_QTY',payload:item})}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="cart-items-footer">
                        <p className='text-sm bold'>Total:₹{priceAfterCouponApplied}</p>
                    </div>
                </div>
            </div>
            
            {/* price details */}
            <div className="total-price">
                <button className='btn coupon' onClick={()=>setCouponModalOpen(true)}>
                <i className="fas fa-tag"></i> Apply coupon
                </button>
                <Coupon finalPrice={priceAfterCouponApplied}/>
                <div className="price-details">
                    <h6 className="h6">Order Summary</h6>
                    <hr/>
                    <div className="outer-div">
                        {cartState.cart?.length>0 && cartState?.cart?.map(item=>{
                            return(
                                <div className="details" key={item._id}>
                                    <h1 className="text-md">{item.brandname}</h1>
                                    <small className='text-sm'>x{item.qty}</small>
                                    <p className="text-md">₹{item.price}</p>
                                </div>
                        )})}                                          
                    </div>
                    {selectedCoupon &&
                        <div className="outer-div">
                            <div className="cart-total">
                                <h1 className="text-sm ">{selectedCoupon} </h1>
                                <span className='gray2-text' onClick={()=>cartDispatch({type:'RESET_COUPON'})}>
                                    <i className="fas fa-times "></i>
                                </span>
                            </div>
                        </div>
                    }
                    <div className="outer-div">                   
                        <div className="cart-total">
                            <h1 className="text-md bold">Total amount </h1>
                            <p className=" text-md bold">₹{priceAfterCouponApplied}</p>
                        </div>                      
                    </div>
                    <div className="details-footer">
                        <Checkout finalPrice={priceAfterCouponApplied} />
                    </div>                  
                </div>
                <div className='note'>
                    <p className='text-xs'>Use credit card as mode of payment and (4111 1111 1111 1111) as card number.</p>
                </div>
            </div>
        </div>)
        :(
            <div className='empty-cart'>
                <img src={emptycart} alt='cart' />
                <span className='text-sm gray-text'>Your cart is empty..</span>
                <Link to='/products'>
                    <button className='button btn-primary'>Add Products</button>
                </Link>
            </div>
        )
        }
    </div>
  )
}
export {Cart}