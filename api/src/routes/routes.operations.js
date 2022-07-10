import  {Router} from 'express';
import {getOperations,  createOperations, updateOperations, deleteOperations } from '../controllers/operations.controllers.js';


const router = Router()

router.get('/operations', getOperations)
router.post('/operations',createOperations)
router.put('/operations/:id',updateOperations )
router.delete('/operations/:id', deleteOperations)
router.get('/operations/:id')

export default router

