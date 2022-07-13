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