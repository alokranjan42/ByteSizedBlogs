 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup.jsx';
import Login from  './Pages/Login.jsx'
import Home from  './Pages/Home.jsx'
import Dashboard from  './Pages/Dashboard.jsx'
import PrivateRoute from "./Components/PrivateRoute.jsx";
import Layout from './Components/Layout/Layout.jsx'
import Homee from './Pages/homee.jsx'
import Bloginput from './Pages/Bloginput.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Layout />} >
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Bloginput/>} />
        <Route path="/homee" element={<Homee/>} />
      

      
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}
