import  {Router} from 'express';
import {getOperations,  createOperations, updateOperations, deleteOperations, getToltal } from '../controllers/operations.controllers.js';
import {signUp, Signin} from '../controllers/Authcontrollers.js'

import express from "express"
//cors config
import cors from "cors"
// cors module
const app = express()


const router = Router()
router.get('/user/operations/total/:id', getToltal)
router.get('/user/operations/:id', getOperations)
router.post('/operations/',createOperations)
router.put('/operations/:id',updateOperations )
router.delete('/operations/:id',deleteOperations)


//users routes
router.post('/user/signUp', signUp)
router.post('/user/Signin', Signin)

export default router

