import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    adBgColor: "#FFFFFF",
    adImage: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
    adText: "American Heritage Chocolate ",
    adCTA: "Buy Now",
};

export const adSlice = createSlice({
    name: "ad",
    initialState,
    reducers: {
        adBgColor: (state, action) => {
            state.adBgColor = action.payload;
        },
        adImage: (state, action) => {
            state.adImage = action.payload;
        },
        adText: (state, action) => {
            state.adText = action.payload
        },
        adCTA: (state, action) => {
            state.adCTA = action.payload;
        },
    },
});

export const { adBgColor, adImage, adText, adCTA } = adSlice.actions;

export const store = configureStore({
    reducer: {
        ad: adSlice.reducer
    }
});
