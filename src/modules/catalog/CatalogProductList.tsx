import Typo from "../../components/Typo.tsx";
import {ProductsFilterType, ProductWithUserType, UserType} from "./types.ts";
import {memo, useCallback, useEffect, useMemo, useState} from "react";
import CatalogProductListItem from "./CatalogProductListItem.tsx";
import {getProducts} from "./services.ts";
import {attachUsersToProducts} from "./methods.ts";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../redux/reducers/catalogReducer/actions.ts";
import {useAppSelector} from "../../redux";

interface Props {
    filter: ProductsFilterType
    users: UserType[]
}


const CatalogProductList: React.FC<Props> = props => {


    const {filter, users} = props

    const {products} = useAppSelector(state => state.catalogReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        const getData = async  () => {
            const productsData = await getProducts()

            dispatch(setProducts(attachUsersToProducts(productsData, users)))
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