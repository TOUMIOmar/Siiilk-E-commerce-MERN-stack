import React from 'react'
import '../Partenair/Dashbordpar.css'
import Navdashboardpar from './Navdashboard-par'
import  {useSelector} from 'react-redux';
import  Scroll  from '../Scroll'




const Dashbordparview1 = () => {
  const {userInfo}= useSelector(state =>state.user);

  return (   
    < div className='dash-board-partenaire'>
        <Navdashboardpar/>
         <Scroll/>
        

        <div className="user-box first-box">
        <div className="activity card-partenaire" >
          <div className="tit">Activités Partenaires</div>
          <div className="subtitle">Faites votre propre design et gagnez de l'argent !! Sois créatif</div>
          <div className="activity-links">
            <div className="activity-link active">Partenaire actuel</div>
            <div className="activity-link notify">Demande de Partenaire</div>
          </div>
          <div className="destination">
            <div className="destination-card">
              <div className="destination-profile">
                <img className="profile-img" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="" />
                
              </div>
              <div className="destination-points">
                <div className="point">Bienvenu {userInfo.name}</div>
                <div className="sub-point">Adresse du partenaire</div>
              </div>
            </div>
          </div>
        </div>
        <div className="discount card-partenaire">
          <div className="tit">Offres de réduction</div>
          <div className="discount-wrapper">
            <div className="discount-info">
              <div className="subtitle">La meilleure offre est :</div>
              <div className="subtitle-count">35.900 DT</div>
              <div className="subtitle">Distance:</div>
              <div className="subtitle-count dist">Adresse du partenaire</div>
            </div>
            <div className="discount-chart">
              <div className="circle">
                <div className="pie">
                  <svg>
                    <circle cx={60} cy={60} r={50} />
                  </svg>
                </div>
                <div className="counter">20%</div>
              </div>
            </div>
          </div>
          
          <div className="button offer-button">Get Offer</div>
        </div>
         </div> 
    
    </div>

  )
}

export default Dashbordparview1