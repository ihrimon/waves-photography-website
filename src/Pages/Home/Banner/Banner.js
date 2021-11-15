import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import './Banner.css';

const Banner = () => {
    const arrowIcon = <FontAwesomeIcon icon={faLongArrowAltRight} />

    return (
        <div className="container">
            <div className="img-banner border-radius">
                <div className="d-flex flex-lg-row flex-column align-items-center">
                    <div className="col-12 pt-5 pt-lg-0 text-light text-left color-theme">
                        <h1 className="text-size mt-3 text-light mx-auto" >Panasonic Lumix DC-G100 4K Mirrorless Digital Camera</h1>
                        <p className="text-light mx-auto mb-4">Lumix is Panasonic's brand of digital cameras, ranging from pocket point-and-shoot models to digital SLRs. ... Some Lumix models are branded with Leica lenses (e.g. Nocticron or Elmarit lenses), although Leica does not manufacture the lenses. Others are rebranded as Leica cameras with different cosmetic stylings.
                        </p>
                        <Link to="/allProducts"><button className="btn theme-btn text-light px-5 mb-3" type="submit" >{arrowIcon} <span className="ms-2">Explore...</span></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;