import Login from "../Pages/Auth/Login";
import ErrorPage404 from "../Pages/ErrorPages/404";


const AuthRouter = [
    {
        path: "/",
        name: "Login-root",
        component: Login,
        layout: "/auth"
    },
    {
        path: "login",
        name: "Login",
        component: Login,
        layout: "/auth"
    },
    {
        path: "*",
        name: "404",
        component: ErrorPage404,
        layout: "/auth"
    }
];

export default AuthRouter;