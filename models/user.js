// creating our model to generate tables
import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

// import the db connection from our dbConn Config file.
import { db } from "../config/dbConn.js";

// Defining the model and export it to be used in the dbConn file.
const Users = () => {
  const Users = db.conn.define(
    "user",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.INTEGER,
        defaultValue: 21,
      },
    },
  );

  return Users;
};

export default Users;