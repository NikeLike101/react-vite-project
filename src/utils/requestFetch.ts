

export const enum MethodsEnum {
    post='POST',
    get='GET',
    delete='DELETE',
    put='PUT',
}

type RequestParamsType = {
    url : string
    method: MethodsEnum,
    body?: string,

}


type RequestType = <T = any>(params: RequestParamsType) => Promise<T>


const requestFetch:RequestType =async ({url, body,method}) => {

    const getTokens =localStorage.getItem('tokens')
    const refreshToken = !!getTokens ? JSON.parse(getTokens).refresh : null
    const getHeaders = (newAccessToken?:string) => {
        const accessToken = !!getTokens ? JSON.parse(getTokens).access : null

        const headers = {
            "Content-Type": "application/json",
            ...(newAccessToken ? {"Authorization": `Bearer ${newAccessToken}`}:
                accessToken ? {"Authorization": `Bearer ${accessToken}`}: {})
        }
        return headers
    }


    try {

        const query = fetch(url, {
            method,
            body,
            headers:getHeaders()
        })
        let dataRaw = await query

        if (dataRaw.status === 401 && refreshToken)  {
           const accessRawToken = await requestFetch({
                url: 'https://studapi.teachmeskills.by/auth/jwt/refresh/',
                method: MethodsEnum.post,
                body: JSON.stringify({refresh: refreshToken})
            })


            localStorage.setItem('tokens', JSON.stringify({access: accessRawToken.access, refresh: refreshToken}))
            dataRaw = await fetch(url, {
                method, body, headers: getHeaders(accessRawToken.access)
            })

        }
        if (dataRaw.status === 204) return {isSuccess: true}
        const data = await dataRaw.json()
        return data


    } catch (err) {
        console.log('err')
        console.error('Request Error: ',url, ' request fallback with error', err)
    }
}

export default requestFetch