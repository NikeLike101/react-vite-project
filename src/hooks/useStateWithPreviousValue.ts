import {useRef, useState} from "react";


export const useStateWithPreviousValue = <T>(defaultValue: T) => {
    const [state, setState] = useState<T>(defaultValue);

    const prevState = useRef<T>(state);

    const handleSetState = (newStateValue: T) => {

        prevState.current = state;
        setState(newStateValue)
    }
    return [state, handleSetState, prevState.current]
}