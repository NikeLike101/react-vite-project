import { all } from "redux-saga/effects";
import {reviewsWatcher} from "./reviewsSaga.ts";



export function* appWatcher() {
    yield all([reviewsWatcher()])
}