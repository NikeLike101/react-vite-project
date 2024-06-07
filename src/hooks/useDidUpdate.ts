import {useEffect, useRef} from "react";


export const useDidUpdate = (func: () => void, deps: any[]) => {
    const isMounted = useRef()
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
        } else {
            func()
        }
    }, [...deps])
}