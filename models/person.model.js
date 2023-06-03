import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

// Import the connection to the db
import { db } from "../config/dbConn.js";

// Define the model
const Person = () => {
  const Person = db.conn.define(
    "person",
    {
        person_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        IDnumber: {
            type: DataTypes.INTEGER, 
            allowNull: false
        }
    },
    {
        freezeTableName: true
    }
  );
  return Person;
};

export default Person;
