import React from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import '../App.css'
const ProductComponent = ()=>{
    const products = useSelector((state)=>state.allProducts.products)
    console.log("this is product component",products)
    const renderlist = products.map((product)=>{
        const {id,title,price,image,category} = product
        return(
            <div className="four wide column" key={id}>
           <Link to={`/product/${id}`}>
           <div className="ui link cards">
                <div className="card">
                 <div className="image"><img src={image} title={title} /></div>   

                 <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">${price}</div>
                    <div className="meta">{category}</div>
                 </div> 
                
                </div>
            </div>
           </Link>
        </div>
        )
    })
    // const {id,title} = products[0]
    // console.log(products)
    return(
     <>{renderlist}</>  
    )
}
export default ProductComponent