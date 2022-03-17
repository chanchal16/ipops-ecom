const filterReducer = (state, action) => {
    console.log("action", action);
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
      case "All":
        return [...state];
      case 'EYEGLASSES':
        return {
          ...state,
          category:{...state.category,eyeglasses:!state.category.eyeglasses}
        };
      case 'COMPUTERGLASSES':
        return {
          ...state,
          category:{...state.category,computerglasses:!state.category.computerglasses}
        }
      case 'SUNGLASSES':
        return {
          ...state,
          category:{...state.category,sunglasses:!state.category.sunglasses}
        }
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
          category:{eyeglasses:false,computerglasses:false,sunglasses:false},
          rating:null ,
          range:'' 
        }
      default:
        return state;
    }
  };
  export { filterReducer };