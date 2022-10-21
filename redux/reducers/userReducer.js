import {
    LOGIN,
    LOGOUT
} from "../types/index"

const initalState = {
    isLogged:false,
    id:null,
    name:null,
    email:null
}

const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogged:true,
                id:action.payload.id,
                name:action.payload.name,
                email:action.payload.email
            }
        case LOGOUT:
            return {
                ...state,
                isLogged:false,
                id:null,
                name:null,
                email:null
            }
        default:
            return state
    }
}


export default authReducer