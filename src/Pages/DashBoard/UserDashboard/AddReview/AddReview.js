import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

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
                        <input type="text" className="form-control" id="exampleFormControlInput1" {...register("name")} defaultValue={user.displayName} placeholder="reviewer name" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Comments</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" {...register("comment")} placeholder="Share your moment" rows="3" required></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Rating</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" {...register("rating")} placeholder="rating" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Img URL</label>
                        {user.photoURL ?
                            <input className="form-control" id="exampleFormControlInput1" {...register("img")} defaultValue={user.photoURL} placeholder="image url" required />
                            :
                            <input className="form-control" id="exampleFormControlInput1" {...register("img")} defaultValue="https://i.ibb.co/YNvNxpX/149071.png" placeholder="image url" required />
                        }

                    </div>

                    <span className="w-50 mx-auto" style={{ display: "block" }}>
                        <input type="submit" className="btn theme-btn w-100 text-center text-light " />
                    </span>
                </form>
            </div>
        </div>
    );
};

export default AddReview;