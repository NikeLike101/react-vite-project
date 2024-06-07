import {useState} from "react";
import Catalog from "./modules/catalog/Catalog";
import Home from "./modules/home/Home";
import Header from "./components/Header.tsx";
import ThemedContext from "./globalContexts/ThemedContext.tsx";
import {ThemeEnum} from "./utils/globalTypes.ts";
import RouterComponent from "./router/RouterComponent.tsx";


export type OpenedPageType = 'home' | 'catalog'
const App = () => {
    const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.light);

    return (
        <ThemedContext.Provider value={{theme, setTheme}}>
            <RouterComponent/>
        </ThemedContext.Provider>
    );
};

export default App;
