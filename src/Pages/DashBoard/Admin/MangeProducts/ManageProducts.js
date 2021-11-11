import React from 'react';

const ManageProducts = () => {
    return (
        <div className="container">
            <h2 className="mt-5 mb-3">Manage Products</h2>
            <div className="table-responsive">
                <table className="table border table-hover">
                    <thead>
                        <tr>
                            <th className="text-start">SL.</th>
                            <th className="text-start">Name</th>
                            <th className="text-start">Email</th>
                            <th className="text-start">Address</th>
                            <th className="text-start">Service</th>
                            <th className="text-start">Amount</th>
                            <th className="text-start">Status</th>
                            <th className="text-start"></th>
                        </tr>
                    </thead>

                </table>
            </div>
        </div>
    );
};

export default ManageProducts;