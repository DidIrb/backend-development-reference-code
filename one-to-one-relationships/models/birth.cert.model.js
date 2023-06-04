import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;


// Import the connection to the db
import { db } from "../config/dbConn.js";

// Define the model
const BirthCertificate = () => {
  const BirthCertificate = db.conn.define(
    "birthCert",
    {
      birthCert_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      serialNumber: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return BirthCertificate;
};

export default BirthCertificate;

