import {ProductWithUserType} from "../../../modules/catalog/types.ts";


export const setProducts = (newProducts:ProductWithUserType[]) => {
    return {
        type: 'SET_PRODUCTS',
        products: newProducts
    }
}