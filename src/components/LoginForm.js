import React, { useRef, useState } from "react";
import validateData from "../Utility/ValidateLogin";
import passwordShow from "../Assets/show.png";
import passwordHide from "../Assets/hide.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utility/firebase";
import { USER_AVATAR } from "../Utility/constants";

const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [passwordIcon, setPasswordIcon] = useState(true);
  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };
  const handleValidation = () => {
    //validate the form
    const data = validateData(email.current.value, password.current.value);
    setErrorMessage(data);
    // sign in sign up
    if (data) return;

    if (!isSignIn) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullname.current.value,
            photoURL:USER_AVATAR,
          })
            .then(() => {
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else if (isSignIn) {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "++" + errorMessage);
        });
    }
  };
  return (
    <form
      className="bg-black absolute p-12 w-full md:w-1/3 my-20 mx-auto right-0 left-0 bg-opacity-80"
      onSubmit={(e) => e.preventDefault()}
    >
      <h1 className="text-3xl text-white font-bold">
        {isSignIn ? "Sign In" : "Sign Up"}{" "}
      </h1>
      {!isSignIn && (
        <input
          className="p-2 my-3 w-full bg-gray-700"
          type="text"
          placeholder="Fullname"
          ref={fullname}
        />
      )}
      <input
        className="p-2 my-3 w-full bg-gray-700"
        type="text"
        placeholder="Enter Email"
        ref={email}
      />
      <div className=" relative flex ">
        <input
          className="p-2 my-3 w-full bg-gray-700"
          type={passwordIcon ? "password" : "text"}
          placeholder="Password"
          ref={password}
        />
        <img
          className="w-6 h-6 absolute right-2 top-5"
          src={passwordIcon ? passwordShow : passwordHide}
          alt="passwordicon"
          onClick={() => setPasswordIcon(!passwordIcon)}
        />
      </div>
      {errorMessage && <p className="text-red-700 font-bold">{errorMessage}</p>}
      <button
        className="p-2 my-3 bg-red-600 text-white w-full"
        onClick={handleValidation}
      >
        {isSignIn ? "Sign In" : "Sign up"}
      </button>
      <span className="text-white">
        {isSignIn ? "New to Netflix? " : "Already a user "}
        <button onClick={toggleSignUp} className="font-bold">
          {isSignIn ? "Sign Up now" : "Sign In now"}
        </button>
      </span>
    </form>
  );
};

export default LoginForm;
