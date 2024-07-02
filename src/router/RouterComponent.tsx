import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "../modules/home/Home.tsx";
import NotFound404 from "../utils/NotFound404.tsx";
import Catalog from "../modules/catalog";
import PageWrapper from "./PageWrapper.tsx";
import Seller from "../modules/catalog/SellerPage";
import {useThemeContext} from "../globalContexts/ThemedContext.tsx";
import {ThemeEnum} from "../utils/globalTypes.ts";
import PrivatePage from "./PrivatePage.tsx";
import React, {useMemo} from "react";
import {RoutesEnum} from "./routes.ts";
import Login from "../modules/login/Login.tsx";
import SignUp from "../modules/signUp/SignUp.tsx";

const HomePage = () => <PageWrapper Component={Home}/>
const CatalogPage =() => <PageWrapper Component={() => <Catalog title={'hello'}/>}/>
const LoginPage =() =>  <Login/>
const SignUpPage =() =>  <SignUp/>

const SecretPage1 = () => <PageWrapper Component={() => <div>secret1!</div>}/>
const SecretPage2 = () => <PageWrapper Component={() => <div>secret2!</div>}/>
const SecretPage3 = () => <PageWrapper Component={() => <div>secret3!</div>}/>
const RouterComponent = () => {
    // const {theme} = useThemeContext()


    const isEnabledDarkTheme = useMemo(() => true, [])



    return <BrowserRouter>

        <Routes>
            <Route path={RoutesEnum.home} Component={HomePage}/>
            <Route path={RoutesEnum.catalog} Component={CatalogPage}/>
            <Route path={RoutesEnum.catalogSellerPage} Component={Seller}   />
            <Route path={''} Component={() => <Navigate to={RoutesEnum.login}/>}/>
            <Route path={RoutesEnum.notFound} Component={NotFound404}/>
            <Route path={RoutesEnum.login} Component={LoginPage}/>
            <Route path={RoutesEnum.signup} Component={SignUpPage}/>
            {/* v1*/}
            {/*<Route path={'secret_page1'}*/}
            {/*       Component={() =>*/}
            {/*           <PrivatePage*/}
            {/*               available={isEnabledDarkTheme}*/}
            {/*               Component={SecretPage1}/>}*/}
            {/*/>*/}
            {/*<Route path={'secret_page2'}*/}
            {/*       Component={() =>*/}
            {/*           <PrivatePage*/}
            {/*               available={isEnabledDarkTheme}*/}
            {/*               Component={SecretPage2}/>}*/}
            {/*/>*/}
            {/*<Route path={'secret_page3'}*/}
            {/*       Component={() =>*/}
            {/*           <PrivatePage*/}
            {/*               available={isEnabledDarkTheme}*/}
            {/*               Component={SecretPage3}/>}*/}
            {/*/>*/}
           
            {isEnabledDarkTheme && <>
                <Route path={'secret_page1'} Component={SecretPage1}/>
                <Route path={'secret_page2'} Component={SecretPage2}/>
                <Route path={'secret_page3'} Component={SecretPage3}/>
            </>}
        </Routes>
    </BrowserRouter>
}

export default RouterComponent