import {
    LOGIN,
    LOGOUT
} from "../types/index"

export const userActions = (user) => {
    return (dispatch) => {
        if(!user){
            dispatch({ type:LOGOUT })
        }else{
            dispatch(loginUser(user))
        }
    }
}

const loginUser = (user) => ({
    type:LOGIN,
    payload:user
})
