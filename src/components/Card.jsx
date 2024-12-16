import { Link } from "react-router-dom";
import "../styles/card.scss"

function Card({ id, image, title }) {

    return (
        <Link to={`/logement/${id}`} className="card">
            <div
                className="card-img"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                {title && <h2 className="card-title">{title}</h2>}
            </div>
        </Link>
    );
};

export default Card;