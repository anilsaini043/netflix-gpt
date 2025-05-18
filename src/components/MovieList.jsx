import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='px-6'>
            <div className='pt-5 pb-3 text-xl text-white font-bold opacity-80'>
                <h1>{title}</h1>
            </div>
            <div className='flex overflow-x-scroll'>
                <div className="flex gap-2">
                    {
                        movies?.map((movie) => (
                            <MovieCard key={movie.id} img_path={movie.poster_path} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList