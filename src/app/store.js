import { configureStore } from "@reduxjs/toolkit";
import drinksSlice from "../feature/drinksSlice";

export default configureStore({
    reducer: {
        drinksData: drinksSlice,
        // postsData: postsDataReducer,
    },
})