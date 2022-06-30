import axios from "axios";
// add new address
const addAddress = async(token,addressDispatch,newaddress)=>{
    try{
        const {data:{address}} = await axios.post('/api/user/address',{newaddress},
        {headers:{
            authorization: token
        }},);
        addressDispatch({type:'UPDATE_ADDRESS',payload:newaddress})
    }
    catch(err){console.error(err)}
}

// update address
const updateAddress = async(token,addressDispatch,addresss)=>{
    try{
        const {data:{address}} = await axios.post(`/api/user/address/${addresss.addressId}`,
        {headers:{
            authorization: token
        }}
        );
        addressDispatch({type:'UPDATE_ADDRESS',payload:addresss})
    }
    catch(err){console.error(err)}
}

// remove address
const removeAddress = async(token,addressDispatch,addressId)=>{
    try{
        const {data:{address}} = await axios.delete(`/api/user/address/${addressId}`,
        {headers:{
            authorization: token
        }}
        );
        addressDispatch({type:'REMOVE_ADDRESS',payload:addressId})
    }
    catch(err){console.error(err)}
}

export {addAddress,updateAddress,removeAddress}