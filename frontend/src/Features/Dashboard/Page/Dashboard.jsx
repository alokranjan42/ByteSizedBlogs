import React from 'react'
import {useEffect,useState,useReducer} from 'react'
import {useNavigate} from 'react-router-dom'
function Dashboard() {

   const naviagte=useNavigate();
   const [state,setState]=useState([]);

  useEffect(()=>{
  try {
    const res=await axios.get();
    setState(res.data.data);
    
  } catch (error) {
    
  }
})

const handlePost=()=>{
   naviagte(/post);

   
}
  return (
    <div className="dashboard-container">
    <p> {totalPost}</p>
    <button onClick={handlePost}>Add Post </button>   
    </div>
  )
}

export default Dashboard
