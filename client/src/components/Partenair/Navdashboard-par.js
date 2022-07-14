import React from 'react'
import '../Partenair/Dashbordpar.css'
import { Link } from 'react-router-dom'


const Navdashboardpar = () => {
  return (
    <div className='nav-dash-board-partenaire'>
          
            <div className='nav-links'>
            <div><Link style={{ textDecoration: 'none'}} className='flex-style-dashboard' to='/monprofile'><img  className="mai" src="https://www.linkpicture.com/q/user_22.png" alt='img'></img> <h3 className="titl">Mon profil</h3></Link></div>
            <div><Link style={{ textDecoration: 'none'}} className='flex-style-dashboard' to='/envoyerunedemande'><img className="mai"  src="https://www.linkpicture.com/q/envoyer.png" alt='img'></img><h3 className="titl">Envoyer une demande</h3></Link></div>
            <div><Link style={{ textDecoration: 'none'}} className='flex-style-dashboard' to='/enjoyermail'><img className="mai"  src="https://www.linkpicture.com/q/message.png" alt='img'></img><h3 className="titl">Envoyer un mail</h3></Link></div>
            </div>
    </div>
  )
}

export default Navdashboardpar