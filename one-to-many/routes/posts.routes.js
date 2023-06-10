// import express router
import express from "express";
const router = express.Router();

import { createPost, updatePost } from "../controllers/postController.js";

router.post("/", createPost);

// Update using set method
router.put("/:id", updatePost);

// there are other methods but we will not fucus on them since they are available in the other reference sides.
const postsRoutes = router;
export default postsRoutes;