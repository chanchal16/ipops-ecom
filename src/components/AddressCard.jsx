import React from 'react'
import { useAddress,useAuth } from '../contexts/MainProvider';
import { removeAddress } from '../services/addressServices';
import { useNavigate } from 'react-router-dom';

export function AddressCard({address}) {
    const navigate = useNavigate()
    const {token} = useAuth()
    const{addressState,addressDispatch,setIsModalOpen,setEdit} = useAddress();
    const{selectedAddress} = addressState

    const editAddressHandler = (address)=>{
        setEdit(address);
        setIsModalOpen(true);
    }

    const removeAddressHandler = async(address)=>{
        await removeAddress(token,addressDispatch,address)
    }

    const selectAddressHandler = (addressId) => {
        addressDispatch({ type: "UPDATE_SELECTED_ADDRESS", payload: addressId })
        navigate('/cart')
    }

  return (
    <div>
        <div key={address.addressId} className='address-card' >
            <input className='accent'
                type="radio"
                name="address"
                checked={address.addressId === selectedAddress}
                onChange={()=>selectAddressHandler(address.addressId)} 
            />
            <span className='text-sm'>{address.name} ,{address.phone}</span>
            <p className='text-sm'>street:{address.street}</p>
            <p className='text-sm'>{address.city} - {address.pincode}</p>
            <p className='text-sm'>{address.state}, {address.country}</p>
            <div className='card-btns'>
                <button className='button accent-btn' onClick={()=>editAddressHandler(address)}>
                    Edit
                </button>
                <button className='button primary-btn' onClick={()=>removeAddressHandler(address)}>
                    remove
                </button>
            </div>
        </div>     
    </div>
  )
}
