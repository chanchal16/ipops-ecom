import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";

const filterContext = createContext();
const initialFilterState = {
    sortBy:'',
    products:[],
    category:[],
    rating:null ,
    range:'' 
}

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialFilterState);
 
  const providerItem = {filterState, filterDispatch}
  return (
    <filterContext.Provider value={providerItem}>
      {children}
    </filterContext.Provider>
  );
};
const useFilter = () => useContext(filterContext);
export { FilterProvider, useFilter };