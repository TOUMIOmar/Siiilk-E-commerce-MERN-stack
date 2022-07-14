import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import  {useSelector} from 'react-redux';

const ProtectRoute = () => {
    const {isAuth,userInfo}= useSelector(state =>state.user);

  return (
    <div>
        {isAuth  && userInfo.role==="Partenaire"? <Outlet/> : <Navigate to='/'/> }
        
    </div>
  )
}

export default ProtectRoute