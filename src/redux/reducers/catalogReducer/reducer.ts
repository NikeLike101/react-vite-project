



const initialState = {
    products: [],
    users: []
}


export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_PRODUCTS':
            return {...state, products: action.products}


        default:
            return {...state}
    }



}