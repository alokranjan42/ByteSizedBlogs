import axios from 'axios'

const API=axios.create({
  baseURL: "https://bytesizedblogs-backend.onrender.com/api/user",
  withCredentials: true,
})
export default API;
