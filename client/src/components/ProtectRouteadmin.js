import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import  {useSelector} from 'react-redux';

const ProtectRouteadmin = () => {
    const {isAuth,userInfo}= useSelector(state =>state.user);

  return (
    <div>
        {isAuth  && userInfo.role==="admin"? <Outlet/> : <Navigate to='/'/> }
        
    </div>
  )
}

export default ProtectRouteadmin