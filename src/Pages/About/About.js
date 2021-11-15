import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import img from '../../images/subscription.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faFileInvoiceDollar, faCog, faHeadset } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const shippingIcon = <FontAwesomeIcon icon={faShippingFast} />
    const deliveryIcon = <FontAwesomeIcon icon={faFileInvoiceDollar} />
    const GuaranteeIcon = <FontAwesomeIcon icon={faCog} />
    const supportIcon = <FontAwesomeIcon icon={faHeadset} />

    return (
        <div>
            <Navigation></Navigation>
            <div className='container'>
                <div className="img-banner border-radius">
                    <div className="d-flex flex-lg-row flex-column align-items-center">
                        <div className="col-12 pt-5 pt-lg-0 text-light text-left color-theme">
                            <h1 className="mt-3 w-75 mx-auto text-color fw-bold" >About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container d-flex flex-lg-row flex-column align-items-lg-center justify-content-between mt-5">
                    <div className="col-lg-6 col-12 me-5">
                        <img src={img} className="w-100" alt="" />
                    </div>
                    <div className=" col-lg-6 col-12 text-start mt-3">
                        <h5 className="theme-color">The Best Camera forever</h5>
                        <h1 className="text-color">About Waves Photography</h1>
                        <p>Very Safe, Private, And Spacious Luxury Homes. We'll Help You Go life Safely. Travel Safely With the wonder travel for $2,500 Per Month With No Nightly Rates, Taxes or Fees. First-Class Service.</p>
                        <Link to="/allProducts"><button className="btn theme-btn text-light px-5 mt-4 rounded-0" type="submit" >Explore...</button></Link>
                    </div>
                </div>
            </div>

            {/* Delivery Service */}
            <div className="container mx-auto row row-cols-2 row-cols-lg-4 g-3 g-lg-4 mt-3">
                <div className="col">
                    <div className="border-end">
                        <h1 className="theme-color">{shippingIcon}</h1>
                        <h6>Free Shipping</h6>
                        <small>Free for first orders</small>
                    </div>
                </div>
                <div className="col">
                    <div className="border-end">
                        <h1 className="theme-color">{deliveryIcon}</h1>
                        <h6>Payment On Delivery</h6>
                        <small>Cash on delivery option</small>
                    </div>
                </div>
                <div className="col">
                    <div className="border-end">
                        <h1 className="theme-color">{GuaranteeIcon}</h1>
                        <h6>Free Guarantee</h6>
                        <small>30 Days Money Back</small>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <h1 className="theme-color">{supportIcon}</h1>
                        <h6>24/7 Online Support</h6>
                        <small>We have support 24/7</small>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default About;
