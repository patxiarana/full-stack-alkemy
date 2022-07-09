import  Sequelize  from "sequelize";


export const sequelize = new Sequelize('operations','postgres','lagloriosanumero12'
,{
host:'localhost',
dialect:'postgres',
})