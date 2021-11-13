import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [updater, setUpdater] = useState();

    const dropdownIcon = <FontAwesomeIcon icon={faAngleDown} />

    useEffect(() => {
        fetch('https://pure-wildwood-79743.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    // Order Approval Status
    // const handleUpdateStatus = (id, status) => {
    //     console.log(id, status);
    //     const data = { id: id, status: status }
    //     axios.post('https://pure-wildwood-79743.herokuapp.com/orders', data)
    //     .then(res => {
    //         if(res.data.modifiedCount > 0){
    //             setUpdater(res)
    //         }
    //     })
    // }

    // const handleApproved = (id) => {
    //     const approvedStatus = { email };
    //     fetch(`https://evening-brushlands-52503.herokuapp.com/orders/${id}`, {
    //         method: 'UPDATE',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 alert("Approved!", "Approved Successfully!", "success");
    //             }
    //         })
    // };

    // Cancel Order
    const handleCancelOrder = id => {
        const confirmation = window.confirm("Are you sure you want to delete thik item.")
        if (confirmation) {
            axios.delete(`https://pure-wildwood-79743.herokuapp.com/orders/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
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
                                    <td className="text-start">{order.productTitle.slice(0, 20)}</td>
                                    <td className="text-start">${order.price}</td>
                                    <td className="text-start">{order.approvedStatus}</td>
                                    <td className="text-start">{order.shippingStatus}</td>
                                    <td className="text-start">{order.cancelStatus}</td>
                                    {
                                        order.status === 'Pending' ? <td className="text-danger fw-bold">{order.status}</td> : <td className="text-success fw-bold">{order.status}</td>
                                    }
                                    {
                                        order.status === 'Order Process' ? <td className="text-danger fw-bold">{order.status}</td> : <td className="text-success fw-bold">{order.status}</td>
                                    }
                                    {
                                        order.status === 'Pending' ? <td className="text-danger fw-bold">{order.status}</td> : <td className="text-success fw-bold">{order.status}</td>
                                    }
                                    {/* <td><button onClick={() => handleApproved(order._id)} className="btn btn-sm btn-success">Approved</button></td> */}

                                    <td>
                                        <ul style={{ listStyleType: "none" }}>
                                            <li class="nav-item dropdown px-3 text-color">
                                                <a class="nav-link text-color" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    {dropdownIcon} <span className="ms-1">Actions</span>
                                                </a>
                                                <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                                                    <li><button onClick={() => handleCancelOrder(order._id)} className="btn btn-outline-success w-75 my-1 text-color">Approved</button></li>
                                                    <li><button onClick={() => handleCancelOrder(order._id)} className="btn btn-outline-success w-75 my-1 text-color">Shipped</button></li>
                                                    <li><button onClick={() => handleCancelOrder(order._id)} className="btn btn-outline-danger w-75 my-1 text-color">Cancel</button></li>
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