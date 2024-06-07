import {RouteProps} from "react-router/dist/lib/components";
import {Route} from "react-router-dom";
import {ReactElement} from "react";
import NotFound404 from "../utils/NotFound404.tsx";


interface Props {
    available: boolean;
    Component: () => JSX.Element
}

const PrivatePage:React.FC<Props> = (props):JSX.Element | null => {
    const { available, Component } = props;
    return available ? Component() :<NotFound404/>
}

export default PrivatePage