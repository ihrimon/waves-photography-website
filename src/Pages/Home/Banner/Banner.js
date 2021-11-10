import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/banner.png'

const Banner = () => {
    return (
        <div className="bg-color">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-12 text-start">
                        <h1 className="fw-bold w-75">BEAUTY SALON FOR EVERY WOMEN</h1>
                        <p className="w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corporis aspernatur natus obcaecati alias distinctio eius delectus veritatis tenetur rerum.</p>
                        <Link to="/allProducts" className="btn theme-btn px-5 text-light">Explore...</Link>
                    </div>
                    <div className="col-lg-6 col-12">
                        <img src={img} className="img-fluid w-75" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;