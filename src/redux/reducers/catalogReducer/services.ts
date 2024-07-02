import {PhotoType} from "../productItemReducer/types.ts";
import requestFetch from "../../../utils/requestFetch.ts";

export const getProductPhotos =async (productId: number):Promise<PhotoType[]> =>
    requestFetch({url:`https://jsonplaceholder.typicode.com/photos?albumId=${productId}`})