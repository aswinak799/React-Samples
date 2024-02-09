import React from 'react';
import { useParams, Link } from 'react-router-dom';


const ProductDetails = () => {
    const params = useParams()
    return (
        <div>
            <h1>Product Details {params.id} </h1>
            <Link to='..' relative='path' >back</Link>
        </div>
    );
}

export default ProductDetails;
