import axios from 'axios';

export function GetTotal(){
    return async function (dispatch){
    try{
      var json = await axios.get("http://localhost:3000/operations/total");
      return dispatch({
        type: "GET_TOTAL",
        payload: json.data
      })
     }catch(e){
     return e 
  }
  }
  }

  export function CreateOp(valores){
    return async function (dispatch){
     try{  
      var json = await axios.post("http://localhost:3000/operations/create",valores);
     return dispatch({
  type: "CREATE_OP",
  payload: json.data
  })
  }catch (err){
    return err
      }
  }
  }


  export function GetAllOp(){
    return async function (dispatch){
      try{  
       var json = await axios.get("http://localhost:3000/operations");
      return dispatch({
   type: "GET_OP",
   payload: json.data
   })
   }catch (err){
     return err
       }
   }
}