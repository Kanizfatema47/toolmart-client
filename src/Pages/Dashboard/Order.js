import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Order = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-start ">
                    <h2 className='text-4xl text-primary font-bold'>Dashboard</h2>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side bg-green-300">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Order</Link></li>
                        <li><Link to='/dashboard/review'>Add a Review</Link></li>
                        <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Order;