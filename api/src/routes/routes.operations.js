import  {Router} from 'express';
import {getOperations,  createOperations } from '../controllers/operations.controllers.js';


const router = Router()

router.get('/operations', getOperations)
router.post('/operations',createOperations)
router.put('/operations/:id')
router.delete('/operations')
router.get('/operations/:id')

export default router

