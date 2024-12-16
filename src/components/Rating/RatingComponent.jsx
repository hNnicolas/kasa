import React, { useState } from 'react';
import './RatingComponent.css'

function RatingComponent({ rating }) {

    function renderRatingStars(rating) {
        const maxRating = 5; // Vous pouvez ajuster le nombre d'étoiles maximum ici
        const starArray = [];

        for (let i = 1; i <= maxRating; i++) {
            if (i <= rating) {
                // Note supérieure ou égale à l'indice actuel, étoile pleine
                starArray.push(<i key={i} className="fa-solid fa-star fill"></i>);
            } else {
                // Note inférieure à l'indice actuel, étoile vide
                starArray.push(<i key={i} className="fa-solid fa-star empty"></i>);
            }
        }

        return starArray;
    }

    return (
        <>
            {renderRatingStars(rating)}
        </>
    )
}

export default RatingComponent
