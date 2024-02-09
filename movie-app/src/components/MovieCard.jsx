import React, { useState } from 'react';
import './MovieCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieCard = ({ title, image, userLogo }) => {
  const [showLogo, setShowLogo] = useState(false);

  return (
    <div className="movie-card">
        <div className="card-body">
            <img className='movie-img' src={image} alt="img" />
        </div>
        <div className="card-footer">
            <h5>{title}</h5>
        </div>
    </div>
  );
};

export default MovieCard;