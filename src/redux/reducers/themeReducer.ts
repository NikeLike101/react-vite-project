import {createSlice} from "@reduxjs/toolkit";
import {ThemeEnum} from "../../utils/globalTypes.ts";


type ThemeReducerStateType = {
    theme: ThemeEnum
}


const initialState:ThemeReducerStateType = {
    theme: ThemeEnum.light
}


const themeReducer = createSlice({
    name: 'themeReducer',
    initialState: initialState,
    reducers: {
        changeTheme: (state,action) => {
            state.theme = action.payload
        }
    }
})

export const {changeTheme} = themeReducer.actions

export default themeReducer.reducer