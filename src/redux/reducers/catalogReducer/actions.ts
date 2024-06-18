import {ProductsFilterType, ProductWithUserType, UserType} from "../../../modules/catalog/types.ts";
import {CatalogReducerActionTypesEnum} from "./actionTypes.ts";
import {getProducts, getUsers} from "../../../modules/catalog/services.ts";
import {ThunkActionType} from "../../index.ts";
import {attachUsersToProducts} from "../../../modules/catalog/methods.ts";
import {ReviewType} from "./types.ts";


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
export const setReviews = (newReviews:ReviewType[]) => {
    return {
        type: CatalogReducerActionTypesEnum.SET_REVIEWS,
        payload: newReviews
    }
}

const setUsersLoadingStatus = (newLoadingStatus: boolean) => ({
    type: CatalogReducerActionTypesEnum.SET_USERS_LOADING_STATUS,
    payload: newLoadingStatus
})

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

export const fetchUsers = ():ThunkActionType => {
    return async dispatch => {
        dispatch(setUsersLoadingStatus(true))
        const data = await getUsers()
        dispatch(setUsers(data))
        dispatch(setUsersLoadingStatus(false))
    }
}

export const fetchProducts = ():ThunkActionType => {
    return async (dispatch, getState) => {
        const {users} = getState().catalogReducer
        const productsData = await getProducts()

        dispatch(setProducts(attachUsersToProducts(productsData, users)))
    }
}