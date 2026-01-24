 import React, { useState } from "react";
import { registerUser } from "../Api/AuthApi";
import './Signup.css'

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      alert("Signup Successful");
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h1 className="heading">Signup Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          className="form-input"
           
        />
        <br/>
      
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
           className="form-input"
        />
        <br/>
        
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
           className="form-input"
        />
       <br/>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
