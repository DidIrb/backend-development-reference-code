// import the birth certificate model in order to pass data to db
import { models } from "../config/dbConn.js";

// const birthCert = models.birthCert;
const Person = models.person;
const BirthCert = models.birthCert;

// HELPER METHOD CREATE
export const createCert = (req, res) => {
  const Data = {
    serialNumber: req.body.serialNumber,
  };
  if( req.body.owner_id ) {
  // Check first if the owners id exists in the db before creating it
  Person.findOne({ where: { person_id: req.body.owner_id } }).then((data) => {
    console.log(data);
    if (data) {
      let person = data;
      // helper methods add create in front of the model name
      person
        .createBirthCert(Data)
        .then((data) => {
          res
            .status(200)
            .send({ message: "Record generated successfully", data });
        })
        .catch((err) => {
          res.status(400).send({ error: "Something went wrong", err });
        });
    } else {
      res.status(404).send({ message: "No such individual exists" });
    }
  })    
} else {
  res.status(400).send({message: "the owner of certificate must be defined"})
};
};

// HELPER METHOD SET
// You can update the birthCert page and reassign the birth certificate to another person
export const updateBirthCert = (req, res) => {
  const id = req.params.id;
  let person, birthCert;

  BirthCert.findOne({ where: { birthCert_id: req.body.birthCert_id } }).then(
    (data) => {
      console.log(data);
      birthCert = data;
    }
  );
  Person.findOne({ where: { person_id: req.body.owner_id } }).then((data) => {
    console.log(data);
    if (data) {
      person = data;
      person
        .setBirthCert(birthCert)
        .then((data) => {
          res
            .status(200)
            .send({ message: "Updated birthCertificate owner", data });
        })
        .catch((err) => {
          res.status(400).send({ error: "Something went wrong", err });
        });
    } else {
      res.status(404).send({ message: "No such individual exists" });
    }
  });
};

// HELPER METHOD GETgetBirthCert
export const getBirthCert = (req, res) => {
  const id = req.params.id;
  Person.findOne({ where: { person_id: id } }).then((data) => {
    console.log(data);
    if (data) {
      let person = data;
      person
        .getBirthCert()
        .then((data) => {
          res.status(200).send({ message: "Birth certificate Details", data });
        })
        .catch((err) => {
          res.status(400).send({ error: "Something went wrong", err });
        });
    } else {
      res.status(404).send({ message: "No such individual exists" });
    }
  });
};

// Using helper methods provided by sequelize to add to the foreign key column, this is on updating records
// const id = req.params.id;

// NORMAL UPDATE USING PUT
export const update = (req, res) => {
  BirthCert.update(req.body, { where: { birthCert_id: req.params.id }})
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Record was updated successfully." });
      } else {
        res.send({ message: `Cannot update check the request` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Birth certificate",
        err,
      });
    });
};
