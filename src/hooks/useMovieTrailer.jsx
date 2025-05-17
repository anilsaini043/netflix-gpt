import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/store/moviesSlice';

// Fetch movie trailer and update the store with trailer video data
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        const movieTrailers = json.results.filter((video) => video.type === "Trailer");
        const trailer = movieTrailers.length ? movieTrailers[0] : json.results[0]; // Hanlded failed case
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        getMovieVideos();
    }, [])
}

export default useMovieTrailer;