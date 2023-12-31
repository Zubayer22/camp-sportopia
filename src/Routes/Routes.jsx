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
import Dashboard from "../Layouts/Dashboard";
import SelectedClass from "../Pages/Dashboard/SelectedClass";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses";
import AdminRoute from "./AdminRoute";
import AddClass from "../Pages/Dashboard/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses";
import Payment from "../Pages/Dashboard/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage/>,
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
                loader: ({ params }) => fetch(`https://camp-sportopia-server.vercel.app/classes/${params.id}`)
            },
            {
                path: "/instructors",
                element: <Instructors />
            },
            {
                path: "/instructors/:id",
                element: <PrivateRoute><SingleInstructorPage /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://camp-sportopia-server.vercel.app/instructors/${params.id}`)
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
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "selected-class",
                element: <SelectedClass />
            },
            {
                path: "enrolled-class",
                element: <EnrolledClass />
            },
            {
                path: "manage-users",
                element: <AdminRoute><ManageUsers /></AdminRoute>
            },
            {
                path: "manage-classes",
                element: <AdminRoute><ManageClasses /></AdminRoute>
            },
            {
                path: "add-a-class",
                element: <AddClass />
            },
            {
                path: "my-classes",
                element: <MyClasses />
            },
            {
                path: "payment",
                element: <Payment />
            }
        ]
    }
]);


export default router;