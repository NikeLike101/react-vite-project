import Button from "./Button.tsx";
import {OpenedPageType} from "../App.tsx";



interface Props {
    onChangePage: (newPage: OpenedPageType) => void
}
const Header = ({onChangePage}: Props) => {


    const handleSwitchTheme = () => {
        const theme  = localStorage.getItem('theme') || 'light'
        console.log('switch theme',theme)
        if (theme === 'light') {
            localStorage.setItem('theme', 'dark')
            return;
        }
        localStorage.setItem('theme', 'light')
    }

    const handleOpenHome = () => onChangePage('home')
    const handleOpenCatalog = () => onChangePage('catalog')



    return <div style={{display: 'flex', gap: '8px', padding: 8, borderBottom: '3px solid #CCC', marginBottom: 12}}>
        <Button title="Home page" onClick={handleOpenHome}/>
        <Button title="Catalog page" onClick={handleOpenCatalog}/>
        <Button title="Switch theme" onClick={handleSwitchTheme}/>
    </div>
}

export default Header