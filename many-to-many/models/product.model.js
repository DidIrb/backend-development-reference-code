import { DataTypes } from "sequelize";
import { db } from "../config/dbConn.js";

const Product = () => {
    const Product = db.conn.define(
        "product", {
            productName: {
                type: DataTypes.STRING
            }
        }, {
            timestamps: false
        }  
    );
    return Product;
}

export default Product