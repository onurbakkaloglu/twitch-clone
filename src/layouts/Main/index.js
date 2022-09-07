import Sidebar from "layouts/Sidebar";
import Topbar from "layouts/Topbar";
import { useRoutes } from 'react-router-dom';
import routes from "routes";

export default function Main() {
    return (
        <>
            <Topbar />
            <div className="wrapper">
                <Sidebar />
                {useRoutes(routes)}
            </div>
        </>
    );
}