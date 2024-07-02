import requestFetch, {MethodsEnum} from "../../utils/requestFetch.ts";


type RequestUserCreateBodyType = {
    username: string,
    email: string,
    password: string,
    name:string
}


type ResponseUserCreateType = {
    course_group: number | null,
    email: string,
    id: number,
    username: string
}

type RequestUserActivateBodyType = {
    token: string,
    uid: string
}
export const createUser = (body: RequestUserCreateBodyType) =>
    requestFetch<ResponseUserCreateType>({
        url: 'https://studapi.teachmeskills.by/auth/users/',
        method: MethodsEnum.post,
        body: JSON.stringify(body),
    })

export const activateUser = (body: RequestUserActivateBodyType) =>

    requestFetch({
        url: 'https://studapi.teachmeskills.by/auth/users/activation/',
        method: MethodsEnum.post,
        body: JSON.stringify(body),
    })

