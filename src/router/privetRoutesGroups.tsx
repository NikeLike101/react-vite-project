import {Route} from "react-router-dom";


export const renderPrivateRoutes = (isEnabledDarkTheme: boolean) => isEnabledDarkTheme && <>
    <Route path={'secret_page1'} Component={SecretPage1}/>
    <Route path={'secret_page2'} Component={SecretPage2}/>
    <Route path={'secret_page3'} Component={SecretPage3}/>
</>

