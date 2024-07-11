export const setParamsToQuery = (url: string, params: NonNullable<{[key: string]: number | string}>):string =>
    url + Object.keys(params).map((key, index) =>
        `${ index === 0 ? `?` : `&`}${key}=${params[key]}`
    ).join('')
