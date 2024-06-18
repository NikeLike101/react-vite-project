import {ProductsFilterType, ProductWithUserType, UserType} from "../../../modules/catalog/types.ts";
import {Reducer} from "@reduxjs/toolkit";
import {ActionType} from "../../index.ts";
import {CatalogReducerActionTypesEnum} from "./actionTypes.ts";


export type CatalogReducerStateType = {
    products: ProductWithUserType[],
    users: UserType[]
    filter: ProductsFilterType
    selectedProductForModal: ProductWithUserType | null
    usersLoadingStatus: boolean
    reviews: ReviewType[]
}

export type CatalogReducerType = Reducer<CatalogReducerStateType, ActionType<CatalogReducerActionTypesEnum>>

export type ReviewType = {
    postId: number,
    id: number,
    name: string
    email: string
    body: string
}