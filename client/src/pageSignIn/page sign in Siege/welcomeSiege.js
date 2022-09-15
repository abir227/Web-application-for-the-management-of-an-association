import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../compnent/assets/css/welcomeSiege.css'

export default function WelcomeSiege() {
    const nav = useNavigate()
    const [messages, setMessages] = useState([])
    const [Benevole, setBenevole] = useState([])
    const [Membre, setMembre] = useState([])
    function Navigate() {
        nav('/signin')

    }
    useEffect(()=> {
        fetch('/myMessages').then(res => res.json()).then(result => {
            setMessages(result[0])
          
          })
    })
    useEffect(()=> {
        fetch('/listeBenevole').then(res => res.json()).then(result => {
            setBenevole(result)
          
          })
    })
    useEffect(()=>{
        fetch('/listeMembre').then(res=>res.json()).then(result=>{
          setMembre(result)
        })
    })
    
    // console.log(messages[0][1])
    return (
        <>

           <div><button class="btn waves-effect waves-light red" id='dec' type="submit" name="action"
            onClick={() => {
                localStorage.clear()
                Navigate()

            }
            }
        >Deconnecter
        </button></div>

      
        <table>
            <td><span><div className='card' id='mem'>
        <tr>
      <th>envoyer par:</th><th>messages:</th></tr>
     
       {
        messages.map(item=>{
            return(
                <tr>
                    <td>{item.postedBy}</td>
                    <td>{item.text}</td>
                </tr>)
            
        })
       }</div></span> </td>
       
       <td>
          <span> <div className='card' id='mem'> <tr><h5>benevole</h5></tr>
       {
        Benevole.map(item=>{
            return(
                <>
   
                <tr>
                    <td>{item.nom}</td>
                    <td>{item.prenom}</td>
                    <td>{item.email}</td>
                    <td>{item.numtel}</td>
                </tr>
                </>
            )
        })
       }
       </div></span> </td>
       <td>
        
        <div className='card' id='mem'>
       <tr><h5>membre</h5></tr>
       {
        Membre.map(item=>{
            return(
                <>
                
                <tr>
                    <td>{item.nom}</td>
                    <td>{item.prenom}</td>
                    <td>{item.email}</td>
                    <td>{item.numtel}</td>
                    <td>{item.branche}</td>
                </tr>
                </>
            )
        })
       }</div></td>
      </table>
      <button onClick={()=>{
        nav('/gestion')
       }}>Gestion des mat</button>

        </>
    )
}