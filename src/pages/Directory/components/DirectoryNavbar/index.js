import { NavLink, Outlet } from "react-router-dom";

function DirectoryNavbar() {
    return (
        <>
        <nav className='flex items-center justify-start mt-8 tablet:flex tablet:flex-wrap mb-6'>
            <NavLink className="px-4 flex-col" to="/directory" exact>
                <div className='flex flex-col items-center'>
                    <span className="text-lg font-semibold">Categories</span>
                </div>
            </NavLink>
            <NavLink className="px-4" to="social" exact>
                <div className='flex flex-col items-center'>
                    <span className="text-lg font-semibold">Live Channels</span>
                </div>
            </NavLink>
        </nav>
        <Outlet />
        </>
    );
}

export default DirectoryNavbar;