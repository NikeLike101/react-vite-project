import {material, names} from "../../constants.ts";

export const generateProductName = (someIndex: number) => {
    return `${material[Math.trunc(Math.random()*material.length)]} 
    ${
        names[Math.trunc(Math.random()*names.length)]} 
        -${someIndex}`
}
