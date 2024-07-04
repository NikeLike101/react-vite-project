import md5 from "md5";


type AuthUserInfoType = {
    username: string
    password: string
}

let accessTimeToLife = 60_000
let refreshTimeToLife = 300_000



const useAuth = () => {


    const generateTokens = (userData: AuthUserInfoType) => {
        localStorage.setItem('expireTime_back', JSON.stringify({
            access: Date.now() + accessTimeToLife,
            refresh:Date.now() + refreshTimeToLife
        }))

        const tokens = {
            access: 'access_' + md5(md5(userData.username) + "secret" + md5(userData.password) + Date.now()),
            refresh: 'refresh_' + md5(md5(userData.password) + "secret" + md5(userData.username))
        }

        return tokens
    }

const refresh = (refreshToken: string) => {
    console.log('refresh start', refreshToken)
        const userData = JSON.parse(localStorage.getItem('active_user_back') as string)
        if (refreshToken ===  'refresh_' + md5(md5(userData.password) + "secret" + md5(userData.username))) {
            const tokens = {access: 'access_' + md5(md5(userData.username) + "secret" + md5(userData.password) + Date.now()),
                refresh: refreshToken}

            console.log('refreshed!', tokens)
            return {isSuccess:true, tokens}
        }
        return {isSuccess: false}
}


    const verifyToken = (token: string, type: string) => {
        const tokensExpireTime = localStorage.getItem('expireTime_back') ? JSON.parse(localStorage.getItem('expireTime_back') as string) : null
        if (tokensExpireTime === null) {
            return {isSuccess: false}
        }
        const {access, refresh} = tokensExpireTime


        if (type === 'access') {
            console.log(Date.now() < access,Date.now(), access, 'token verify')
            return {isSuccess: Date.now() < access}
        }
        if (type === 'refresh') {
            return {isSuccess: Date.now() < refresh}
        }
    }

    const verifyAccessToken = (token: string) => {
        return verifyToken(token, 'access')
    }
    const verifyRefreshToken = (token: string) => {
        return verifyToken(token, 'refresh')
    }

    const getAuthUsers = () => {
        return JSON.parse(localStorage.getItem('authUsers_back') || '[]') as AuthUserInfoType[]
    }

    const register = (newUserData: AuthUserInfoType) => {
        const authUsers = getAuthUsers()
        console.log(authUsers)
        const newAuthUsers = [...authUsers, {...newUserData, password: md5(newUserData.password)}]
        localStorage.setItem('authUsers_back', JSON.stringify(newAuthUsers))

    }

    const login = (userData: AuthUserInfoType) => {
        const authUsers = getAuthUsers()

        const foundedUser = authUsers.find(user => user.username === userData.username)
        console.log(foundedUser, userData)
        if (foundedUser === undefined) {

            return {isSuccess: false}
        }
        console.log(foundedUser.password, md5(userData.password))
        if (foundedUser.password !== md5(userData.password)) {
            return {isSuccess: false}
        }
        console.log('privet')

        console.log(generateTokens(foundedUser))
        localStorage.setItem('active_user_back', JSON.stringify(foundedUser))
        return {tokens: generateTokens(foundedUser), isSuccess: true}

    }


    return {login, register, verifyAccessToken,verifyRefreshToken, refresh}

}
export default useAuth
