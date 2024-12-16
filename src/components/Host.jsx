import React from 'react';
import "../styles/host.scss"

function Host({ host }) {
    return (
        <div className='host'>
            <h1>{host.name}</h1>
            <img className='host-img' src={host.picture} alt="" />
        </div>
    );
};

export default Host;