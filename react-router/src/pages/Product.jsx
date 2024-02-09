import React from 'react';
import { Link } from 'react-router-dom';
const PRODUCTS = [
    { title: 'Product1', pid: '1'},
    { title: 'Product2', pid: '2'},
    { title: 'Product3', pid: '3'},
];
const Product = () => {
    return (
        <div>
            <h1>This is Products Page</h1>
            <ul>
                {PRODUCTS.map((product=> <li key={product.pid}><Link to={product.pid}>{product.title}</Link></li>))}
            </ul>
        </div>
    );
}

export default Product;
