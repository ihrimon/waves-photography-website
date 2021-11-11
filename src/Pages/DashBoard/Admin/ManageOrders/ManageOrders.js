import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/orders')
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
        swal({
            title: "Are you sure?",
            text: "Cancel for this order.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:4000/orders/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Deleted!", "Deleted Successfully!", "success");
                            }
                        })
                } else {
                    swal("Delete Canceled!");
                }
            });
    }

    return (
        <div className="container">
            <h2 className="mt-5 mb-3">Manage All Orders</h2>
            <div className="table-responsive">
                <table className="table border table-hover">
                    <thead>
                        <tr>
                            <th className="text-start">SL.</th>
                            <th className="text-start">Name</th>
                            <th className="text-start">Email</th>
                            <th className="text-start">Address</th>
                            <th className="text-start">Service</th>
                            <th className="text-start">Amount</th>
                            <th className="text-start">Status</th>
                            <th className="text-start"></th>
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
                                    <td className="text-start">{order.title}</td>
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