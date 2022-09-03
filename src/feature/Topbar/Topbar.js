import { Icon } from "components/Icon/icon";

function Topbar() {
    return ( 
        <nav className="topbar h-[3.125rem] bg-topbar z-1000">
            <div className="flex items-stretch w-full h-full">
                <div className="flex flex-grow shrink-2 w-full items-center">
                    <a href="#" className="inline-flex p-2 h-full items-center">
                        <Icon name={'logo'} size={40} />
                    </a>
                    <div className="flex h-full items-center">
                        <div className="flex h-full flex-col pl-4 pr-4 self-center">
                            <a href="#" className="flex items-center text-center h-full text-xl">
                                Browse
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-grow-2 shrink-1 w-full items-center">search</div>
                <div className="flex flex-grow shrink-2 w-full items-center">account</div>
            </div>
        </nav>
     );
}

export default Topbar;