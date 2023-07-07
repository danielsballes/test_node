import { Model } from "sequelize";
import { sequelize } from "../database/database.js";

class BaseModel extends Model {
    static init(attributes, options) {
        super.init(
            {
                ...attributes,
                createdAt: {
                    type: "TIMESTAMP",
                    allowNull: false,
                },
                updatedAt: {
                    type: "TIMESTAMP",
                    allowNull: false,
                },
            },
            {
                hooks: {
                    beforeValidate: (instance) => {
                        if (instance.isNewRecord) {
                            instance.createdAt = new Date().toISOString();
                            instance.updatedAt = instance.createdAt;
                        } else {
                            instance.updatedAt = new Date().toISOString();
                        }
                    }
                },
                ...options,
            }
        );
    }
}

export default BaseModel;