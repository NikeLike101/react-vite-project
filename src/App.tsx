import RouterComponent from "./router/RouterComponent.tsx";
import { Provider } from "react-redux";
import {persistor, store} from "./redux";
import { PersistGate } from "redux-persist/integration/react";


export type OpenedPageType = 'home' | 'catalog'
const App = () => {
    // const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.light);

    return (
        <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        {/*<ThemedContext.Provider value={{theme, setTheme}}>*/}
            <RouterComponent/>
        {/*</ThemedContext.Provider>*/}
       </PersistGate>
        </Provider>
    );
};

export default App;
