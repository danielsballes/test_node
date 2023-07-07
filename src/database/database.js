import { Sequelize } from "sequelize";

class Database {
    constructor() {
        this.sequelize = new Sequelize(
            process.env.DATABASE,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                host: 'localhost',
                dialect: 'postgres',
                define: {
                    timestamps: false
                },
            },
        );
    }
}

const database = new Database();

export const sequelize = database.sequelize;