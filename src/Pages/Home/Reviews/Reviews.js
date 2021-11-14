
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://pure-wildwood-79743.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="container px-5 my-5">
            <h2 className="mb-4 text-color fw-bold">Customer Reviews</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    reviews.map(review =>
                        <div className="col-lg-3 col-12" key={review._id}>
                            <div className="card d-flex flex-column align-items-start bg-light border border-0  product-card m-2">
                                <div className="card h-100 product">
                                    <img src={review.img} className="w-50 mx-auto shadow-lg card-img-top p-2 my-3 rounded-pill" alt="" />
                                    <div className="card-body p-4 pt-0">
                                        <h6 className="card-title fw-bold text-color mt-2">{review.name}</h6>
                                        <small className="card-text">{review.comment}</small>
                                        <div className="mt-2">
                                            <small><Rating initialRating={review.rating} className="text-warning" emptySymbol="far fa-star fa-2x" fullSymbol="fas fa-star fa-2x" readonly></Rating></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;