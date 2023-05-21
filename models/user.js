// creating our model to generate tables
import Sequelize from "sequelize";
// Op is the operator
const { DataTypes, Op } = Sequelize;

// import the db connection from our dbConn Config file.
import {db} from "../config/dbConn.js";

//  User Model
const User = db.conn.define(
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
      validate: {
        len: [4, 6],
      },
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

const UserTableSync = async () => { User.sync({ alter: true })
  .then(() => {
    // to delete you use destroy truncate deletes all records in table but not the table itself
    // return User.destroy({truncate: true})
    return User.update({ username: "pizza" }, { where: { age: 25 } });
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("something went wrong", err)
  });
}


  export default UserTableSync;