import Directory from "pages/Directory";
import Following from "pages/Following";
import Home from "pages/Home";
import PrivateRoute from "./privateRoute";

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/directory',
        element: <Directory />
    },
    {
        path: '/directory/following',
        auth: true,
        element: <Following />
    }
];

const authCheck = routes => routes.map(route => {
    if(route?.auth){
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    return route;
})

export default authCheck(routes);