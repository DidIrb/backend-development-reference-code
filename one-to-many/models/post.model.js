import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;


// Import the connection to the db
import { db } from "../config/dbConn.js";

// Define the model
const Posts = () => {
  const Posts = db.conn.define(
    "post",
    {
      post_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      message: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  return Posts;
};

export default Posts;

