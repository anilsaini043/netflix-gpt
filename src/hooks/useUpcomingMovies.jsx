import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/store/moviesSlice";
import { API_OPTIONS } from "../utils/constants.js";

// Fetch upcoming movies data and store in movie slice store
const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results))
    }
  
    useEffect(()=> {
      getUpcomingMovies();
    }, [])

}

export default useUpcomingMovies;