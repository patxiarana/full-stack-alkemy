import {operations} from '../models/operations.js'


export const getOperations = async (req ,res) =>{
const Operations = await operations.findAll();
console.log(Operations)
    res.send('operaciones')
    
}
export const createOperations = async  (req ,res) =>{
    const {concepto, fecha, monto, tipo} = req.body
    const newOperation = await operations.create({
        concepto,
        fecha,
        monto,
        tipo,
    })
    console.log(newOperation)
    res.send('creatingOperaTions')
}

