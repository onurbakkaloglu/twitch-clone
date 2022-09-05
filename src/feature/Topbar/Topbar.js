import TopbarButton from "components/Button/TopbarButton";
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
                            <a href="#" className="flex items-center text-center h-full text-xl hover:text-topbartextHover">
                                Followed
                            </a>
                        </div>
                        <div className="flex h-full flex-col pl-4 pr-4 self-center">
                            <a href="#" className="flex items-center text-center h-full text-xl hover:text-topbartextHover">
                                Browse
                            </a>
                        </div>
                        <TopbarButton svg={'more'} />
                    </div>
                </div>
                <div className="flex flex-grow-2 shrink-1 w-full items-center">search</div>
                <div className="flex flex-grow shrink-2 w-full items-center justify-end">
                    <TopbarButton svg={'prime'} />
                    <TopbarButton svg={'notification'} />
                    <TopbarButton svg={'whisper'} />
                    <div className="w-8 h-8 mx-4">
                        <img className="rounded-full" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-70x70.png"/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Topbar;