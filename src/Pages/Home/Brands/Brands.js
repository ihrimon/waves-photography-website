import React from 'react';
import img1 from '../../../images/brand-1.png';
import img2 from '../../../images/brand-2.png';
import img3 from '../../../images/brand-3.png';
import img4 from '../../../images/brand-4.png';
import img5 from '../../../images/brand-5.png';
import img6 from '../../../images/brand-6.png';
import img7 from '../../../images/brand-7.png';
import img8 from '../../../images/brand-8.png';
import img9 from '../../../images/brand-9.png';
import img10 from '../../../images/brand-10.png';

const Brands = () => {
    return (
        <div >
            <div className="container border-radius p-5 my-5">
                <h2 className="text-color fw-bold mb-1">Top Brands</h2>
                <hr />
                <div className="row row-cols-2 row-cols-lg-5 g-5 g-lg-5">
                    <div className="col">
                        <div className="p-3 border bg-light product-card">
                            <img src={img1} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light product-card">
                            <img src={img2} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light product-card">
                            <img src={img3} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light product-card">
                            <img src={img4} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light product-card">
                            <img src={img5} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light product-card">
                            <img src={img6} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light product-card">
                            <img src={img7} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light product-card">
                            <img src={img8} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light product-card">
                            <img src={img9} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light product-card">
                            <img src={img10} className="w-75" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;