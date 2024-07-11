import {createAsyncThunk} from "@reduxjs/toolkit";
import {getPosts, GetPostsRequestBodyType} from "./services.ts";
import {AppStateType} from "../../index.ts";


export const fetchPosts =
    createAsyncThunk('slice/posts',
        async (body:GetPostsRequestBodyType,thunkAPI) => {
            const {postsReducer: {filter}} = thunkAPI.getState()      as AppStateType

            const data = await getPosts({...filter, ...body})

            console.log(data, 'hello')
            return data
        }



    )