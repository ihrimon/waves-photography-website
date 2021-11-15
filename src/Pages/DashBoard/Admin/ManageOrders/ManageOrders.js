import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../../Shared/Footer/Footer';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [updater, setUpdater] = useState();

    const dropdownIcon = <FontAwesomeIcon icon={faAngleDown} />

    useEffect(() => {
        axios.get('https://pure-wildwood-79743.herokuapp.com/orders')
            .then(res => setOrders(res.data));
    }, [updater]);

    const handleUpdateStatus = (id, status) => {
        const data = { id: id, status: status };
        axios.post('https://pure-wildwood-79743.herokuapp.com/updateStatus', data)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setUpdater(res)
                    console.log(res)
                }
            })
    }

    // Cancel Order
    const handleCancelOrder = id => {
        const confirmation = window.confirm("Are you sure you want to delete thik item.")
        if (confirmation) {
            axios.delete(`https://pure-wildwood-79743.herokuapp.com/orders/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const restData = orders.filter(order => order._id !== id)
                        setOrders(restData);

                    }
                    else {
                        alert("Order Cancel Successfully!!")
                    }
                });
        }
    }

    return (
        <div className="container">
            <h3 className="my-5 mb-3 text-color">Manage All Orders</h3>
            <div className="table-responsive">
                <table className="table border table-hover">
                    <thead className="bg-color">
                        <tr className="thead-bg">
                            <th className="text-start text-light">SL.</th>
                            <th className="text-start text-light">Name</th>
                            <th className="text-start text-light">Email</th>
                            <th className="text-start text-light">Address</th>
                            <th className="text-start text-light">Product Name</th>
                            <th className="text-start text-light">Price</th>
                            <th className="text-light">Status</th>
                            <th className=" text-light">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th className="text-start" scope="row">{index + 1}</th>
                                    <td className="text-start">{order.name}</td>
                                    <td className="text-start">{order.email}</td>
                                    <td className="text-start">{order.address}</td>
                                    <td className="text-start">{order.productTitle.slice(0, 30)}...</td>
                                    <td className="text-start">৳ {order.price}</td>
                                    {/* <td className="text-start">{order.status}</td> */}
                                    <td>
                                        {order.status === 'Pending' ?
                                            <span className="text-warning rounded fw-bold ">{order.status}</span>
                                            :
                                            <span className="text-success p-1 rounded fw-bold">{order.status}</span>
                                        }
                                    </td>

                                    <td>
                                        <ul style={{ listStyleType: "none" }}>
                                            <li className="nav-item dropdown px-3 text-color">
                                                <a className="nav-link text-color" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    {dropdownIcon} <span className="ms-1">Actions</span>
                                                </a>
                                                <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                                                    <button onClick={() => handleUpdateStatus(order._id, order.status)} className="btn btn-outline-success w-75 my-1 text-color">Pending</button>
                                                    <button onClick={() => handleUpdateStatus(order._id, order.status)} className="btn btn-outline-success w-75 my-1 text-color">Approve</button>
                                                    <button onClick={() => handleCancelOrder(order._id)} className="btn btn-outline-danger w-75 my-1 text-color">Cancel</button>
                                                </ul>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageOrders;