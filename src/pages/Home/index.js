import Slider from "components/Slider";
import ClipCards from "./components/ClipCards";
import GameCards from "./components/GameCards";
import SelectorCards from "./components/SelectorCards";
import ShelfCards from "./components/ShelfCards";

export default function Home() {
    return (
        <main className="flex-auto overflow-auto">
            <Slider />
            
            <ShelfCards />

            <GameCards />

            <SelectorCards />
            
            <ClipCards />

        </main>
    )
}