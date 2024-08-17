import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../Utility/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utility/movieSlice";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?page=1',
      MOVIE_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies
