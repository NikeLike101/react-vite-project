import Typo from "../../components/Typo.tsx";
import {ProductsFilterType, ProductType, ProductWithUserType, UserType} from "./types.ts";
import {memo, useCallback, useEffect, useMemo, useState} from "react";
import CatalogProductListItem from "./CatalogProductListItem.tsx";
import {getProducts} from "./services.ts";
import {attachUsersToProducts} from "./methods.ts";
import {useStateWithPreviousValue} from "../../hooks/useStateWithPreviousValue.ts";

interface Props {
    filter: ProductsFilterType
    users: UserType[]
}


const CatalogProductList: React.FC<Props> = props => {


    const {filter, users} = props
    const [products, setProducts, prevProducts] = useStateWithPreviousValue<ProductWithUserType[]>([]);
    useEffect(() => {
        const getData = async  () => {
            const productsData = await getProducts()

            setProducts(attachUsersToProducts(productsData, users))
        }
        getData()
    }, []);
    // const [counter, setCounter] = useState<number>(0);
    //
    // useEffect(() => {
    //     const interval = setTimeout(() => {
    //         setCounter(counter + 1)
    //     }, 1000)
    //
    //
    // }, [counter]);

    useEffect(() => {
        console.log(products, prevProducts, 'prods')
    }, [products]);
    const productsFilterFunc = (product: ProductWithUserType) => {
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


        return isCorrect

    }
    const filteredProducts =
        useMemo(() =>
                products.filter(productsFilterFunc)
            ,
            [filter, products, users])

    const handleChangeCheckbox = useCallback((checked: boolean, productId: number) => {

        setProducts(products.map(product => product.id === productId ? ({...product, isChecked: checked}) : product))
    }, [products, users])
    return <>
        <Typo value={'products'} variant={"title"}/>

        {filteredProducts.map((product) =>
           <CatalogProductListItem key={product.id} product={product} onProductCheck={handleChangeCheckbox}/>)}
    </>
}

export default memo(CatalogProductList)