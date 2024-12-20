import React from 'react';
import { useState } from 'react';
// import "../styles/collapse.scss"
import VectorUp from "../assets/images/vectorup.png"

function Collapse({ title, description, }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="collapse" id={`collapse-${title}`}>
            <div className="collapse__div">
                <div className="collapse-title">{title}</div>
                <span
                    className={`collapse-vectorup-${open}`}
                    onClick={() => setOpen(!open)}
                >
                    <img src={VectorUp} alt="Icône flèche" />
                </span>
            </div >
            {open && <div className="collapse-description">{description}</div>}
        </div >
    );
};

export default Collapse;