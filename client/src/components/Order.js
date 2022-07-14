import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import '../components/order.css'
import {useEffect} from 'react'
import { Link} from 'react-router-dom'

export const Order = () => {
    const form = useRef();
    const domicile='domicile';
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_w0ayabx', 'template_r4gfzj5', form.current, 'Q8XIh0Ez_rUm4VTX0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const [abc,setabc]=useState('')
  const activeanimation = () => {
    (abc==='')? setabc('is_active') : setabc('')
    alert("Votre demande a été envoyé avec succès !")
  }
  const [Total, setTotal] = useState();
  const [arrayofId, setarrayofId] = useState([]);
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
  return (
    <div className='container-formz'>   
    <div className='order-view'>
    <div className='order-dash'>
    <div className="formp-style-5">
        <h1>FINALISATION DE LA DEMANDE</h1>
        <form ref={form} onSubmit={sendEmail}>
        <fieldset id="fildp">
          <legend className='legedp'>
            <span className="numberp">1</span> ADRESSE</legend >
            <label>Prénom*</label><br></br>
            <input  type="text"  name='user_prenom' required ></input><br></br>
           <label >Nom*</label><br></br>
            <input type="text"  name='user_nom' required ></input> <br></br>
            <div className='dd'><label>E-mail*</label><br></br>
            <input className="titlep" type="email"  name='user_mail' required ></input> <br></br>
              <label>Numéro du téléphone*</label> <br></br>
            <input className="titlep" type="tel"  name='user_num' required ></input> <br></br>
            <label>Adresse*</label> <br></br>
            <input  className='fixmyimput2' type="text" name='user_adresse' required ></input> <br></br>
            <label>Région/Ville*</label> <br></br>
            <input  className="titlep" type="text" name='user_reg' required ></input> <br></br></div>
            </fieldset>
            {
   arrayofId.map(element => { 
     let x=element.title;
     let y=element.qty;
     let z=Total;
 return     ( 
            <fieldset>
            <legend ><span ></span>Products</legend >
            <label>Nom</label> <br></br>
            <input type="text" name="product_name" value={x}></input> <br></br>
            <label>Quantiter</label> <br></br> 
            <input  name="product-qtq" type="text" value={y} ></input> <br></br>
            <label>Couleur*</label> <br></br>
            <input name="product-color" required ></input> <br></br>
          </fieldset>  ) 
   })
    } <fieldset><legend ><span ></span>Prix Total</legend >
    <input style={{fontSize:18,fontWeight:'bolder'}} type="text" name='product_prix' value={Total}></input> <br></br></fieldset>
            <fieldset>
            <legend className='legedp'><span className="numberp">2</span>Mode de livraison </legend >
            <input name="mode_liv" style={{fontSize:18,fontWeight:'bolder'}} className='lb' value=" A domicile"></input><br></br>
          </fieldset>
            <div className="order-envoyeremail">
<button id="env" type="submit" value="Send" className={abc} onClick={activeanimation}>
<span>Envoyer</span>
</button> <button className='res' type="reset"> Cancel</button>
</div>
    </form>
    </div>
    </div>
</div>
</div>
  )
}
 export default Order;