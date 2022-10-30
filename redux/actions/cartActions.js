import { 
    ADD_PRODUCT,
    INCREMENT_PRODUCT,
    DECREMENT_PRODUCT,
    REMOVE_PRODUCT
} from "../types"

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


