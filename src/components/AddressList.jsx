import React from 'react';
import { useAddress } from '../contexts/MainProvider';
import { AddressCard } from './AddressCard';
import nodata from '../assets/nodata.svg';

export function AddressList() {
    const{addressState,setIsModalOpen} = useAddress();
    const{addressList} = addressState
  return (
    <div style={{padding:'4rem 1rem'}}>
        <button className='btn new-btn' onClick={()=>setIsModalOpen(true)}>
            <i className="fas fa-plus"></i> add new address
        </button>
        {addressList.length >0 ?
        (<div className='addresses'>
            <h5 className='h6 add-heading'>Saved addresses</h5>
            <div className='address-list'>
                {
                    addressList.map(address=>(
                        <AddressCard
                        address={address}
                        key={address.addressId}                       
                        />
                    ))
                }
            </div>
        </div>)
        : (
            <div className='empty-cart'>
                <img src={nodata} alt='addresses'/>
                <span className='text-sm gray-text'>No addreses found, please add one!</span>
            </div>
        )
        }
    </div>
  )
}
