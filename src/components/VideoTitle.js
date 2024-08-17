const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute md:pt-30 lg:pt-40 pt-10 px-8">
      <h1 className="font-bold text-3xl text-white">{title}</h1>
      <p className="hidden md:block w-2/3 text-white my-2 font-bold">{description}</p>
      <div className="mt-3">
        <button className="bg-white text-black px-8 py-2 mr-2 rounded-md hover:bg-opacity-80">Play</button>
        <button className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-opacity-80">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
