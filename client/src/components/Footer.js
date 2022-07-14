import React from 'react'
import '../Style.css'



const Footer = () => {
  const navigate_fb = () => {
    window.open('https://www.facebook.com/Siilk.tn')
  }
  const navigate_insta = () => {
    window.open('https://www.instagram.com/siiilk.tn/')
  }
  const navigate_youtube = () => {
    window.open('https://www.youtube.com/')
  }
  return (
    <footer>
      <div className='divo'><div className='Information-footer'>
            <h2 className='fontf'>INFORMATION</h2>
           <p className='parag'>À propos</p>
          <p className='parag'>Conditions Générales de Vente</p>
       <p className='parag'>Politique de Confidentialité</p>
            <p className='parag'>Mode de paiement</p> 
        </div>
        <div className='ligne'>
        </div>

        <hr className='linee'></hr>
        <div className='Info-Contact-footer'>
            <h2 className='fontf2'>INFORMATIONS DE CONTACT</h2>
                <div className='fonty' style={{display:'flex'}}>
                <img className="iconzy" src="https://www.linkpicture.com/q/add_5.png" alt="img"/><p className='parag'>Sousse Ezouhour rayhann n°54</p>
                </div>
                <div style={{display:'flex'}}>
                <img   className="iconzy" src="https://www.linkpicture.com/q/phone_8.png" alt="img" /><p className='parag'>(+216) 58926139</p>
                </div>
                <div style={{display:'flex'}}>
                <img  id="maile" src="https://www.linkpicture.com/q/mmm_5.png" alt="img" /><p className='parag1'>TunisieSiilk@gmail.com</p>
                </div>
                <div style={{display:'flex'}}>
                <img  className="iconzy1" src="https://www.linkpicture.com/q/clock_5.png" alt="img" /><p className='parag'>7 jours sur 7,
                Du Lundi Au Samedi: 08h00 à 19h00
                Dimanche: 09h00 à 15h00</p>
                </div>

            
        </div></div>
        
        <div className='divy'> 
        
          <div className='Suivez-footer'>
            <h2 className='fontf3'>SUIVEZ NOUS</h2>
           
        <img  onClick={navigate_fb} className="iconz" src="https://www.linkpicture.com/q/fbi.png" alt="img" />
         <img   onClick={navigate_insta} className="iconz" src="https://www.linkpicture.com/q/instagrame.png" alt="img"/>
           <img   onClick={navigate_youtube} className="iconz" src="https://www.linkpicture.com/q/yt_17.png" alt="img" />
            </div>
            <div className='divis'><hr className='liny'></hr></div>
            
        </div>
       
       
       
       






    </footer>
  )
}

export default Footer