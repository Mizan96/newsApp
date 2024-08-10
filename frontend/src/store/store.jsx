import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./article-reducer";
import videosSlice from "./videos-reducer";
import artticleDetailSlice from "./artcile-detail-reducer";


const store  = configureStore({
    reducer: {
                news: newsSlice.reducer,
                videos: videosSlice.reducer,
                articleDetail: artticleDetailSlice.reducer,
            },
})

export default store;