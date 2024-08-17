import { MOVIE_IMG_URL } from "../Utility/constants"
const MovieCard = ({posterPath,title}) => {
   if(!posterPath) return null
  return (
    <div  className="w-32 md:w-44 pr-4">
       <img src = {MOVIE_IMG_URL+posterPath} alt = "movie-poster" />
    </div>
  )
}

export default MovieCard