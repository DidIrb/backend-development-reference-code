// importing the model
import { models } from "../config/dbConn.js";
const User = models.user;

// create and export the functions that will run the crud operations on the persons table
export const createUser = (req, res) => {
  // create the object to submit to the db
  const Data = {
    username: req.body.username,
    password: req.body.password,
  };

  // sequelize method to create a new record in persons table
  User.create(Data)
    .then((data) => {
      res.status(200).send({ message: "Generated record successfully", data });
    })
    .catch((err) => {
      res.status(400).send({ error: "Something went wrong", err });
    });
};


// belongTo has its own methods that we can utilize refer to the witt code tutorial at this section
// https://youtu.be/HJGWu0cZUe8?list=PLkqiWyX-_Lov8qmMOVn4SEQwr9yOjNn3f&t=2722