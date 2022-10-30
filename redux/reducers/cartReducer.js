import { 
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    INCREMENT_PRODUCT,
    DECREMENT_PRODUCT
} from "../types"

const initalState = {
    cartItems:[]
}

const cartReducer = ( state = initalState, action ) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                cartItems:[...state.cartItems, action.product]
            }
        case INCREMENT_PRODUCT:
            return {
                ...state,
                cartItems:[
                    ...state.cartItems.slice(0,action.index),
                    {...state.cartItems[action.index], quantity:state.cartItems[action.index].quantity + 1},
                    ...state.cartItems.slice(action.index + 1)
                ]
            }
        case DECREMENT_PRODUCT:
            return {
                ...state,
                cartItems:[
                    ...state.cartItems.slice(0,action.index),
                    {...state.cartItems[action.index], quantity:state.cartItems[action.index].quantity - 1},
                    ...state.cartItems.slice(action.index + 1)
                ]
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                cartItems:[
                    ...state.cartItems.slice(0,action.index),
                    ...state.cartItems.slice(action.index + 1)
                ]
            }
        default:
            return state
    }
}

export default cartReducer