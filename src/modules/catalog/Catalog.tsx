import {ThemedTypo} from "../../components/hocs/themeHoc.tsx";
import CatalogProductList from "./CatalogProductList.tsx";
import CatalogFilterForm from "./CatalogFilterForm.tsx";
import {ProductsFilterType, ProductType, UserType} from "./types.ts";
import {useEffect, useRef, useState} from "react";
import InputWithRef from "../../components/InputWithRef.tsx";
import Button from "../../components/Button.tsx";
import {getUsers} from "./services.ts";
import Header from "../../components/Header.tsx";
import useQueryExtended from "../../hooks/useQueryExtended.ts";
import {useDidUpdate} from "../../hooks/useDidUpdate.ts";
import {useLocation, useMatch} from "react-router-dom";




export  const initialFilterValue:ProductsFilterType = {
    name: undefined,
    material: undefined,
    searchField: ''
}

interface Props {
    title: string
}
const Catalog =(props: Props) => {
    const [filter, setFilter] = useState<ProductsFilterType>(initialFilterValue);
    const inputRef = useRef<HTMLInputElement>(null)


    const {data:dataUsers , getData:fetchUsers, isLoading:isLoadingUsers, }  = useQueryExtended(getUsers)
    const location = useLocation()


    useEffect(() => {
        // const getData = async () => {
        // try {
        //     setIsLoading(true)
        //
        //     setUsers(usersData)
        //     setIsLoading(false)
        // } catch (err) {
        //     alert(err)
        // }
        //
        // }
        //
        // getData()

    }, []);

    useDidUpdate(() => {
        console.log(dataUsers, 'users')

    }, [dataUsers]);
    const handleFilter = (newFilter:ProductsFilterType) => {
        console.log(newFilter, 'filter')
        setFilter(newFilter)
        fetchUsers()
    }





    return <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <ThemedTypo value={props.title}/>
        <InputWithRef inputRef={inputRef}/>
        <Button
            onClick={() => {

                console.log(inputRef.current)
                handleFilter({...filter, searchField: inputRef.current?.value || ''})
            }}
            title={'find'}
        />

       <CatalogFilterForm onFilterChange={handleFilter}/>

        {isLoadingUsers || dataUsers === null ? 'loading...': <CatalogProductList users={dataUsers} filter={filter}/>}
    </div>
}

export default Catalog