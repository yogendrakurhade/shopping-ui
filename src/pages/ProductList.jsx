import React, { useEffect } from 'react';
import { getAllProducts } from "../services/api";

function ProductList(props) {
    const [products, setProducts] = React.useState([]);

    useEffect(()=>{
        getAllProducts()
        .then(setProducts)
        .catch(console.error);
    }, []);
    return (
        <div>
            {
                products.map(product=>(
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default ProductList;