import { signOut } from "firebase/auth";
import { auth } from "../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utility/userSlice";
import { useDispatch } from "react-redux";
import { APP_LOGO, MULTILANGUAGE } from "../Utility/constants";
import { toggleGptSearchView } from "../Utility/gptSlice";
import { changeLangauge } from "../Utility/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("./error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when compount unmounts
    return () => unsubscribe();
  }, []);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguage = (e) => {
    dispatch(changeLangauge(e.target.value));
  };

  return (
    <div className="absolute w-screen  px-8 py-2 z-10 flex justify-between flex-col md:flex-row">
      <img
        className="w-44 mx-auto md:mx-0"
        src={APP_LOGO}
        alt="Netflix- logo"
      />
      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              className="bg-gray-500 text-white  mx-3 mt-5 w-28 h-8 px-2 font-bold"
              onChange={handleLanguage}
            >
              {MULTILANGUAGE?.map((lang) => (
                <option key={lang.identifier} value={lang.name}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white bg-blue-600 mx-3 mt-5 w-32 h-8 rounded-md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-8 h-8 mt-5"
            src={user.photoURL}
            alt="profile-icon"
          />
          <button
            className="bg-red-700 font-bold text-white mx-3 mt-5 w-20 h-8 rounded-md"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
