import Button from "../Button.tsx";
import {ThemeEnum} from "../../utils/globalTypes.ts";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeTheme} from "../../redux/reducers/themeReducer.ts";
import {appReducer, AppStateType, useAppSelector} from "../../redux";
import {headerLinks} from "./data.ts";


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

    const handleLogout = () => {
        localStorage.removeItem('tokens')
        navigation('/login')
    }


    return <div style={{display: 'flex', gap: '8px', padding: 8, borderBottom: '3px solid #CCC', marginBottom: 12}}>
        {headerLinks.map(headerLink => <Button  onClick={() => navigation(headerLink.link)} link={headerLink.link} title={headerLink.title}/>)}
        <Button title="Switch theme" onClick={handleSwitchTheme}/>
        <Button title={'Log out'} onClick={handleLogout}/>
    </div>
}

export default Header