import Button, {ButtonProps} from "../Button.tsx";
import {Component, JSX, useEffect, useState} from "react";
import Typo from "../Typo.tsx";

type ThemeType = 'dark' | 'light'

type ThemeHocType<PropsType> =(component: (props: PropsType) => JSX.Element) => (props: PropsType) => JSX.Element
const themeHoc:ThemeHocType<any> = (Component) => {


    const ThemedComponent = (props) => {

        const [theme, setTheme] = useState<ThemeType>(localStorage.getItem('theme'))
        useEffect(() => {
            let interval = setInterval(() => {

                if (localStorage.getItem('theme') === null) return;
                setTheme(localStorage.getItem('theme') as ThemeType)
            }, 300)

            return () => {
                clearInterval(interval)
            }
        }, [])



        const getNewThemeStyle = () => {
            if (theme === 'dark') {
                return {backgroundColor: 'black', color: 'white'}
            }
            return {backgroundColor: 'white', color: 'black'}
        }


        console.log(props, 'hoced props')
        return <div style={{display: 'flex'}}>
            Component: <Component {...props} customStyle={getNewThemeStyle()} />


        </div>
    }


    return ThemedComponent
}

// const ThemedComponent = ({Component}: {Component: JSX.Element}) => {
//     return <div style={{display: 'flex'}}>
//         Component: {<Component/>}
//     </div>
// }
export const ThemedButton = themeHoc(Button)
export const ThemedTypo = themeHoc(Typo)

export default  themeHoc