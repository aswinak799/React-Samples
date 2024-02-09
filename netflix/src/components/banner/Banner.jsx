 import React, { useEffect, useState } from 'react';
 import axios from '../../axios'
 import './banner.css'
import { apiKey, imgUrl } from '../constants/constants';
 const Banner = () => {
    const [movie, setMovie] = useState({});
    useEffect(()=>{
        axios.get(`/trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
            setMovie(response.data.results[Math.floor(Math.random() * 20)])
        }).catch((err)=>{

        })
    },[])
    return (
        <div className="banner" style={{backgroundImage: `url(${movie? imgUrl+movie.backdrop_path : ''})`}}>
            <div className="content">
                <h1 className="title">{movie? movie.title : ''}</h1>
                <div className="banner-buttons">
                    <button>Play</button>
                    <button>Mylist</button>
                </div>
                <h1 className="description">{movie? movie.overview : ''}</h1>
            </div>
            <div className="fade"></div>
            
        </div>
    );
 }
 
 export default Banner;
 