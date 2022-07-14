import React from "react";
import { Link } from 'react-router-dom';
import "../components/shoppingcart.css"
import {useState,useEffect} from 'react'
const ShoppingCart = ({prop}) => {


  const [visibility, setVisibility3] = useState(false);
  const [arrayofId, setarrayofId] = useState([]);
  const [Total, setTotal] = useState();
  const popupCloseHandler = (e) => {
    setVisibility3(e);
  };




useEffect(() => {
  setarrayofId(JSON.parse(localStorage.getItem('basket'))) ;
  
})
useEffect(()=>{
  let number =0 ;
  for(let product of arrayofId) {
    number += product.qty * product.price;
  }
  setTotal(number)
})



const saveBasket=(basket)=> {
  localStorage.setItem('basket', JSON.stringify(basket));
}
const getBasket=()=>{
  let basket =localStorage.getItem('basket');
  if(basket == null){
    return [];

  }
  else {
    return JSON.parse(basket);
  }
} 


 const removeFromBasket=(product)=> {
   let basket = getBasket();
    basket = basket.filter(p =>p._id != product._id);
    saveBasket(basket);
 }











 

  return (
 <div className="night"> 
 <section className="container-shopcart-2 content-section-2">
    <a name="Votremagasin"></a>
    <h2 className="section-header-2">Panier</h2>
    <div className="cart-row-2">
        <span className="cart-item-2 cart-header-2 cart-column-2">Produit</span>
        <span className="cart-price-2 cart-header-3 cart-column-3">Prix</span>
        <span className="cart-quantity-2 cart-header-3 cart-column-3">Quantité</span>
    </div>
    
   {
   arrayofId.map(element => { 
 return     ( 
  <div className="cart-items-2">
  <div className="cart-item-2 cart-column-2">
  <img className="cart-item-image-2" src={element.image} style={{width:100, height:100}} alt=""/>
  <span className="cart-item-title-2">{element.title}</span></div>
 
  

<div className="cart-quantity-4 "><label className="prix-2">{element.price}DT</label>
  <input className="cart-quantity-input-2" type="number"   onChange={(e)=> {
     let basket = getBasket();
     let foundProduct = basket.find(p =>p._id == element._id);
     if(foundProduct !== undefined) {
       foundProduct.qty = parseInt(e.target.value);
      //let newbasket =basket.filter(p =>p._id == element._id)
       if(foundProduct.qty <= 0){
         removeFromBasket(foundProduct);
       }else {
         
         basket.filter(p =>p._id == element._id).push(foundProduct);
        
         saveBasket(basket);
         
       }
     }
    
     
  }}/>
</div>
 <button id="btnn-danger-2" onClick={()=>removeFromBasket(element)}>Retirer</button> 

</div>  ) 
   })
    
    } 
    
    <div className="cart-total-2">
        <strong className="cart-total-title-2">Total :</strong>
        <span className="cart-total-price-2">{Total} DT</span>
    </div>
    <div className="verifed">
      <Link to='/order' ><button  onClick={popupCloseHandler} id="btnn-shopcart-2" type="button">Vérifier</button></Link>
      </div>
</section></div>
   
    
    
    
  );
}
export default ShoppingCart;
