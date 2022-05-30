import React from 'react'
import { useCart } from '../contexts/MainProvider';
import confetti from "canvas-confetti";

export function Coupon({finalPrice}) {
    const{cartState,cartDispatch,isCouponModalOpen,setCouponModalOpen} = useCart();
    const {totalPrice,selectedCoupon} = cartState

    const getCoupon = (e)=>{
        console.log('VAL',e.target.value)
        cartDispatch({type:'SELECT_COUPON',payload:e.target.value})
        confetti({
          particleCount: 300,
          spread: 150,
          zIndex:0
        });
    }

    setTimeout(() => {
      if(selectedCoupon){
        setCouponModalOpen(false)
      }    
    }, 3000);
    
  return (
    isCouponModalOpen && (
      <div className="coupon-modal">
        <div className="coupons address-form">          
        <span className='close' onClick={()=>setCouponModalOpen(false)}>
          <i className="fas fa-times fa-lg"></i>
        </span>       
        {
          selectedCoupon ? (
            <div className='coupon-msg'>
              <p className='text-xs gray-text'>'{selectedCoupon}' applied</p>
              <p className='text-sm bold'>You saved ₹{selectedCoupon === 'TRYNEW' ? '500':finalPrice}</p>
              <small className='text-xs'>Woohoo!!🥳🎉</small>
            </div>
          ):(
          <>
            <div className='d-flex coupon-div'>
              <div > 
              <p className="text-sm">TRYNEW</p>
              <small className='text-xs'>₹500 OFF on min purchase of Rs.1299</small>
              </div>
              <input type='radio' id='radio1' value={ 'TRYNEW'} checked={selectedCoupon === 'TRYNEW'}
                onChange={getCoupon} disabled={totalPrice >= 1299 ? false :true} className='opacity' />
               <label for='radio1'>Apply</label>         
            </div>
            <div className='d-flex coupon-div'>
              <div className='wrapper'>
              <p className="text-sm">IPOPS50</p>
              <small className='text-xs'>50% OFF on purchase over Rs.1599</small>
              </div>
              <input type='radio' id='radio2' value={ 'IPOPS50'} checked={selectedCoupon === 'IPOPS50'}
                onChange={getCoupon} disabled={totalPrice >= 1599 ? false :true}className='opacity'/> 
              <label for='radio2'>Apply</label>        
            </div>
          </>)
        }
        </div>
      </div>)
  )
}
