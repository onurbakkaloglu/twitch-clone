function Sidebar() {
    return (
        <aside className="w-60 flex flex-shrink-0 flex-col bg-sidebar pl-2 pt-2">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm">RECOMMENDED CHANNELS</h2>
                <svg className="w-5 h-5 mr-3" fill="currentColor"><g><path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path></g></svg>
            </div>
            <div>
                <a href="#" className="flex items-center hover:bg-channelHover py-1">
                    <div className="w-10 h-8 relative bg-inherit">
                        <img className="w-full rounded-full" src="https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png" />
                    </div>
                    <div className="w-full flex items-center justify-between px-2">
                        <div>
                            <div>
                                <p>wtcN</p>
                            </div>
                            <div>
                                <p className="text-xs opacity-70">Sadece Sohbet</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-activeStatusIndicator w-3 h-3 rounded-full inline-block relative"></div>
                            <div className="ml-2">
                                <span className="text-sm">7.7 B</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div>
                <a href="#" className="flex items-center hover:bg-channelHover py-1">
                    <div className="w-10 h-8 relative bg-inherit">
                        <img className="w-full rounded-full" src="https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png" />
                    </div>
                    <div className="w-full flex items-center justify-between px-2">
                        <div>
                            <div>
                                <p>wtcN</p>
                            </div>
                            <div>
                                <p className="text-xs opacity-70">Sadece Sohbet</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-activeStatusIndicator w-3 h-3 rounded-full inline-block relative"></div>
                            <div className="ml-2">
                                <span className="text-sm">7.7 B</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div>
                <a href="#" className="flex items-center hover:bg-channelHover py-1">
                    <div className="w-10 h-8 relative bg-inherit">
                        <img className="w-full rounded-full" src="https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png" />
                    </div>
                    <div className="w-full flex items-center justify-between px-2">
                        <div>
                            <div>
                                <p>wtcN</p>
                            </div>
                            <div>
                                <p className="text-xs opacity-70">Sadece Sohbet</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-activeStatusIndicator w-3 h-3 rounded-full inline-block relative"></div>
                            <div className="ml-2">
                                <span className="text-sm">7.7 B</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div>
                <a href="#" className="flex items-center hover:bg-channelHover py-1">
                    <div className="w-10 h-8 relative bg-inherit">
                        <img className="w-full rounded-full" src="https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png" />
                    </div>
                    <div className="w-full flex items-center justify-between px-2">
                        <div>
                            <div>
                                <p>wtcN</p>
                            </div>
                            <div>
                                <p className="text-xs opacity-70">Sadece Sohbet</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-activeStatusIndicator w-3 h-3 rounded-full inline-block relative"></div>
                            <div className="ml-2">
                                <span className="text-sm">7.7 B</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div>
                <a href="#" className="flex items-center hover:bg-channelHover py-1">
                    <div className="w-10 h-8 relative bg-inherit">
                        <img className="w-full rounded-full" src="https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png" />
                    </div>
                    <div className="w-full flex items-center justify-between px-2">
                        <div>
                            <div>
                                <p>wtcN</p>
                            </div>
                            <div>
                                <p className="text-xs opacity-70">Sadece Sohbet</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-activeStatusIndicator w-3 h-3 rounded-full inline-block relative"></div>
                            <div className="ml-2">
                                <span className="text-sm">7.7 B</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div>
            <button className="no-underline text-showMore text-sm mt-3">
                <span>Show more</span>
            </button>
            </div>

        </aside>
    );
}

export default Sidebar;