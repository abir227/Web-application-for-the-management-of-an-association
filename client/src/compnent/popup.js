import React, { useState } from 'react'
import M from 'materialize-css'
import'../compnent/assets/css/popup.css'
import { useNavigate } from 'react-router-dom'

export default function Popup({ open, Close }) {
  const navigate = useNavigate()
  const [identif, setIdentif] = useState('')
  function nav(){
   navigate('/welcomeSiege')
  }
  function connectSiege() {
    fetch('/connect', { method: "post", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: identif }) }).then(res => res.json()).then(result => {
      console.log(result)
      if (result === 'connected') {
        localStorage.setItem("jwt", "qwcfdc5gledk7$")
        M.toast({ html: "Connecté" })
        nav()
      }
    })
  }

  if (!open) {
    return null
  }

  return (
    <div className='overlay'>
      <div className='modalContainer'>
        <div className='modalRight'>
          <p className='closeBtn' onClick={Close}>X</p>
          <div className='Content'> <p>
            <input type={'password'} value={identif} placeholder="code securité" onChange={(e) => setIdentif(e.target.value)} />
          </p>
            <button className='bold' onClick={connectSiege}>connecter</button>
          </div>

        </div>

      </div>

    </div>

  )
}