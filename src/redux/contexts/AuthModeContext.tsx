import {createContext, PropsWithChildren, useContext, useState} from "react";
import {AuthModeEnum} from "../../utils/globalTypes.ts";

type AuthModeContextType = {
    mode: AuthModeEnum,
    setMode: (newMode: AuthModeEnum) => void,
}

const AuthModeContext = createContext<AuthModeContextType>({
    mode: AuthModeEnum.TMS,
    setMode: () => {}
})

export const AuthModeContextProvider:React.FC<PropsWithChildren> = ({children}) => {
    const [mode, setMode] = useState<AuthModeEnum>(AuthModeEnum.TMS);
    return <AuthModeContext.Provider value={{mode,setMode}}>{children}</AuthModeContext.Provider>
}

export default AuthModeContext;



export const useAuthModeContext = () => useContext(AuthModeContext)

