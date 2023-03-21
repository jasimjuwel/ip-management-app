import ErrorPage404 from "../Pages/ErrorPages/404";
import AuditLog from "../Pages/Private/AuditLog";
import Dashboard from "../Pages/Private/Dashboard";
import IpLIst from "../Pages/Private/Ip/index";

const PrivateRouter = [
    {
        path: "/",
        name: "Dashboard",
        component: IpLIst,
        layout: "/"
    },
    {
        path: "/audit-log",
        name: "Audit Log",
        component: AuditLog,
        layout: "/"
    },
    {
        path: "/ip-list",
        name: "IP List",
        component: IpLIst,
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