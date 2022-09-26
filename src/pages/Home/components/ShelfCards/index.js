import ShelfCard from "components/Cards/Shelf";
import { useEffect, useState } from "react";

function ShelfCards(){

    let [shelfs, setShelfs] = useState([]);

    useEffect (() =>{
        fetch("/api/card/shelfs")
        .then((response) => response.json())
        .then((json) => setShelfs(json))
    }, [])

    return (
        <div className="grid grid-cols-5 mt-10">
           {shelfs.map((shelf) => (
                <ShelfCard key={shelf.id} shelf={shelf}/>
            ))}
        </div>
    )
}

export default ShelfCards;