import {
    GET_PRODUCT_LOADING,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILED,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILED,
   
  } from "../actions/productTypes";
  
  const initState = {
    productList:JSON.parse(localStorage.getItem('productList')) ||{},
    loading: false,
    errors: null,
    
  };
  
  const productReducer = (state = initState, { type, payload }) => {
    switch (type) {
    case GET_PRODUCT_LOADING:
        
        return{...state, loading:true};
    case GET_PRODUCT_SUCCESS:
        localStorage.setItem('productList',JSON.stringify(payload));
        return{...state, productList: payload, loading: false, errors:false};
        
        case GET_PRODUCT_FAILED:
            return{...state, loading: false, errors: payload};
            // case DELETE_PRODUCT_SUCCESS:
            //   return {...state, productList: state.productList.filter((productList, id) => id !== payload ), loading: false };
            // case DELETE_PRODUCT_FAILED:
            //   return { loading: false, error: payload };
        default:
         return state;
    }
  };
  export default productReducer;
  
 