import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../axios'
import { apiKey, imgUrl } from '../constants/constants';
import YouTube from 'react-youtube';
const RowPost = ({title, small, url}) => {
    const opts = {
        height: '390',
        width: '100%',
      };
    // useState
    const [videoId, setVideoId] = useState();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(url).then((response)=>{
            setMovies(response.data.results);
        }).catch((err)=>{

        })
    }, []);

    function handleImageClick(id){
        axios.get(`movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((response)=>{
            setVideoId(response.data.results? response.data.results[0]? response.data.results[0].key : null : null);
        }).catch((err)=>{
            
        })
        
    }
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="posters">
                {movies.map((movie,index)=>{
                    let image = `${imgUrl+movie.backdrop_path}`
                return (<img onClick={()=>handleImageClick(movie.id)} key={index} className={small?'small-poster': 'poster'} src={image} alt="poster" />);
                })}
            </div>
            {videoId? <YouTube videoId={videoId} opts={opts} /> : null}
            
        </div>
    );
}

export default RowPost;
