 import { Router } from "express";
import { verifyAccessToken } from "../middlewares/auth.middleware.js";
import {
  createBlog,
  getAllBlog,
  getblogbySlug,
  updateBlog,
  deleteBlog,
} from "../controller/blog.controller.js";

const router = Router();

router.post("/blogs",  verifyAccessToken,  createBlog);      // create blog
router.get("/blogs",   getAllBlog);       // get all blogs
router.get("/blogs/:slug",   getblogbySlug); // get blog by slug
router.put("/blogs/:id", verifyAccessToken, updateBlog);   // update blog
router.delete("/blogs/:id", verifyAccessToken, deleteBlog); // delete blog


export default router;
