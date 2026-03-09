import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Features/LandingPage/pages/LandingPage'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Features/Home/pages/Home.jsx'

 
function App() {
  return (
    <div>
      
     < Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="/home" element={<Home/>}/> 
        
        </Routes>
      </Router>
    </div>
  )
}

export default App
