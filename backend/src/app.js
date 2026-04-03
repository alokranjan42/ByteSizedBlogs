import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import commenRoutes from './routes/comment.routes.js'
const app = express();

const allowedOrigins = new Set([
  "http://localhost:5173",
  "https://alokranjan42.github.io",
]);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, true);
        return;
      }

      const isVercelPreview = /^https:\/\/.*\.vercel\.app$/.test(origin);
      if (allowedOrigins.has(origin) || isVercelPreview) {
        callback(null, true);
        return;
      }

      callback(new Error(`Not allowed by CORS: ${origin}`));
    },
    credentials: true,
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
