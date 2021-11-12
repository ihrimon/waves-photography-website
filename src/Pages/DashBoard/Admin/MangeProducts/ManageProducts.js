// import React from 'react';

// const ManageProducts = () => {
//     return (
//         <div className="container">
//             <h2 className="mt-5 mb-3">Manage Products</h2>
//             <div className="table-responsive">
//                 <table className="table border table-hover">
//                     <thead>
//                         <tr>
//                             <th className="text-start">SL.</th>
//                             <th className="text-start">Name</th>
//                             <th className="text-start">Email</th>
//                             <th className="text-start">Address</th>
//                             <th className="text-start">Service</th>
//                             <th className="text-start">Amount</th>
//                             <th className="text-start">Status</th>
//                             <th className="text-start"></th>
//                         </tr>
//                     </thead>

//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ManageProducts;

import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
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
                    fetch(`http://localhost:4000/products/${id}`, {
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
            <h2 className="mt-5 mb-3">ManageProducts</h2>
            <div className="table-responsive">
                <table className="table border table-hover">
                    <thead>
                        <tr>
                            <th className="text-start">SL.</th>
                            <th className="text-start">Name</th>
                            <th className="text-start">Email</th>

                            <th className="text-start">Products</th>
                            <th className="text-start">Amount</th>
                            <th className="text-start">Status</th>
                            <th className="text-start"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) =>
                                <tr key={product._id}>
                                    <th className="text-start" scope="row">{index + 1}</th>
                                    <td className="text-start">{product.name}</td>
                                    <td className="text-start">{product.email}</td>
                                    
                                    <td className="text-start">{product.title}</td>
                                    <td className="text-start">${product.price}</td>
                                    {
                                        product.status === 'Pending' ? <td className="text-danger fw-bold">{product.status}</td> : <td className="text-success fw-bold">{product.status}</td>
                                    }
                                    {/* <td><button onClick={() => handleApproved(order._id)} className="btn btn-sm btn-success">Approved</button></td> */}
                                    <td><button className="btn btn-sm btn-success">Approved</button></td>
                                    <td><button onClick={() => handleCancelOrder(product._id)} className="btn btn-sm btn-danger">Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;