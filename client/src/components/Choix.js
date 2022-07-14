import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import '../Style.css'


const Choix = ({pro}) => {
    
    const {id}=useParams();
    const [findproduct,newfindproduct]=useState({})

    const [aze,setaze]=useState(0)

    
    useEffect(()=>{
      newfindproduct(pro.find((el)=>el._id=== id));
    },[])

    
 





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

    const addBasket=(product)=> {
     
      let basket = getBasket();
      let foundProduct = basket.find(p => p._id == product._id);
      if(foundProduct != undefined){
        foundProduct.qty++;
      }else{
        product.qty = 1;
        basket.push(product);
      }
 
   
      
      saveBasket(basket);
      alert('Votre produit à était ajouter avec succés')
    }





    



















  

    const [img,Setimg]=useState('https://www.linkpicture.com/q/100.2.png')

    const [img1,Setimg1]=useState('https://www.linkpicture.com/q/80.1.png')
    const changeimg1=()=>{
        Setimg(img1)
        Setimg1(img)
    }
    const [img2,Setimg2]=useState('https://www.linkpicture.com/q/20.2_1.png')
    const changeimg2=()=>{
        Setimg(img2)
        Setimg2(img)
    }
    const [img3,Setimg3]=useState('https://www.linkpicture.com/q/60.1.png')
    const changeimg3=()=>{
        Setimg(img3)
        Setimg3(img)
    }
    const [img4,Setimg4]=useState('https://www.linkpicture.com/q/70.1.png')
    const changeimg4=()=>{
        Setimg(img4)
        Setimg4(img)
    }
    const [img5,Setimg5]=useState('https://www.linkpicture.com/q/90.1.png')
    const changeimg5=()=>{
        Setimg(img5)
        Setimg5(img)
    }
    const [img6,Setimg6]=useState('https://www.linkpicture.com/q/80.1.png')
    const changeimg6=()=>{
        Setimg(img6)
        Setimg6(img)
    }

  return (
    <div className='alll'>
        <div className='seeproduct'>
        <img src={findproduct.image} alt="img"/>
        <div className='seeallproduct'>
        <img  onClick={changeimg1} src={img1} alt="img"/>
        <img onClick={changeimg2} src={img2} alt="img"/>
        <img onClick={changeimg3} src={img3} alt="img"/>
        <img onClick={changeimg4} src={img4} alt="img"/>
       <img  onClick={changeimg5} src={img5} alt="img"/>
        <img onClick={changeimg6} src={img6} alt="img"/>
        </div>
        </div>

        <div className='window'>
    <div className='maix-content'>
      <h1 className="tt">{findproduct.title}</h1>
      <h3 className="ecr1">MANTEAU MINIMALISTE EN COTON MÉLANGÉ</h3>
  <div className='description' id='description'>
  {findproduct.desc}
  </div>
        <div  className="select-style"> 
        <p className='ecr'>Couleur:</p>
        
        <div className="palette">
    <div className="a_palette_color"></div>
    <div className="a_palette_color"></div>
    <div className="a_palette_color"></div>
    <div className="a_palette_color"></div>
    <div className="a_palette_color"></div> 
    <div className="a_palette_color"></div> 
    <div className="a_palette_color"></div>
    <div className="a_palette_color"></div>
    <div className="a_palette_color"></div>
    <div className="a_palette_color"></div></div>  
    <div className='size-picker'>
    <p className='ecr'> Taille:</p>
  <div className='range-picker' id='range-picker'>
  <div className="fo-style">
  <form action='' className='fo'>
  <div className="fi">
          <ul className="che">
          <li className="chec">
            <input className="checkboxz-in" id="choice-0" name="choice" type="checkbox" defaultValue={0} />
            <label id="sel" className="checkboxz-la" htmlFor="choice-0">S</label>
          </li>
          <li className="chec">
            <input className="checkboxz-in" id="choice-1" name="choice" type="checkbox" defaultValue={1} />
            <label id="sel" className="checkboxz-la" htmlFor="choice-1">M</label>
          </li>
          <li className="chec">
            <input className="checkboxz-in" id="choice-2" name="choice" type="checkbox" defaultValue={2} />
            <label id="sel" className="checkboxz-la" htmlFor="choice-2">L</label>
          </li>
          <li className="chec">
            <input className="checkboxz-in" id="choice-3" name="choice" type="checkbox" defaultValue={3} />
            <label id="sel" className="checkboxz-la" htmlFor="choice-3">XL</label>
          </li>
          <li className="chec">
            <input className="checkboxz-in" id="choice-4" name="choice" type="checkbox" defaultValue={4} />
            <label  id="sel" className="checkboxz-la" htmlFor="choice-4">XXL</label>
          </li>
        </ul>
    </div>
    </form>
  </div>
 </div>
         
        </div>  
    </div>
           

          <div className='purchase-info'>
      <div className='price'>{findproduct.price} DT </div>
            <button className='bb' onClick={()=>addBasket(findproduct)}>AJOUTER AU PANIER</button>
        </div>
 </div></div>
 </div>
    
  )
}

export default Choix