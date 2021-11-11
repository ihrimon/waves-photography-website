import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ product }) => {
    const { _id, name, img, description, price } = product;
    const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />
    return (
        <div className="col-lg-3 col-12">
            <div className="card d-flex flex-column align-items-start bg-light border-0 product-card m-2">
                <img src={img} className="card-img-top p-4 img-rounded" alt="" />
                <div className="card-body p-4 pt-0">
                    <h6 className="card-title fw-bold text-color">{name}</h6>
                    <small className="card-text">{description}</small>
                    <p className="fw-bold theme-color mt-3">Price: {price} TK</p>
                    <Link to={`/purchase/${_id}`}>
                        <button className="btn theme-btn px-5 text-light" service={product}>{cartIcon} <span className="ms-2">Buy Now</span></button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default Product;