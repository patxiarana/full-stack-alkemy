import { bindActionCreators } from "redux";


const initialState = {
    total:0,
    createOP:[],
}


const rootReducer = (state = initialState, action) => {
    switch(action.type) { 
    case "GET_TOTAL":
    return {
        ...state,
        total:action.payload
    }
    case "CREATE_OP":
        let operaciones = []
        return{
       ...state,
       createOP: operaciones.concat(action.payload)
        }
        default: return {...state}
    }
}
export default rootReducer;