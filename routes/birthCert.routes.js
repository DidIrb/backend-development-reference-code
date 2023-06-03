// importing router from express
import express from "express";
import { createCert } from "../controllers/birthCert.js";
const router = express.Router();

  // Create a new User
  router.post("/", createCert);

const birthCertRoutes = router;

export default birthCertRoutes;