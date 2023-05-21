// Running the CRUD Operations

import { models } from "../config/dbConn.js";
import { Op } from "sequelize";

// importing the User Model
const User = models.Users;

// Create and Save a new User
export const create = (req, res) => {
  
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "Please provide Your username!",
    });
    return;
  }

  // Generating the object that is to be passed to the database
  const user = {
    username: req.body.username,
    password: req.body.password,
    age: req.body.age ? req.body.age : 18,
  };

  // Save User in the database
  // Create is equivalent to POST 
  User.create(user)
    .then((data) => {
      // specifying the status code
      res.status(200).send({
        message: "User created Successfully", 
        data
    });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

// Retrieve all Users from the database.
export const findAll = (req, res) => {
  
  // passing the username passed from the requests body
  const username = req.query.username;
  //  ternary operator stored in a variable
  var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

  // function to find ever record
  User.findAll({ where: condition })
    .then((data) => {
        res.status(200).send({
            message: "Here is a list of all Users", 
            data
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Users.",
      });
    });
};

// Find a single User with an id
export const findOne = (req, res) => {

  // getting the id from the request parameters
  const id = req.params.id;

  // this method finds a record by its primary key
  User.findByPk(id)
    .then((data) => {
      if (data) {
        res.status(200).send({
            message: "Here is a list of all Users", 
            data
        });
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id,
      });
    });
};

// Update a User by the id in the request
export const update = (req, res) => {
  const id = req.params.id;

  // The update method in sequelize is equivalent to PUT method in
  User.update(req.body, {
    where: { user_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User with id=" + id,
      });
    });
};

// Delete a User with the specified id in the request
export const deleteUser = (req, res) => {
  const id = req.params.id;

  // method to delete a record using the id
  User.destroy({
    where: { user_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete User with id= ${id}. Maybe User was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};

// Delete all Users from the database.
export const deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Users were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all User.",
      });
    });
};

// Find all published Users
export const findAllPublished = (req, res) => {
  User.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Users.",
      });
    });
};
