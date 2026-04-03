 import React, { useState } from 'react';
 import {loginUser} from  '../../../Api/AuthApi' 
 import '../Styles/Login.css' 
 import {useNavigate} from 'react-router-dom'
function Login() {

  const [form, setForm] = useState({ email: " ", password: " " });
  const naviagte=useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);

      alert("User logged in successfully");
      console.log(res.data);

    
   localStorage.setItem("token", res.data.accessToken);

 
   localStorage.setItem("user", JSON.stringify(res.data.user));
   naviagte("/");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
      console.error(err);
    }
  };

  return (
    <div className="login-page"> 
    <div className="form-container">
       <h1 className="heading">Login</h1>
     
    
      <form onSubmit={handleSubmit} className="form">
        
         <br />
        <label htmlFor="Email"  className="label-email"> Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          className="form-input"
        />
        <br />
        <label htmlFor="password" className="label-password"> Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="btn">
          Submit
        </button>
        <p className="form-links">Forgot Password</p>
      </form>
    </div>
    </div>
  );
}

export default Login;
