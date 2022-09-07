import TopbarButton from "components/Button/TopbarButton";
import Slider from "components/Slider";

export default function Home() {
    return (
        <main className="flex-auto overflow-auto">
            <Slider />
            <div className="max-w-xs ml-4">
                <div>
                    <a className="relative">
                        <div>
                            <img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_tsm_imperialhal-440x248.jpg" />
                        </div>
                        <div className="absolute top-0 m-2">
                            <div className="bg-liveBg text-white py-0 px-2 rounded-md">
                                <p>LIVE</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 m-2">
                            <div className="bg-viewerBg py-0 px-2 rounded-sm">9,6 B Viewer </div>
                        </div>
                    </a>
                </div>

                <div className="flex justify-between mt-2">
                    <div className="flex">
                    <div className="w-10 mr-4">
                        <img className="w-full rounded-full" src="https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png" />
                    </div>
                    <div>
                        <p className="text-xs mb-1 hover:text-topbartextHover hover:cursor-pointer">Play Apex Legends</p>
                        <p className="text-xs mb-1 text-liveCardDescription hover:cursor-pointer">Channel</p>
                        <p className="text-xs mb-1 text-liveCardDescription hover:text-topbartextHover hover:cursor-pointer">Apex Legends</p>
                    </div>
                    </div>                 
                    <div>
                        <TopbarButton svg={'more'} />
                    </div>
                </div>
            </div>
        </main>
    )
}