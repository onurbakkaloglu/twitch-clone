import TopbarButton from "components/Button/TopbarButton";
import { Icon } from "components/Icon/icon";
import { useState } from "react";
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

function Topbar() {

    const isLogin = false;

    const [search, setSearch] = useState('');

    return (
        <nav className="topbar h-[3.125rem] bg-topbar z-1000">
            <div className="flex items-stretch w-full h-full">
                <div className="flex flex-grow shrink-2 w-full items-center">
                    <a href="#" className="inline-flex p-2 h-full items-center">
                        <Icon name={'logo'} size={40} />
                    </a>
                    <div className="flex h-full items-center">
                        {isLogin && (
                            <div className="flex h-full flex-col pl-4 pr-4 self-center">
                                <a href="#" className="flex items-center text-center h-full text-xl hover:text-topbartextHover">
                                    Followed
                                </a>
                            </div>
                        )}
                        <div className="flex h-full flex-col pl-4 pr-4 self-center">
                            <a href="#" className="flex items-center text-center h-full text-xl hover:text-topbartextHover">
                                Browse
                            </a>
                        </div>
                        <TopbarButton svg={'more'} />
                    </div>
                </div>
                <div className="flex flex-grow-2 shrink-1 w-full items-center justify-center">
                    <div className="flex relative">
                        <input required={true} type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" 
                        className="w-[355px] h-9 rounded-md rounded-r-none border-2 border-borderColor bg-inputBg px-2 py-2 outline-none mr-[1px] 
                        focus:border-borderFocusColor focus:bg-black peer transition-all" />
                        <button onClick={() => setSearch('')} className="absolute right-2 cursor-pointer top-1/2 -translate-y-1/2 peer-invalid:hidden">
                            <IoClose size={22} />
                        </button>
                    </div>
                    <button className="flex bg-secondaryButton w-[34px] h-9 items-center justify-center rounded-md rounded-l-none">
                        <FiSearch size={22} />
                    </button>
                </div>
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