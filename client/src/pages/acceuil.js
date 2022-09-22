import React, { useState } from 'react'
import Navbar from '../compnent/navbar'
import Agacc from '../compnent/assets/images/agacc.jpg'
import gauche from '../compnent/assets/images/gauche.png'
import droite from '../compnent/assets/images/droit.png'
import '../compnent/assets/css/Acceuil.css'
import MuiCard from '../compnent/MuiCard'
import MuiCard2 from '../compnent/MuiCard2'
import MuiCard3 from '../compnent/MuiCard3'
import { Grid } from '@mui/material'

export default function Acceuil() {
  const [isReadMore,setIsReadMore]=useState(false)
  return (
    <div className="all">
        <Navbar/>
        <h3 class="def">AGIM : ASSOCIATION GÉNÉRALE DES INSUFFISANTS MOTEURS</h3>
        <div class="tout">
        <h3><img src={gauche} alt ="guillemets gauche" width={20}/>  L'impuissance est l'incapacité de l'esprit , <br></br> pas du corps <img src={droite} alt ="guillemets droite" width={20} /></h3>
        <div class="image">
        <img src={Agacc} alt ="soura" width={900} style={{display:'block',
postion:'center',
top :' 50%',
left: '50%',
}} /> 
</div>
<br/>
<br/>
<div>
<Grid container >
  <Grid item xs={3.7}>
   <MuiCard/></Grid>
   <Grid item xs={3.7}><MuiCard2/></Grid>
  
  <Grid item xs={3.7}><MuiCard3/></Grid>
  
</Grid></div>

<hr></hr>
      <div className='container'>
      <p>Contactez-nous</p>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      
      <div class="social">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <pre> <a href="https://www.facebook.com/AGIM.BK" class="fa fa-facebook"></a>   <a href="tel:+21698337607" class="fa fa-phone"></a>   <a href="mailto:abdelbasset.ghazel@gmail.com" class="fa fa-envelope"></a></pre> </div>
       </div>
       </div>
       </div>
  )
}
