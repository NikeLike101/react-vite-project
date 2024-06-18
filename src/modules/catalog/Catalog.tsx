import {ThemedTypo} from "../../components/hocs/themeHoc.tsx";
import CatalogFilterForm from "./CatalogFilterForm.tsx";
import {useEffect, useRef} from "react";
import InputWithRef from "../../components/InputWithRef.tsx";
import {fetchUsers} from "../../redux/reducers/catalogReducer/actions.ts";
import ProductModal from "./ProductModal.tsx";
import {useAppDispatch, useAppSelector} from "../../redux";
import CatalogProductList from "./CatalogProductList.tsx";

const hello = () => console.log('hello')
interface Props {
    title: string
}
const Catalog =(props: Props) => {

    const dispatch = useAppDispatch()
const {usersLoadingStatus,users} = useAppSelector(state => state.catalogReducer)
    const inputRef = useRef<HTMLInputElement>(null)


    // const {data:dataUsers , getData:fetchUsers, isLoading:isLoadingUsers, }  = useQueryExtended(getUsers)


    useEffect(() => {
        // fetchUsers()
        dispatch(fetchUsers())
    }, []);
    //
    // useEffect(() => {
    //     if (isLoadingUsers || dataUsers === null) return;
    //     dispatch(setUsers(dataUsers))
    //
    //
    // }, [dataUsers, isLoadingUsers,]);



    return <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <ThemedTypo value={props.title}/>
        <InputWithRef inputRef={inputRef}/>


       <CatalogFilterForm/>

        {/*{isLoadingUsers || dataUsers === null ? 'loading...': <CatalogProductList users={dataUsers} />}*/}
        {usersLoadingStatus || users === null ? 'loading...': <CatalogProductList />}
        <ProductModal/>
    </div>
}

export default Catalog