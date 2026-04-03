import React from 'react'
import '../styles/features.css'
import {useEffect,useState} from 'react'
import Cards from './Cards.jsx'
import API from '../../../Api/Axios.jsx'

function features() {

  const [state,setState]=useState([]);
 useEffect(()=>{
  const fetchFeatures=async()=>{
    try{
      const res = await API.get('/blogs');
      setState(res.data?.data?.slice(0, 3) ?? []);


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
                desc={item.content}
                img={item.imageUrl} 

                />

            )):(<h1>No featured articles available</h1>)}

          </div>

      </div>
      
    </div>
  )
}

export default features
