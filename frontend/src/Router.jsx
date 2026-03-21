import React from 'react'
import { createBrowserRouter,BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Features/LandingPage/pages/LandingPage'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Features/Home/pages/Home.jsx'
import Login from './Features/Auth/components/Login.jsx'
import Tech from './Features/Tech/Pages/Tech.jsx'
import Ai from './Features/Ai/Pages/Ai.jsx'
 
 const router=createBrowserRouter([
  {
    path:"",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:"/tech",
        element:<Tech/>
      },
      {
        path:'/ai',
        element:<Ai/>
      }
       
    ]
  }

 ])
      
      


      export default router



 
