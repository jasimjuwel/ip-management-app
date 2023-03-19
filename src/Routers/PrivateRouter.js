import ErrorPage404 from "../Pages/ErrorPages/404";
import Dashboard from "../Pages/Private/Dashboard";

const PrivateRouter = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
        layout: "/"
    },
    {
        path: "*",
        name: "404",
        component: ErrorPage404,
        layout: "/"
    },
];

export default PrivateRouter;