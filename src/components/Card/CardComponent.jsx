import React from 'react';
import { Link } from 'react-router-dom';
import './CardComponent.css'

function CardComponent({ id, pictures, title }) {
  return (
    <>
      <Link key={id} to={`/logement/${id}`} className="cardLink">
        <div className="card">
          <img src={pictures[0]} alt={title} />
          <p>{title}</p>
        </div>
      </Link>
    </>
  );
}


export default CardComponent;
