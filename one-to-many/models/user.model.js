import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

// Import the connection to the db
import { db } from "../config/dbConn.js";

// Define the model
const User = () => {
  const User = db.conn.define(
    "User",
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        password: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    },
    {
        freezeTableName: true,
    }
  );
  return User;
};

export default User;
