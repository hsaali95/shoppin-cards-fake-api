import {combineReducers} from 'redux'
import { productReducer ,selectedProductReducer} from './productReducer'
// combineReducers takes an object
 const reducers = combineReducers({
    allProducts:productReducer ,
    product:selectedProductReducer
})
export default reducers