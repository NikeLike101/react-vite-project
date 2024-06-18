import {createSlice} from "@reduxjs/toolkit";
import {ProductItemSliceStateType} from "./types.ts";
import {fetchProductPhotos} from "./thunkActions.ts";


const initialState:ProductItemSliceStateType = {
photos: []
}

const productItemSliceReducer = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProductPhotos.fulfilled, (state, action) => {
            state.photos = action.payload
        })
    }
})

export default productItemSliceReducer.reducer