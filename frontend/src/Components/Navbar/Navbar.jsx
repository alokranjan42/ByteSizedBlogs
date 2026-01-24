import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div style={{backgroundColor:"grey", height:"40px"}}>
    <div className="nav">
    <Link to="/" className="links">Home</Link>
    
    <Link to="/tech" className="links">Tech</Link>
    <Link to="/ai" className="links">AI</Link>
    <div className="buttons">
      <Link to="/create"  className="button-links">Post</Link>
    <Link to="/signup" className="button-links">Signup</Link> 
    <Link to="/login" className="button-links">Login</Link> 
    </div>
    </div>
    </div> 
     
    </>
    
  )
}

export default Navbar