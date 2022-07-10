import {sequelize} from '../database/database.js'
import { DataTypes} from 'sequelize'



export const operations = sequelize.define('operations',{
   id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true, 
   },
  concepto:{
    type:DataTypes.STRING
  },
  monto:{
   type:DataTypes.REAL
  },
  fecha:{
   type:DataTypes.DATEONLY
  },
  tipo:{
    type:DataTypes.STRING
  }
})