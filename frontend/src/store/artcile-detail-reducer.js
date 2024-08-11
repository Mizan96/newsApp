import { createSlice } from "@reduxjs/toolkit";

const initialState = {data: []};

const artticleDetailSlice = createSlice({
    name: 'articleDetail',
    initialState,
    reducers: {
        getArticleDetail(state, action){
            state.data = action.payload;
        }
    }
});


export const artticleDetialActions = artticleDetailSlice.actions;

export default artticleDetailSlice;
