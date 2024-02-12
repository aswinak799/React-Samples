import React from 'react';
import './MovieCard.css'; // Import your CSS file for styling
import { FaPlay } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";


// import { Button } from 'bootstrap';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ title, overview, release_date, poster_path, vote_average, ...props }) => {

  const handleDownloadClick = () => {
    const imageSrc = `${IMAGE_BASE_URL}${props.backdrop_path}`;
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'movie_poster.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlPlayClick = () => {
    console.log(props.id,"id");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      </div>
      <div className="movie-info">
        <h2>{title}</h2>
        <p className="release-date">Release Date: {release_date}</p>
        <p className="vote-average">Vote Average: {vote_average}</p>
      </div>
      <div className="watchButton">
      <div className='download-button' onClick={handleDownloadClick}><span>Play</span> <FaArrowCircleDown /> </div>
        <div className='play-button' onClick={handlPlayClick}><span>Play</span> <FaPlay /> </div>
      </div>
    </div>
  );
};

export default MovieCard;
