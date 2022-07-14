import axios from "axios";
import {
  GET_PRODUCT_FAILED,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_LOADING,
  ADD_PRODUCT_FAILED,
  DELETE_PRODUCT_FAILED,
  UPDATE_PRODUCT_FAILED
} from "./productTypes";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_LOADING });
    const res = await axios.get("http://localhost:5000/api/product");
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAILED, payload: error });
  }
};



export const addProduct = (productInfo) => async (dispatch) => {
  try {
    const form = new FormData();
    form.append("file", productInfo.file);
    form.append("upload_preset", "siilkomarsami");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/siilk/upload",
      form
    );
    productInfo.image = res.data.secure_url;

    await axios.post("http://localhost:5000/api/product", productInfo);
    dispatch(getProducts);
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAILED, payload: error });
  }
};

export const updateProduct = (productInfo) => async (dispatch) => {
  try {
    const form = new FormData();
    form.append("file", productInfo.file);
    form.append("upload_preset", "siilkomarsami");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/siilk/upload",
      form
    );
    productInfo.image = res.data.secure_url;
    await axios.put(`http://localhost:5000/api/product/${productInfo._id}`, productInfo);
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: UPDATE_PRODUCT_FAILED, payload: error });
  }
};

export const deleteProduct = (prodId) => async (dispatch) => {
  try {
  
    await axios.delete(`http://localhost:5000/api/product/${prodId}`);
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILED, payload: error });
  }
};
