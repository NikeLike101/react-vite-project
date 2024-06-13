import Input from "../../components/Input.tsx";
import Select from "../../components/Select.tsx";
import {useEffect, useMemo, useState} from "react";
import {materials, names} from "../../constants.ts";
import useDebounce from "../../hooks/useDebounce.ts";
import usePrevious from "../../hooks/usePrevious.ts";
import {useAppSelector} from "../../redux";
import {useDispatch} from "react-redux";
import {setFilter} from "../../redux/reducers/catalogReducer/actions.ts";
import {initialFilterState} from "../../redux/reducers/catalogReducer/reducer.ts";

interface Props {
}


const CatalogFilterForm: React.FC<Props> = () => {


    const {name, material, searchField} = useAppSelector(state => state.catalogReducer.filter)
    const dispatch = useDispatch()
    const [searchFieldValue, setSearchFieldValue] = useState<string>('');
    const [selectedMaterial, setSelectedMaterial,] = useState<string | undefined>(undefined);
    const [selectedNameOfProduct, setSelectedNameOfProduct,] = useState<string | undefined>(undefined);

    const [counter, setCounter] = useState<number>(0);

    const prevSearchVal = usePrevious<string>(searchFieldValue)

    const debouncedSearchFieldValue = useDebounce(searchFieldValue, 500)

    useEffect(() => {

        setTimeout(() => {
            setCounter(counter + 1)
        }, 1000)


    }, [counter]);

    useEffect(() => {
        console.log(searchFieldValue, prevSearchVal, 'normal')
    }, [searchFieldValue]);


    // useEffect(() => {
    //     console.log(debouncedSearchFieldValue, 'debounced')
    // }, [debouncedSearchFieldValue]);

    // useEffect(() => {
    //
    // }, [searchFieldValue]);
    // useEffect(() => {
    //
    // }, [selectedNameOfProduct]);
    // useEffect(() => {
    //
    // }, [selectedMaterial]);
    const handleChangeSearchField = (value: string) => {
        setSearchFieldValue(value)
    }

    const handleChangeNameOfProductSelect = (value: string) => {
        setSelectedNameOfProduct(value)

    }
    const handleChangeMaterialSelect = (value: string) => {
        setSelectedMaterial(value)

    }

    const handleApply = () => {
        dispatch(setFilter({
            name: selectedNameOfProduct,
            searchField: searchFieldValue,
            material: selectedMaterial
        }))
    }

    const handleClear = () => {
        setSearchFieldValue('')
        setSelectedMaterial(undefined)
        setSelectedNameOfProduct(undefined)
        dispatch(setFilter(initialFilterState))

    }

    const isDisabledClearButton =
        debouncedSearchFieldValue === '' &&
        selectedMaterial === undefined &&
        selectedNameOfProduct === undefined


    const isDisabledApplyButton = useMemo(() => {

        return debouncedSearchFieldValue === searchField &&
            selectedMaterial === material &&
            selectedNameOfProduct === name

    }, [
        debouncedSearchFieldValue,
        name,
        selectedMaterial,
        selectedNameOfProduct,
        searchField, material
    ])

    
    return <div style={{background: '#2d0070', color: '#ddd', padding: '10px'}}>

        {counter}
        <Input onChange={handleChangeSearchField} value={searchFieldValue} label='find product'/>


        <Select
            triggerValue={selectedMaterial}
            onChange={handleChangeMaterialSelect}
            label='chose material'
            options={[...materials]}/>


        <Select triggerValue={selectedNameOfProduct} onChange={handleChangeNameOfProductSelect}
                label='chose name of product' options={names}/>
        <button onClick={handleClear} disabled={isDisabledClearButton}>clear</button>
        <button onClick={handleApply}
                disabled={isDisabledApplyButton}
        >apply
        </button>

    </div>
}

export default CatalogFilterForm