import "../styles/slideshow.scss"
import React, { useState } from 'react';


function SlideShow({ pictures }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };
    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
        );
    }
    const isSingleImage = pictures.length === 1;

    return (
        <div className="carrousel">
            <div className="carrousel__images">
                <img src={pictures[currentIndex]} alt={`Carrousel ${currentIndex}`} />
            </div>
            {!isSingleImage && (
                <><div className="carrousel__index">
                    {currentIndex + 1}/{pictures.length}
                </div><button className="carrousel__button carrousel__button--prev" onClick={prevImage}>
                        &lt;
                    </button><button className="carrousel__button carrousel__button--next" onClick={nextImage}>
                        &gt;
                    </button>
                </>

            )}
        </div>
    );
};

export default SlideShow;