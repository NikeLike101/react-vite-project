import requestFetch, {MethodsEnum} from "../../utils/requestFetch.ts";


type RequestGetTokensBodyType = {
    email: string,
    password: string,
}



export const getTokens = (body: RequestGetTokensBodyType) => {
    return     requestFetch({
        url: 'https://studapi.teachmeskills.by/auth/jwt/create/',
        method: MethodsEnum.post,
        body: JSON.stringify(body),
    })
}