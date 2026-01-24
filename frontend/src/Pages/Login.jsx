 import React, { useState } from 'react';
import { loginUser } from '../Api/AuthApi.jsx';

function Login() {
  const [form, setForm] = useState({ email: " ", password: " " });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);

      alert("User logged in successfully");
      console.log(res.data);

      //  Save token for Authorization header in BlogForm
   localStorage.setItem("token", res.data.accessToken);

//  Save user details if you need them elsewhere
   localStorage.setItem("user", JSON.stringify(res.data.user));

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h1 className="heading">Login</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          className="form-input"
        />
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
      </form>
    </div>
  );
}

export default Login;
