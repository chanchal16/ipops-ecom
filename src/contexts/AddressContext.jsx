import React,{useState,useContext,createContext,useReducer} from 'react';
import { addressReducer } from '../reducers/addressReducer';

const AddressContext = createContext()

const initialstate = {
  addressList:[],
  selectedAddress:''
}
function AddressContextProvider({children}) {
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [edit,setEdit] = useState(null);
  const[addressState,addressDispatch] = useReducer(addressReducer,initialstate)

  const valuesObj = {isModalOpen,setIsModalOpen,edit,setEdit,addressState,addressDispatch}
  return (
    <div>
        <AddressContext.Provider value={valuesObj}>
            {children}
        </AddressContext.Provider>
    </div>
  )
}
const useAddress = ()=>useContext(AddressContext)
export {AddressContextProvider,useAddress}