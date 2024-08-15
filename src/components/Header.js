import { signOut } from "firebase/auth";
import { auth } from "../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utility/userSlice";
import { useDispatch } from "react-redux";
import { APP_LOGO } from "../Utility/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
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
    return () => unsubscribe()
  } , []);
  return (
    <div className="absolute w-screen  px-8 py-2 z-10 flex justify-between">
      <img
        className="w-44"
        src={APP_LOGO}
        alt="Netflix- logo"
      />
      {user && (
        <div className="flex">
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
