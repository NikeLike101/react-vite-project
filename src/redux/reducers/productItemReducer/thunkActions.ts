import {createAsyncThunk} from "@reduxjs/toolkit";
import {getProductPhotos} from "../catalogReducer/services.ts";


export const fetchProductPhotos =
    createAsyncThunk('slice/photos',
    async (productId: number) => {
        const data = await getProductPhotos(productId)
        return data
}



)