import { FaCheckSquare, FaColumns, FaHandPointRight, FaHome, FaList, FaUsers } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructorHook from '../hooks/useInstructorHook';

const Dashboard = () => {

    // const isAdmin = true;

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructorHook();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-10">
                {/* Page content here */}

                <Outlet />

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full accent-custom-bg text-white">
                    {/* Sidebar content here */}

                    {/* {isAdmin
                        ?
                        <>
                            <li><NavLink to="/dashboard/manage-classes">Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/manage-users">Manage Users</NavLink></li>
                        </>
                        :
                        <>
                            <li><NavLink to="/dashboard/selected-class">My Selected Classes</NavLink></li>
                            <li><NavLink to="/dashboard/enrolled-class">My Enrolled Classes</NavLink></li>
                        </>
                    } */}
                    {isAdmin && (
                        <>
                            <li>
                                <NavLink to="/dashboard/manage-classes"><FaColumns></FaColumns> Manage Classes</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manage-users"><FaUsers></FaUsers> Manage Users</NavLink>
                            </li>
                        </>
                    )}

                    {isInstructor && (
                        <>
                            <li>
                                <NavLink to="/dashboard/add-a-class"><FaCheckSquare></FaCheckSquare> Add a Class</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/my-classes"><FaList></FaList> My Classes</NavLink>
                            </li>
                        </>
                    )}

                    {!isAdmin && !isInstructor && (
                        <>
                            <li>
                                <NavLink to="/dashboard/selected-class"><FaHandPointRight></FaHandPointRight> My Selected Classes</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/enrolled-class"><FaCheckSquare></FaCheckSquare> My Enrolled Classes</NavLink>
                            </li>
                        </>
                    )}





                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/classes"><FaList></FaList> All Classes</NavLink></li>
                    <li><NavLink to="/instructors"><FaUsers></FaUsers> All Instructors</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;