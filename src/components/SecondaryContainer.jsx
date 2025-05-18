import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  console.log("movies",movies)
  return (
    <div className='bg-black pb-5'>
      <div className='-mt-52 px-5 relative z-20'>
        <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
        <MovieList title={"Trending"} movies={movies?.popularMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer