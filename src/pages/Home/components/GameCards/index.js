import GameCard from "components/Cards/Game";
import { useEffect, useState } from "react";

function GameCards(){

    let [games, setGames] = useState([])

    useEffect(() => {
        fetch("/api/card/games")
        .then((response) => response.json())
        .then((json) => setGames(json))
    }, [])

    return (
        <div className="flex">
            {games.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    )
}

export default GameCards;