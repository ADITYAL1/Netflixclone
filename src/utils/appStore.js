import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvReducer from "./tvSlice";
import searchReducer from "./searchSlice";
import configReducer from"./configSlice";
const appStore =configureStore(
    {
        reducer:{
            movies:moviesReducer,
            user:userReducer,
            tv:tvReducer,
            search:searchReducer,
            config:configReducer,
        },
    }
);
export default appStore;