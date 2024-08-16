import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import logger from "redux-logger";
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"


const appStore =  configureStore({
    reducer : {
        user: userReducer,
        movies : moviesReducer,
        gpt: gptReducer,
        config : configReducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default appStore;