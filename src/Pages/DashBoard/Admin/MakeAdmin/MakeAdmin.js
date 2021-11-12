import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };

        fetch('http://localhost:4000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.matchedCount) {
                    setSuccess(true);
                    console.log(data)
                }
            })
        e.preventDefault();
    }

    return (
        <div className="container w-25">
            <form onSubmit={handleAdminSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        name="email"
                        onBlur={handleOnBlur}
                        className="form-control border-bottom border-0 bg-transparent" id="floatingInput" placeholder="name@example.com"
                        required />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <button type="submit" className="btn theme-btn text-light px-5" >Make Admin</button>
            </form>
            {success && <div className="alert alert-success" role="alert">
                Made admin Successfully.!
            </div>}
        </div>
    );
};

export default MakeAdmin;