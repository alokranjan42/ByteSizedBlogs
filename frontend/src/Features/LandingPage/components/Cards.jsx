import React from 'react'
import '../styles/cards.css'

function Cards({id,src,title,desc,img}) {
  return (
    <div className="features-card">
        <div>
           <h3>{title}</h3>
         <img src= {img} alt="image" />
         <p>{desc}</p>
         <h4>hekko</h4>


        </div>

      
    </div>
  )
}

export default Cards
