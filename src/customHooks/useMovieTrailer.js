import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../Utility/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../Utility/movieSlice";
const useMovieTrailer = (movieId) => {
    const dispatch= useDispatch()
  useEffect(() => {
    getMovieTrailer();
  }, []);
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      MOVIE_OPTIONS
    );
    const json = await data.json();
    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData ? filterData[0] : json?.results[0];
    dispatch(addMovieTrailer(trailer));
  };
};

export default useMovieTrailer;
