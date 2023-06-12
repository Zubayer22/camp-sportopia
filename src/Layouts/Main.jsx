import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Main = () => {
    const {toogle} = useContext(AuthContext);
    const [theme, setTheme] = useState('dark');
    useEffect(() => {
        if (toogle === false) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }, [toogle]);
    return (
        <div data-theme={theme}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;