import {
    CART_OPEN
} from "../types/index"

const initalState = {
    isOpen:false
}

const cartReducer = (state = initalState, action) => {
    switch (action.type) {
        case CART_OPEN:
            return {
                ...state,
                isOpen:action.payload
            }
        default:
            return state
    }
}


export default cartReducer