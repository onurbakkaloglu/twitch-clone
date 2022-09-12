import TopbarButton from "components/Button/TopbarButton";

function GameCard() {
    return (
        <div className="max-w-fit ml-4 mt-8">
            <div className="duration-300 hover:translate-x-1 hover:duration-300 hover:-translate-y-1 hover:shadow-streamShadow hover:shadow-topbartextHover">
                <a className="relative hover:cursor-pointer">
                    <div>
                        <img src="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg" />
                    </div>
                </a>
            </div>

            <div className="flex justify-between mt-2">
                <div className="flex">
                    <div>
                        <p className="text-s font-medium mb-1 hover:text-topbartextHover hover:cursor-pointer">Minecraft</p>
                        <p className="text-xs mb-1 text-liveCardDescription hover:cursor-pointer">56,4 K Viewer</p>
                        <div className="py-1 px-3 rounded-full bg-[#323234]">
                            <p className="text-xs font-medium text-liveCardDescription hover:cursor-pointer">Adventure Game</p>
                        </div>
                    </div>
                </div>
                <div>
                    <TopbarButton svg={'more'} />
                </div>
            </div>
        </div>
    );
}

export default GameCard;