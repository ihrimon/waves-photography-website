import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [updater, setUpdater] = useState();

    const dropdownIcon = <FontAwesomeIcon icon={faAngleDown} />

    useEffect(() => {
        axios.get('https://pure-wildwood-79743.herokuapp.com/orders')
            .then(res => setOrders(res.data));
    }, [updater]);

    const handleUpdateStatus = (id, status) => {
        console.log(id, status);
        const data = { id: id, status: status };
        axios.post('https://pure-wildwood-79743.herokuapp.com/updateStatus', data)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setUpdater(res)
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
            <h3 className="mt-5 mb-3 text-color">Manage All Orders</h3>
            <div className="table-responsive">
                <table className="table border table-hover">
                    <thead className="bg-color">
                        <tr>
                            <th className="text-start text-color">SL.</th>
                            <th className="text-start text-color">Name</th>
                            <th className="text-start text-color">Email</th>
                            <th className="text-start text-color">Address</th>
                            <th className="text-start text-color">Product Name</th>
                            <th className="text-start text-color">Price</th>
                            <th className="text-start text-color">Status</th>
                            <th className=" text-color">Actions</th>
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
                                    <td className="text-start">{order.productTitle}</td>
                                    <td className="text-start">${order.price}</td>
                                    {/* <td className="text-start">{order.status}</td> */}
                                    <td>
                                        {order.status === 'pending' ?
                                            <span className="bg-warning p-1 rounded text-white d-inline-block">{order.status}</span>
                                            :
                                            <span className="bg-success p-1 rounded text-white d-inline-block">{order.status}</span>
                                        }
                                    </td>

                                    <td>
                                        <ul style={{ listStyleType: "none" }}>
                                            <li class="nav-item dropdown px-3 text-color">
                                                <a class="nav-link text-color" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    {dropdownIcon} <span className="ms-1">Actions</span>
                                                </a>
                                                <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
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