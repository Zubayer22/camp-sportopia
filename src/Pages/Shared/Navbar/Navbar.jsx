

const Navbar = () => {
    const navOptions = <>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </>
    return (
        <div className="secondary-custom-bg">
            <div className="navbar text-white container mx-auto py-2 px-3 md:py-5 md:px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">CampSportipia</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn primary-custom-bg text-white hover:bg-transparent hover:border hover:border-[#ffffff] hover:text-[#ffffff] ">Log In</a>
                </div>
            </div>
        </div>

    );
};

export default Navbar;