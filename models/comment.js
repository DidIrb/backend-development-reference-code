// Defining a model for a comment made by a user
// Relationships managing one to many relationships
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

// This contains the connection to the database
import { db } from "../config/dbConn.js"

const Comment = () => {
    // Defining the comment model through sequelize
    const Comment = db.conn.define(
        "comment", 
        {
            name: {
              type: DataTypes.STRING
            },
            text: {
              type: DataTypes.STRING
            }
        }
    );
    return Comment
}

export default Comment;