import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/store/moviesSlice";
import { API_OPTIONS } from "../utils/constants.js";

// Fetch top rated movies data and store in movie slice store
const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results))
    }
  
    useEffect(()=> {
      getTopRatedMovies();
    }, [])

}

export default useTopRatedMovies;