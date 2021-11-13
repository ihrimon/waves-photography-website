import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/subscription.png'

const Subscription = () => {
    return (
        <div className=" bg-color my-5 py-lg-0 py-3">
            <div className="container p-lg-5 border-radius">
                <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                    <div className="col-lg-6 col-12 text-start">
                        <h2 className="fw-bold text-color">SUBSCRIBE OUR NEWSLETTER</h2>
                        <h5>GET UPDATE FOR NEWS, PRODUCT OFFTER</h5>

                        <div class="input-group mb-3 w-75 mt-3">
                            <input type="text" className="form-control w-50" placeholder="email address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn theme-btn text-light" type="button" id="button-addon2">Subscription</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <img src={img} className="img-fluid w-100" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;