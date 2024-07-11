import {createSlice} from "@reduxjs/toolkit";
import {FilterPayloadType, PostsReducerStateType, SetFilterAltPayloadType} from "./types.ts";
import {fetchPosts} from "./thunkActions.ts";
import {GetPostsRequestBodyType} from "./services.ts";
import { isFilterAltPayload} from "./methods.ts";


const initialState:PostsReducerStateType = {
    posts: [],
    countOfPosts: 0,
    filter: {
limit: 50
    }
}

const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setFilter: (state, action: {type: any, payload: FilterPayloadType}) => {
            if (isFilterAltPayload(action.payload)) {
                const payload = action.payload as SetFilterAltPayloadType
                state.filter = {...state.filter, [payload.field]: payload.value}
                return
            }
            state.filter = action.payload as GetPostsRequestBodyType
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload.results
            state.countOfPosts = action.payload.count
        })
    }
})

export const {setFilter} = PostsSlice.actions

export default PostsSlice.reducer