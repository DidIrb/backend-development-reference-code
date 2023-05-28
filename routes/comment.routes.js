import { createComment } from "../controllers/commentsController.js";
// creating a comment when you visit this path
import express from "express";

const router = express.Router();

  // Create a new User
  router.post("/", createComment);
  // Getting all comments
  router.get("/", );

  const CommentsRoute = router;

  export default CommentsRoute;