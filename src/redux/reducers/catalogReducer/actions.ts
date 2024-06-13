import {ProductsFilterType, ProductWithUserType, UserType} from "../../../modules/catalog/types.ts";
import {CatalogReducerActionTypesEnum} from "./actionTypes.ts";


export const setProducts = (newProducts:ProductWithUserType[]) => {
    return {
        type: CatalogReducerActionTypesEnum.SET_PRODUCTS,
        payload: newProducts
    }
}


export const setUsers = (newUsers:UserType[]) => {
    return {
        type: CatalogReducerActionTypesEnum.SET_USERS,
        payload: newUsers
    }
}

export const setFilter = (newFilter:ProductsFilterType) => {
    return {
        type: CatalogReducerActionTypesEnum.SET_FILTER,
        payload: newFilter
    }
}

export const setSelectedProductForModal = (newSelectedProduct: ProductWithUserType | null) => {
    return {
        type: CatalogReducerActionTypesEnum.SET_SELECTED_PRODUCT_FOR_MODAL,
        payload: newSelectedProduct

    }
}