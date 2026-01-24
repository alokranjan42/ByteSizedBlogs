import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

function Card({src,title,desc}) {
  return (
    <>
    
  <div className="cards">
   
  <h3  className="card-heading">{title}</h3>
   <img src={src}  className="img"/>
  
   
   <p className="para-card">{desc}</p>
   <Link to={`/{}`}>read more</Link>
   </div>
    
 
   </>
  )
}

export default Card