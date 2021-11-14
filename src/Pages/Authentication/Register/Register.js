import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
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
        console.log(newRegisterData);
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

    const handleGoogleSignIn = () => {
        signInWithGoogle(history);
    }

    return (
        <div>
            <Navigation></Navigation>
            {!isLoading && <div className="w-25 bg-color mx-auto my-5 border-radius custom-shadow">
                <h4 className="theme-color pt-4">Create an Account</h4>
                <p><small>use social account</small></p>
                <div>
                    <button onClick={handleGoogleSignIn} type="submit" className="btn btn-google text-light me-2">Google login</button>
                </div>
                <form onSubmit={handleRegistrationSubmit} className="w-75 mx-auto mt-3">
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

                    <button type="submit" className="btn theme-btn px-5 text-light my-3">Register</button>
                    <p className="pb-4">Already have an account? <Link to="/login" className="text-decoration-none theme-color fw-bold">Login</Link></p>
                </form>
            </div>
            }
            {isLoading && <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            }

            {user?.email && <div class="alert alert-success w-50 mx-auto" role="alert">
                User created Successfully.!
            </div>}

            {authError && <div class="alert alert-danger w-50 mx-auto" role="alert">
                {authError}
            </div>}
            <Footer></Footer>
        </div >
    );
};

export default Register;


// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import useAuth from '../../Hooks/useAuth';

// import registrationImg from './registration.jpg'


// const Register = () => {
//     const [registerData, setRegisterData] = useState();
//     const { user, registerUser, isLoading, authError } = useAuth();

//     const history = useHistory();

//     const handleOnChange = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newRegisterData = { ...registerData };
//         newRegisterData[field] = value;
//         setRegisterData(newRegisterData);
//     }

//     const handleRegistrationSubmit = e => {
//         if (registerData.password !== registerData.password2) {
//             // alert('Your password did not match. Please, Try again!');
//             Swal.fire(
//                 'Oops!',
//                 'Password didn\'t match!',
//                 'error'
//             )
//             return
//         }
//         registerUser(registerData.name, registerData.email, registerData.password, history)
//         e.preventDefault();
//     }

//     return (
//         <div>
//             {!isLoading &&
//                 <div className="container">
//                     <div className="row align-items-center">
//                         <div className="col-lg-6">
//                             <div className="bg-color mx-auto my-5 border-radius">
//                                 <h4 className="pt-4">Create an Account</h4>
//                                 <p><small>use social account to create an account</small></p>
//                                 <div>
//                                     <button type="submit" className="btn btn-google text-light me-2" style={{backgroundColor: '#13b878'}}>Google login</button>
//                                 </div>
//                                 <form onSubmit={handleRegistrationSubmit} className="w-75 mx-auto mt-3">
//                                     <p><small>or use your email account</small></p>
//                                     <div className="form-floating mb-3">
//                                         <input type="text" name="name" onBlur={handleOnChange} className="form-control border-bottom border-0 bg-transparent" placeholder="Your name here" required />
//                                         <label htmlFor="floatingInput">Name</label>
//                                     </div>

//                                     <div className="form-floating mb-3">
//                                         <input type="email" name="email" onBlur={handleOnChange} className="form-control border-bottom border-0 bg-transparent" placeholder="name@example.com" required />
//                                         <label htmlFor="floatingInput">Email</label>
//                                     </div>

//                                     <div className="form-floating mb-3">
//                                         <input type="password" name="password" onBlur={handleOnChange} className="form-control border-bottom border-0 bg-transparent" placeholder="Password" required />
//                                         <label htmlFor="floatingPassword">Password</label>
//                                     </div>

//                                     <div className="form-floating mb-3">
//                                         <input type="password" name="password2" onBlur={handleOnChange} className="form-control border-bottom border-0 bg-transparent" placeholder="Password" required />
//                                         <label htmlFor="floatingPassword">Confirm Password</label>
//                                     </div>

//                                     <button type="submit" className="btn px-5 text-light my-3" style={{backgroundColor: '#9282f2', color: '#fff'}}>Register</button>
//                                     <p className="pb-4">Already have an account? <Link to="/login" className="text-decoration-none fw-bold" style={{color: '#9282f2'}}>Login</Link></p>
//                                 </form>
//                             </div>
//                         </div>
//                         <div className="col-lg-6">
//                             <img src={registrationImg} alt="" className="img-fluid"/>
//                         </div>
//                     </div>
//                 </div>
//             }
//             {isLoading && <div className="spinner-border" role="status">
//                 <span className="visually-hidden">Loading...</span>
//             </div>
//             }

//             {user?.email && <div className="alert alert-success" role="alert">
//                 User created Successfully.!
//             </div>}

//             {authError && <div className="alert alert-danger" role="alert">
//                 {authError}
//             </div>}
//         </div >
//     );
// };

// export default Register;