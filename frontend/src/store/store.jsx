import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./article-reducer";


const store  = configureStore({
    reducer: newsSlice.reducer,
})

export default store;