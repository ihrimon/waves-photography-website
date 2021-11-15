import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';


const Register = () => {
    const [registerData, setRegisterData] = useState();
    const { user, registerUser, signInWithGoogle, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleRegistrationSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('Your password did not match. Please, Try again!');
            return
        }
        registerUser(registerData.name, registerData.email, registerData.password, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = (history) => {
        signInWithGoogle(history);
    }

    return (
        <div>
            <Navigation></Navigation>
            {!isLoading && <div className="w-25 bg-color mx-auto my-5 border-radius custom-shadow">
                <h4 className="theme-color pt-4">Create an Account</h4>
                <p><small>use social account</small></p>
                <div>
                    <button onClick={()=>handleGoogleSignIn(history)} type="submit" className="btn btn-google text-light me-2">Google login</button>
                </div>
                <form onSubmit={handleRegistrationSubmit} className="w-100 mx-auto mt-3">
                    <p><small>or use your email account</small></p>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            name="name"
                            onBlur={handleOnChange}
                            className="form-control border-bottom border-0 bg-transparent"
                            id="floatingInput"
                            placeholder="Your name here"
                            required />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            name="email"
                            onBlur={handleOnChange}
                            className="form-control border-bottom border-0 bg-transparent" id="floatingInput" placeholder="name@example.com"
                            required />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            className="form-control border-bottom border-0 bg-transparent"
                            id="floatingPassword"
                            placeholder="Password"
                            required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            name="password2"
                            onBlur={handleOnChange}
                            className="form-control border-bottom border-0 bg-transparent"
                            id="floatingPassword"
                            placeholder="Password"
                            required />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>

                    {/* Successfull Message */}
                    {user?.email && <div className="alert alert-success mx-auto" role="alert">
                        User created Successfully.!
                    </div>}

                    {/* Error Message */}
                    {authError && <div className="alert alert-danger mx-auto" role="alert">
                        Opps! {authError} Try Again
                    </div>}

                    <button type="submit" className="btn theme-btn px-5 text-light my-3">Register</button>
                    <p className="pb-4">Already have an account? <Link to="/login" className="text-decoration-none theme-color fw-bold">Login</Link></p>
                </form>
            </div>
            }
            {isLoading && <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            }

            <Footer></Footer>
        </div >
    );
};

export default Register;