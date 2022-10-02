import ShelfCard from "components/Cards/Shelf";
import ShowMoreLine from "components/ShowMoreLine";
import { useEffect, useState } from "react";

function ShelfCards(){

    let [shelfs, setShelfs] = useState([]);

    useEffect (() =>{
        fetch("/api/card/shelfs")
        .then((response) => response.json())
        .then((json) => setShelfs(json))
    }, [])

    return (
        <>
            {
                shelfs.length > 0 && (
                    <>
                        <div className="grid grid-cols-5 mt-10">
                        {shelfs.map((shelf) => (
                                <ShelfCard key={shelf.id} shelf={shelf}/>
                            ))}
                        </div>
                        <ShowMoreLine />
                    </>
                )
            }
        </>
    )
}

export default ShelfCards;