import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./article-reducer";
import videosSlice from "./videos-reducer";


const store  = configureStore({
    reducer: {
                news: newsSlice.reducer,
                videos: videosSlice.reducer,
            },
})

export default store;