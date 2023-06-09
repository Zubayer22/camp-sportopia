import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import SingleClassPage from "../Pages/SingleClassPage/SingleClassPage";
import SingleInstructorPage from "../Pages/SingleInstructorPage/SingleInstructorPage";


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
                path: "/classes/:id",
                element: <SingleClassPage />,
                loader: ({ params }) => fetch(`http://localhost:3000/classes/${params.id}`)
            },
            {
                path: "/instructors/:id",
                element: <SingleInstructorPage/>,
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