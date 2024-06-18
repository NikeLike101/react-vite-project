import {applyMiddleware, combineReducers, configureStore, ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";
import {catalogReducer} from "./reducers/catalogReducer/reducer.ts";
import charsReducer from "./reducers/charsReducer/reducer.ts";
import themeReducer from "./reducers/themeReducer.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import storage from "redux-persist/lib/storage";

import createSagaMiddleware from 'redux-saga'
import {thunk} from "redux-thunk";
import productItemSliceReducer from "./reducers/productItemReducer/productItemSliceReducer.tsx";
import {appWatcher} from "./saga";

const persistConfig = {
    key: 'redux',
    storage
}



const appReducer = combineReducers({
    charsReducer ,
    catalogReducer,
    themeReducer,
    productItemSliceReducer
})




// @ts-ignore
// const persistedReducer = persistReducer(persistConfig, appReducer


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: appReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk, sagaMiddleware)
})

sagaMiddleware.run(appWatcher)

// export const persistor = persistStore(store)

type DefaultActionType = {type:  string, payload: any }
export type ActionType<EnumOfTypes> = {type: EnumOfTypes | string, payload: any }
type AppStateType = ReturnType<typeof appReducer>
type AppDispatchType = ThunkDispatch<AppStateType, null, DefaultActionType>

export type ThunkActionType  = ThunkAction<void, AppStateType, null, DefaultActionType>


export  const useAppSelector:TypedUseSelectorHook<AppStateType> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatchType>()