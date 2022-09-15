import React from 'react'
import Navbar from '../compnent/navbar'
import Agacc from '../compnent/assets/images/agacc.jpg'
import gauche from '../compnent/assets/images/gauche.png'
import droite from '../compnent/assets/images/droit.png'

import '../compnent/assets/css/Acceuil.css'

//import Card from '../compnent/card'

export default function acceuil() {
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
<p class='apercu'>Aperçu général </p> 
      <p> Les troubles moteurs regroupent les troubles du développement des coordinations motrices, les mouvements stéréotypés et les tics.
Dans les troubles du développement des coordinations, l’enfant présente un retard manifeste dans la mise en place des coordinations nécessaires à l’adaptation au quotidien. Les difficultés sont sensibles au niveau de l’acquisition des comportements d’autonomie personnelle (habillage par exemple), dans les activités scolaires et de loisirs – 5 à 6 p. 100 des enfants entre cinq et onze ans présentent ce type de difficultés. Les garçons sont plus souvent atteints que les filles (2 à 7 garçons pour 1 fille). Les pathologies associées les plus fréquentes sont le déficit d’attention avec ou sans hyperactivité et l’autisme de haut niveau.
Les mouvements stéréotypés sont des comportements répétitifs, rythmés qui n’ont pas de but évident. Ils peuvent entrer en concurrence avec les autres comportements, ce qui nuit au développement des compétences. Ils apparaissent précocement et interfèrent avec l’adaptation. Ils sont souvent présents dans des formes sévères de déficiences intellectuelles et peuvent être associés à des automutilations.
Les tics correspondent soit à des mouvements brefs et involontaires (tics moteurs), soit à l’émission de sons ou de cris de manière explosive (tics vocaux). Ces sons peuvent se transformer en verbalisations impulsives à caractère injurieux comme dans le syndrome de Gilles de la Tourette.
Les troubles du développement, depuis les années 2010 plus couramment appelés troubles neurodéveloppementaux, touchent donc différents aspects du comportement adaptatif. Ils doivent faire l’objet de rééducations visant l’amélioration des symptômes et, lorsque cela est indiqué, d’une prise en charge psychologique destinée à atténuer le retentissement émotionnel des troubles et (ou) à aider la personne à mieux vivre avec ses difficultés.
Dans AGIM on essaye de prendre soin des personnes qui sont en situation d'handicap moteur et on essaye d'alléger leurs souffrances et les intégrer dans notre société.
</p>
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
