import { 
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    INCREMENT_PRODUCT
} from "../types"

const initalState = {
    cartItems:[]
}

const cartReducer = ( state = initalState, action ) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                cartItems:[...state.cartItems, action.payload]
            }
        case INCREMENT_PRODUCT:
            const products = state.cartItems.filter(item => JSON.stringify(item.item) !== JSON.stringify(action.payload.item))
            action.payload.quantity ++
            products = [...products, action.payload]
            return {
                ...state,
                cartItems:products
            }
    
        default:
            return state
    }
}

export default cartReducer