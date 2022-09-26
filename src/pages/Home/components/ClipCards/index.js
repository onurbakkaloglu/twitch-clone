import ClipCard from "components/Cards/Shelf";
import { useEffect, useState } from "react";

function ClipCards(){

    let [clips, setClips] = useState([]);

    useEffect (() =>{
        fetch("/api/card/clips")
        .then((response) => response.json())
        .then((json) => setClips(json))
    }, [])

    return (
        <div className="grid grid-cols-5 mt-10">
           {clips.map((clip) => (
                <ClipCard key={clip.id} shelf={clip}/>
            ))}
        </div>
    )
}

export default ClipCards;