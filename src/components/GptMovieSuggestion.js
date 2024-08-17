import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { OPENAI_KEY } from "../Utility/constants";

const GptMovieSuggestion = () => {
  const { moviesNames, moviesResult } = useSelector((store) => store.gpt);
  console.log("moviesResult", moviesResult);
  if(!moviesNames) return null;
  return (
    <div className="bg-black p-4 m-4 bg-opacity-70">
      <div>
        {moviesNames?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={moviesResult?.[index]?.results}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
