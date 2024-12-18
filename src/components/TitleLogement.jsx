import React from 'react';

import "../styles/titlelogement.scss"

function TitleLogement({ logement, titles, locations }) {
    return (
        <div className='title-logement' >
            <h1>{titles}</h1>
            <h2>{locations}</h2>
            <div className='title-logement__tag-div'>
                {logement.tags.map((tag, index) => (

                    <li className='tag-element' key={index}>
                        {tag}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default TitleLogement;