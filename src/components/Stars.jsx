import React from 'react';
import "../styles/stars.scss"
import StarFull from "../assets/images/starfull.png";
import StarGrey from "../assets/images/stargrey.png";

function Stars({ star }) {

    const NumberStars = [1, 2, 3, 4, 5]

    return (
        <div className='stars-div'>
            {NumberStars.map((stars) => star >= stars ? (
                <img
                    key={stars}
                    className="full-star"
                    src={StarFull}
                    alt="Étoile remplie"
                />
            ) : (
                <img
                    key={stars}
                    className="empty-star"
                    src={StarGrey}
                    alt="Étoile vide"
                />
            )
            )}
        </div>
    );
};

export default Stars;