import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import SingleClassPage from "../Pages/SingleClassPage/SingleClassPage";
import SingleInstructorPage from "../Pages/SingleInstructorPage/SingleInstructorPage";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/classes",
                element: <Classes />
            },
            {
                path: "/classes/:id",
                element: <PrivateRoute><SingleClassPage /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/classes/${params.id}`)
            },
            {
                path: "/instructors",
                element: <Instructors />
            },
            {
                path: "/instructors/:id",
                element: <SingleInstructorPage />,
                loader: ({ params }) => fetch(`http://localhost:3000/instructors/${params.id}`)
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    },
]);


export default router;