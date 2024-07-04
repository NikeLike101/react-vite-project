import {PropsWithChildren} from "react";
import {store} from "../index.ts";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Provider} from "react-redux";
import {AuthModeContextProvider} from "./AuthModeContext.tsx";


const AppContext: React.FC<PropsWithChildren> = ({children}) => {

    // const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.light);

    return (
        <Provider store={store}>
            {/*<PersistGate loading={null} persistor={persistor}>*/}
            {/*<ThemedContext.Provider value={{theme, setTheme}}>*/}
            <ThemeProvider theme={outerTheme => outerTheme}>
                <CssBaseline/>
                <AuthModeContextProvider>
                    {children}
                </AuthModeContextProvider>
            </ThemeProvider>
            {/*</ThemedContext.Provider>*/}
            {/*</PersistGate>*/}
        </Provider>)
}

export default AppContext