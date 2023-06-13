import { db } from "../config/dbConn.js";
import { DataTypes } from "sequelize";

const Customer = () => {
    const Customer = db.conn.define(
        "customers",
        {
            customerName: {
                type: DataTypes.STRING
            }
        }, {
            timestamps: false
        }
    );
    return Customer;
}

export default Customer