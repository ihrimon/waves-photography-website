// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

// const MakeAdmin = () => {
//     const [adminData, setAdminData] = useState('');
// const [success, setSuccess] = useState(false);
// const adminIcon = <FontAwesomeIcon icon={faUser} />

//     const handleOnBlur = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newAdminData = { ...adminData };
//         newAdminData[field] = value;
//         setAdminData(newAdminData);
//     }

//     const handleAdminSubmit = e => {
//         const user = { adminData };

//         fetch('https://pure-wildwood-79743.herokuapp.com/users/admin', {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
// if (data.matchedCount) {
//     setSuccess(true);
//     console.log(data)
// }
//             })
//         e.preventDefault();
//     }

//     return (
//         <div className="container w-25 mt-5">
//             <form onSubmit={handleAdminSubmit}>
//                 <div className="form-floating mb-3">

//                     <div className="form-floating mb-3">
//                         <input
//                             type="email"
//                             name="email"
//                             onBlur={handleOnBlur}
//                             className="form-control border-bottom border-0 bg-transparent" id="floatingInput" placeholder="name@example.com"
//                             required />
//                         <label htmlFor="floatingInput">Email</label>
//                     </div>
//                     <div className="form-floating mb-3">
//                         <input
//                             type="password"
//                             name="password"
//                             onBlur={handleOnBlur}
//                             className="form-control border-bottom border-0 bg-transparent"
//                             id="floatingPassword"
//                             placeholder="Password"
//                             required />
//                         <label htmlFor="floatingPassword">Password</label>
//                     </div>
//                 </div>
//                 <button type="submit" className="btn theme-btn text-light px-5" >{adminIcon} <span className="ms-2">Make Admin</span></button>
//             </form >
// {success && <div className="alert alert-success" role="alert">
//     Made admin Successfully.!
// </div>}
//         </div >
//     );
// };

// export default MakeAdmin;


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const adminIcon = <FontAwesomeIcon icon={faUser} />


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };

        fetch('https://pure-wildwood-79743.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount) {
                    setSuccess(true);
                    console.log(data)
                }
                else {
                    alert('Opps! This email address was not found.!');
                }

            })
        e.preventDefault();
    }

    return (
        <div className="container w-50">
            <h2 className="mt-4 mb-2 fw-bold text-color">Create An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <div className="form-floating mt-5 mb-5 ">
                    <input type="email" name="email" onBlur={handleOnBlur} className="form-control border-bottom border-0 bg-transparent" placeholder="name@example.com" required />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <button type="submit" className="btn theme-btn text-light px-5">{adminIcon} <span className="ms-2">Make Admin</span></button>
            </form>
            {success && <div className="alert alert-success" role="alert">
                Made admin Successfully.!
            </div>}
        </div>
    );
};

export default MakeAdmin;