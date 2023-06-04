// import express router
import express from "express";
import { createPerson } from "../controllers/person.controller.js";
const router = express.Router();

// handling the requests made
router.post("/", createPerson);

// The rest of the crud operations work as normal 

const personRoutes = router;
export default personRoutes