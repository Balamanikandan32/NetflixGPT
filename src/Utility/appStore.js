import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import logger from "redux-logger";
import moviesReducer from "./movieSlice"


const appStore =  configureStore({
    reducer : {
        user: userReducer,
        movies : moviesReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default appStore;