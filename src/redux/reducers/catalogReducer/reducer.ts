import {CatalogReducerActionTypesEnum} from "./actionTypes.ts";
import {ProductsFilterType, ProductWithUserType, UserType} from "../../../modules/catalog/types.ts";
import {Reducer} from "@reduxjs/toolkit";
import {ActionType} from "../../index.ts";


type StateType = {
    products: ProductWithUserType[],
    users: UserType[]
    filter: ProductsFilterType
    selectedProductForModal: ProductWithUserType | null
}

export const initialFilterState:ProductsFilterType = {
    searchField: '',
    material: undefined,
    name: undefined,
}

type CatalogReducerType = Reducer<StateType, ActionType<CatalogReducerActionTypesEnum>>

const initialState:StateType = {
    products: [],
    users: [],
    filter: initialFilterState,
    selectedProductForModal: null
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

        default:
            return  {...state}
    }



}