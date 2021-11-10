import React from 'react';
// import { IoLocationSharp } from "react-icons/io5";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { MdEmail } from "react-icons/md";
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer pb-5 bg-color">
            <div className="container mt-5 pt-5 pb-3">
                <div>
                    <div className="row">
                        <div className="col-6 col-lg-3 mb-lg-0 mb-4 text-start">
                            <ul className="important-list p-0 px-lg-4">
                                <li className="text-start">Quick Links</li>
                                <li className="text-start">Home</li>
                                <li className="text-start">About us</li>
                                <li className="text-start">Contact</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <ul className="important-list p-0 px-lg-4">
                                <li className="text-start">Other pages</li>
                                <li className="text-start">My orders</li>
                                <li className="text-start">Manage all orders</li>
                                <li className="text-start">Add services</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <ul className="important-list p-0 px-lg-4">
                                <li className="text-start">Contact Info</li>
                                <li className="text-start my-1">123 street, California</li>
                                <li className="text-start my-1">+8801322810867</li>
                                <li className="text-start my-1">website@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <ul className="important-list p-0 px-lg-4">
                                <li className="text-start mb-1">Make a reservation</li>
                                <li className="text-start mt-1 mb-2" style={{ lineHeight: 1.6 }}>Our team is always available 24/7 to answer your queries</li>
                                <li className="text-start mt-1">
                                    <button className="rounded-pill btn theme-btn text-light my-2 px-3" type="tel">+88012345678</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="me-3">
                            <NavLink to="/">
                                <img src={logo} width="100px" alt="" />
                            </NavLink>
                        </div>
                        <div>
                            <p className="mt-5 mb-0 pb-5 m">Copyright ©waves-photography-2021 | This website is made by Imam Hassan Rimon</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;