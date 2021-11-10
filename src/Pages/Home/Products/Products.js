import React, { useEffect, useState } from 'react';
// import useAuth from '../../../hooks/useAuth';
import Product from '../Products/Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // const { isLoading } = useAuth();
    // if (isLoading) {
    //     return (
    //         <div className="d-flex justify-content-center align-items-center spinner-style">
    //             <div className="d-flex justify-content-center spinner-grow" role="status">
    //                 <span className="visually-hidden">Loading...</span>
    //             </div>
    //         </div>
    //     )
    // }
    return (
        <div>
            <div className="container my-5">
                <h2 className="mb-4 text-center theme-color">Best Package For Your Travel
                </h2>
                <div className="row row-cols-1 row-cols-md3 g-4">
                    {
                        products.map(product => <Product
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