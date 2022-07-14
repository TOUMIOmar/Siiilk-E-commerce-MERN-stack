import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  ADD_CART_FAILED,
} from './CartTypes';


// export const addToCart = () => async (dispatch) => {
//   try {
//     const res = await axios.get("http://localhost:5000/api/product/${proId}");
//     dispatch({ type: CART_ADD_ITEM, payload: res.data });
//   } catch (error) {
//     dispatch({ type: ADD_CART_FAILED, payload: error });
//   }
// };

  

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: id });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};