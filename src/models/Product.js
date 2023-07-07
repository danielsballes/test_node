import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import BaseModel from "./BaseModel.js";


class Product extends BaseModel { }

Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: false,
        validate: {
            notNull: {
                msg: "El nombre es obligatorio"
            },
            notEmpty: { 
                msg: "El nombre es obligatorio"
            },
            len: { 
                args: [0, 255],
                msg: "El nombre es mayor a la longitud permitida"
            }
        }
    },
    reference: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: false,
        validate: {
            notNull: {
                msg: "La referencia es obligatoria"
            },
            notEmpty: { 
                msg: "La referencia es obligatoria"
            },
            len: { 
                args: [0, 255],
                msg: "La referencia es mayor a la longitud permitida"
            }
        }
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        notEmpty: false,
        isInt: true,
        validate: {
            notNull: {
                msg: "El precio es obligatorio"
            },
            notEmpty: {
                msg: "El precio es obligatorio"
            },
            isInt: {
                msg: "El precio no es un entero"
            }
        }
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        notEmpty: false,
        isInt: true,
        validate: {
            notNull: {
                msg: "El peso es obligatorio"
            },
            notEmpty: {
                msg: "El peso es obligatorio"
            },
            isInt: {
                msg: "El peso no es un entero"
            }
        }
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: false,
        validate: {
            notNull: {
                msg: "La categoría es obligatoria"
            },
            notEmpty: {
                msg: "La categoría es obligatoria"
            },
            len: { 
                args: [0, 255],
                msg: "La categoría es mayor a la longitud permitida"
            }
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        notEmpty: false,
        isInt: true,
        validate: {
            notNull: {
                msg: "El stock es obligatorio"
            },
            notEmpty: {
                msg: "El stock es obligatorio"
            },
            isInt: {
                msg: "El stock no es un entero"
            }
        }
    }
}, {
    sequelize,
    modelName: "Product"
});

export default Product;