import FlexBox from "../components/FlexBox.tsx";
import Header from "../components/header/Header.tsx";


interface Props {
    Component:() => JSX.Element
}

const PageWrapper:React.FC<Props> = ({Component}) => {


    return <FlexBox column sx={{width: '100%', height: '100vh'}}>

        <Header/>
        {Component()}

    </FlexBox>
}

export default PageWrapper