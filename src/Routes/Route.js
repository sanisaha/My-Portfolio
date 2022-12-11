import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import FirstProject from "../Pages/AllProjects/FirstProject";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [{
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/contact',
        element: <Contact></Contact>
    },
    {
        path: '/project1',
        element: <FirstProject></FirstProject>
    }]
}])

export default router;