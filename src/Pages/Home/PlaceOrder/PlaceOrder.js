import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faFileInvoiceDollar, faCog, faHeadset, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const PlaceOrder = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const shippingIcon = <FontAwesomeIcon icon={faShippingFast} />
    const deliveryIcon = <FontAwesomeIcon icon={faFileInvoiceDollar} />
    const GuaranteeIcon = <FontAwesomeIcon icon={faCog} />
    const supportIcon = <FontAwesomeIcon icon={faHeadset} />
    const submitIcon = <FontAwesomeIcon icon={faCheckCircle} />

    useEffect(() => {
        fetch(`https://pure-wildwood-79743.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const onSubmit = data => {
        fetch('https://pure-wildwood-79743.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("You order has been Successfully")
                    reset();
                }
            })
    };

    return (
        <div>
            <Navigation></Navigation>
            <div className="container">
                <div className="row mt-4 g-5">
                    <div className="col-lg-7 col-md-12 col-sm-12 text-center">
                        <div className="container bg-color border-radius pb-4">
                            <img height="300px" src={product.img} alt="" /><br />
                            <h3 className="text-color mt-3">{product.name}</h3>
                            <p>{product.description}</p>
                            <h5>Product Price: {product.price} TK</h5>
                        </div>
                        <div className="row row-cols-2 row-cols-lg-4 g-3 g-lg-4 mt-3">
                            <div className="col">
                                <div className="border-end">
                                    <h1 className="theme-color">{shippingIcon}</h1>
                                    <h6>Free Shipping</h6>
                                    <small>Free for first orders</small>
                                </div>
                            </div>
                            <div className="col">
                                <div className="border-end">
                                    <h1 className="theme-color">{deliveryIcon}</h1>
                                    <h6>Payment On Delivery</h6>
                                    <small>Cash on delivery option</small>
                                </div>
                            </div>
                            <div className="col">
                                <div className="border-end">
                                    <h1 className="theme-color">{GuaranteeIcon}</h1>
                                    <h6>Free Guarantee</h6>
                                    <small>30 Days Money Back</small>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <h1 className="theme-color">{supportIcon}</h1>
                                    <h6>24/7 Online Support</h6>
                                    <small>We have support 24/7</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="custom-shadow">
                            <h3 className="text-center pt-5 pb-3 theme-color">Place Order</h3>
                            <div className="text-start px-0 px-lg-5">
                                <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-5">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue={user.displayName} {...register("name", { required: true })} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">User Email</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" defaultValue={user.email} {...register("email", { required: true })} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Product Title</label>
                                        {product.name && <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue={product.name} {...register("productTitle", { required: true })} />}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Product Price</label>
                                        {product.price && <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue={product.price} {...register("price", { required: true })} />}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">User Address</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue="" {...register("address", { required: true })} />
                                    </div>

                                    <div className="w-50 mx-auto">
                                        <button type="submit" className="btn theme-btn px-5 text-light my-3 text-center mx-auto">{submitIcon} <span className="ms-2">Submit</span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;