import Card from "./Card.jsx";
import Logements from "../data/logements.json"
import "../styles/cardlist.scss"

function Cardlist() {
    return (
        <section className="cardlist">
            {Logements.map((logement) => (
                <Card
                    key={logement.id}
                    id={logement.id}
                    image={logement.cover}
                    title={logement.title}
                />
            ))}
        </section>
    );
};

export default Cardlist;