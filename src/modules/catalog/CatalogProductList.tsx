import Typo from "../../components/Typo.tsx";
import {ProductWithUserType, UserType} from "./types.ts";
import {memo, useCallback, useEffect, useMemo} from "react";
import CatalogProductListItem from "./CatalogProductListItem.tsx";
import {fetchProducts, setProducts} from "../../redux/reducers/catalogReducer/actions.ts";
import {useAppDispatch, useAppSelector} from "../../redux";

interface Props {
}


const CatalogProductList: React.FC<Props> = () => {



    const {products, filter} = useAppSelector(state => state.catalogReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);


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
            [filter, products])

    const handleChangeCheckbox = useCallback(
        (checked: boolean, productId: number) => {
        dispatch(setProducts(
            products
                .map(product => product.id === productId ? ({...product, isChecked: checked}) : product)))
    }, [products])
    return <>
        <Typo value={'products'} variant={"title"}/>

        {filteredProducts.map((product) =>
           <CatalogProductListItem key={product.id} product={product} onProductCheck={handleChangeCheckbox}/>)}


    </>
}

export default memo(CatalogProductList)