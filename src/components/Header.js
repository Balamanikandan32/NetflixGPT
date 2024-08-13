import { signOut } from "firebase/auth";
import { auth } from "../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate()
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        navigate("./error")
      });
  };
  return (
    <div className="absolute w-screen z-10 flex justify-between">
      <img
        className="w-44 ml-9"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix- logo"
      />
      {user && <div className="flex">
        <button
          className="bg-red-700 font-bold text-white mx-3 mt-5 w-20 h-8"
          onClick={handleSignout}
        >
          Sign Out
        </button>
      </div>
      }
    </div>
  );
};

export default Header;
