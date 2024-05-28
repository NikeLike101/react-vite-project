import React from "react";

interface Props {
    value: string
    withNotStyles?: boolean
    variant?: 'text' | 'caption' | 'title'
    customStyle?:  React.CSSProperties
}




const Typo = (props: Props) => {

    const style = {
        background: props.value.length <= 7 ? '#00f' : '#ff0',
        color: '#001',
        marginRight: '8px',
        fontSize: props.variant === 'title'? '20px' : props.variant === 'caption'? '12px' : '16px'
    }

    return (
        <span
            className="text"
            style={props.customStyle ?  props.customStyle :  props.withNotStyles ? {} : style}
        >{props.value}</span>
    )
}

export default Typo