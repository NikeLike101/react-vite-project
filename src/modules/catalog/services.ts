import {ProductType, UserType} from "./types.ts";
import {generateProductName} from "./methods.ts";
import requestFetch, {MethodsEnum} from "../../utils/requestFetch.ts";

const productsData = Array.from({length: 60})
    .map((_product, index) => ({
        id: index,
        isChecked: false,
        name: generateProductName(index),
        userId:Math.trunc(Math.random()*9+1)
    }))
export const getUsers =async () =>
    await requestFetch<UserType[]>({url: 'https://jsonplaceholder.typicode.com/users', method: MethodsEnum.get})

export const getUser= async (userId: number):Promise<UserType> =>
    (await requestFetch({url:`https://jsonplaceholder.typicode.com/users?id=${userId}`, method: MethodsEnum.get}))[0]

export const getBlogPostsTMS = () => requestFetch({
    url: 'https://studapi.teachmeskills.by/blog/posts/',
    method: MethodsEnum.get
})

export const getProducts = async ():Promise<ProductType[]> => {


    return productsData
}

export const getProductsBySellerId = async (sellerId: number):Promise<ProductType> => {

    console.log(productsData, sellerId)
    return productsData.filter(product => product.userId === sellerId)
}