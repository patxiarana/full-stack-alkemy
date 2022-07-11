import  {Router} from 'express';
import {getOperations,  createOperations, updateOperations, deleteOperations, getToltal } from '../controllers/operations.controllers.js';


const router = Router()
router.get('/operations/total', getToltal)
router.get('/operations', getOperations)
router.post('/operations',createOperations)
router.put('/operations/:id',updateOperations )
router.delete('/operations/:id', deleteOperations)


export default router

