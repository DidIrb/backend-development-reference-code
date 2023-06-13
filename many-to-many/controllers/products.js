import { models } from "../config/dbConn.js";

const Product = models.product;

export const createProduct = (req, res) => {
    // create the object to submit to the db
    const Data = {
      productName: req.body.productName,
    };
  
    // sequelize method to create a new record in persons table
    Product.create(Data)
      .then((data) => {
        res.status(200).send({ message: "Generated record successfully", data });
      })
      .catch((err) => {
        res.status(400).send({ error: "Something went wrong", err });
      });
  };