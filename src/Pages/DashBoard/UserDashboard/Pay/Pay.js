import React from 'react';
import img1 from '../../../../images/pay-1.png';
import img2 from '../../../../images/pay-2.png';
import img3 from '../../../../images/pay-3.png';
import img4 from '../../../../images/pay-4.png';

const Pay = () => {
    return (
        <div >
            <div className="container border-radius p-5 my-5">
                <h2 className="text-color fw-bold mb-1">Payment Method</h2>
                <hr />

                <h5 className="theme-color">Payment system coming soon.</h5>
                <div className="border-radius w-75 text-center mx-auto my-5">
                    <div className="row row-cols-2 row-cols-lg-5 g-5 g-lg-5 text-center align-items-center justify-content-center">
                        <div className="col">
                            <div className="p-3">
                                <img src={img1} className="w-75" alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <img src={img2} className="w-75" alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <img src={img3} className="w-75" alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <img src={img4} className="w-75" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pay;