import { ReviewType } from "../reducers/catalogReducer/types.ts";
export const getReviews =async (sellerId?: number):Promise<ReviewType[]> => {
    const queryParams = sellerId !== undefined ? `?postId=${sellerId}` : ''

    const result = new Promise((resolve) => {
        setTimeout(()=> {
            resolve('')
        }, 1000)
    })
    await result
    const data =await fetch(
        `https://jsonplaceholder.typicode.com/https://jsonplaceholder.typicode.com/comments${queryParams}`)
    if (!data.ok) throw new Error('error')

    return await data.json()
}