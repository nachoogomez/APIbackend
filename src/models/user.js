import {sequelize} from '../database/database.js';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
});

//Sync Modelo
//(async () =>{
//    try {
//       await sequelize.sync();
//        console.log("Tabla creada");
//        
//    } catch (error) {
//        console.log("Error al crear la tabla", error);
        
//    }
//})();