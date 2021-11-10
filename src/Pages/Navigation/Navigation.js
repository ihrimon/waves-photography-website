import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';

const Navigation = () => {
    const { user, logOut } = useAuth();

    const activeStyle = {
        fontWeight: "bold",
        color: "#f63e7b"
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container py-3">
                <NavLink to="/">
                    <img src={logo} width="150px" alt="" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/allProducts">All Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/admin">Admin</NavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            {
                                ((user.displayName) && (user.photoURL)) &&
                                <div className="user rounded-pill mx-lg-0 mx-auto py-1 px-2 mt-1 d-flex align-items-center">
                                    <img src={user.photoURL} className="rounded-pill user-img" alt="" />
                                    <p className="ms-2 my-2 fw-bold">{user.displayName}</p>
                                </div>
                            }
                        </li>

                        <li className="nav-item">
                            {(user.displayName) && (user.photoURL) ?
                                <button onClick={logOut} className="btn btn-outline-primary ms-2">Log Out</button> :
                                <NavLink to="/login"><button className="btn btn-primary me-1" type="submit" >Login</button></NavLink>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;


