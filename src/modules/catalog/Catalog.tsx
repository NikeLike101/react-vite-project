import {ThemedTypo} from "../../components/hocs/themeHoc.tsx";
import CatalogProductList from "./CatalogProductList.tsx";
import CatalogFilterForm from "./CatalogFilterForm.tsx";
import {ProductsFilterType, ProductType} from "./types.ts";
import {generateProductName} from "./methods.ts";
import {useState} from "react";


const products: ProductType[] =
    Array.from({length: 600})
        .map((_product, index) => ({id: index, isChecked: false, name: generateProductName(index)}))


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


    // useEffect(() => {
    //     console.log('catalog effect!')
    //
    //
    //     return () => {
    //         console.log('compnonent destroy:(')
    //     }
    // }, [])
    // useEffect(() => {
    //     if (selectedMaterial === undefined) return;
    //     console.log('selected material changed!', selectedMaterial)
    // },[selectedMaterial])
    // useEffect(() => {
    //     console.log('title of component changed', props.title)}, [props.title])
    // useEffect(() => {
    //
    // }, [selectedMaterial, searchFieldValue, props.title])


    const handleFilter = (newFilter:ProductsFilterType) => {
        console.log(newFilter, 'filter')
        setFilter(newFilter)
    }



    return <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>

        <ThemedTypo value={props.title}/>


       <CatalogFilterForm onFilterChange={handleFilter}/>

        <CatalogProductList filter={filter} products={products}/>
    </div>
}

export default Catalog