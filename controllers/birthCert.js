// import the birth certificate model in order to pass data to db
import { models } from "../config/dbConn.js";

// const birthCert = models.birthCert; 
const person = models.person;

export const createCert = (req, res) => {

  const Data = {
    serialNumber: req.body.serialNumber,
  };
  // Check first if the owners id exists in the db before creating it
  person.findOne({ where: { person_id: req.body.owner_id }})
  .then((data) => {
    console.log(data)
    if(data) {
      let person = data;
      // helper methods add create in front of the model name
      person.createBirthCert(Data)
        .then((data) => {
          res
            .status(200)
            .send({ message: "Record generated successfully", data });
        })
        .catch((err) => {
          res.status(400).send({ error: "Something went wrong", err });
        });
    }
    else {
      res.status(404).send({message: "no one with that name exists"})
    }
  })
};

// Using helper methods provided by sequelize to add to the foreign key column, this is on updating records
// const id = req.params.id;
