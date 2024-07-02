import requestFetch, {MethodsEnum} from "../../utils/requestFetch.ts";

export const getUserInfo = () => {


    return requestFetch({
        url: 'https://studapi.teachmeskills.by/auth/users/me/',
        method: MethodsEnum.get,
    })
}