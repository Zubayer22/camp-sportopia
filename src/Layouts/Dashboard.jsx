import { FaEnvelope, FaHamburger, FaHome, FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-10">
                {/* Page content here */}

                <Outlet/>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full accent-custom-bg text-white">
                    {/* Sidebar content here */}
                    <li><NavLink to="/dashboard/selected-class">My Selected Classes</NavLink></li>
                    <li><NavLink to="/dashboard/enrolled-class">My Enrolled Classes</NavLink></li>

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/classes"><FaHamburger></FaHamburger>All Classes</NavLink></li>
                    <li><NavLink to="/instructors"><FaShoppingCart></FaShoppingCart>All Instructors</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;