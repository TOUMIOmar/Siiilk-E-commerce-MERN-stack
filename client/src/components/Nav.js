import React, { useState } from 'react'
import '../Style.css'

const Nav = () => {
    const[btnOpenstore,setbtnOpenstore]=useState("btn-Openstoren");
    const[btnOurstore,setbtnOurstore]=useState("btn-Ourstore");
    const animationbtnOpenstore=()=>{
        setbtnOurstore("btn-Ourstoren");
        setbtnOpenstore("btn-Openstore");
        
    }
    const animationbtnOurnstore=()=>{
        setbtnOpenstore("btn-Openstoren");
        setbtnOurstore("btn-Ourstore");
    }
    
    
  return (

  <nav className='nav'>
       <button className={btnOurstore} onClick={animationbtnOurnstore}>NOTRE MAGASIN</button>
       <button className={btnOpenstore} onClick={animationbtnOpenstore}>MAGASIN OUVERT</button>
    </nav>
  );
}

export default Nav