import Button from "./Button.tsx";
import {OpenedPageType} from "../App.tsx";
import {useContext} from "react";
import ThemedContext from "../globalContexts/ThemedContext.tsx";
import {ThemeEnum} from "../utils/globalTypes.ts";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "../redux/reducers/themeReducer.ts";
import {appReducer, AppStateType, useAppSelector} from "../redux";



const Header = () => {

    const {b} = useAppSelector(state => state.charsReducer)
    const {theme} = useAppSelector((state) => state.themeReducer)
const dispatch = useDispatch()

    const navigation = useNavigate()
    const handleSwitchTheme = () => dispatch(changeTheme(theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light))

    const handleOpenHome = () => navigation('/home')
        // onChangePage('home')
    const handleOpenCatalog = () => navigation('/catalog')
        // onChangePage('catalog')




    return <div style={{display: 'flex', gap: '8px', padding: 8, borderBottom: '3px solid #CCC', marginBottom: 12}}>
        <Button title="Home page" link={'/home'} onClick={handleOpenHome}/>
        {b}
        <Button title="Catalog page" link={'/catalog'} onClick={handleOpenCatalog}/>
        <Button title="Switch theme" onClick={handleSwitchTheme}/>
    </div>
}

export default Header