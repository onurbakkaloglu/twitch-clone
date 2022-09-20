import SelectorCard from "components/Cards/Selector";
import { useEffect, useState } from "react";

function SelectorCards(){

    let [selectors, setSelectors] = useState([])

    useEffect(() => {
        fetch("/api/card/selectors")
        .then((response) => response.json())
        .then((json) => setSelectors(json))
    }, [])

    return (
        <div className="grid grid-cols-5 mt-10">
            {selectors.map((selector) => (
                <SelectorCard key={selector.id} selector={selector}/>
            ))}
            
        </div>
    )
}

export default SelectorCards;