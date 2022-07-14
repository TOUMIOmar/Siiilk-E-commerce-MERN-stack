import React from "react";
import CustomPopup2 from "../Pop up/CustomPopup2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getProducts, deleteProduct } from "../../actions/productActions";
import Dashbord from "./Dashbord";
import ProoductEdit from "./ProductEdit";


export const Dash = () => {
    const dispatch = useDispatch();
  const { productList, loading } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
{loading &&<p>Loading ...</p>}
{productList.map((el)=> (
    <>
    <h4>{el.title}</h4>
    <h6>{el.desc}</h6>
    <img src={el.image}width='200'alt='product img'/>
    <h6>{el.price}</h6>
    <ProoductEdit product={el} />
    </>   ))}
    </div>
  );
};

export default Dash;
