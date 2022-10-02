import ClipCard from "components/Cards/Shelf";
import ShowMoreLine from "components/ShowMoreLine";
import { useEffect, useState } from "react";

function ClipCards(){

    let [clips, setClips] = useState([]);

    useEffect (() =>{
        fetch("/api/card/clips")
        .then((response) => response.json())
        .then((json) => setClips(json))
    }, [])

    return (
        <>
            {
                clips.length > 0 && (
                    <>
                        <div className="grid grid-cols-5 mt-10">
                            {clips.map((clip) => (
                                <ClipCard key={clip.id} shelf={clip}/>
                            ))}
                        </div>
                        <ShowMoreLine />
                    </>
                )
            }
        </>
    )
}

export default ClipCards;