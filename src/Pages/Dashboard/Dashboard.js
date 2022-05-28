import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Shared/Hook/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-start ">
                    <h2 className='text-4xl text-primary font-bold'>Dashboard</h2>
                    <Outlet></Outlet>


                </div>

                <div class="drawer-side ">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {
                            !admin ?<li><Link to='/dashboard'>My Order</Link></li>
                                : <span></span>
                        }
                          {
                            !admin ?<li><Link to='/dashboard/review'>Add a Review</Link></li>
                                : <span></span>
                        }
                          
                        
                        
                        <li><Link to='/dashboard/profile'>My Profile</Link></li>
                        {
                            admin ? <li><Link to='/dashboard/admin'>Admin</Link></li>
                                : <span></span>
                        }
                        {
                            admin ? <li><Link to='/dashboard/manageorders'>Manage Orders</Link></li>
                                : <span></span>
                        }
                        {
                            admin ? <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
                                : <span></span>
                        }

                        {
                            admin ? <li><Link to='/dashboard/addproducts'>Add Products</Link></li>
                                : <span></span>
                        }




                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;