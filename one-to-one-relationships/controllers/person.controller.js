// importing the model
import { models } from "../config/dbConn.js";
const person = models.person;

// create and export the functions that will run the crud operations on the persons table
export const createPerson = (req, res) => {
  // create the object to submit to the db
  const Data = {
    name: req.body.name,
    IDnumber: req.body.IDnumber,
  };

  // sequelize method to create a new record in persons table
  person
    .create(Data)
    .then((data) => {
      res.status(200).send({ message: "Generated record successfully", data });
    })
    .catch((err) => {
      res.status(400).send({ error: "Something went wrong", err });
    });
};
