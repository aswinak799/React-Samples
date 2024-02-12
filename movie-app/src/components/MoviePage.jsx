import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../http';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MoviePage = () => {
    const [page, setPage] = useState(1)
     const { data, isError, error, isLoading } = useQuery({
        queryKey:['movies'],
        queryFn: ({signal})=> fetchMovies({signal, page}),
    })
    if (isLoading) return <div>loading...</div>;
    if (isError) throw error;
    console.log('data', data);
    return (
        <div className='movie-page'>
            {data && data.map(movie=><MovieCard key={movie.original_title} {...movie}  />)}
        </div>
    );
}

export default MoviePage;
