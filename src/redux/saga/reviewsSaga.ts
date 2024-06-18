import {call, put, takeEvery,takeLatest } from "redux-saga/effects"
import {getReviews} from "./services.ts";
import {ReviewType} from "../reducers/catalogReducer/types.ts";
import {setReviews} from "../reducers/catalogReducer/actions.ts";
import {getProductPhotos} from "../reducers/catalogReducer/services.ts";

const enum getReviewsEnum {
  GET_REVIEWS_SAGA='GET_REVIEWS_SAGA',

GET_REVIEWS_OF_SELLER_SAGA='GET_REVIEWS_OF_SELLER_SAGA'
}


export const getReviewsSaga = (sellerId?: number) => ({type: getReviewsEnum.GET_REVIEWS_SAGA, payload: sellerId})
// export const getReviewsOfSellerSaga = (sellerId: number) => ({type: getReviewsEnum.GET_REVIEWS_OF_SELLER_SAGA, payload:sellerId})

function* getReviewsWorker({payload}) {
    const reviews:ReviewType[] = yield call(() => getReviews(payload))
    yield call(() => getProductPhotos(1))
    yield put(setReviews(reviews))
}

// function* getReviewsOfSellerWorker({payload}) {
//     const reviews:ReviewType[] = yield call(() =>  getReviewsBySellerId(payload))
//     yield put(setReviews(reviews))
// }

export function* reviewsWatcher() {
    yield takeLatest(getReviewsEnum.GET_REVIEWS_SAGA, getReviewsWorker)
}