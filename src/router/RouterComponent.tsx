import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "../modules/home/Home.tsx";
import NotFound404 from "../utils/NotFound404.tsx";
import Catalog from "../modules/catalog";
import PageWrapper from "./PageWrapper.tsx";
import Seller from "../modules/catalog/SellerPage";
import {useThemeContext} from "../globalContexts/ThemedContext.tsx";
import {ThemeEnum} from "../utils/globalTypes.ts";
import PrivatePage from "./PrivatePage.tsx";
import {useMemo} from "react";

const HomePage = () => <PageWrapper Component={Home}/>
const CatalogPage =() => <PageWrapper Component={() => <Catalog title={'hello'}/>}/>

const SecretPage1 = () => <PageWrapper Component={() => <div>secret1!</div>}/>
const SecretPage2 = () => <PageWrapper Component={() => <div>secret2!</div>}/>
const SecretPage3 = () => <PageWrapper Component={() => <div>secret3!</div>}/>
const RouterComponent = () => {
    // const {theme} = useThemeContext()


    const isEnabledDarkTheme = useMemo(() => true, [])



    return <BrowserRouter>

        <Routes>
            <Route path={'home'} Component={HomePage}/>
            <Route path={'catalog'} Component={CatalogPage}/>
            <Route path={'catalog/:sellerId'} Component={Seller}   />
            <Route path={''} Component={() => <Navigate to={'/home'}/>}/>
            <Route path='*' Component={NotFound404}/>
            {/* v1*/}
            <Route path={'secret_page1'}
                   Component={() =>
                       <PrivatePage
                           available={isEnabledDarkTheme}
                           Component={SecretPage1}/>}
            />
            <Route path={'secret_page2'}
                   Component={() =>
                       <PrivatePage
                           available={isEnabledDarkTheme}
                           Component={SecretPage2}/>}
            />
            <Route path={'secret_page3'}
                   Component={() =>
                       <PrivatePage
                           available={isEnabledDarkTheme}
                           Component={SecretPage3}/>}
            />
           
            {isEnabledDarkTheme && <>
                <Route path={'secret_page1'} Component={SecretPage1}/>
                <Route path={'secret_page2'} Component={SecretPage2}/>
                <Route path={'secret_page3'} Component={SecretPage3}/>
            </>}
        </Routes>
    </BrowserRouter>
}

export default RouterComponent