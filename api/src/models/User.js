import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import { operations } from './operations.js';

export const user = sequelize.define('User',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true, 
    },
    email:{
     type: DataTypes.STRING,
     allowNull:false,
     unique: true,
     validate: {
       isEmail: {
         msg: "El email tiene que ser un correo valido"
       },
     },
    },

    password:{
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        len: {
          args: [6, 255],
          msg: "La contraseña tiene que tener minimamente 6 caracteres"
        }
      }
    },
  },);

user.hasMany(operations,{
  foreignKey:'userId',
  sourceKey:'id'
})
operations.belongsTo(user,{
  foreignKey:'userId',
  targetId:'id'
})



