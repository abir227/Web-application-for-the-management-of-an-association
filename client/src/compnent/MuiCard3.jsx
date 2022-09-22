import { Box,Card,CardContent, Typography} from "@mui/material"
import React from "react"


const MuiCard3 = () => {
  
  return (
    <Box width='300px'>
    <Card >
       <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
        Notre Mission
        </Typography>
        <Typography variant='body2' color='text.secondary'>
        AGIM a pour mission d’améliorer la vie des personnes ayant des insufisances moteur en finançant 
                adéquatement la recherche d’un traitement curatif,
                 en fournissant des services et en assurant un soutien constant.

        </Typography>
        
       </CardContent>
    </Card>
    </Box>
  )
}

export default MuiCard3