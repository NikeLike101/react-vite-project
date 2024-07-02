import RouterComponent from "./router/RouterComponent.tsx";
import { Provider } from "react-redux";
import { store} from "./redux";
import {CssBaseline, ThemeProvider} from "@mui/material";


export type OpenedPageType = 'home' | 'catalog'
const App = () => {
    // const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.light);

    return (
        <Provider store={store}>
       {/*<PersistGate loading={null} persistor={persistor}>*/}
        {/*<ThemedContext.Provider value={{theme, setTheme}}>*/}
            <ThemeProvider theme={outerTheme => outerTheme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
            <RouterComponent/>
            </ThemeProvider>
        {/*</ThemedContext.Provider>*/}
       {/*</PersistGate>*/}
        </Provider>
    );
};

export default App;
