import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://pure-wildwood-79743.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    // Order Approval Status
    // const handleApproved = (id) => {
    //     fetch(`https://evening-brushlands-52503.herokuapp.com/orders/${id}`, {
    //         method: 'UPDATE',
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 swal("Approved!", "Approved Successfully!", "success");
    //             }
    //         })
    // }

    // Cancel Order
    const handleCancelOrder = id => {
        axios.delete(`https://pure-wildwood-79743.herokuapp.com/orders/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    alert("Order Cancel Successfully!!")
                }
            });
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
                            <th className="text-start text-color"></th>
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
                                    {
                                        order.status === 'Pending' ? <td className="text-danger fw-bold">{order.status}</td> : <td className="text-success fw-bold">{order.status}</td>
                                    }
                                    {/* <td><button onClick={() => handleApproved(order._id)} className="btn btn-sm btn-success">Approved</button></td> */}
                                    <td><button className="btn btn-sm btn-success">Approved</button></td>
                                    <td><button onClick={() => handleCancelOrder(order._id)} className="btn btn-sm btn-danger">Cancel</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;