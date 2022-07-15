import  {Router} from 'express';
import {getOperations,  createOperations, updateOperations, deleteOperations, getToltal } from '../controllers/operations.controllers.js';
import express from "express"
//cors config
import cors from "cors"
// cors module
const app = express()
var whitelist =  ['http://localhost:3001']
app.use(cors())
var corsOptions = {
    origin: function(origin,callback){
     if(whitelist.indexOf(origin) != -1){
        callback(null, true);
         }else{
            callback(new Error('not allowed by cors'));
         }
    }
}

const router = Router()
router.get('/operations/total', getToltal)
router.get('/operations', getOperations)
router.post('/operations/create',createOperations)
router.put('/operations/:id',cors(corsOptions),updateOperations )
router.delete('/operations/:id',cors(corsOptions),deleteOperations)


export default router

