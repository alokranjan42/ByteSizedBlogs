 import Navbar from "../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";  
import "./Home.css";
import Card from "./Card.jsx";

export default function Home() {
  const [blogs, setBlogs] = useState([]); //  

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://bytesizedblogs-backend.onrender.com/api/user/blogs/");
        setBlogs(res.data.data); 
      } catch (error) {
        console.log("Error occurred while fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <h1 className="heading-main">ByteSizeBlogs</h1>
      <div className="cards-container">
        {blogs.map((item) => (
          <Card
            key={item._id}  
            id={item._id}
            src={item.imageUrl}
            title={item.title}
            desc={item.content}
            className="cards"
          />
        ))}
      </div>
    </div>
  );
}
