 
import { useEffect, useState } from "react";
import axios from "axios";  
import '../Styles/Home.css'
import Card from  '../Components/Cards.jsx'

export default function Home() {
  const [blogs, setBlogs] = useState([]);  
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://bytesizedblogs-backend.onrender.com/api/user/blogs/");
        setBlogs(res.data.data); 
        setLoading(false);
      } catch (error) {
        console.log("Error occurred while fetching blogs:", error);

         setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if(loading ){
    return  <img src="https://i.gifer.com/4V0b.gif" className="loader" />
  }

  return (
    <>
    <div className="container">
      
      
      <div className="cards-container">
        {blogs.map((item) => (
          <Card
            key={item._id}  
            id={item._id}
            title={item.title}
            src={item.imageUrl}
            content={item.content}
            className="cards"
          />
        ))}
      </div>
     
    </div>
    <button className="btn-add">add now </button>
    </>
  


  );
  
}
