import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'

function homee() {

  const [blog,setBlog]=useState([]);
 useEffect(()=>{
  const fetchblog=async()=>{
    try {
      const res=await axios.get("http://localhost:5003/api/user/blogs/");
      setBlog(res.data.data);
    } catch (error) {
      console.log(error);
      
    }
  };
  fetchblog();

 },[])
    
  return (
     <div>
      {blog.map((item)=>(
        <div key={item._id}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <img src={item.imgUrl} alt="img" />
          
        </div>
      ))}
     </div>
  )
}

export default homee