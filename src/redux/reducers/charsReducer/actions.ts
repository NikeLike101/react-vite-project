import {SET_A, SET_B, SET_C} from "./actionTypes.ts";


export const setA = (newA: string[]) => {
    return {
        type: SET_A,
        payload: newA
    }
}
export const setB = (newB: number[]) => {
    return {
        type: SET_B,
        payload: newB
    }
}
export const setC = (newC: boolean) => {
    return {
        type: SET_C,
        payload: newC
    }
}