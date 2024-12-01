import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themes/themeSlice"

const store = configureStore({
    reducer:{
        theme: themeReducer,
    }
})

export {store}