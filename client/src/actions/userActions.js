import axios from "axios";
import { REGISTER_FAIL, REGISTER_SUCCESS,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT } from './types';
export const register = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/person/Register', userData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error });
  }
};



export const login = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/person/login', userData);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  
  } catch (error) {
    dispatch({ 
      type: LOGIN_FAIL, 
      payload: 
      error.response && error.response.data.msg
      ? error.response.data.msg
      : error.message,

    });
  }
};

export const logoutAction = () =>{
  return {
    type: LOGOUT
  }
}
