import {ActionsTypes} from '../contants/action-types'
// Actions always return plane js objects
export const setProducts = (products)=>{
    console.log("recieving data on args",products)
    return {
        type:ActionsTypes.SET_PRODUCTS,
        payload:products 
    }
}

export const selectedProducts = (products)=>{
    console.log("selectedProducts working")
    return {
        type:ActionsTypes.SELECTED_PRODUCT,
        payload:products 
    }
}
export const removeSelectedProduct = () => {
    return {
      type:ActionsTypes.REMOVE_SELECTED_PRODUCT,
    };
  };