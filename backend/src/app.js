import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import commenRoutes from './routes/comment.routes.js'
const app = express();

 

app.use(
  cors({
    origin: [
      "https://alokranjan42.github.io",
      "https://byte-sized-blogs-jwk5-dk8csda7e-alokranjan42s-projects.vercel.app"
    ],
    credentials: true
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// All routes under /api/user
app.use("/api/user", userRoute);
app.use("/api/user", blogRoutes);
app.use("/api/user",commenRoutes);

export { app };
