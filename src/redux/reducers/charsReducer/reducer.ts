import {Reducer} from "@reduxjs/toolkit";
import {SET_A, SET_B, SET_C} from "./actionTypes.ts";

type StateType = {
    a: string[]
    b: number[]
    c: boolean
}


const initialValue:StateType = {
    a: [],
    b: [],
    c: false

}




const charsReducer:Reducer<StateType> = (state = initialValue, action) => {

    switch (action.type) {
        case SET_B:
            return {...state, b: action.payload}
        case SET_A:
            return {...state, a: action.payload}
        case SET_C:
            return {...state, c: action.payload}
    }

    return {...state}
}

export default charsReducer