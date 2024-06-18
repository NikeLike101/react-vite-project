import {PhotoType} from "../productItemReducer/types.ts";

export const getProductPhotos =async (productId: number):Promise<PhotoType[]> => {
    const data =await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${productId}`)
    if (!data.ok) throw new Error('error')

    return await data.json()
}