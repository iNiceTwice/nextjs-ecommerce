import { 
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    REMOVE_PRODUCTS,
    INCREMENT_PRODUCT,
    DECREMENT_PRODUCT,
    CLEAR_CART,
} from "../types"

const initalState = {
    cartItems:[]
}

const cartReducer = ( state = initalState, action ) => {
    switch (action.type) {
        case CLEAR_CART:
            return {
                ...state,
                cartItems:[]
            }
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
        case REMOVE_PRODUCTS:
            const filtered = state.cartItems.filter(product => product.item.purchase !== action.purchase)
            return {
                ...state,
                cartItems:filtered
            }
        default:
            return state
    }
}

export default cartReducer