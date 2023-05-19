// Import the environment variables to connect to the Database.
import dotenv from 'dotenv'
dotenv.config()

// importing sequelize
import Sequelize from "sequelize";
const env = process.env // declaring process.env and storing it in a variable

// The pool parameters tells it how long to keep trying before it gives up.
// declaring the pool values
const pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
};

// creating the instance of sequelize
const sequelize = new Sequelize(env.DB, env.DB_USER, env.DB_PASSWORD, {
    host: env.DB_HOST,
    dialect: env.DIALECT,
    pool: {
      max: pool.max, // how long it should keep trying
      min: pool.min, // minimum time
      acquire: pool.acquire, //
      idle: pool.idle //
    }
});

// This is for later we are exporting the connection to the database to run other sequelize methods
export const db = {
    conn: sequelize,
    Sequelize: Sequelize
}

// making a connection with the database asynchronous function
const connectDB = async () => {
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}

// this is an ES6 module so we are need to export the default function.
export default connectDB;