import TopbarButton from "components/Button/TopbarButton";
import {numberToViewer} from "utils/numberToViewer";

function ShelfCard({shelf}){

    const isClip = shelf.clip;

    if(isClip == "true"){
        return (
            <div className="mb-20">
            <div className="max-w-xs ml-4">
                    <div className="duration-300 hover:translate-x-1 hover:duration-300 hover:-translate-y-1 hover:shadow-streamShadow hover:shadow-topbartextHover">
                        <a className="relative hover:cursor-pointer">
                            <div>
                                <img src={shelf.imgSrc} />
                            </div>
                            <div className="absolute top-0 m-2">
                            <div className="bg-viewerBg py-0 px-2 rounded-sm">{shelf.duration}</div>
                            </div>
                            <div className="absolute bottom-0 m-2">
                                <div className="bg-viewerBg py-0 px-2 rounded-sm">{numberToViewer(shelf.views)} Views</div>
                            </div>
                            <div className="absolute bottom-0 right-0 m-2">
                                <div className="bg-viewerBg py-0 px-2 rounded-sm">{shelf.date}</div>
                            </div>
                        </a>
                    </div>
    
                    <div className="flex justify-between mt-2">
                        <div className="flex">
                            <div className="w-10 mr-4">
                                <img className="w-full rounded-full" src={shelf.avatarSrc} />
                            </div>
                            <div>
                                <p className="text-xs mb-1 hover:text-topbartextHover hover:cursor-pointer">{shelf.name}</p>
                                <p className="text-xs mb-1 text-liveCardDescription hover:cursor-pointer">Channel</p>
                                <p className="text-xs mb-1 text-liveCardDescription hover:text-topbartextHover hover:cursor-pointer">{shelf.profile}</p>
                            </div>
                        </div>
                        <div>
                            <TopbarButton svg={'more'} />
                        </div>
                    </div>
                </div>
                </div>
        )
    }

    return (
        <div>
        <div className="max-w-xs ml-4">
                <div className="duration-300 hover:translate-x-1 hover:duration-300 hover:-translate-y-1 hover:shadow-streamShadow hover:shadow-topbartextHover">
                    <a className="relative hover:cursor-pointer">
                        <div>
                            <img src={shelf.imgSrc} />
                        </div>
                        <div className="absolute top-0 m-2">
                            <div className="bg-liveBg text-white py-0 px-2 rounded-md">
                                <p>LIVE</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 m-2">
                            <div className="bg-viewerBg py-0 px-2 rounded-sm">{numberToViewer(shelf.viewer)} Viewer</div>
                        </div>
                    </a>
                </div>

                <div className="flex justify-between mt-2">
                    <div className="flex">
                        <div className="w-10 mr-4">
                            <img className="w-full rounded-full" src={shelf.avatarSrc} />
                        </div>
                        <div>
                            <p className="text-xs mb-1 hover:text-topbartextHover hover:cursor-pointer">{shelf.name}</p>
                            <p className="text-xs mb-1 text-liveCardDescription hover:cursor-pointer">Channel</p>
                            <p className="text-xs mb-1 text-liveCardDescription hover:text-topbartextHover hover:cursor-pointer">{shelf.subject}</p>
                        </div>
                    </div>
                    <div>
                        <TopbarButton svg={'more'} />
                    </div>
                </div>
            </div>
            </div>
    )
}

export default ShelfCard;