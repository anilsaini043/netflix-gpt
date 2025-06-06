import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/moviesSlice";
import { API_OPTIONS } from "../utils/constants.js";

// Fetch nowPlayingMovies data and store in movice slice store
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
    }
  
    useEffect(()=> {
      getNowPlayingMovies();
    }, [])

}

export default useNowPlayingMovies;