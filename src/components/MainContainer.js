import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  const movie = movies?.[Math.floor(Math.random() * movies?.length + 0)];
  const { original_title, overview, id} = movie;
  return (
    <div className="pt-[20%] md:pt-[10%] lg:pt-0 bg-black">
      <VideoTitle title = {original_title} description = {overview} />
      <VideoBackground movieId = {id} />
    </div>
  );
};

export default MainContainer;
