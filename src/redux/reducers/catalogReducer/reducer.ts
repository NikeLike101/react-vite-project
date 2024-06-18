import {CatalogReducerActionTypesEnum} from "./actionTypes.ts";
import {ProductsFilterType} from "../../../modules/catalog/types.ts";
import {CatalogReducerStateType, CatalogReducerType} from "./types.ts";


export const initialFilterState:ProductsFilterType = {
    searchField: '',
    material: undefined,
    name: undefined,

}


const initialState:CatalogReducerStateType = {
    products: [],
    users: [],
    usersLoadingStatus: false,
    filter: initialFilterState,
    selectedProductForModal: null,
    reviews: []
}

export const catalogReducer:CatalogReducerType = (state = initialState, action) => {
    switch (action.type) {

        case CatalogReducerActionTypesEnum.SET_PRODUCTS:
            return {...state, products: action.payload}
        case CatalogReducerActionTypesEnum.SET_USERS:
            return {...state, users: action.payload}
        case CatalogReducerActionTypesEnum.SET_FILTER:
            return {...state, filter: action.payload}
        case CatalogReducerActionTypesEnum.SET_SELECTED_PRODUCT_FOR_MODAL:
            return {...state, selectedProductForModal: action.payload}
        case CatalogReducerActionTypesEnum.SET_USERS_LOADING_STATUS:
            return {...state, usersLoadingStatus: action.payload}
        case CatalogReducerActionTypesEnum.SET_REVIEWS:
            return {...state, reviews: action.payload}
        default:
            return  {...state}
    }



}