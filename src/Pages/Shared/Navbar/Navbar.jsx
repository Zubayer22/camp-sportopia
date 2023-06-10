import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useInstructorHook from "../../../hooks/useInstructorHook";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructorHook();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        {/* {user
            ?
            <>{isAdmin ? <li><Link to="/dashboard/manage-classes">Dashboard</Link></li> : <li><Link to="/dashboard/selected-class">Dashboard</Link></li>}</>
            :
            ''} */}
        {user ? (
            <>
                {isAdmin && <li><Link to="/dashboard/manage-classes">Dashboard</Link></li>}
                {isInstructor && <li><Link to="/dashboard/add-a-class">Dashboard</Link></li>}
                {!isAdmin && !isInstructor && <li><Link to="/dashboard/selected-class">Dashboard</Link></li>}
            </>
        ) : ''}
    </>
    return (
        <div className="secondary-custom-bg">
            <div className="navbar text-white container mx-auto py-2 px-3 md:py-5 md:px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black font-bold">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-2xl">CampSportipia</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white font-bold">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex items-center">

                                <button className="btn primary-custom-bg text-white hover:bg-transparent hover:border hover:border-[#ffffff] hover:text-[#ffffff]" onClick={handleLogOut}>Log Out</button>

                                <div className='tooltip tooltip-bottom' data-tip={user?.displayName}>
                                    <img src={user?.photoURL} className={user?.photoURL ? 'rounded-full w-10 ms-3' : ''} alt="" />
                                </div>
                            </div>
                            :
                            <Link to="/login"><button className="btn primary-custom-bg text-white hover:bg-transparent hover:border hover:border-[#ffffff] hover:text-[#ffffff]">Log In</button></Link>
                    }
                </div>
            </div>
        </div>

    );
};

export default Navbar;