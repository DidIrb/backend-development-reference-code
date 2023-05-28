import dotenv from 'dotenv'
dotenv.config()

import Sequelize from "sequelize";

// Importing Models
import Users from '../models/user.js';
import Comment from '../models/comment.js';

const env = process.env

const pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
};

const sequelize = new Sequelize(env.DB, env.DB_USER, env.DB_PASSWORD, {
    host: env.DB_HOST,
    dialect: env.DIALECT,
    pool: {
      max: pool.max,
      min: pool.min,
      acquire: pool.acquire,
      idle: pool.idle
    }
});

export const db = {
    conn: sequelize,
    Sequelize: Sequelize,
}

// This returns the model
export const models =  {
   Users : Users(),
   comments: Comment()
} 

// Setting the relationship Move this later to another file
models.Users.hasMany(models.comments, { as: "comments" });
models.comments.belongsTo(models.Users, {
    foreignKey: "userId",
    as: "user",
});


const connectDB = async () => {
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}

// Adding the relationship here for now for testing



export default connectDB;