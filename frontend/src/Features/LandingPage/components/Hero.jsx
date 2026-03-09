 import React from 'react'
 import Aiimg3 from '../../../assets/aiimg3.jpeg'
 import   '../styles/Hero.css'
 
function Hero() {
  return (
    <div className="container">
      <div className="hero-text">

        <h1 className="hero-heading"> 
          <span  className="hero-heading1">  Learn Tech And  AI</span>
            <br/>
           
               <span  className="hero-heading1"> From Real Developers</span>
          
          
        </h1>

          <p className="hero-description">Discover and share knowledge with our community of learners and educators.</p>
        <div className="hero-Actionbuttons" >
        <button className="hero-Actionbutton1"> Start Reading </button>
        <button className="hero-Actionbutton2"> Explore Ai </button>
        </div>
      
          </div>
            <img src={Aiimg3} alt="ai-image"  className="hero-image1"/>

      
       
    </div>
   
  )
}

export default Hero
