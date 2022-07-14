import app from './app.js'
import  {sequelize}  from './database/database.js'


async function main(){
await sequelize.authenticate()
try {
 await sequelize.sync({force: false});
console.log('connectio has been established successfully')
app.listen(3000)
console.log('server on port 3000')
} catch (error){
console.error('Unable to connect to the database', error);
}
}
main()