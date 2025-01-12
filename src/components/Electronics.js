import React,{useState,useEffect} from 'react';
import ProductStructure from "./ProductStructure"

const Women = () => {
     const [products, setProduct] = useState([]);
      useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then(json => {
                setProduct(json);
            
            })
    }, []);
    return (
        <>
            <div className="heading">
                    <h1>Electronics Products</h1>
                </div>
            <ProductStructure products={products} />
        </>
    )
}

export default Women
