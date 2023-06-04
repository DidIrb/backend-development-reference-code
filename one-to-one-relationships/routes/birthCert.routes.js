// importing router from express
import express from "express";
import { createCert , getBirthCert, updateBirthCert, update } from "../controllers/birthCert.js";
const router = express.Router();

  // Create a new User
  router.post("/", createCert);

  // get birth certificate based on the owners id
  router.get("/:id", getBirthCert);

  // setting birth certificate owner based on the user id
  router.post("/:id", updateBirthCert);

  // UPDATE USING PUT
  router.put("/:id", update)

  // the other crud operations create update delete

const birthCertRoutes = router;

export default birthCertRoutes;