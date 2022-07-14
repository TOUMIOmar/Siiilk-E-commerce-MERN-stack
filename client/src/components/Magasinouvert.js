import React, { useEffect, useState } from 'react'
import Card from './Card'
import Search from './Search'

const Magasinouvert = ({pro}) => {

const [adminproduct,newadminproduct]=useState([])
  useEffect(()=>{
    
    newadminproduct(pro.filter((el)=>el.categorie==="partenaire-product"))
  })

  const [searchPro, setSearchPro] = useState("")
  


  return (
    <div className='magasin-ouvert'>
      <div className="box" >
        <form name="search">
        <input  type="search" placeholder="Search" onChange={(e)=>setSearchPro(e.target.value)}/>
        </form>
            <i className="fas fa-search"></i>
      </div>
       <div className='flex-view card-margin-top' >
        {adminproduct.filter((el) => {
          if (searchPro==="") { 
            return el } 
            else if (el.title.toLowerCase().includes(searchPro.toLowerCase())) {
return el
}}).map((el, index) => { return ( <Card Card={el} key={index}/> )} )}

</div>

        
        
    
    
   </div>
  )
}

export default Magasinouvert