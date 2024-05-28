import Input from "../../components/Input.tsx";
import Select from "../../components/Select.tsx";
import {useEffect, useMemo, useState} from "react";
import {ProductsFilterType} from "./types.ts";
import {material, names} from "../../constants.ts";
import {initialFilterValue} from "./Catalog.tsx";

interface Props {
    onFilterChange: (filter: ProductsFilterType) => void
}

const CatalogFilterForm: React.FC<Props> = props => {

    const {onFilterChange} = props

    const [searchFieldValue, setSearchFieldValue] = useState<string>('');
    const [prevSearchFieldValue, setPrevSearchFieldValue] = useState<string>('');
    const [selectedMaterial, setSelectedMaterial,] = useState<string | undefined>(undefined);
    const [prevSelectedMaterial, setPrevSelectedMaterial,] = useState<string | undefined>(undefined);
    const [selectedNameOfProduct, setSelectedNameOfProduct,] = useState<string | undefined>(undefined);
    const [prevSelectedNameOfProduct, setPrevSelectedNameOfProduct,] = useState<string | undefined>(undefined);

    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
       setTimeout(() => {
            setCounter(counter + 1)
        }, 1000)


    }, [counter]);

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
        setPrevSearchFieldValue(searchFieldValue)
        setPrevSelectedMaterial(selectedMaterial)
        setPrevSelectedNameOfProduct(selectedNameOfProduct)
        onFilterChange({
            material: selectedMaterial,
            name: selectedNameOfProduct,
            searchField: searchFieldValue,
        })
    }

    const handleClear = () => {
        setSearchFieldValue('')
        setSelectedMaterial(undefined)
        setSelectedNameOfProduct(undefined)
        setPrevSearchFieldValue('')
        setPrevSelectedMaterial(undefined)
        setPrevSelectedNameOfProduct(undefined)

        onFilterChange(initialFilterValue)
    }

    const isDisabledClearButton = searchFieldValue === '' && selectedMaterial === undefined && selectedNameOfProduct === undefined
    const isDisabledApplyButton = useMemo(() => {
        console.log('changed')
        return searchFieldValue === prevSearchFieldValue &&
            selectedMaterial === prevSelectedMaterial &&
            selectedNameOfProduct === prevSelectedNameOfProduct

    }  , [searchFieldValue, prevSelectedNameOfProduct, selectedMaterial, selectedNameOfProduct, prevSearchFieldValue, prevSelectedMaterial])
    return <div style={{background: '#2d0070', color: '#ddd', padding: '10px'}}>

        {counter}
        <Input onChange={handleChangeSearchField} value={searchFieldValue} label='find product'/>


        <Select
            triggerValue={selectedMaterial}
            onChange={handleChangeMaterialSelect}
            label='chose material'
            options={[...material]}/>




        <Select triggerValue={selectedNameOfProduct} onChange={handleChangeNameOfProductSelect} label='chose name of product' options={names}/>
        <button onClick={handleClear} disabled={isDisabledClearButton}>clear</button>
        <button onClick={handleApply}
                disabled={isDisabledApplyButton}
        >apply</button>

    </div>
}

export default CatalogFilterForm