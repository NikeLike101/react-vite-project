import {PropsWithChildren} from "react";
import Typo from "./Typo.tsx";


interface Props {
        onClose: () => void
        open: boolean
}


const getClasses = () => ({
 modalContainer: {
     position: 'absolute',
     top: 0,
     left: 0,
     width: '100%', height: '100vh',
     background: '#00000050',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center'
 },
    modalContentWrapper: {background:'#fff', maxWidth: '95%', minWidth: '100px', minHeight: '50px'}
})


const Modal:React.FC<PropsWithChildren<Props>> = props => {
    const {open, onClose, children} = props
    const classes = getClasses()

    return <>{open && <div style={classes.modalContainer}>

        <div style={classes.modalContentWrapper}>
                <div onClick={onClose}>X</div>
            {children}
        </div>
    </div>
    }</>
}

export default Modal