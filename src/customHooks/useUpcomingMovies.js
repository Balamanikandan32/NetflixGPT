import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../Utility/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../Utility/movieSlice";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?page=1', 
      MOVIE_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies
