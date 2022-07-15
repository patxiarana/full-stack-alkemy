import  Sequelize  from "sequelize";


export const sequelize = new Sequelize('operations','postgres','software'
,{
host:'localhost',
dialect:'postgres',
})