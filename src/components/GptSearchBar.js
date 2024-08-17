import { useDispatch, useSelector } from "react-redux";
import language from "../Utility/languageConstants";
import { useRef } from "react";
import openai from "../Utility/openai";
import { MOVIE_OPTIONS } from "../Utility/constants";
import { addGptMovieResult } from "../Utility/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
        MOVIE_OPTIONS
    );
    const json = await data.json();
    return json;
  };
  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as Movie Recommedation System and suggest some movie for the query" +
      searchText.current.value +
      "only give me name of 5 movies, as exaple movie1, movie2, movie3, movie4, movie5";
    // const gptResult = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log("gptres", gptResult);

    // const gptMovies = gptResult?.choices?.[0]?.message?.content.split(",");
    const gptMovies = [
      "Kattradhu Thamizh",
      "Cobra",
      "Viruman",
      "Beast",
      "Love Today",
    ];

    const promiseArray = gptMovies?.map((movie) => searchMovieTMDB(movie));
    //[promise1,promise2,promise3,promise4,promise5]

    const tmdbResult = await Promise.all(promiseArray);
    // tmdb gives result of every movies with that keyword so using filter i can get exact movies(later)

    // const exactTmdbResult = tmdbResult?.filter((movies, index) =>
    //   movies?.results?.filter((result) => { console.log("123",result?.title,gptMovies[index]); return result?.title === gptMovies[index]})
    // );
    console.log("final", tmdbResult);
    // console.log("exactmatcg",exactTmdbResult)

    dispatch(
      addGptMovieResult({ moviesNames: gptMovies, moviesResult: tmdbResult })
    );
  };
  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        className="bg-gray-800 w-full md:w-3/4 grid grid-cols-12 rounded-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-4 col-span-10"
          type="text"
          placeholder={language[langKey].gptPlaceholder}
          ref={searchText}
        />
        <button
          className="bg-red-700 font-bold text-white py-2 px-4 m-4 rounded-md col-span-2"
          onClick={handleGptSearchClick}
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
