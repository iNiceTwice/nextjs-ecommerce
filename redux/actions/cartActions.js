import { 
    ADD_PRODUCT,
    INCREMENT_PRODUCT,
    REMOVE_PRODUCT
} from "../types"

export const addProduct = (product) => {
   return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT,
            payload:product
        })
    }
}
export const incrementProduct = (product) => {
   return (dispatch) => {
        dispatch({
            type: INCREMENT_PRODUCT,
            payload:product
        })
    }
}
export const removeProduct = (productId) => {
   return (dispatch) => {
        dispatch({
            type: REMOVE_PRODUCT,
            payload:productId
        })
    }
}


