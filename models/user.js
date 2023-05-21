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
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        // You can use different types of validator
        // validate: { len: [4, 6], },
      },
      password: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.INTEGER,
        defaultValue: 21,
      },
    },
    {
      // CUSTOMIZING TABLES
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Users;
};

export default Users;