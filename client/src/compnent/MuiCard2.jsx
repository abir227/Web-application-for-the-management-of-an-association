import { Box,Card,CardContent, Typography,Button} from "@mui/material"

import React from "react"
import { useState } from "react"
import useCollapse from 'react-collapsed'


const MuiCard2 = () => {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <Box width='300px'>
    <Card >
       <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
        A propos d'AGIM
        </Typography>
        <Typography variant='body2' color='text.secondary'>
        L'Association Générale des Insuffisants Moteurs (AGIM) est une ONG qui a été créée le 1er Août 1973 conformément à la loi 59-154 du 7 novembre 1959 sur les associations,

        </Typography>
      
       </CardContent>
       <Button {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })} size="small" 
        >{isExpanded ? 'Collapse' : 'Voir Plus'}</Button>
        
      <section {...getCollapseProps()}> et a obtenu son visa sous le no 4126 du 1-08-1973.
                L'AGIM est l'une des plus grandes associations de personnes handicapées en Tunisie.
                Elle a été reconnue d'Intérêt National par décret 77-145 du 9 Février 1977.</section>
    </Card>
    </Box>
  )
}

export default MuiCard2