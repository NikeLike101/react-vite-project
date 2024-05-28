import Typo from "../../components/Typo.tsx";
import {ProductsFilterType, ProductType} from "./types.ts";
import {BaseSyntheticEvent, memo, useMemo, useState} from "react";

interface Props {
    filter: ProductsFilterType
    products: ProductType[]
}


const CatalogProductList: React.FC<Props> = props => {


    const {products: productsFromServer, filter} = props
    const [products, setProducts] = useState<ProductType[]>(productsFromServer);
    // const [counter, setCounter] = useState<number>(0);
    //
    // useEffect(() => {
    //     const interval = setTimeout(() => {
    //         setCounter(counter + 1)
    //     }, 1000)
    //
    //
    // }, [counter]);

    const productsFilterFunc = (product: ProductType) => {
        let isCorrect = false
        if (filter.material !== undefined) {
            isCorrect = product.name.includes(filter.material)
            if (!isCorrect) return false
        }
        if (filter.name !== undefined) {

            isCorrect = product.name.includes(filter.name)

            if (!isCorrect) return false
        }
        isCorrect = product.name.includes(filter.searchField)

        setTimeout(() => {
            console.log('filtred')
        }, 500)

        return <></>

    }
    const filteredProducts =
        useMemo(() =>
        products.filter(productsFilterFunc)
        ,
        [filter])
    console.log(filteredProducts, 'rerender')

    const handleChangeCheckbox = (e:BaseSyntheticEvent, productId: number) => {
        console.log(e)
        setProducts(products.map(product => product.id === productId ? ({...product, isChecked: e.target.checked}) : product))
    }
    return <>
        <Typo value={'products'} variant={"title"}/>

        {filteredProducts.map((product) => <div key={product.id}>
            {product.id + 1}: {product.name}<input onChange={(event:BaseSyntheticEvent) => handleChangeCheckbox(event, product.id)} checked={product.isChecked} type='checkbox'/></div>)}
    </>
}

export default memo(CatalogProductList)