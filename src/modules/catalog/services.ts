import {ProductType, UserType} from "./types.ts";
import {generateProductName} from "./methods.ts";

const productsData = Array.from({length: 60})
    .map((_product, index) => ({
        id: index,
        isChecked: false,
        name: generateProductName(index),
        userId:Math.trunc(Math.random()*9+1)
    }))
export const getUsers =async ():Promise<UserType[]> => {
    const data =await fetch('https://jsonplaceholder.typicode.com/users')
    if (!data.ok) throw new Error('error')

    return await data.json()
}

export const getUser= async (userId: number):Promise<UserType> => {
    const data =await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
    if (!data.ok) throw new Error('error')

    const userDataInArray = await data.json()
    return userDataInArray[0]
}

export const getProducts = async ():Promise<ProductType[]> => {


    return productsData
}

export const getProductsBySellerId = async (sellerId: number):Promise<ProductType> => {

    console.log(productsData, sellerId)
    return productsData.filter(product => product.userId === sellerId)
}