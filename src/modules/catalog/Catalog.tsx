import {ThemedTypo} from "../../components/hocs/themeHoc.tsx";
import CatalogProductList from "./CatalogProductList.tsx";
import CatalogFilterForm from "./CatalogFilterForm.tsx";
import {useEffect, useRef} from "react";
import InputWithRef from "../../components/InputWithRef.tsx";
import {getUsers} from "./services.ts";
import useQueryExtended from "../../hooks/useQueryExtended.ts";
import {useDispatch} from "react-redux";
import {setUsers} from "../../redux/reducers/catalogReducer/actions.ts";
import ProductModal from "./ProductModal.tsx";


interface Props {
    title: string
}
const Catalog =(props: Props) => {

    const dispatch = useDispatch()

    const inputRef = useRef<HTMLInputElement>(null)


    const {data:dataUsers , getData:fetchUsers, isLoading:isLoadingUsers, }  = useQueryExtended(getUsers)


    useEffect(() => {
        fetchUsers()
    }, []);

    useEffect(() => {
        if (isLoadingUsers || dataUsers === null) return;
        dispatch(setUsers(dataUsers))


    }, [dataUsers, isLoadingUsers,]);



    return <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <ThemedTypo value={props.title}/>
        <InputWithRef inputRef={inputRef}/>


       <CatalogFilterForm/>

        {isLoadingUsers || dataUsers === null ? 'loading...': <CatalogProductList users={dataUsers} />}
        <ProductModal/>
    </div>
}

export default Catalog