import React, { useEffect, useState } from 'react'
//import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Title from './components/Title'
import Search from './components/Search'
import Choix from './components/Choix';
import Footer from './components/Footer';
import Partenaire from './components/Login/Partenaire'
import Slideshow from './components/Slideshow'
import Order from './components/Order'






import Notremagasin  from './components/Notremagasin'
import Magasinouvert  from './components/Magasinouvert'
import {Routes, Route} from "react-router-dom";
import Dashbordparview1 from './components/Partenair/Dashbordparview1';
import Dashbordparview2 from './components/Partenair/Dashbordparview2';
import Dashboardparview3 from './components/Partenair/Dashboardparview3';
import Dashboardparview4 from './components/Partenair/Dashboardparview4';
import ProtectRoute from './components/ProtectRoute'
import ProtectRouteadmin from './components/ProtectRouteadmin'



import LogAdmin from './components/admin/LogAdmin'
import Pagemain  from './components/admin/Pagemain'
import Request from './components/admin/Request'

import Upload from './components/admin/Upload'
import  ListPro  from './components/admin/ListPro'




import  {useDispatch ,useSelector} from 'react-redux';
import {  getProducts } from './actions/productActions'




function App() {

  const dispatch = useDispatch()
  useEffect (()=> {
    dispatch(getProducts())
  }, [])
  const x = [{desc:"" ,
  image:"" ,
categorie:""},
{}]

useEffect(()=>{
  if(JSON.parse(localStorage.getItem('basket'))==undefined){
    localStorage.setItem('basket',JSON.stringify([]))
  }

})
  const [omar,sami]=useState(x)
  useEffect(() => {
    const omar  = JSON.parse([localStorage.getItem('productList')]);
   if (omar) {
      sami(omar);
    }
  })

  useEffect(() => {
    localStorage.setItem('local',[])
  }, [])



  
  const Currnetpath=window.location.href;
  

  return (
    <div>
     {(Currnetpath !==("https://siilk.herokuapp.com/Comptepartenaire")
     &&Currnetpath !==("https://siilk.herokuapp.com/admin")
     &&Currnetpath !==("https://siilk.herokuapp.com/dashbord")
     &&Currnetpath !==("https://siilk.herokuapp.com/upload")
     &&Currnetpath !==("https://siilk.herokuapp.com/update")
     &&Currnetpath !==("https://siilk.herokuapp.com/request")
     &&Currnetpath !==("https://siilk.herokuapp.com/product")
     )?
       <Navbar pro={omar}/> : <></>
     }
    
    <Routes> 
      <Route path='/' element={<div><Slideshow/><Notremagasin pro={omar}/></div>}/>
      <Route path='magasinouvert' element={<Magasinouvert pro={omar}/>}/>
      <Route path='/:id' element={<Choix pro={omar}/> }/>
      <Route path='/magasinouvert/:id' element={<Choix pro={omar}/> }/>
      <Route path='/Comptepartenaire' element={<Partenaire/>}/>
      <Route path='/admin' element={<LogAdmin/>}/>
      <Route path='/order' element={ <Order/> }/>

      <Route element={<ProtectRoute/>}>
        <Route path='myspace' element={<div style={{marginTop:"20px"}}> <Dashbordparview1/> </div>}/>
        <Route path='/monprofile' element={<div style={{marginTop:"20px"}}> <Dashbordparview1/> </div>}/>
        <Route path='/envoyerunedemande' element={ <Dashbordparview2/> }/>
        <Route path='/mesdemande' element={ <Dashboardparview3/> }/>
        <Route path='/enjoyermail' element={ <Dashboardparview4/> }/>
      </Route>
      <Route element={<ProtectRouteadmin/>}>
        <Route path='/dashbord' element={<Pagemain/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/product' element={<ListPro/>}/>
      </Route>
  <Route path='/tryslide' element={<Slideshow/>}/>
  </Routes>
  {(Currnetpath !==("https://siilk.herokuapp.com/Comptepartenaire")
  &&Currnetpath !==("https://siilk.herokuapp.com/admin")
  &&Currnetpath !==("https://siilk.herokuapp.com/dashbord")
  &&Currnetpath !==("https://siilk.herokuapp.com/upload")
  &&Currnetpath !==("https://siilk.herokuapp.com/update")
  &&Currnetpath !==("https://siilk.herokuapp.com/request")
  &&Currnetpath !==("https://siilk.herokuapp.com/product")
  )?
       <Footer/> : <></>
     }
  </div>
  );
}

export default App;
