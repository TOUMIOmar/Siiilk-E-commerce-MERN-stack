
import '../Partenair/Dashbordpar.css'
import Navdashboardpar from './Navdashboard-par'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './form-partenaire.css'

const Dashboardparview4 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mpey2mh', 'template_4tzndwr', form.current, 'Y6H9sbnI4orVgirFJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  const [abc,setabc]=useState('')
  const activeanimation = () => {
    (abc==='')? setabc('is_active') : setabc('')
    alert("Votre message a été envoyé avec succès !");
  }
  
  return (
    <div className='dash-board-partenaire'>
    <Navdashboardpar/>
    <div className='dash-board-views'>
        
    <div className='part2dash'>



    <div className="container-form">

      <h1>Envoyer un mail</h1>
      <form ref={form} onSubmit={sendEmail}>
      <label>E-mail:</label>
      <input type="email" name="user_email" />
      <div className="text-space">
      <label>Message:</label>
      <input  className='fixmyimput' type="text" name="message" />
      </div>


      <div className="wrapper-envoyeremail">
  <button type="submit" value="Send" className={abc} onClick={activeanimation}>
    <span>Envoyer</span>
    <div className="success">
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox="0 0 29.756 29.756"
        style={{ enableBackground: "new 0 0 29.756 29.756" }}
        xmlSpace="preserve"
      >
        <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
      </svg>
    </div>
  </button>
</div>
      
      
    </form> 
    </div>
    </div>

  
    </div>
</div>
  )
}

export default Dashboardparview4