import express from "express";
import { createCustomer, updateCustomer } from "../controllers/customer.js";
const router = express.Router();

// create function
router.post("/", createCustomer);

router.put("/", updateCustomer);

const customerRoutes = router;
export default customerRoutes;