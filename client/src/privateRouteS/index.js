import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import M from 'materialize-css' 
const jwt=localStorage.getItem('jwt')
const PrivateRouteS= (({children})=>{
    
    if (jwt==="qwcfdc5gledk7$"){
        
       return (children)

    }
    return <Navigate to={'/signin'}/>
    
})
export default PrivateRouteS;