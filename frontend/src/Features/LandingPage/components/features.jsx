import React from 'react'
import '../styles/features.css'
import axios from 'axios'
import {useEffect,useState} from 'react'

function features() {

  const [state,setState]=useState([]);
 useEffect(()=>{
  const fetchFeatures=async()=>{
    try{
      const res=await axios.get('http://localhost:5000/api/featured-articles');
       setState(res.data);


    }catch(error){
        console.error("Error occurs while fetching features:", error);
    }
  }
  fetchFeatures();

 },[])

  return (
    <div className="features-container">
      <div> 
        <h1 className="features-heading">Featured  Articles</h1>
          <div >
            {state.map((item)=>(

              <div key={item._id}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <img src={item.image} alt={item.title} />
                <p>{item.content}</p>
              </div>

            ))}

          </div>

      </div>
      
    </div>
  )
}

export default features
