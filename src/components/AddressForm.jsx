import React,{useState,useEffect} from 'react';
import { useAddress,useAuth } from '../contexts/MainProvider';
import { addAddress} from '../services/addressServices';
import '../styles/address.css';
import { users } from '../backend/db/users';
import { toast } from "react-toastify";

export function AddressForm() {  
    const {token} = useAuth()
    const{addressDispatch,isModalOpen,setIsModalOpen,edit,setEdit} = useAddress();
    const defaultAddress = {
        addressId:new Date().getTime(),
        name:'',
        phone:null,
        street:'',
        city:'',
        state:'',
        country:'',
        pincode:null
    }
    const [form,setForm] = useState(defaultAddress)
    // handle dummy form data
    const dummyAddressHandler = ()=>{
        setForm(users[0].address[0]);
    }

    const onChangeHandler = (e,fieldName)=>{     
        setForm((prev)=>({...prev,[fieldName]:e.target.value}))
    }
    
    const handleForm = async(e)=>{       
        e.preventDefault();
        if(form.name !=='' && form.city!==''){
        edit? await addAddress(token ,addressDispatch,form) : await addAddress(token ,addressDispatch,form)
        setEdit(null)
        setForm(defaultAddress);
        setIsModalOpen(false)
        }else{
            toast.warn('please fill the fields')
        }
    }
    // reset form on cancel
    const resetHandler = ()=>{
        setEdit(null);
        setForm(defaultAddress);
        setIsModalOpen(false)
    }

    useEffect(() => {
      if(edit){
          setForm(edit)
      }   
    }, [edit])
   

  return (
   isModalOpen && ( <div className='address-container '>
        <form className='address-form ' onSubmit={handleForm}>
            <h3 className='h5 center-text gray2-text'>Add/Edit Address</h3>
            <div className='input-grp d-flex'>
                <input type='text' className="input-field" placeholder='Name' required
                 value={form?.name} name='name' onChange={(e)=>onChangeHandler(e,'name')} />
                <input type='number' className="input-field" placeholder='Mobile no' required
                 value={form?.phone} name='phone' onChange={(e)=>onChangeHandler(e,'phone')}/>
            </div>
            <div className='input-grp street'>
            <input type='text' className="input-field " placeholder='Street' required
            name='street' value={form?.street} onChange={(e)=>onChangeHandler(e,'street')}/>
            </div>
            <div className='input-grp d-flex'>          
                <input type='text' className="input-field" placeholder='City' required
                name='city' value={form?.city} onChange={(e)=>onChangeHandler(e,'city')}/>
                <input type='text' className="input-field" placeholder='State' required
                name='state' value={form?.state} onChange={(e)=>onChangeHandler(e,'state')}/>
            </div>
            <div className='input-grp d-flex'> 
                <input type='text' className="input-field" placeholder='Country' required
                name='country' value={form?.country} onChange={(e)=>onChangeHandler(e,'country')}/>
                <input type='number' className="input-field" placeholder='Pincode' required
                name='pincode' value={form?.pincode} onChange={(e)=>onChangeHandler(e,'pincode')}/>
            </div>
            <div className='form-btns'>
                <button className='btn dummy-btn' onClick={dummyAddressHandler}>Add dummy address</button>
                <div className='buttons'>
                <button className='button accent-btn' >save</button>
                <button className='button primary-btn' onClick={resetHandler}>cancel</button>
                </div>
            </div>
        </form>
    </div>)
  )
}
