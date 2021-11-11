import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/banner.png'

const Subscription = () => {
    return (
        <div className="container">
            <div className="bg-color p-lg-5 border-radius">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 ps-5 col-12 text-start">
                        <h1 className="fw-bold text-color" style={{ fonoFamily: 'amiri' }}>Panasonic Lumix DC-G100 4K Mirrorless Digital Camera</h1>
                        <p className="w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corporis aspernatur natus obcaecati alias distinctio eius delectus veritatis tenetur rerum.</p>
                        <Link to="/allProducts" className="btn theme-btn px-5 text-light">Explore...</Link>
                    </div>
                    <div className="col-lg-6 col-12">
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;