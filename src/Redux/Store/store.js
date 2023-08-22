
// for creating store
import { configureStore } from "@reduxjs/toolkit";

// importing the contact Reducers
import { habitReducer } from "../Reducer/habitReducer";

// creating store from reducers
export const store = configureStore({
    reducer:{
        habitReducer
    }
})