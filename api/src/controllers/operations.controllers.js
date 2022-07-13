import {operations} from '../models/operations.js'


export const getOperations = async (req ,res) =>{
    try{
        const Operations = await operations.findAll();
        res.json(Operations)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
    
}

export const getToltal = async (req,res) =>{
try{ 
   const totaloperations = await operations.findAll()
  const ingreso = totaloperations.filter(e => e.tipo == "ingreso")
  const egreso = totaloperations.filter(e => e.tipo == "egreso")
  console.log(ingreso,egreso)
  const ingresos1 = ingreso.map(e => e.monto)
  const egresos1 = egreso.map(e => e.monto)
  const sumIngresos = ingresos1.reduce((prev, curr) => prev + curr, 0)
  const sumEgresos  = egresos1.reduce((prev, curr) => prev + curr, 0)
  const result =  sumIngresos -  sumEgresos
  res.json(result)
} catch(error){
 return res.status(500).json({message: error.message})
}
}

export const createOperations = async  (req ,res) =>{
    try{
    const {concepto, fecha, monto, tipo} = req.body
    const newOperation = await operations.create({
        concepto,
        fecha,
        monto,
        tipo,
    })
    res.json(newOperation)
    }catch(error){
    return res.status(500).json({message: error.message})
    }
}

export const updateOperations = async (req,res) =>{
try{
 const {id} = req.params
const {concepto, monto, fecha, tipo } = req.body
 const Operation = await operations.findByPk(id)
 Operation.concepto = concepto;
 Operation.monto = monto
 Operation.fecha = fecha
 Operation.tipo = tipo
await Operation.save()
res.json(Operation)
} catch(error){
return res.status(500).json({message: error.message})
}
}

export const deleteOperations = async (req,res) =>{
 try{
    console.log(req.params.id)
    const {id} = req.params
    await operations.destroy({
        where:{
            id,
        }})
    res.sendStatus(204) 
 } catch(error){
 return res.status(500).json({message: error.message})
 }
}

