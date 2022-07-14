import React from 'react'
import "../admin/productedit.css";
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import { updateProduct as updateProductAction } from "../../actions/productActions";

const ProductEdit = ({product}) => {
    const [modal, setModal] = useState(false);

     const popupCloseHandler = (e) => {
       setModal(e);
      };
    const dispatch = useDispatch();
     const { register, handleSubmit , reset } = useForm({defaultValues:{...product}})
    const [file, setFile] = useState()
    const updateProduct = (data) => {
     dispatch(updateProductAction({...data, file}));
     reset();
     alert("Votre produit a été modifié avec succès !") }
     
  return (
    <div className='ok'>
        <form onSubmit={handleSubmit(updateProduct)}>
        <div className="formz-style-n">
        <div className="formz-style-nn">
            <label htmlFor="fname"> Produit:</label><br />
            <input type="text" id="title-n" name="fname" {...register('title')} required   /><br />
            <label htmlFor="description">Description:</label><br />
            <input type="text" id="description-n" name="lname" {...register('desc')} required  /><br /><br />
            <label htmlFor="qty"> Quantiter:</label><br />
            <input type="Number" id="qty-n" name="fname" {...register('qty')} required  /><br />
            <label htmlFor="price">Prix:</label><br />
            <input type="Number" id="price-nn" name="lname"  {...register('price')} required /><br /><br />
            <label htmlFor="image">Image</label><br />
            <input id="image-n" type="file" accept='image/*' onChange={(e)=>setFile(e.target.files[0])}   /><br /><br />
            <input id="button-n" type="submit" defaultValue="Submit" /></div></div>
          </form>
              
</div>
    );
};

export default ProductEdit;