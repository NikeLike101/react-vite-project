import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {catalogReducer} from "./reducers/catalogReducer/reducer.ts";
import charsReducer from "./reducers/charsReducer/reducer.ts";
import themeReducer from "./reducers/themeReducer.ts";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from 'redux-persist'
import {CatalogReducerActionTypesEnum} from "./reducers/catalogReducer/actionTypes.ts";

const persistConfig = {
    key: 'redux',
    storage
}



const appReducer = combineReducers({
    charsReducer ,
    catalogReducer,
    themeReducer

})




// @ts-ignore
// const persistedReducer = persistReducer(persistConfig, appReducer)



export const store = configureStore({
    reducer: appReducer
})


// export const persistor = persistStore(store)


export type ActionType<EnumOfTypes> = {type: EnumOfTypes | string, payload: any }


type AppStateType = ReturnType<typeof appReducer>


export  const useAppSelector:TypedUseSelectorHook<AppStateType> = useSelector