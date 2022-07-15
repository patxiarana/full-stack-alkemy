import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { GetAllOp } from "./action";
import MaterialCard from "./MaterialCard";


const AllOperations = () =>{

 const AllOp = useSelector((state) => state.Allop)
console.log(AllOp)
 const dispatch = useDispatch();
 useEffect(() =>{
 dispatch(GetAllOp())
 },[])


return(



<div>
<div className='Op_map'>
     {AllOp?.map((e) => (

             <MaterialCard 
             id = {e.id}
             key= {e.id}
             concepto={e.concepto}
            monto={e.monto}
            fecha = {e.fecha}
            tipo = {e.tipo}
             />
            
             ))}
  </div>

</div>

)
}


export default  AllOperations;