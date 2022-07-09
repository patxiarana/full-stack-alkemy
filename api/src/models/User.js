import {sequelize} from '../database/database.js'
import {DataType, DataTypes} from 'sequelize'



export const operations = sequelize.define('operations',{
   id:{
    type: DataTypes.INTEGER,
    primarykey:true,
    autoIncrement:true,
   },
  concepto:{
    type:DataTypes.STRING
  },
  monto:{
   types:DataTypes.REAL
  },
  fecha:{
   type:DataTypes.DATEONLY
  },
  tipo:{
    types:DataTypes.STRING
  }
})