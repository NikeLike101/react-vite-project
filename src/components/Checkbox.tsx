import {BaseSyntheticEvent, ChangeEvent, memo, useContext} from "react";
import ThemedContext from "../globalContexts/ThemedContext.tsx";
import {ThemeEnum} from "../utils/globalTypes.ts";


interface Props {
    onClick: (checked: boolean) => void;
    checked: boolean
}

const Checkbox:React.FC<Props>  = props => {
    const {checked,onClick} = props
    // console.log('hello from checkbox')

    const {theme} =  useContext(ThemedContext)
    const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
        onClick(event.target.checked)
    }
    const getNewThemeStyle = () => {
        if (theme === ThemeEnum.dark) {
            return {width: '10px', height: '10px'}
        }
        return {backgroundColor: 'white', color: 'black'}
    }

    return <input style={getNewThemeStyle()} onChange={handleToggle}
                  checked={checked} type='checkbox'/>
}

export default memo(Checkbox)