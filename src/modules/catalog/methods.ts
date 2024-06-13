import {materials, names} from "../../constants.ts";
import {ProductType, ProductWithUserType, UserType} from "./types.ts";

export const generateProductName = (someIndex: number) => {
    return `${materials[Math.trunc(Math.random() * materials.length)]} 
    ${
        names[Math.trunc(Math.random() * names.length)]} 
        -${someIndex}`
}


export const attachUsersToProducts =
    (products: ProductType[], users: UserType[]): ProductWithUserType[] =>
        products.map(product => {
            const userOfProduct = users.find(user => user.id === product.userId)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const {userId, ...productWithoutId} = product
            return userOfProduct ? ({...productWithoutId, user: userOfProduct}) : product

        }) as ProductWithUserType[]



// products =>
//         product.userId = user.id
//         product + user