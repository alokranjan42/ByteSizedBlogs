 import { useState } from "react";
import axios from "axios";
import './Bloginput.css'

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

      const res = await axios.post(
        "http://localhost:5003/api/user/blogs",
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
    <div style={{ maxWidth: "500px", margin: "20px auto" }} className="bloginput-container">
      <h2 className="bloginput-heading">Create a Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "10px" }}
          required
          className="bloginput-input"
        />

        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ display: "block", width: "100%", height: "100px", marginBottom: "10px" }}
          required
          className="bloginput-text"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "10px" }}
          className="bloginput-text"
        />

        <button type="submit" className="bloginput-button">Post Blog</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
