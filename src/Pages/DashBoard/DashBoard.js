import React from 'react';
import { NavLink, Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import MyOrders from './UserDashboard/MyOrders/MyOrders';
import AddReview from './UserDashboard/AddReview/AddReview';
import Pay from './UserDashboard/Pay/Pay';
import ManageOrders from './Admin/ManageOrders/ManageOrders';
import AddProduct from './Admin/AddProduct/AddProduct';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import logo from '../../images/logo.png';
import useAuth from '../../hooks/useAuth';
import Home from '../Home/Home/Home';
import ManageProducts from './Admin/MangeProducts/ManageProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoneyCheckAlt, faCheckCircle, faSignOutAlt, faUserShield, faPlus, faTasks, faCompress } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();

    const homeIcon = <FontAwesomeIcon icon={faHome} />
    const payIcon = <FontAwesomeIcon icon={faMoneyCheckAlt} />
    const reviewIcon = <FontAwesomeIcon icon={faCheckCircle} />
    const orderIcon = <FontAwesomeIcon icon={faTasks} />
    const productIcon = <FontAwesomeIcon icon={faCompress} />
    const addIcon = <FontAwesomeIcon icon={faPlus} />
    const adminIcon = <FontAwesomeIcon icon={faUserShield} />
    const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />


    const activeStyle = {
        backgroundColor: "#17c6aa",
        color: "white",
        fontWeight: 'bold',
        width: "75%",
        borderRadius: "6px"
    };

    return (
        <div>
            <div className="d-lg-block d-none">
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col-lg-2 border-end">
                            <Link to="/"><img src={logo} alt="" className="w-50" /></Link>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item text-start border border-0">
                                    <NavLink className="nav-link  text-color" aria-current="page" activeStyle={activeStyle} to="/home">{homeIcon} <span className="ms-2">Home</span></NavLink>
                                </li>

                                {!admin &&
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active text-color" aria-current="page" activeStyle={activeStyle} to={`${url}/pay`}>{payIcon} <span className="ms-2">Pay</span></NavLink>
                                        </li>
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active text-color" aria-current="page" activeStyle={activeStyle} to={`${url}/myOrders`}>{orderIcon} <span className="ms-2">My Orders</span></NavLink>
                                        </li>
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active text-color" aria-current="page" activeStyle={activeStyle} to={`${url}/addReview`}>{reviewIcon} <span className="ms-2">Add Review</span></NavLink>
                                        </li>
                                    </ul>
                                }


                                {admin &&
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active text-color" aria-current="page" activeStyle={activeStyle} to={`${url}/manageOrders`}>{orderIcon} <span className="ms-2">Manage Orders</span></NavLink>
                                        </li>
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active text-color" aria-current="page" activeStyle={activeStyle} to={`${url}/addProducts`}>{addIcon} <span className="ms-2">Add Products</span></NavLink>
                                        </li>
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active text-color" aria-current="page" activeStyle={activeStyle} to={`${url}/makeAdmin`}>{adminIcon} <span className="ms-2">Make Admin</span></NavLink>
                                        </li>
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active text-color" aria-current="page" activeStyle={activeStyle} to={`${url}/manageProducts`}>{productIcon} <span className="ms-2">Manage Product</span></NavLink>
                                        </li>
                                    </ul>
                                }

                                <li className="list-group-item text-start border border-0">
                                    <NavLink onClick={logOut} className="nav-link active text-color" aria-current="page" activeStyle={{ fontWeight: 'bold' }} to="/home">{logoutIcon} <span className="ms-2">Log Out</span></NavLink>
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-10">
                            {!admin && <div className="bg-color py-3">
                                <h4 className="ms-2 text-start ms-4 mx-auto text-color">User Dashboard</h4></div>}
                            {admin && <div className="bg-color py-3">
                                <h4 className="ms-2 text-start ms-4 text-color">Admin Dashboard</h4>
                            </div>}
                            <Switch>
                                <Route exact path={`${path}/pay`}>
                                    <Pay></Pay>
                                </Route>
                                <Route path={`${path}/myOrders`}>
                                    <MyOrders></MyOrders>
                                </Route>
                                <Route path={`${path}/home`}>
                                    <Home></Home>
                                </Route>
                                <Route path={`${path}/addReview`}>
                                    <AddReview></AddReview>
                                </Route>
                                <Route exact path={`${path}/manageOrders`}>
                                    <ManageOrders></ManageOrders>
                                </Route>
                                <Route path={`${path}/addProducts`}>
                                    <AddProduct></AddProduct>
                                </Route>
                                <Route path={`${path}/makeAdmin`}>
                                    <MakeAdmin></MakeAdmin>
                                </Route>
                                <Route exact path={`${path}/manageProducts`}>
                                    <ManageProducts></ManageProducts>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>

            {/* drawer */}
            <div className="d-lg-none d-block">
                <nav className="navbar navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <NavLink className="navbar-brand mx-auto" to="#">
                            <img src={logo} alt="" className="img-fluid" width={'120px'} />
                        </NavLink>
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Waves Photography</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-start border border-0">
                                        <NavLink className="nav-link  text-color" aria-current="page" activeStyle={{ fontWeight: 'bold' }} to="/home">{homeIcon} <span className="ms-2">Home</span></NavLink>
                                    </li>

                                    {!admin &&
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item text-start border border-0">
                                                <NavLink className="nav-link active text-color" aria-current="page" activeStyle={activeStyle} to={`${url}/pay`}>{payIcon} <span className="ms-2">Pay</span></NavLink>
                                            </li>
                                            <li className="list-group-item text-start border border-0">
                                                <NavLink className="nav-link active text-color" aria-current="page" activeStyle={activeStyle} to={`${url}/myOrders`}>{orderIcon} <span className="ms-2">My Orders</span></NavLink>
                                            </li>
                                            <li className="list-group-item text-start border border-0">
                                                <NavLink className="nav-link active text-color" aria-current="page" activeStyle={activeStyle} to={`${url}/addReview`}>{reviewIcon} <span className="ms-2">Add Review</span></NavLink>
                                            </li>
                                        </ul>
                                    }


                                    {admin &&
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item text-start border border-0">
                                                <NavLink className="nav-link active text-color" aria-current="page" activeStyle={activeStyle} to={`${url}/manageOrders`}>{orderIcon} <span className="ms-2">Manage Orders</span></NavLink>
                                            </li>
                                            <li className="list-group-item text-start border border-0">
                                                <NavLink className="nav-link active text-color" aria-current="page" activeStyle={activeStyle} to={`${url}/addProducts`}>{addIcon} <span className="ms-2">Add Products</span></NavLink>
                                            </li>
                                            <li className="list-group-item text-start border border-0">
                                                <NavLink className="nav-link active text-color" aria-current="page" activeStyle={activeStyle} to={`${url}/makeAdmin`}>{adminIcon} <span className="ms-2">Make Admin</span></NavLink>
                                            </li>
                                            <li className="list-group-item text-start border border-0">
                                                <NavLink className="nav-link active text-color" aria-current="page" activeStyle={activeStyle} to={`${url}/manageProducts`}>{productIcon} <span className="ms-2">Manage Product</span></NavLink>
                                            </li>
                                        </ul>
                                    }

                                    <li className="list-group-item text-start border border-0">
                                        <NavLink onClick={logOut} className="nav-link active text-color" aria-current="page" activeStyle={{ fontWeight: 'bold' }} to="/home">{logoutIcon} <span className="ms-2">Log Out</span></NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Switch>
                            <Route exact path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/home`}>
                                <Home></Home>
                            </Route>
                            <Route path={`${path}/addReview`}>
                                <AddReview></AddReview>
                            </Route>
                            <Route exact path={`${path}/manageOrders`}>
                                <ManageOrders></ManageOrders>
                            </Route>
                            <Route path={`${path}/addProducts`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route exact path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                        </Switch>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Dashboard;