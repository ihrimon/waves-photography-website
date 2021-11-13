import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://pure-wildwood-79743.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Added')
                    reset();
                }
            })
    };

    return (
        <div className="container w-lg-25 shadow-lg my-5">
            <h4 className="text-center py-4">Add Review</h4>
            <div className="text-start">
                <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-5">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" {...register("name")} placeholder="reviewer name" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" {...register("description")} placeholder="some text here" rows="3" required></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Rating (out of 5)</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" {...register("rating")} placeholder="rating" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Img URL</label>
                        <input className="form-control" id="exampleFormControlInput1" {...register("img")} placeholder="image url" required />
                    </div>

                    <span className="w-50 mx-auto" style={{ display: "block" }}>
                        <input type="submit" className="btn theme-btn w-100 text-center " />
                    </span>
                </form>
            </div>
        </div>
    );
};

export default AddReview;