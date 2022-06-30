const filterReducer = (state, action) => {
    switch (action.type) {
      case 'GET_ALL_PRODUCTS':
        return {...state,products:action.payload};
      case "LOW_TO_HIGH":
        return {
          ...state,
          sortBy:action.type
        }
      case "HIGH_TO_LOW":
        return {
          ...state,
          sortBy:action.type
        }    
      case 'CATEGORY':
        return state.category.includes(action.payload)? 
        { ...state,category:[...state.category.filter(item=> item !== action.payload)]}
           : {...state, category:[...state.category,action.payload]}
      case "RATINGSS":
        return {
          ...state,
          rating:action.payload
        }
      case "PRICE":
        return {
          ...state,
          range:action.payload
        }
      case 'CLEAR':
        return {
          ...state,
          sortBy:'',
          category:[],
          rating:null ,
          range:'' 
        }
      default:
        return state;
    }
  };
  export { filterReducer };