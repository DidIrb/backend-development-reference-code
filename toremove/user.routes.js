// Making requests when the route is called
import { deleteUser, deleteAll, update, findOne, findAll, create } from "../controllers/usersController.js";
import express from "express";

const router = express.Router();

  // Create a new User
  router.post("/", create);

  // Retrieve all Users
  router.get("/", findAll);

  // Retrieve a single User with id
  router.get("/:id", findOne);

  // Update a User with id
  router.put("/:id", update);

  // Delete a User with id
  router.delete("/:id", deleteUser);

  // Delete all Users
  router.delete("/", deleteAll);

  const UserRoute = router;

export default UserRoute;