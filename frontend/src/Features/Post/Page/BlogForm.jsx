 import { useState } from "react";
import API from "../../../Api/Axios.jsx";
import './BlogForm.css'

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("Please login first.");
        return;
      }

      const res = await API.post(
        "/blogs",
        { title, content, imageUrl },
        {
          headers: {
            Authorization: `Bearer ${token}`,  
          },
        }
      );

      setMessage("Blog created successfully!");
      console.log("Blog response:", res.data);

      // clear inputs
      setTitle("");
      setContent("");
      setImageUrl("");

    } catch (err) {
      const serverMsg = err?.response?.data?.message || err?.message || "Failed to create blog.";
      setMessage(serverMsg);

      if (err?.response?.status === 401) {
        localStorage.removeItem("token");
      }
    }
  };

  return (
    <div  className="form-container">
      <h2 className="form-heading">Create a Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="form-input"
        />

        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          
          required
          className="form-text"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="form-text"
        />

        <button type="submit" className="form-button">Post Blog</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
