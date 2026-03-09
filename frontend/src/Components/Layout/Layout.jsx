import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'
// import Footer from '../../Pages/Footer.jsx'
import './Layout.css'
 
 


function Layout() {
  return (
    <div className="Layout"> 
          <Navbar /> 
            <main className="content">
                <Outlet/>
            </main>
             
           
            {/* <Footer className="footer">
                this is footer
                </Footer> */}
        
    </div>
  )
}

export default Layout

