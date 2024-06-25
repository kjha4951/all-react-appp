import { ActionType } from "../contants/action-type";


const initialState={
    products:[]
}
export const productReducer=(state=initialState,{type,payload})=>{

    switch(type){
        case ActionType.SET_PRODECTS:
          return {...state,products:payload};  
        
        default:
            return state;
    }
}