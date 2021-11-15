import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://pure-wildwood-79743.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch((e) => { })
    }, [products])

    const { isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center spinner-style">
                <div className="d-flex justify-content-center spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    // Remove product form manage products
    const handleRemoveProduct = id => {
        const confirmation = window.confirm("Are you sure you want to remove this item!")
        if (confirmation) {
            axios.delete(`https://pure-wildwood-79743.herokuapp.com/products/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        alert("Product Remove Successfully!!")
                    }
                });
        }
    }

    return (
        <div className="container">
            <h2 className="mt-5 mb-3 theme-color">Manage Products</h2>
            <div className="table-responsive">
                <table className="table border table-hover">
                    <thead className="thead-bg text-light">
                        <tr>
                            <th className="text-start">SL.</th>
                            <th className="text-start">Product Name</th>
                            <th className="text-start">Product Image</th>
                            <th className="text-start">Amount</th>
                            <th className="text-start">Status</th>
                            <th className="">Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) =>
                                <tr key={product._id}>
                                    <th className="text-start" scope="row">{index + 1}</th>
                                    <td className="text-start">{product.name}</td>
                                    <td className="text-start"><img src={product.img} className="img-fluid product-img" alt="" /> </td>
                                    <td className="text-start">৳ {product.price}</td>
                                    <td className="text-start">In Stock</td>
                                    <td><button onClick={() => handleRemoveProduct(product._id)} className="btn btn-sm btn-danger">Delete</button></td>
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