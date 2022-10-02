import GameCard from "components/Cards/Game";
import ShowMoreLine from "components/ShowMoreLine";
import { useEffect, useState } from "react";

function GameCards(){

    let [games, setGames] = useState([])

    useEffect(() => {
        fetch("/api/card/games")
        .then((response) => response.json())
        .then((json) => setGames(json))
    }, [])

    return (
        <>
            {
                games.length > 0 && (
                    <>
                        <div className="flex">
                            {games.map((game) => (
                                <GameCard key={game.id} game={game} />
                            ))}
                        </div>
                        <ShowMoreLine />
                    </>
                )
            }
        </>
    )
}

export default GameCards;