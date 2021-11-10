import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, signInWithGithub, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    const handleGithubSignIn = () => {
        signInWithGithub(location, history);
    }

    return (
        <div>
            <div className="w-25 bg-color mx-auto my-5 border-radius custom-shadow">
                <h4 className="theme-color pt-4">Please Login</h4>
                <p><small>use social account</small></p>
                <div>
                    <button onClick={handleGoogleSignIn} type="submit" className="btn btn-google text-light me-2">Google login</button>
                    <button onClick={handleGithubSignIn} type="submit" className="btn btn-success text-light ms-2">Github login</button>
                </div>
                <form onSubmit={handleLoginSubmit} className="w-75 mx-auto mt-3">
                    <p><small>or use your email account</small></p>
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

                    <button type="submit" className="btn theme-btn px-5 text-light my-3">Submit</button>
                </form>
                <p className="pb-4">Have an account? <Link to="/register" className="text-decoration-none theme-color fw-bold">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;