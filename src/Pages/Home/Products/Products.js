import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
// import useAuth from '../../../hooks/useAuth';
import Product from '../Products/Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://pure-wildwood-79743.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const { isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center spinner-style">
                <div className="d-flex justify-content-center spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="container p-5 my-3">
                <h2 className="mb-4 text-center theme-color">Features Products
                </h2>
                <hr/>
                <div className="row row-cols-1 row-cols-md3 g-4">
                    {
                        products.slice(2, 8).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;