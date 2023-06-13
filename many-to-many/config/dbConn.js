import dotenv from "dotenv";
dotenv.config();

import Sequelize, { DataTypes } from "sequelize";

// Importing Models
import Customer from "../models/customers.model.js";
import Product from "../models/product.model.js";

const env = process.env;

const sequelize = new Sequelize(env.DB, env.DB_USER, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: env.DIALECT,
});

export const db = {
  conn: sequelize,
  Sequelize: Sequelize,
};

// This returns the model
export const models = {
  customer: Customer(),
  product: Product(),
};


// Many to many relationships
models.customer.belongsToMany(models.product, { through : "customerProducts"});
models.product.belongsToMany(models.customer, { through : "customerProducts"});
// instead of passing the name directly you can create a junction table model and then pass it at
// through: modelName

// utility methods for belongsToMany is similar to hasmany.

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};

export default connectDB;
