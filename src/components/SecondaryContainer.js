import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className="bg-black">
      <div className="-mt-32 lg:-mt-52 pl-8">
        <MovieList title="Now Playing Movies" movies={movies?.nowPlayingMovies} />
        <MovieList title="Popular Movies" movies={movies?.popularMovies} />
        <MovieList title="Top Rated Movies" movies={movies?.topRatedMovies} />
        <MovieList title="Upcoming Movies" movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
