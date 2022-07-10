import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';


export const user = sequelize.define('users',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true, 
    },
    email:{
     type: DataTypes.STRING
    },
    password:{
      type:DataTypes.INTEGER
    },
})
