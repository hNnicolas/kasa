import React, { useState } from 'react';
import './CarrouselComponent.css';

function CarrouselComponent({ galery, alt }) {

    const galeryLength = galery.length;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        if (currentIndex === 0) {
            // Si nous sommes à la première image, passez à la dernière image pour boucler.
            setCurrentIndex(galery.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex === galery.length - 1) {
            // Si nous sommes à la dernière image, revenez à la première image pour boucler.
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className='carrouselWrapper'>
            {galeryLength > 1 ? (<button onClick={handlePrevious} className='carrouselButtonLeft'><i className="fa-solid fa-chevron-left"></i></button>) : null}
            <img src={galery[currentIndex]} alt={alt}></img>
            {galeryLength > 1 ? (<button onClick={handleNext} className='carrouselButtonRight'><i className="fa-solid fa-chevron-right"></i></button>) : null}
            {galeryLength > 1 ? (<span className='counter'>{currentIndex + 1} - {galeryLength}</span>) : null}
        </div>
    );
}

export default CarrouselComponent;
