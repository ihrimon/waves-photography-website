import React from 'react';

const Pay = () => {
    return (
        <div>
            <form className="w-75 mx-auto mt-3">
                <p><small>Payment Method</small></p>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control border-bottom border-0 bg-transparent"
                        id="floatingInput"
                        placeholder="Your name here"
                        required />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control border-bottom border-0 bg-transparent" id="floatingInput" placeholder="name@example.com"
                        required />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control border-bottom border-0 bg-transparent"
                        id="floatingPassword"
                        placeholder="Password"
                        required />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control border-bottom border-0 bg-transparent"
                        id="floatingPassword"
                        placeholder="Password"
                        required />
                    <label htmlFor="floatingPassword">Confirm Password</label>
                </div>

                <button type="submit" className="btn theme-btn px-5 text-light my-3">Submit</button>
            </form>
        </div>
    );
};

export default Pay;