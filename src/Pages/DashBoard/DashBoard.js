// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import Toolbar from '@mui/material/Toolbar';
// import { Button, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { Switch, Route, useRouteMatch } from "react-router-dom";

// import useAuth from '../../hooks/useAuth';
// import Pay from './UserDashboard/Pay/Pay';
// import Review from './UserDashboard/Review/Review';
// import ManageOrders from './Admin/ManageOrders/ManageOrders';
// import AddProduct from './Admin/AddProduct/AddProduct';
// import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
// import ManageProducts from './Admin/MangeProducts/ManageProducts';
// import Home from '../Home/Home/Home';
// import logo from '../../images/logo.png'
// import MyOrders from './UserDashboard/MyOrders/MyOrders';


// const drawerWidth = 220;

// function Dashboard(props) {
//     const { window } = props;
//     const [mobileOpen, setMobileOpen] = React.useState(false);

//     let { path, url } = useRouteMatch();
//     const { admin, logOut } = useAuth();

//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//     };

//     const drawer = (
//         <div>
//             <Toolbar />
//             <Link to="/home"><img src={logo} alt="" /></Link> <br />
//             <Divider />
// <Link to="/home"><Button variant="outlined">Home</Button></Link> <br />
// <Link to={`${url}/dashboard`}><Button variant="outlined">Dashboard</Button></Link> <br />
// {!admin && <Box>
//     <Link to={`${url}/pay`}><Button variant="outlined">Pay</Button></Link> <br />
//     <Link to={`${url}/myOrders`}><Button variant="outlined">MyOrders</Button></Link> <br />
//     <Link to={`${url}/review`}><Button variant="outlined">Review</Button></Link> <br />
// </Box>
// }

// {admin &&
//     <Box>
//         <Link to={`${url}/manageOrders`}><Button variant="outlined">Manage All Orders</Button></Link> <br />
//         <Link to={`${url}/addProduct`}><Button variant="outlined">Add A Product</Button></Link> <br />
//         <Link to={`${url}/makeAdmin`}><Button variant="outlined">Make Admin</Button></Link> <br />
//         <Link to={`${url}/manageProducts`}><Button variant="outlined">Manage Products</Button></Link> <br />
//     </Box>
// }

// <Link to={`${url}/home`}><Button onClick={logOut} variant="outlined">Logout</Button></Link>

//         </div>
//     );

//     const container = window !== undefined ? () => window().document.body : undefined;

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <AppBar
//                 position="fixed"
//                 sx={{
//                     width: { sm: `calc(100% - ${drawerWidth}px)` },
//                     ml: { sm: `${drawerWidth}px` },
//                 }}
//             >
//                 <Toolbar>
//                     <Typography variant="h6" noWrap component="div">
//                         Dashboard
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Box
//                 component="nav"
//                 sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//                 aria-label="mailbox folders"
//             >
//                 {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//                 <Drawer
//                     container={container}
//                     variant="temporary"
//                     open={mobileOpen}
//                     onClose={handleDrawerToggle}
//                     ModalProps={{
//                         keepMounted: true, // Better open performance on mobile.
//                     }}
//                     sx={{
//                         display: { xs: 'block', sm: 'none' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                 >
//                     {drawer}
//                 </Drawer>
//                 <Drawer
//                     variant="permanent"
//                     sx={{
//                         display: { xs: 'none', sm: 'block' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                     open
//                 >
//                     {drawer}
//                 </Drawer>
//             </Box>
//             <Box
//                 component="main"
//                 sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//             >
//                 <Toolbar />
// <Switch>
//     <Route exact path={`${path}/pay`}>
//         <Pay></Pay>
//     </Route>
//     <Route path={`${path}/myOrders`}>
//         <MyOrders></MyOrders>
//     </Route>
//     <Route path={`${path}/home`}>
//         <Home></Home>
//     </Route>
//     <Route path={`${path}/review`}>
//         <Review></Review>
//     </Route>
//     <Route path={`${path}/manageOrders`}>
//         <ManageOrders></ManageOrders>
//     </Route>
//     <Route path={`${path}/addProduct`}>
//         <AddProduct></AddProduct>
//     </Route>
//     <Route path={`${path}/makeAdmin`}>
//         <MakeAdmin></MakeAdmin>
//     </Route>
//     <Route exact path={`${path}/manageProducts`}>
//         <ManageProducts></ManageProducts>
//     </Route>
// </Switch>
//             </Box>
//         </Box>
//     );
// }

// export default Dashboard;

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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();
    const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />

    const activeStyle = {
        backgroundColor: "#17c6aa",
        color: "white",
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
                                    <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to="/home">Home</NavLink>
                                </li>

                                {!admin &&
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active" aria-current="page" activeStyle={activeStyle} to={`${url}/myOrders`}>My orders</NavLink>
                                        </li>
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={activeStyle} to={`${url}/addReview`}>Add review</NavLink>
                                        </li>
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={activeStyle} to={`${url}/pay`}>Pay</NavLink>
                                        </li>
                                    </ul>
                                }


                                {admin &&
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active" aria-current="page" activeStyle={activeStyle} to={`${url}/manageOrders`}>Manage orders</NavLink>
                                        </li>
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active" aria-current="page" activeStyle={activeStyle} to={`${url}/addProducts`}>Add Products</NavLink>
                                        </li>
                                        <li className="list-group-item text-start border border-0">
                                            <NavLink className="nav-link active" aria-current="page" activeStyle={activeStyle} to={`${url}/makeAdmin`}>Make admin</NavLink>
                                        </li>
                                    </ul>
                                }

                                <li className="list-group-item text-start border border-0">

                                    <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={activeStyle} to={`${url}/logout`}><button className="btn btn-outline-success" onClick={logOut}>{logoutIcon} <span className="ms-2">Log Out</span></button></NavLink>
                                </li>
                            </ul>

                            {/* <Link to={`${url}/home`}><butt onClick={logOut} variant="outlined">Logout</butt></Link> */}
                        </div>
                        <div className="col-lg-10">
                            <h2 className="ms-2 text-start">User Dashboard</h2>
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
                                <Route path={`${path}/manageOrders`}>
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
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Cycle Mart</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-start border border-0">
                                        <NavLink className="nav-link" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to="/home">Home</NavLink>
                                    </li>

                                    <li className="list-group-item text-start border border-0">
                                        <NavLink className="nav-link" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/myOrders`}>My Orders</NavLink>
                                    </li>

                                    <li className="list-group-item text-start border border-0">
                                        <NavLink className="nav-link" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/manageOrders`}>Manage Orders</NavLink>
                                    </li>

                                    <li className="list-group-item text-start border border-0">
                                        <NavLink className="nav-link active" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/addProducts`}>Add Products</NavLink>
                                    </li>

                                    <li className="list-group-item text-start border border-0">
                                        <NavLink className="nav-link " aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/makeAdmin`}>Make Admin</NavLink>
                                    </li>

                                    <li className="list-group-item text-start border border-0">
                                        <NavLink className="nav-link" aria-current="page" style={{ color: '#000' }} activeStyle={{ fontWeight: 'bold' }} to={`${url}/pay`}>Pay</NavLink>
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
                            <Route path={`${path}/manageOrders`}>
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