 import axios from "axios";
 
const API = axios.create({
  baseURL: "https://bytesizedblogs-backend.onrender.com/api/user", // base URL for user routes
  withCredentials: true, // optional, only if using cookies/sessions
});

 
export const registerUser = (data) => API.post("/register", data);

 
export const loginUser = (data) => API.post("/login", data);

 
export const logout = () => API.post("/logout");
