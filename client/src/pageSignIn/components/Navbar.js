import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import M from 'materialize-css'
import { Button } from '@mui/material';
export default function(){
    const nav=useNavigate();
    function Navigate(){
        nav('/signin')
        
    }
  return (
    <div><nav>
    <div class="nav-wrapper">
      <Link to={'/'} class="brand-logo">AGIM</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
       
        {/* <li><Link to={'/Espace'}>Espace d'échange</Link></li> */}
        <li> 

  <Button variant="outlined" onClick={()=>{
            localStorage.clear()
         Navigate()

        }
    } type="submit" color="error">
  se Deconnecter

</Button>
</li>
      </ul>
    </div>
  </nav></div>
  )
}