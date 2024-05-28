import Typo from "./Typo"
import React from "react";


export interface ButtonProps {
    title: string
    onClick: () => void
    showLabel?: boolean
    customStyle?:  React.CSSProperties
}


const Button = (props:ButtonProps) => {
    const {onClick,title, showLabel, customStyle} = props


    const handleClick = () => {
        console.log('privet from' , title)
        onClick()
    }
        // const renderLabel = () => {
        // if (showLabel) return <Typo value={title}/>
        // }


    return <div>
        {showLabel && <Typo value={title} customStyle={customStyle}/> }
        {/*{renderLabel()}*/}
    <input className="button" onClick={handleClick} style={customStyle} type="button" value={title}/></div>
}


export default Button