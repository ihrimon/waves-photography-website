import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import img from '../../../images/banner.png';

const Banner = () => {
    const arrowIcon = <FontAwesomeIcon icon={faLongArrowAltRight} />

    return (
        <div className="container">
            <div className="bg-color border-radius py-5">
                <div className="d-flex flex-lg-row flex-column align-items-center px-5">
                    <div className="col-lg-6 col-12 text-start">
                        <h1 className="text-color mt-3 fw-bold" >Panasonic Lumix DC-G100 4K Mirrorless Digital Camera</h1>
                        <p className="text-color mb-4">Lumix is Panasonic's brand of digital cameras, ranging from pocket point and shoot models to digital SLRs. ... Some Lumix models are branded with Leica lenses although manufacture the lenses.
                        </p>
                        <Link to="/allProducts"><button className="btn theme-btn text-light px-5 mb-3" type="submit" >{arrowIcon} <span className="ms-2">Explore...</span></button></Link>
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