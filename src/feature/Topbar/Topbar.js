import TopbarButton from "components/Button/TopbarButton";
import { Icon } from "components/Icon/icon";

function Topbar() {

    const moreIcon = <svg fill="currentColor" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScIconSVG-sc-1bgeryd-1 ifdSJl"><g><path d="M10 18a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM8 4a2 2 0 104 0 2 2 0 00-4 0z"></path></g></svg>
    const primeIcon = <svg fill="currentColor" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScIconSVG-sc-1bgeryd-1 ifdSJl"><g><path d="M13.798 10.456L10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"></path></g></svg>
    const notificationIcon = <svg fill="currentColor" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScIconSVG-sc-1bgeryd-1 ifdSJl"><g><path d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 001 1h2a1 1 0 001-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0111 11H9a3.001 3.001 0 01-2.83-2H4v6h12V9z"></path></g></svg>
    const whisperIcon = <svg fill="currentColor" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScIconSVG-sc-1bgeryd-1 ifdSJl"><g><path d="M7.828 13L10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2l-3 3z"></path></g></svg>
    
    return (
        <nav className="topbar h-[3.125rem] bg-topbar z-1000">
            <div className="flex items-stretch w-full h-full">
                <div className="flex flex-grow shrink-2 w-full items-center">
                    <a href="#" className="inline-flex p-2 h-full items-center">
                        <Icon name={'logo'} size={40} />
                    </a>
                    <div className="flex h-full items-center">
                        <div className="flex h-full flex-col pl-4 pr-4 self-center">
                            <a href="#" className="flex items-center text-center h-full text-xl hover:text-topbartextHover">
                                Followed
                            </a>
                        </div>
                        <div className="flex h-full flex-col pl-4 pr-4 self-center">
                            <a href="#" className="flex items-center text-center h-full text-xl hover:text-topbartextHover">
                                Browse
                            </a>
                        </div>
                        <TopbarButton svg={moreIcon} />
                    </div>
                </div>
                <div className="flex flex-grow-2 shrink-1 w-full items-center">search</div>
                <div className="flex flex-grow shrink-2 w-full items-center justify-end">
                    <TopbarButton svg={primeIcon} />
                    <TopbarButton svg={notificationIcon} />
                    <TopbarButton svg={whisperIcon} />
                    <div className="w-8 h-8 mx-4">
                        <img className="rounded-full" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-70x70.png"/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Topbar;