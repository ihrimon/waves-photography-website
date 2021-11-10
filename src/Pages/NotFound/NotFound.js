import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-img'>
            <div className="container">
                <div className="text-center ">
                    <h1 className="not-found">404</h1>
                    <h3>OPPS, SORRY WE CAN'T FIND THAT PAGE!</h3>
                    <p>Either something went wrong or the page doesn't exist anymore.</p>
                    <Link to="/home"><button className="btn btn-outline-light rounded-0 mt-3" type="submit" >Back to Homepage</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;