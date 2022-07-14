import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
  } from './CartTypes';
  
  const cartreducer = (cart = [], action) => {
    if (action.type === CART_ADD_ITEM) {
      let tempcart = cart.filter((item) => item.id === action.payload.id);
      if (tempcart < 1) {
        return [...cart, action.payload];
      } else {
        return cart;
      }
    }
    if (action.type === CART_REMOVE_ITEM) {
      return cart.filter((item) => item.id !== action.payload.id);
    }
    if (action.type === "INCREASE") {
      let tempcart = cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return tempcart;
    }
    if (action.type === "DECREASE") {
      let tempcart = cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return tempcart;
    }
    return cart;
  };
  export default cartreducer;