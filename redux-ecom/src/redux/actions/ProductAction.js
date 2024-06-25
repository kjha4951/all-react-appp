import { ActionType } from "../contants/action-type"
export const setProduct=(products)=>{
    return{
        type:ActionType.SET_PRODECTS,
        payload:products
    }
}
export const selectedProduct=(product)=>{
    return{
        type:ActionType.SELECTED_PRODUCT,
        payload:product
    }
}
