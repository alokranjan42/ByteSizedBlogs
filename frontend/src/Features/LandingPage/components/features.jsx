import React from 'react'
import '../styles/features.css'
import axios from 'axios'
import {useEffect,useState} from 'react'
import Cards from './Cards.jsx'

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
          <div className="" >
            
            {state.length>0?state.map((item)=>(

               
                <Cards  
                title={item.title}
                desc={item.description}
                img={item.imageUrl} 

                />

            )):(<h1>No featured articles available</h1>)}

          </div>

      </div>
      
    </div>
  )
}

export default features
