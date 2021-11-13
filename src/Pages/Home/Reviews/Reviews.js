
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    const ratingIcon = <FontAwesomeIcon icon={faStar} />

    useEffect(() => {
        fetch('https://pure-wildwood-79743.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="container my-5">
            <h2 className="mb-3 text-color fw-bold">Customer Reviews</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    reviews.map(review =>
                        <div className="col-lg-3 col-12" key={review._id}>
                            <div className="card d-flex flex-column align-items-start bg-light border border-0  product-card m-2">
                                <div className="card h-100 product">
                                    <img src={review.img} className="w-50 mx-auto shadow-lg card-img-top p-2 my-3 rounded-pill" alt="" />
                                    <div className="card-body p-4 pt-0">
                                        <h6 className="card-title fw-bold text-color mt-2">{review.name}</h6>
                                        <small className="card-text">{review.description}</small>
                                        <p className="fw-bold text-warning mt-3">{review.rating} {ratingIcon}</p>
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

https://github.com/programming-hero-web-course-4/niche-website-client-side-ihrimon
