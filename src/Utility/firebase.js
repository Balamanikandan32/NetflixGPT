// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAJivcjwodxHLLQvgC_VH1hN6qPyI9LiA",
  authDomain: "netflixgpt-86fdb.firebaseapp.com",
  projectId: "netflixgpt-86fdb",
  storageBucket: "netflixgpt-86fdb.appspot.com",
  messagingSenderId: "317141681950",
  appId: "1:317141681950:web:7a52ce96fb5814423aab0f",
  measurementId: "G-KCC3D85TRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();