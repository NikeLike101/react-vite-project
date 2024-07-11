import requestFetch, {MethodsEnum} from "../../../utils/requestFetch.ts";
import {setParamsToQuery} from "../../../utils/setParamsToQuery.ts";

export type GetPostsRequestBodyType = {
    limit?: number,
    offset?: number,
    ordering?: string
    search?: string
}




export const getPosts = (body: GetPostsRequestBodyType) =>
    requestFetch({
        url: setParamsToQuery(`https://studapi.teachmeskills.by/blog/posts/`, body),
        method: MethodsEnum.get
    })
