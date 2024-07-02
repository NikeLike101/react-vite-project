import {NavigateOptions, useNavigate} from "react-router-dom";
import {RoutesEnum} from "../router/routes.ts";


export const useAppNavigate = () => {
    const navigate = useNavigate();

    return (path: RoutesEnum | number, options?:NavigateOptions) =>
        navigate(path as any, options)
}