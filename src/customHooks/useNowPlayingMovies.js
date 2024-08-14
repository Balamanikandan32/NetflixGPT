import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../Utility/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utility/movieSlice";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      MOVIE_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies
