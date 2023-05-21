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
        type: DataTypes.INTEGER, // specifying the Data Type
        primaryKey: true, // telling sequelize that this attribute is a primary key
        autoIncrement: true, // Telling sequelize that you can autoIncrement 
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false, // setting the rule that username cannot be null
        // You can use different types of validator
        // validate: { len: [4, 6], },
      },
      password: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.INTEGER,
        defaultValue: 21, //setting the default value
      },
    },
    {
      // CUSTOMIZING TABLES
      freezeTableName: true, // telling sequelize that the Tables name should match the one specified above
      timestamps: false, 
    }
  );

  return Users;
};

export default Users;