import React from 'react';
// import "../styles/host.scss"

function Host({ host }) {
    return (
        <div className='host'>
            <h1>{host.name}</h1>
            <img className='host__image' src={host.picture} alt="" />
        </div>
    );
};

export default Host;