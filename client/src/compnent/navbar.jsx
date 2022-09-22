import React from 'react'
import agim2 from '../compnent/assets/images/agim2.png'
import { Link } from 'react-router-dom'
import './assets/css/App.css'
import Dropdown from '../compnent/dropdown'
import DropdownS from '../compnent/dropdownS'
export default function navbar() {
  return (
    <div>
    <nav>
    <div class="nav-wrapper ">
      <Link to={'/'} class="brand-logo"><img src={agim2} alt=" " width={74}/></Link> 
      {/* <Link to={'/'} class="brand-logo">AGIM</Link> */}
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Dropdown/>  </li>
        <li><pre>  </pre></li>
        <li><Link to={'/Gestion'}></Link></li>
        <li>  <DropdownS/>  </li>
        <li><Link to={'/Signin'}>Connecter</Link></li>
        <li><Link to={'/Gestion'}></Link></li>
        <li><Link to={'/Gestion'}></Link></li>
       
         


        
      </ul>
    </div>
  </nav></div>
  )
}
