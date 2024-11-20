import { useEffect, useState } from "react";
import logementsData from "../data/logements.json"

function Card() {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        setLogements(logementsData);
        console.log(logementsData)

    }, []);

    return (
        <div className="card">

        </div>
    );
};

export default Card;