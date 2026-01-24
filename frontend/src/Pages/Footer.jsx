import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <>

      < div className="footer-container">
      <Link to="/contact" className="footer-links">Contact</Link>     
      <Link to="/tech" className="footer-links">Tech</Link>
      <Link to="/about" className="footer-links">About</Link> 
      <Link to="/ai" className="footer-links">Ai</Link>
      <h5 className="footer-heading">  Copyright@2025</h5>
    
       
    </div>
 </>
     
  )
}

export default Footer