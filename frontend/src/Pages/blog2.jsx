import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';

function blog2() {
    const [form,setForm]=useState({title:"",desc:"",img:" ",tags:" "});

   const  handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }
  const   handleSubmit=async(e)=>{
        e.preventDefault();


        useEffect(()=>{
            const formSubmit=async()=>{
                try {
                    const res=await axios.post("url");
                    setForm(res.data);
                    
                } catch (error) {
                    console.log(error);
                    
                }
            };
            formSubmit();
        },[])

         

    }
  return (
    <>
    <div>blog2</div>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter name' name="name" onChnage={ handleChange}/>
        

    </form>
    </>
  )
}

export default blog2