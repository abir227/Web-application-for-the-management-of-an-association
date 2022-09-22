import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../compnent/assets/css/welcomeSiege.css'
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import Sidebar from './Sidebar'
import Card1 from './card1';
import Card2 from './card2';
import { Grid } from '@mui/material'
export default function WelcomeSiege() {

   
    const nav = useNavigate()
    const [Benevole, setBenevole] = useState([])
    const [Membre, setMembre] = useState([])
    function Navigate() {
        nav('/signin')
    }

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

           <div>  <Button variant="outlined" onClick={()=>{
            localStorage.clear()
         Navigate()

        }
    } type="submit" color="error">
  se Deconnecter

</Button></div>

    
    <br/>
      <Grid container>
    <Grid item xs={4}><Card1/> </Grid>
       <Grid item xs={4}><Card2/></Grid>
            <Button  variant="contained" onClick={()=>{
        nav('/gestion')
       }}>Gestion des matriels</Button >
       <Sidebar/>
      </Grid>
      
        


        </>
    )
}