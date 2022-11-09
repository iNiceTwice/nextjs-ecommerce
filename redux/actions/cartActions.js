import { 
    CLEAR_CART,
    ADD_PRODUCT,
    INCREMENT_PRODUCT,
    DECREMENT_PRODUCT,
    REMOVE_PRODUCT,
    REMOVE_PRODUCTS,
} from "../types"

export const clearCart = () => {
    return (dispatch) => {
        dispatch({
            type:CLEAR_CART
        })
    }
}

export const addProduct = (product) => {
   return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT,
            product
        })
    }
}
export const incrementProduct = (index) => {
   return (dispatch) => {
        dispatch({
            type: INCREMENT_PRODUCT,
            index
        })
    }
}
export const decrementProduct = (index) => {
   return (dispatch) => {
        dispatch({
            type: DECREMENT_PRODUCT,
            index
        })
    }
}
export const removeProduct = (index) => {
   return (dispatch) => {
        dispatch({
            type: REMOVE_PRODUCT,
            index
        })
    }
}
export const removeProducts = (purchase) => {
   return (dispatch) => {
        dispatch({
            type: REMOVE_PRODUCTS,
            purchase
        })
    }
}

