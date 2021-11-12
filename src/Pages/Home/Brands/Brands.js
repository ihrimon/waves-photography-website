import React from 'react';
import img1 from '../../../images/brand-1.png';
import img2 from '../../../images/brand-2.png';
import img3 from '../../../images/brand-3.png';
import img4 from '../../../images/brand-4.png';
import img5 from '../../../images/brand-5.png';
import img6 from '../../../images/brand-6.png';
import img7 from '../../../images/brand-7.png';
import img8 from '../../../images/brand-8.png';

const Brands = () => {
    return (
        <div >
            <div className="container bg-color border-radius p-5">
                <h2>Top Brands</h2>
                <div className="row row-cols-2 row-cols-lg-5 g-5 g-lg-5">
                    <div className="col">
                        <div className="p-3 border ">
                            <img src={img1} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <img src={img2} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <img src={img3} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <img src={img4} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <img src={img5} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <img src={img6} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <img src={img7} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <img src={img8} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <img src={img7} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <img src={img8} className="w-75" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;