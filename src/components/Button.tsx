import Typo from "./Typo"
import React, {useContext} from "react";
import ThemedContext from "../globalContexts/ThemedContext.tsx";
import {ThemeEnum} from "../utils/globalTypes.ts";
import {useMatch} from "react-router-dom";
import {useSelector} from "react-redux";
import {useAppSelector} from "../redux";


export interface ButtonProps {
    title: string
    onClick: () => void
    link?: string
    showLabel?: boolean
    customStyle?:  React.CSSProperties

}


const Button = (props:ButtonProps) => {
    const {onClick,title, showLabel,link, customStyle} = props

    const match = useMatch(link || '')



    const {theme} = useAppSelector((state) => state.themeReducer)

    const handleClick = () => {
        console.log('privet from' , title)
        onClick()
    }
        // const renderLabel = () => {
        // if (showLabel) return <Typo value={title}/>
        // }

    const getNewThemeStyle = () => {
        if (match) return  {backgroundColor: '#ff0'}
        if (customStyle) return customStyle
        if (theme === ThemeEnum.dark) {
            return {backgroundColor: 'black', color: 'white'}
        }
        return {backgroundColor: 'white', color: 'black'}
    }


    return <div>
        {showLabel && <Typo value={title} customStyle={customStyle}/> }
        {/*{renderLabel()}*/}
    <input className="button" onClick={handleClick} style={getNewThemeStyle()} type="button" value={title}/></div>
}


export default Button