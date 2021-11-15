import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';


const Products = () => {
    const [products, setProducts] = useState([]);
    const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />

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
                <h2 className="mb-4 text-center theme-color fw-bold">Features Products</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.slice(0, 6).map(product =>
                            <div className="col-lg-3 col-12" key={product._id}>
                                <div className="card d-flex flex-column align-items-start bg-light border border-0  product-card m-2">
                                    <div className="card h-100 product">
                                        <img src={product.img} className="card-img-top p-4 img-rounded" alt="" />
                                        <div className="card-body p-4 pt-0">
                                            <h6 className="card-title fw-bold text-color">{product.name}</h6>
                                            <small className="card-text">{product.description}</small>
                                            <p className="fw-bold theme-color mt-3">Price: {product.price} TK</p>
                                            <Link to={`/placeOrder/${product._id}`}>
                                                <button className="btn theme-btn px-5 text-light" product={product}>{cartIcon} <span className="ms-2">Buy Now</span></button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;