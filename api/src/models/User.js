import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import { operations } from './operations.js';

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

user.hasMany(operations,{
    foreignkey:'userId',
    sourcekey:'id'
})

operations.belongsTo(user,{
    foreignkey:'userId',
    targetId:'id'
})