import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const { _id, name, img, description, price } = product;
    return (
        <div className="col-lg-3 col-12">
            <div className="card h-100 me-0 d-flex flex-column align-items-start card-rounded service">
                <img src={img} className="card-img-top p-3 img-rounded" alt="" />
                <div className="card-body p-3 pt-0">
                    <div className="row my-2">
                        <div className="col-7">
                            <h5 className="card-title fw-bold text-start">{name}</h5>
                        </div>
                        <div className="col-5">
                            <p className="fw-bold theme-color p-2 bg-light border rounded">${price}</p>
                        </div>
                    </div>
                    <p className="card-text text-start">{description}</p>
                    <div className="row">
                        <div className="text-center mb-2">
                            <Link to={`/purchase/${_id}`}>
                                <button className="btn theme-btn text-light" service={product}>Purchase</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;