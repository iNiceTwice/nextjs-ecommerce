import {
    CART_OPEN
} from "../types/index"

export const cartToggle = (bool) => {
   
    return (dispatch) => {
        dispatch(CartStatus(bool))
    }
}

const CartStatus = (bool) => ({
    type:CART_OPEN,
    payload:bool
})