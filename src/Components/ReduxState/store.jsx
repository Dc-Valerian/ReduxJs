import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./ReduceState"

export const store = configureStore({
    reducer:{
        myReducer,
    }
})