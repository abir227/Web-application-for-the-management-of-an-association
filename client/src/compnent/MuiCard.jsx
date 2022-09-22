import { Box,Card,CardContent, Typography,Button,CardActions} from "@mui/material"
import React from "react"
import useCollapse from 'react-collapsed'
import { useState } from "react"

const MuiCard = () => {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })


  const [cont,setCont]= useState("Les troubles moteurs regroupent les troubles du développement des coordinations motrices, les mouvements stéréotypés et les tics.")

    return (
    <Box width='300px'>
    <Card >
       <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
        Aperçu général
        </Typography>
        <Typography variant='body2' color='text.secondary'>
         {cont}
        </Typography>
        
       </CardContent>
       <CardActions>
        <Button {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })} size="small" 
        >{isExpanded ? 'Collapse' : 'Voir Plus'}</Button>
        
      <section {...getCollapseProps()}> Dans les troubles du développement des coordinations,l’enfant présente un retard manifeste dans la mise en place des coordinations nécessaires à l’adaptation au quotidien. Les difficultés sont sensibles au niveau de l’acquisition des comportements d’autonomie personnelle (habillage par exemple), dans les activités scolaires et de loisirs – 5 à 6 p. 100 des enfants entre cinq et onze ans présentent ce type de difficultés. Les garçons sont plus souvent atteints que les filles(2 à 7 garçons pour 1 fille). Les pathologies associées les plus fréquentes sont le déficit d’attention avec ou sans hyperactivité et l’autisme de haut niveau.Les mouvements stéréotypés sont des comportements répétitifs, rythmés qui n’ont pas de but évident. Ils peuvent entrer en concurrence avec les autres comportements, ce qui nuit au développement des compétences. Ils apparaissent précocement et interfèrent avec l’adaptation. Ils sont souvent présents dans des formes sévères de déficiences intellectuelles et peuvent être associés à des automutilations.Les tics correspondent soit à des mouvements brefs et involontaires (tics moteurs), soit à l’émission de sons ou de cris de manière explosive (tics vocaux). Ces sons peuvent se transformer en verbalisations impulsives à caractère injurieux comme dans le syndrome de Gilles de la Tourette.Les troubles du développement, depuis les années 2010 plus couramment appelés troubles neurodéveloppementaux, touchent donc différents aspects du comportement adaptatif. Ils doivent faire l’objet de rééducations visant l’amélioration des symptômes et, lorsque cela est indiqué, d’une prise en charge psychologique destinée à atténuer le retentissement émotionnel des troubles et (ou) à aider la personne à mieux vivre avec ses difficultés.Dans AGIM on essaye de prendre soin des personnes qui sont en situation d'handicap moteur et on essaye d'alléger leurs souffrances et les intégrer dans notre société.</section>
       </CardActions>
    </Card>
    </Box>
  )
}

export default MuiCard
