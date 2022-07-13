import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import {GetTotal} from './action/index'
import { useEffect} from 'react';


const Home = () =>{

    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(GetTotal());
   },[]);

   const total = useSelector((state) => state.total)
   console.log(total)

return(
    <h1>TOTAL:{total}</h1>
)
}

export default Home;