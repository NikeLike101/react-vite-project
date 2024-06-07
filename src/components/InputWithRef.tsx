import {useEffect, useRef} from "react";


interface Props {
    inputRef:  React.RefObject<HTMLInputElement>
}

// const ref = { current: 'value'}
const InputWithRef:React.FC<Props> = props => {
    const { inputRef} = props





    return <input ref={inputRef}/>
}

export default InputWithRef