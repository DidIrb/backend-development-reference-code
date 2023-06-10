import dotenv from "dotenv";
dotenv.config();

import Sequelize, { DataTypes } from "sequelize";

// Importing Models
import Posts from "../models/post.model.js";
import User from "../models/user.model.js";

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
  posts: Posts(),
  user: User(),
};

// ONE TO MANY RELATIONSHIPS
models.user.hasMany(models.posts , { foreignKey: {
  name: "users_id" ,
  type: DataTypes.INTEGER,
}});

models.posts.belongsTo(models.user);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};

export default connectDB;
