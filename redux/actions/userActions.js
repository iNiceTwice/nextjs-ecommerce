import {
    LOGIN,
    LOGOUT
} from "../types/index"

export const userActions = (user) => {
    return (dispatch) => {
        if(!user){
            dispatch({ type:LOGOUT })
        }else{
            dispatch(updateUserData(user))
        }
    }
}

const updateUserData = (user) => ({
    type:LOGIN,
    payload:user
})
