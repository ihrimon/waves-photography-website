import React from 'react';
import img from '../../../../images/dashboard-1.png'

const AdminDashboard = () => {
    return (
        <div>
            <div className="w-75 mx-auto my-5">
                <img src={img} alt="" className="w-75 custom-shadow" />
            </div>
        </div>
    );
};

export default AdminDashboard;