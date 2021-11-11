import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import './AllProduct.css';


const AllProducts = () => {
    const [products, setProducts] = useState([])
    const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const { isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-start">
                <div className="d-flex justify-content-center spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="container my-5">
                <h2 className="mb-3">Products</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product =>
                            <div className="col-lg-3 col-12" key={product._id}>
                                <div className="card d-flex flex-column align-items-start bg-light border border-0  product-card m-2">
                                    <div className="card h-100 product">
                                        <img src={product.img} className="card-img-top p-4 img-rounded" alt="" />
                                        <div className="card-body p-4 pt-0">
                                            <h6 className="card-title fw-bold text-color">{product.name}</h6>
                                            <small className="card-text">{product.description}</small>
                                            <p className="fw-bold theme-color mt-3">Price: {product.price} TK</p>
                                            <Link to={`/purchase/${product._id}`}>
                                                <button className="btn theme-btn px-5 text-light" product={product}>{cartIcon} <span className="ms-2">Buy Now</span></button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;