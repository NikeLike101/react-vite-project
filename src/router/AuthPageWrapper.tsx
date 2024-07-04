import {useEffect} from "react";
import {Box, Tab, Tabs} from "@mui/material";
import {useAppNavigate} from "../hooks/useAppNavigate.ts";
import {RoutesEnum} from "./routes.ts";
import {useAuthModeContext} from "../redux/contexts/AuthModeContext.tsx";
import {AuthModeEnum} from "../utils/globalTypes.ts";

interface Props {

    Component:() => JSX.Element
}

const AuthPageWrapper:React.FC<Props> = ({Component}) => {
    const {mode, setMode} = useAuthModeContext()
    const navigate = useAppNavigate()

    useEffect(() => {

        if (mode === "TMS") {
            if (window.location.pathname === RoutesEnum.signup) {
                navigate(RoutesEnum.signup)
                return;
            }
            navigate(RoutesEnum.login)
            return
        }
        if (window.location.pathname === RoutesEnum.signup_original) {
            navigate(RoutesEnum.signup_original)
            return;
        }
        navigate(RoutesEnum.login_original)

    }, [mode]);
    return <Box sx={{display: 'flex', height: '100vh' , flexDirection: 'column', background: '#fccccc'}}>
        <Tabs value={mode} sx={{color: '#ff0'}}>
            <Tab onClick={() => setMode(AuthModeEnum.TMS)} value={'TMS'} label={'TMS'}/>
            <Tab onClick={() => setMode(AuthModeEnum.original)} value={'original'} label={'original'}/>
        </Tabs>
        {Component()}
    </Box>
}

export default AuthPageWrapper