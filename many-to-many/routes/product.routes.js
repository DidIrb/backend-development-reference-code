import express from "express";
const router = express.Router();

import { createProduct } from "../controllers/products.js";

// handling the routes
router.post("/", createProduct);

const productRoutes = router;
export default productRoutes;