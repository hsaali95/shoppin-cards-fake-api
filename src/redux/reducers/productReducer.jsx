import { ActionsTypes } from "../contants/action-types";

const initialSatate = {
    products:[]
}
export const productReducer = (state = initialSatate, {type,payload})=>{
    switch (type) {
        case ActionsTypes.SET_PRODUCTS:
            console.log("action working ")
            return {
                ...state,
                products:payload
            }
        default:
            return state
    }
}
export const selectedProductReducer = (state ={},{type,payload})=>{
switch (type) {
    case ActionsTypes.SELECTED_PRODUCT:
         return{
             ...state,...payload
         }
         case ActionsTypes.REMOVE_SELECTED_PRODUCT:
            return {};
    default:
        return state
}
}