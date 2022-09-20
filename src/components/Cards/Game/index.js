import TopbarButton from "components/Button/TopbarButton";
import {numberToViewer} from "utils/numberToViewer";

function GameCard({game}) {
    return (
        <div className="grid grid-cols-8">
        <div className="max-w-fit ml-4 mt-8 w-[10rem] relative">
            <div className="duration-300 hover:translate-x-1 hover:duration-300 hover:-translate-y-1 hover:shadow-streamShadow hover:shadow-topbartextHover">
                <a className="relative hover:cursor-pointer">
                    <div>
                        <img className="max-w-[11rem]" src={game.imgSrc} />
                    </div>
                </a>
            </div>

            <div className="flex justify-between mt-2">
                <div className="flex">
                    <div className="w-full">
                        <a href="#">
                            <h2 className="text-ellipsis whitespace-nowrap overflow-hidden text-s font-medium mb-1 hover:text-topbartextHover hover:cursor-pointer">{game.name}</h2>
                        </a>
                        <p className="text-xs mb-1 text-liveCardDescription hover:cursor-pointer">{numberToViewer(game.viewer) } Viewer</p>
                        <div className="py-1 px-3 rounded-full bg-[#323234]">
                            <p className="text-xs font-medium text-liveCardDescription hover:cursor-pointer">Adventure Game</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default GameCard;