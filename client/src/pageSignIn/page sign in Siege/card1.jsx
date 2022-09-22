import { Box,Card,CardContent, Typography} from "@mui/material"
import React from "react"
import { useState,useEffect} from "react"


const Card1 = () => {
    const [Benevole, setBenevole] = useState([])
    useEffect(()=> {
        fetch('/listeBenevole').then(res => res.json()).then(result => {
            setBenevole(result)
          
          })
    })
  return (
    <Box width='400px'>
    <Card >
       <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
        Demande benevolat
        </Typography>
        <Typography variant='body2' color='text.secondary'>
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
        </Typography>
        
       </CardContent>
    </Card>
    </Box>
  )
}

export default Card1