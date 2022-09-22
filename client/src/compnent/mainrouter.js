import React from 'react'
import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Acceuil from '../pages/acceuil'
import Bib from '../pages/Bib'
import Welcome from '../pageSignIn/welcome'
import GestionMateriel from '../pageSignIn/GestionMateriel'
import Doc1 from '../pages/doc1'
import Doc2 from '../pages/doc2'
import Doc3 from '../pages/doc3'
import Form from '../pages/form'
import Signin from '../pages/Signin'
import Form2 from '../pages/form2'
import WelcomeSiege from '../pageSignIn/page sign in Siege/welcomeSiege'
import '../PrivateRoute'
import PrivateRoute from '../PrivateRoute'
import '../privateRouteS'
import PrivateRouteS from '../privateRouteS'
import Communiquer from '../pageSignIn/communiquer'
import Newpassword from './Newpassword'





export default function () {
  const [nom,setNom]=useState("");
  return (
<div>
    <Routes>
        <Route path='/' element={<Acceuil/> }/>  
        <Route path='/' element={<Acceuil/> }/>
        <Route path='/welcome' element={<PrivateRoute>
          <Welcome nom={nom} setNom={setNom}/>
         </PrivateRoute>}/>
         <Route path='/bib' element={<Bib/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/gestion' element={<PrivateRoute><GestionMateriel /></PrivateRoute>}/>
        <Route path='/doc1' element={<Doc1/>}/>
        <Route path='/doc2' element={<Doc2/>}/>
        <Route path='/doc3' element={<Doc3/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/form2' element={<Form2/>}/>
        <Route path='/reset/:token' element={<Newpassword/>}/>
        <Route path='/communiquer' element={<PrivateRoute><Communiquer /></PrivateRoute>}/>
        <Route path='/welcomeSiege' element={<PrivateRouteS><WelcomeSiege/></PrivateRouteS>}/>
        
        {/* <Route path='/decouvrir' element={<Decouvrir/> }/> */}
       
        
        
        
        



       
    </Routes>
 </div>
  )
}
