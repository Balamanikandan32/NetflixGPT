import { useSelector } from "react-redux";
import language from "../Utility/languageConstants";

const GptSearchBar = () => {
    const langKey =useSelector(store=>store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-gray-800 w-3/4 grid grid-cols-12 rounded-sm">
        <input
          className="p-4 m-4 col-span-10"
          type="text"
          placeholder={language[langKey].gptPlaceholder}
        />
        <button className="bg-red-700 font-bold text-white py-2 px-4 m-4 rounded-md col-span-2">
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
