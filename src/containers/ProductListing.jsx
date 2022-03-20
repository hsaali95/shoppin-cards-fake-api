import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import {setProducts} from '../redux/actions/productActions'

const ProductListing = ()=>{
    const products = useSelector((state)=>state)
    const dispatch = useDispatch()

    console.log("this is state data",products)
    const fetchProducts = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((error)=>{
            console.log(error)
        })
        console.log("This is api response ",response.data)
        dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts() 
    },[])
    // console.log("products :",products)
    return(
    <div className="ui grid container">
      <ProductComponent />
    </div>
    )
    
}
export default ProductListing