import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './Navbar.css'


function Navbar() {

  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/');
  }
  return (
    <>
    <div className="nav">
      <h1 className="heading-main" onClick={handleClick}>ByteSizeBlogs</h1>
    <div className="secondary-buttons">
    <Link to="/Home" className="secondary-button">Home</Link>
    
    <Link to="/tech" className="secondary-button">Tech</Link>
    <Link to="/ai" className="secondary-button">AI</Link>
    </div>

    <div className="primary-buttons">
    <Link to="/login" className="button-signin">Sign in</Link> 
    <Link to="/contact" className="button-contact">Contact Us</Link> 
   
    </div>
    
    </div> 
     
    </>
    
  )
}

export default Navbar