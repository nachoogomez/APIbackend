import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('backendcrud', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})