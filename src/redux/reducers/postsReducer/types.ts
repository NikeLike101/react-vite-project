import {GetPostsRequestBodyType} from "./services.ts";

export type PostType = {
    id: number,
    date: string,
    image: string
    text: string,
    title: string,
    description: string

}

export type SetFilterAltPayloadType = {field: keyof GetPostsRequestBodyType, value: string| number}

export type FilterPayloadType = GetPostsRequestBodyType | SetFilterAltPayloadType


export type PostsReducerStateType = {
    posts: PostType[],
    countOfPosts: number
    filter: GetPostsRequestBodyType
}