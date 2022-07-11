import { bindActionCreators } from "redux";


const initialState = {
    total:[]
}


const rootReducer = (state = initialState, action) => {
    switch(action.type) { 
    case "GET_TOTAL":
    return {
        ...state,
        total:action.payload
    }

        default: return {...state}
    }
}