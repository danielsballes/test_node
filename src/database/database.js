import { Sequelize } from "sequelize";

const sequelize = new Sequelize('test_node', 'user', 'secret', {
    host: 'localhost',
    dialect: 'postgres'
});