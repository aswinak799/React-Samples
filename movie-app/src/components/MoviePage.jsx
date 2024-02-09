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
        <div >
            {data && data.map(movie=><MovieCard title={movie.original_title} image={`${IMAGE_BASE_URL}${movie.backdrop_path}`} userLogo='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'  />)}
            
            


        </div>
    );
}

export default MoviePage;
