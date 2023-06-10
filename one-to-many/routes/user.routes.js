// import express router
import express from "express";
import { createUser } from "../controllers/userController.js";
const router = express.Router();

// handling the requests made
router.post("/", createUser);

// The rest of the crud operations work as normal 

const userRoutes = router;
export default userRoutes