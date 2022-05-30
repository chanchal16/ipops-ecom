import React,{useEffect,useState} from 'react'
import {addOrder} from '../services/orderServices'
import { useCart,useAddress,useAuth } from '../contexts/MainProvider';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from "uuid"

export function Checkout({finalPrice}) {
    const navigate = useNavigate()
    const[showtoolTip,setShowToolTip] = useState(false)
    const{token} = useAuth()
    const {cartState,cartDispatch} = useCart();
    const{cart} = cartState
    const{addressState} = useAddress();
    const{addressList,selectedAddress} = addressState

    const options = {
        key: 'rzp_test_wIhriYcfd7FT7a',
        amount: finalPrice * 100, 
        currency: "INR",
        name: 'Ipops-Eyewear',
        description: 'Test Transaction',
        handler: async function(response) {
            const order_id=uuid()
            const order= {
                finalPrice,
                products:[...cart],
                order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                address:addressList?.find(({ addressId }) => addressId === selectedAddress)
            }
            await addOrder(token,cartDispatch,order);
            navigate('/order-summary');
            cartDispatch({type:'RESET_COUPON'})
        },
        prefill: {
            name: 'tester',
            contact: '9999999999',
            email: 'abc@ab.com'
        },
        notes: {
            address: 'Ipops-Eyewear corporate office'
        },
        theme: {
            color: '#449af6',
            hide_topbar: false
        }
    };
    // open razorpay dialog box
    const openPayModal = () => {
        if(selectedAddress){
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
        }else{
        setShowToolTip(!showtoolTip)
        }
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

  return (
    <div>
        <button className="btn order"  onClick={openPayModal}>
            checkout 
        </button>
        {showtoolTip ? 
        <span className='tooltip text-sm'>
            <i class="fas fa-exclamation-circle fa-sm"></i> please select address
        </span> 
        : null}
    </div>
  )
}
