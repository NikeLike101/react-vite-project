import {createContext, useContext} from "react";
import {ThemeEnum} from "../utils/globalTypes.ts";

type ThemeContextType = {
    theme: ThemeEnum,
    setTheme: (newTheme: ThemeEnum) => void,
}

const ThemedContext = createContext<ThemeContextType>({
    theme: ThemeEnum.light,
    setTheme: () => {}
})

export default ThemedContext;

export const useThemeContext = () => useContext(ThemedContext)