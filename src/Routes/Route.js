import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import FirstProject from "../Pages/AllProjects/FirstProject";
import SecondProject from "../Pages/AllProjects/SecondProject";
import ThirdProject from "../Pages/AllProjects/ThirdProject";
import Blog from "../Pages/Blog/Blog";
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
        path: '/project1',
        element: <FirstProject></FirstProject>
    },
    {
        path: '/project2',
        element: <SecondProject></SecondProject>
    },
    {
        path: '/project3',
        element: <ThirdProject></ThirdProject>
    }
    ]
},
{
    path: '/contact',
    element: <Contact></Contact>
},
{
    path: '/about',
    element: <About></About>
},
{
    path: '/blog',
    element: <Blog></Blog>
}

])

export default router;