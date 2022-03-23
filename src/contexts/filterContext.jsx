import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";

const filterContext = createContext();
const initialFilterState = {
    sortBy:'',
    products:[],
    category:{eyeglasses:false,computerglasses:false,sunglasses:false},
    rating:null ,
    range:'' 
}

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialFilterState);
 
  const providerItem = {state,dispatch}
  return (
    <filterContext.Provider value={providerItem}>
      {children}
    </filterContext.Provider>
  );
};
const useFilter = () => useContext(filterContext);
export { FilterProvider, useFilter };