import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:4000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const onSubmit = data => {
        fetch('http://localhost:4000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    };


    return (
        <div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-5 ">
                        <img height="300px" src={product.img} alt="" /><br />
                        <h3 className="theme-color mt-3 fw-bold">{product.name}</h3>
                        <h5>Tour Charge: {product.price} Rs.</h5>
                        <p>{product.description}</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="shadow-lg">
                            <h3 className="text-center pt-5 pb-3 theme-color">Order your Favorite Package</h3>
                            <div className="text-start px-0 px-lg-5">
                                <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-5">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue={user.displayName} {...register("name")} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">User Email</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" defaultValue={user.email} {...register("email")} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Package Title</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue={product.name} {...register("title")} placeholder="Package title" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Package Price</label>
                                        <input type="number" className="form-control" id="exampleFormControlInput1" defaultValue={product.price} {...register("price")} placeholder="$ price" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">User Address</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue="" {...register("address")} placeholder="User address" />
                                    </div>

                                    <span className="w-50 mx-auto" style={{ display: "block" }}>
                                        <input type="submit" className="btn theme-btn text-light w-100 text-center" />
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;