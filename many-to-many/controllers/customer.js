import { models } from "../config/dbConn.js";

const Customer = models.customer;
const Product = models.product;
// create function
export const createCustomer = (req, res) => {
    // create the object to submit to the db
    const Data = {
        customerName: req.body.customerName,
    };

    // sequelize method to create a new record in persons table
    Customer.create(Data)
        .then((data) => {
            res.status(200).send({ message: "Generated record successfully", data });
        })
        .catch((err) => {
            res.status(400).send({ error: "Something went wrong", err });
        });
};

//   Function to Update the user

export const updateCustomer = (req, res) => {
    // updating details on who the owner of a product is.

    let customer, product;
    const id = req.params.id;

    Customer.findOne({ where: { customerName: req.body.customerName } }).then((data) => {
        console.log(data);
        customer = data;
        if (data) {
            Product.findAll().then((data) => {
                console.log(data);
                if (data) {
                    product = data;
                    // The vice versa will work!!!
                    customer.addProduct(product)
                        .then((data) => {
                            res.status(200).send({ message: "Updated information in join table ", data });
                        })
                        .catch((err) => {
                            res.status(400).send({ error: "Something went wrong", err });
                        });
                } else {
                    res.status(404).send({ message: "No such User exists" });
                }
            });
        } else {
            res.status(400).send({ error: "Record not found!!!" })
        }
    }
    );

    // sequelize method to create a new record in persons table

};